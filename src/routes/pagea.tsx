import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagea')({
  component: PageA,
})

function PageA() {
  return ( 
    <div style={{ padding: '2rem' }}>
        <h1>this page is for the conceptual concepts</h1> 
        <p>the different programming languages</p>
    </div>
  )
}
