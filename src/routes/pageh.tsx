import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageh')({
  component: CatSite,
})

function CatSite() {
    return (
        <div style={{ padding: '0 4rem 4rem' }}>
            <h1>cat pictures site in rust</h1>
                <p>building a website in rust that shows a cat picture and inspirational or funny quote daily</p>
            <h2>the stack</h2>
                <p><a href="https://rust-lang.org/">rust</a> binary with axum (web server), sqlx + sqlite (storage), and reqwest(outbound http calls). all on the tokio async runtime, then hosted on railway.</p>
                <p>then for the cat pics used <a href="https://cataas.com/">cataas</a>, a rest api for cat pics</p>
            <h2>setting up the site</h2>
            <p>install rust with this command here and then create a new folder</p>
            
            <pre><code>curl --proto '=https' --tlsv1.2 
                      -sSf https://sh.rustup.rs | sh</code></pre>
            
            <p>run this command in your terminal</p>
            <img
              src="/catsite/rustinstall.png"
              alt="home"
              style={{ width: '300px', height: '150px', display: 'block' }}
            />
            <p>install worked but unfortch that current shell didn't know about cargo yet. so to load it into that terminal session run this:</p>
            <code>. "$HOME/.cargo/env"</code>
            <p>now it should have loaded in</p>
            <img
              src="/catsite/loadterminal.png"
              alt="home"
              style={{ width: '200px', height: '40px', display: 'block' }}
            />

            <p>now you can make the site with <code>cargo new catsite</code></p>

            <img
              src="/catsite/newcatsite.png"
              alt="home"
              style={{ width: '200px', height: '50px', display: 'block' }}
            /> 
            
            <p>now change directory (cd) to the catsite</p>
            <code>cd catsite</code>

            <p>reference to a <a href="https://rust-classes.com/chapter_7_1">good article</a> i looked thru for this btw</p>
            <p>reference to a <a href="https://github.com/tokio-rs/axum/blob/main/examples/hello-world/src/main.rs">https://github.com/tokio-rs/axum/blob/main/examples/hello-world/src/main.rs</a> tokio example on github</p>
            
            <p>add tokio and axum as dependencies to ur cargo.toml</p>
 
            <img
              src="/catsite/dependencies.png"
              alt="home"
              style={{ width: '200px', height: '110px', display: 'block' }}
            /> 
            <pre><code>{`
[dependencies]
tokio = { version = "1", features = ["full"] }
axum = "0.7"
            `}</code></pre>


            <p>then this is the main file general setup where all it shows is the text</p>

            <img
              src="/catsite/generalsetup.png"
              alt="home"
              style={{ width: '270px', height: '150px', display: 'block' }}
            /> 
            <pre><code>{`
use axum::{response::Response, http::header, Router, routing::get, serve};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "meow meow rust rust xP" }))

    let port = std::env::var("PORT").unwrap_or_else(|_| "3000".into());
    let addr = format!("0.0.0.0:{port}");

    let listener = TcpListener::bind(&addr).await.unwrap();
    serve(listener, app).await.unwrap();
}          `}</code></pre>

            <p>the text on site</p>

            <img
              src="/catsite/helloworld.png"
              alt="home"
              style={{ width: '200px', height: '100px', display: 'block' }}
            /> 
      
              
            <h2>3. deploying on railway and getting a custom domain</h2>

            <p>i like to just get out of localhost asap, which is why this is step three. i used porkbun for the custom domain. delete the alias and cname values that are already in porkbun for your domain in that domain's settings</p>
            <p>go to the settings in railway and click +custom domain. railway usually detects the port, and in my case it detected 3000, but i knew it was listening from 8080, so i put 8080. then you can add the domain and then it will show the dns records. put them into porkbun as it asks (however, for me there was an error on porkbun saying couldn't have a cname on root domain, so it recommended alias and all i did was just keep the same info but switch it to alias) then u are good to go.</p>
            

            <h2>4. favicon, axum version</h2>
            <img
              src="/catsite/rustcatnobg.png"
              alt="home"
              style={{ width: '90px', height: '100px', display: 'block' }}
            /> 
            
            <p>i drew this cute cat in <a href="https://excalidraw.com/">https://excalidraw.com/</a>, removed the background in <a href="https://www.remove.bg/">https://www.remove.bg/</a>, then used <a href="https://www.imageinverter.app/#google_vignette">this image inverter</a> for the cat to be white outlined instead of black.</p>


            <p>create assets folder in root. browsers expect favicons at standard sizes (16x16, 32x32, 48x48, 64x64, etc) so if it isn't then go to <a href="https://favicon.io/favicon-converter">https://favicon.io/favicon-converter</a> add your favicon.io from the zip and put it into the assets folder. then update the code to add async function for the favicon and add a route up back at the main function to the favicon</p>

<pre><code>{`
use axum::{response::Response, http::header, Router, routing::get, serve};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/", get(|| async { "meow meow rust rust xP" }))
        .route("/favicon.ico", get(favicon));

    let port = std::env::var("PORT").unwrap_or_else(|_| "3000".into());
    let addr = format!("0.0.0.0:{port}");

    let listener = TcpListener::bind(&addr).await.unwrap();
    serve(listener, app).await.unwrap();
}

async fn favicon() -> Response {
    let bytes = include_bytes!("../assets/favicon.ico");
    Response::builder()
        .header(header::CONTENT_TYPE, "image/x-icon")
        .body(bytes.as_ref().into())
        .unwrap()
}

`}</code></pre>

            <p>and there u go!</p>
            
            <img
              src="/catsite/fabtab.png"
              alt="home"
              style={{ width: '200px', height: '70px', display: 'block' }}
            />  

            <h2>bonus: song i was listening to while building this site</h2>
            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/1ZP5p9NeCRxWiL2RlAp5F0?utm_source=generator" width="30%" height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li></li>
            </ul>
        </div>
    )
}
