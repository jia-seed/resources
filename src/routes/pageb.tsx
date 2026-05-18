import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageb')({
  component: PageB,
})

function PageB() {
  return (
    <div style={{ padding: '2rem' }}>
        <h1>this page is for practical things</h1>
        <p> the exact step by step to building projects directly</p>
    </div>
  )
}
