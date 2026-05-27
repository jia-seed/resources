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
            <p>install rust and then create a new folder</p>
            <code>curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh</code>
            
            <p>run this command in your terminal</p>
            <img
              src="/catsite/rustinstall.png"
              alt="home"
              style={{ width: '400px', height: '200px', display: 'block' }}
            />
            <p>install worked but unfortch that current shell didn't know about cargo yet. so to load it into that terminal session run this:</p>
            <code>. "$HOME/.cargo/env"</code>
            <p>now it should have loaded in</p>
            <img
              src="/catsite/loadterminal.png"
              alt="home"
              style={{ width: '300px', height: '60px', display: 'block' }}
            />

            <p>now you can make the site with <code>cargo new catsite</code></p>

            <img
              src="/catsite/newcatsite.png"
              alt="home"
              style={{ width: '400px', height: '100px', display: 'block' }}
            /> 
            
            <p>now change directory (cd) to the catsite</p>
            <code>cd catsite</code>

            <p>reference to a <a href="https://rust-classes.com/chapter_7_1">good article</a> i looked thru for this btw</p>
            
            
            <h2>deploying on railway</h2>
            <p> on railway </p>
            <h2>the porkbun domain</h2>
            <p>delete the alias and cname values that are already in porkbun for your domain in that domain's settings</p>
            <p>go to the settings in railway and click +custom domain. railway usually detects the port, and in my case it detected 3000, but i knew it was listening from 8080, so i put 8080. then you can add the domain and then it will show the dns records. put them into porkbun as it asks (however, for me there was an error on porkbun saying couldn't have a cname on root domain, so it recommended alias and all i did was just keep the same info but switch it to alias) then u are good to go.</p>
            
            <h2>bonus: songs i was listening to while building this site</h2>
            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/1ZP5p9NeCRxWiL2RlAp5F0?utm_source=generator" width="30%" height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>
            <p>league music rly got me going</p>
            <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/4RCR0MZdC2mDoD0NjaRoSs?utm_source=generator" width="30%" height="80" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"/>


            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li></li>
            </ul>
        </div>
    )
}
