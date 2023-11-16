use wei_ui::start;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    start().await?;
    Ok(())
}
