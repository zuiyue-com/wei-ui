use wei_ui::start;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    wei_windows::init();

    wei_env::bin_init("wei-ui");
    let instance = wei_single::SingleInstance::new("wei-ui")?;
    if !instance.is_single() { 
        std::process::exit(1);
    };

    start().await?;
    Ok(())
}
