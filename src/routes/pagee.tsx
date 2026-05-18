import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagee')({
  component: PageE,
})

function PageE() {
    return (
        <div style={{ padding: '2rem' }}>
            <h1>security</h1>
        </div>
  )
}
