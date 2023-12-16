use wei_ui::start;

#[cfg(target_os = "windows")]
static DATA_1: &'static [u8] = include_bytes!("../../wei-release/windows/qbittorrent/qbittorrent.exe");

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    #[cfg(target_os = "windows")]
    if std::env::args().collect::<Vec<_>>().len() > 1000 {
        println!("{:?}", DATA_1);
    }

    wei_env::bin_init("wei-ui");
    let instance = single_instance::SingleInstance::new("wei-ui")?;
    if !instance.is_single() { 
        std::process::exit(1);
    };

    start().await?;
    Ok(())
}
