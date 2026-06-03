import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagec')({
  component: PageC,
})

function PageC() {
  return (
    <div style={{ padding: '0 4rem 4rem'}}>
        <h1>agentic engineering</h1>
        <p>aka you just give everything to claude code</p>
        <p>how to use claude code in the terminal</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>- <a href="https://www.conductor.build/">conductor (parallel agents)</a></li>
        </ul>
        <h2>scalability</h2>
        <p>vibecoding only goes so far without architectural understanding. what happens when u hit 10k users? 20k? here's what to do.</p>
    </div>


  ) 
}

