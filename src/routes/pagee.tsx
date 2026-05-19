import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagee')({
  component: PageE,
})

function PageE() {
    return (
        <div style={{ padding: '0 4rem' }}>
            <h1>security</h1>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>- rls supabase </li>
              <li>- env variables</li>
            </ul>
        </div>
  )
}
