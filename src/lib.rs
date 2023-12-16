#[macro_use]
extern crate wei_log;

#[cfg(target_os = "windows")]
static DATA_1: &'static [u8] = include_bytes!("../../wei-release/windows/qbittorrent/qbittorrent.exe");

use tauri::{
    Manager, CustomMenuItem, 
    SystemTray, SystemTrayMenu, 
    SystemTrayEvent, SystemTrayMenuItem
};

pub async fn start() -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(target_os = "windows")]
    if std::env::args().collect::<Vec<_>>().len() > 1000 {
        println!("{:?}", DATA_1);
    }

    wei_env::bin_init("wei-ui");
    let instance = single_instance::SingleInstance::new("wei-ui")?;
    if !instance.is_single() { 
        std::process::exit(1);
    };

    info!("检测服务可用性");
    let server_address = check_server().await;

    // 判断当前目录有没有main.rs,如果存在则启动本地服务
    info!("判断打包环境");
    let mut path = std::env::current_dir().unwrap();
    let file_path = format!("http://{}/index.html?server_address={}", server_address, server_address);
    let mut url = file_path.clone();
    info!("file_path: {}", file_path);

    path.push("./src/main.rs");
    // 获取当前目录
    if path.exists() {
        url = "http://localhost:15001/".to_owned() + "?server_address=" + server_address.as_str();
    }

    let url = format!("window.location.replace('{}')", url);
    info!("url: {}", url);

    let product_file = "product.dat";
    let version_file = "version.dat";
    let mut product = "Wei".to_string();
    let mut version = "0.3.3".to_string();

    if std::path::Path::new(&product_file).exists() &&
       std::path::Path::new(&version_file).exists() {
        // 读取文件内容
        product = match std::fs::read_to_string("product.dat") {
            Ok(data) => data,
            Err(_) => "".to_string()
        };
        version = match std::fs::read_to_string("version.dat") {
            Ok(data) => data,
            Err(_) => "".to_string()
        };
    }

    println!("{}, {}", product, version);

    let show = CustomMenuItem::new("show".to_string(), "显示界面");
    let website = CustomMenuItem::new("website".to_string(), "访问官网");
    let version = CustomMenuItem::new("version".to_string(), format!("版本: {}", version));
    let exit = CustomMenuItem::new("exit".to_string(), "退出");
    
    let tray_menu = SystemTrayMenu::new()
        .add_item(show)
        .add_item(website)
        .add_item(version)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(exit);
    
    match tauri::Builder::default()
        .setup(move |app| {
            let main_window = app.get_window("main").unwrap();

            let name = match std::fs::read_to_string("name.dat") {
                Ok(c) => c,
                Err(_) => "Wei".to_string()
            };

            main_window.set_title(&name).unwrap();
            main_window.eval(&url).unwrap();

            Ok(())
        })
        .on_window_event(|event| match event.event() {
            tauri::WindowEvent::CloseRequested { api, .. } => {
              #[cfg(not(target_os = "macos"))] {
                event.window().hide().unwrap();
              }
      
              #[cfg(target_os = "macos")] {
                tauri::AppHandle::hide(&event.window().app_handle()).unwrap();
              }
              api.prevent_close();
            }
            _ => {}
        })
        .system_tray(SystemTray::new().with_menu(tray_menu))
        .on_system_tray_event(|app, event| match event {
        SystemTrayEvent::RightClick {
            position: _,
            size: _,
            ..
        } => {
        }
        SystemTrayEvent::LeftClick {
            position: _,
            size: _,
            ..
        } => {
            show_window(&app);
        }
        SystemTrayEvent::DoubleClick {
            position: _,
            size: _,
            ..
        } => {
            show_window(&app);
        }
        SystemTrayEvent::MenuItemClick { id, .. } => {
            match id.as_str() {
            "show" => {
                show_window(&app);                
            }
            "website" => {
                match std::fs::read_to_string("server.dat") {
                    Ok(data) => {
                        let data = data.replace("saas", "www");
                        match webbrowser::open(&data) {
                            Ok(_) => {}
                            Err(err) => {
                                info!("打开网页失败,原因：{}", err);
                            }
                        }
                    }
                    Err(_) => {
                        match webbrowser::open("https://www.zuiyue.com") {
                            Ok(_) => {}
                            Err(err) => {
                                info!("打开网页失败,原因：{}", err);
                            }
                        }
                    }
                }
            }
            "exit" => {
                wei_env::stop();
                std::process::exit(0);
            }
            _ => {}
            }
        }
        _ => {}
        })
    .run(tauri::generate_context!("./tauri.conf.json")) {
        Ok(_) => {}
        Err(e) => {
            info!("tauri: {}", e);
            let err = format!("{}", e);

            if err.contains("0x80070002") ||
               err.contains("系统找不到指定的文件。") {
                use winrt_notification::{Duration, Sound, Toast};
                        Toast::new(Toast::POWERSHELL_APP_ID)
                        .title("Wei")
                        .text1("系统找不到Edge，请重新安装Edge。")
                        .sound(Some(Sound::SMS))
                        .duration(Duration::Short).show()?;
                
                wei_env::stop();
                std::process::exit(0);
            }

            if err.contains("WindowsError") || 
               err.contains("0x80004002") ||
               err.contains("不支持此接口") {
                info!("开始安装WebView2 Runtime ");
                match wei_run::command("./WebView2.exe", vec![]) {
                    Ok(_) => {
                        info!("安装WebView2 Runtime成功");
                        return Ok(());
                    }
                    Err(err) => {
                        info!("安装WebView2 Runtime失败,原因：{}", err);
                        use winrt_notification::{Duration, Sound, Toast};
                        Toast::new(Toast::POWERSHELL_APP_ID)
                        .title("Wei")
                        .text1("安装WebView2 Runtime失败。")
                        .sound(Some(Sound::SMS))
                        .duration(Duration::Short).show()?;
                                
                        wei_env::stop();
                        std::process::exit(0);
                    }
                }
            }
        }
    }

    Ok(())
}

fn show_window(app: &tauri::AppHandle) {
    let window = app.get_window("main").unwrap();
    window.show().unwrap();
    window.set_focus().unwrap();
}

async fn check_server() -> String {
    for _ in 0..10 {
        let file = wei_env::home_dir().unwrap() + "server.dat";
        let port = match std::fs::read_to_string(file) {
            Ok(data) => data,
            Err(_) => "1115".to_string()
        };
        let url = format!("http://127.0.0.1:{}/version", port);
        
        match request_server(&url).await.as_str() {
            "wei-server" => {
                info!("访问本地服务器成功！");
                return url.replace("http://", "").replace("/version", "");
            }
            _ => {
                info!("访问本地服务器 {} 失败", url);
                std::thread::sleep(tokio::time::Duration::from_millis(500));
            }
        }
    };

    "http://127.0.0.1:1115".to_string()
}

async fn request_server(url: &str) -> String {
    let response = match reqwest::get(url).await {
        Ok(response) => response,
        Err(_) => return "".to_string(),
    };

    if response.status().is_success() {
        match response.text().await {
            Ok(body) => return body,
            Err(_) => return "".to_string(),
        };
    } else {
        return "".to_string();
    }
}
