#[macro_use]
extern crate wei_log;

use wry::{
  application::{
    event::{Event, StartCause, WindowEvent},
    event_loop::{ControlFlow, EventLoop},
    window::{Icon, WindowBuilder},
    // dpi::LogicalSize,
    // dpi::PhysicalPosition,
  },
  webview::WebViewBuilder,
};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    wei_env::bin_init("wei-ui");
    let instance = single_instance::SingleInstance::new("wei-ui")?;
    if !instance.is_single() { 
        std::process::exit(1);
    };

    info!("检测服务可用性");
    let server_address = check_server().await;

    let event_loop = EventLoop::new();
    // let monitor = event_loop.primary_monitor().expect("No primary monitor found");
    // let max_width = 2048.0;
    // let max_heigh = 1536.0;
    
    // info!("启动窗口,最大宽度: {}, 最大高度: {}", max_width, max_heigh);
    // let monitor_size = monitor.size();
    // info!("屏幕大小: {:?}", monitor_size);
    // let scale_factor = monitor.scale_factor();
    // info!("缩放比例: {}", scale_factor);
    // let window_size = LogicalSize::new(
    //     ((monitor_size.width as f64 / scale_factor) * 0.8).min(max_width),
    //     ((monitor_size.height as f64 / scale_factor) * 0.8).min(max_heigh),
    // );
    // info!("窗口大小: {:?}", window_size);

    let window = match WindowBuilder::new()
        .with_title("Wei")
        // .with_always_on_top(true)  // 设置窗口始终在最前面
        .with_window_icon(load_icon())
        // .with_inner_size(window_size)
        // .with_max_inner_size(LogicalSize::new(max_width, max_heigh))
        // .with_position(PhysicalPosition::new(
        //     ((monitor_size.width as f64 - window_size.width * scale_factor) / 2.0).round() as i32,
        //     ((monitor_size.height as f64 - window_size.height * scale_factor - 100.0) / 2.0).round() as i32,
        // ))
        // .with_fullscreen(Some(wry::application::window::Fullscreen::Borderless(monitor))) // 设置窗口为全屏
        .with_maximized(true) // 最大化窗口
        .build(&event_loop) {
            Ok(window) => {
                info!("启动窗口成功");
                window
            }
            Err(err) => {
                info!("启动窗口失败,原因：{}", err);
                return Ok(());
        }
    };

    // 判断当前目录有没有main.rs,如果存在则启动本地服务
    info!("判断打包环境");
    let mut path = std::env::current_dir()?;
    let file_path = format!("file://{}/dist/index.html?server_address={}", path.display(), server_address);
    let mut url = file_path.clone();
    info!("file_path: {}", file_path);

    path.push("./src/main.rs");
    // 获取当前目录
    if path.exists() {
        url = "http://localhost:15001/".to_owned() + "?server_address=" + server_address.as_str();
    }

    info!("url: {}", url);

    let _webview = WebViewBuilder::new(window)?
      .with_url(&url)?
      .build()?;
  
    info!("启动成功,等待信号");
    event_loop.run(move |event, _, control_flow| {
      *control_flow = ControlFlow::Wait;
  
      match event {
        Event::NewEvents(StartCause::Init) => (),
        Event::WindowEvent {
            event: WindowEvent::CloseRequested,
            ..
        } => {
            _webview.load_url("about:blank");
            hide("wei-ui", true);
            // *control_flow = ControlFlow::Exit,
        }
        _ => (),
      }
    });
}

async fn check_server() -> String {
    loop {
        let file = wei_env::home_dir().unwrap() + "server.dat";
        let port = match std::fs::read_to_string(file) {
            Ok(data) => data,
            Err(_) => "1115".to_string()
        };
        let url = format!("http://127.0.0.1:{}", port);
        
        match request_server(&url).await.as_str() {
            "wei-server" => {
                info!("访问本地服务器成功！");
                return url.replace("http://", "");
            }
            _ => {
                info!("访问本地服务器 {} 失败", url);
                std::thread::sleep(tokio::time::Duration::from_millis(500));
            }
        }
    };
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

use std::io::Read;
use image::GenericImageView;
fn load_icon() -> Option<Icon> {
    // 如果 ../wei/res/wei.png 存在
    let mut png_path = "../wei/res/wei.png";
    let path = std::path::Path::new(png_path);
    if !path.exists() {
        png_path = "./wei.png";
    }
    let mut icon_file = match std::fs::File::open(png_path) {
        Ok(file) => file,
        Err(_) => return None,
    };
    let mut buffer = Vec::new();
    icon_file.read_to_end(&mut buffer).expect("Failed to read icon file");
    let image = image::load_from_memory(&buffer).expect("Failed to load image data");
    let (width, height) = image.dimensions();
    let rgba = image.to_rgba8();
    Icon::from_rgba(rgba.into_raw(), width, height).ok()
}

// 下面的都是windows代码，请用一个大点的框把他们包起来
use std::path::Path;
use std::ffi::OsString;
use std::ptr::null_mut;
use winapi::shared::minwindef::LPARAM;
use winapi::shared::minwindef::LPDWORD;
use winapi::shared::minwindef::DWORD;
use std::os::windows::ffi::OsStringExt;
use winapi::um::winuser::{EnumWindows, ShowWindow, SW_HIDE, SW_SHOW};
use winapi::um::winuser::{GetWindowThreadProcessId, IsWindowVisible};
use winapi::shared::windef::HWND;
use winapi::shared::minwindef::BOOL;
use winapi::um::tlhelp32::{CreateToolhelp32Snapshot, Process32First, Process32Next, PROCESSENTRY32, TH32CS_SNAPPROCESS};
use winapi::um::handleapi::CloseHandle;
use winapi::um::psapi::GetModuleFileNameExW;
use winapi::um::winnt::PROCESS_QUERY_INFORMATION;
use winapi::um::processthreadsapi::OpenProcess;

pub fn hide(process_file_name: &str, status: bool) -> bool {
    let process_file_name = process_file_name.to_owned() + ".exe";
    unsafe {
        let snapshot = CreateToolhelp32Snapshot(TH32CS_SNAPPROCESS, 0);
        if snapshot.is_null() { return false; }

        let mut process_entry = PROCESSENTRY32 {
            dwSize: std::mem::size_of::<PROCESSENTRY32>() as u32,
            cntUsage: 0,
            th32ProcessID: 0,
            th32DefaultHeapID: 0,
            th32ModuleID: 0,
            cntThreads: 0,
            th32ParentProcessID: 0,
            pcPriClassBase: 0,
            dwFlags: 0,
            szExeFile: [0; 260],
        };

        if Process32First(snapshot, &mut process_entry) == 0 {
            CloseHandle(snapshot);
            return false;
        }

        loop {
            let h_process = OpenProcess(PROCESS_QUERY_INFORMATION, 0, process_entry.th32ProcessID);
            if !h_process.is_null() {
                let mut buffer = [0u16; 260];
                let result = GetModuleFileNameExW(h_process, null_mut(), buffer.as_mut_ptr(), buffer.len() as u32);
                if result != 0 {
                    let len = buffer.iter().position(|&x| x == 0).unwrap_or(buffer.len());
                    let wide_string: &[u16] = std::slice::from_raw_parts(buffer.as_ptr() as *const u16, len);
                    let current_proc_file_path = OsString::from_wide(wide_string).to_string_lossy().into_owned();
                    let current_proc_file_name = Path::new(&current_proc_file_path).file_name().unwrap().to_str().unwrap();

                    if current_proc_file_name == process_file_name {
                        hide_process_windows(process_entry.th32ProcessID, status);
                        CloseHandle(h_process);
                        CloseHandle(snapshot);
                    }
                }
                CloseHandle(h_process);
            }

            if Process32Next(snapshot, &mut process_entry) == 0 { break; }
        }

        CloseHandle(snapshot);
    }

    false
}


unsafe extern "system" fn enum_windows_callback_hide(hwnd: HWND, process_id: LPARAM) -> BOOL {
  let mut window_process_id: DWORD = 0;
  GetWindowThreadProcessId(hwnd, &mut window_process_id as LPDWORD);

  if window_process_id == process_id as DWORD && IsWindowVisible(hwnd) != 0 {
      ShowWindow(hwnd, SW_HIDE);
      return 0;
  }

  return 1;
}


unsafe extern "system" fn enum_windows_callback_show(hwnd: HWND, process_id: LPARAM) -> BOOL {
  let mut window_process_id: DWORD = 0;
  GetWindowThreadProcessId(hwnd, &mut window_process_id as LPDWORD);

  if window_process_id == process_id as DWORD && IsWindowVisible(hwnd) != 0 {
      ShowWindow(hwnd, SW_SHOW);
      return 0;
  }

  return 1;
}

fn hide_process_windows(process_id: u32, status: bool) {
  unsafe {
    if status == true {
      EnumWindows(Some(enum_windows_callback_hide), process_id as LPARAM);
    } else {
      EnumWindows(Some(enum_windows_callback_show), process_id as LPARAM);
    }
  }
}
