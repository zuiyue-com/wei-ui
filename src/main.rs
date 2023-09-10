fn main() -> Result<(), Box<dyn std::error::Error>> {
    let instance = single_instance::SingleInstance::new("wei-ui")?;
    if !instance.is_single() { 
        std::process::exit(1);
    };

    use wry::{
      application::{
        event::{Event, StartCause, WindowEvent},
        event_loop::{ControlFlow, EventLoop},
        window::WindowBuilder,
        dpi::LogicalSize,
        dpi::PhysicalPosition,
      },
      webview::WebViewBuilder,
    };
    let event_loop = EventLoop::new();
    let monitor = event_loop.primary_monitor().expect("No primary monitor found");
    let max_width = 2048.0;
    let max_heigh = 1536.0;
    
    let monitor_size = monitor.size();
    let scale_factor = monitor.scale_factor();
    let window_size = LogicalSize::new(
        ((monitor_size.width as f64 / scale_factor) * 0.8).min(max_width),
        ((monitor_size.height as f64 / scale_factor) * 0.8).min(max_heigh),
    );
    let window = WindowBuilder::new()
        .with_inner_size(window_size)
        .with_max_inner_size(LogicalSize::new(max_width, max_heigh))
        .with_position(PhysicalPosition::new(
            ((monitor_size.width as f64 - window_size.width * scale_factor) / 2.0).round() as i32,
            ((monitor_size.height as f64 - window_size.height * scale_factor - 100.0) / 2.0).round() as i32,
        ))
        // .with_fullscreen(Some(wry::application::window::Fullscreen::Borderless(monitor))) // 设置窗口为全屏
        // .with_maximized(true) // 最大化窗口
        .build(&event_loop)?;

    // 判断当前目录有没有main.rs,如果存在则启动本地服务
    let mut url = "https://client.zuiyue.com";
    let mut path = std::env::current_dir()?;
    path.push("./src/main.rs");
    if path.exists() {
        url = "http://localhost:15001";
    }

    let _webview = WebViewBuilder::new(window)?
      .with_url(url)?
      .build()?;
  
    event_loop.run(move |event, _, control_flow| {
      *control_flow = ControlFlow::Wait;
  
      match event {
        Event::NewEvents(StartCause::Init) => (),
        Event::WindowEvent {
          event: WindowEvent::CloseRequested,
          ..
        } => *control_flow = ControlFlow::Exit,
        _ => (),
      }
    });
  }