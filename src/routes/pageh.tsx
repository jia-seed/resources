import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageh')({
  component: CatSite,
})

function CatSite() {
    return (
        <div style={{ padding: '0 4rem 4rem' }}>
            <h1>cat site in rust</h1>
                <p>building a website in rust that shows a cat picture and inspirational or funny quote daily</p>
            <h2>the stack</h2>
                <p>rust binary with axum (web server), sqlx + sqlite (storage), and reqwest(outbound http calls). all on the tokio async runtime, then hosted on railway.</p>
            <h2>setting up the site</h2>
            <p>create a new folder</p>
            
            <h2>deploying on railway</h2>
            on railway
            <h2>the porkbun domain</h2>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li></li>
            </ul>
        </div>
    )
}
