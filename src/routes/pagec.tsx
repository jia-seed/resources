import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagec')({
  component: PageC,
})

function PageC() {
  return (
    <div style={{ padding: '2rem '}}>
        <h1>agentic engineering</h1>
        <p>aka you just give everything to claude code</p>
        <p>how to use claude code in the terminal</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>- <a href="https://www.conductor.build/">conductor (parallel agents)</a></li>
        </ul>
    </div>


  ) 
}

