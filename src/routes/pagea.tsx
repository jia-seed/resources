import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagea')({
  component: PageA,
})

function PageA() {
  return ( 
    <div style={{ padding: '2rem' }}>
        <h1>this page is for the conceptual aspects of technical stuff</h1> 
        <p>1. some (not all) different programming languages and their overarching differences</p>
        <p>- typescript</p>
        <p>- javascript</p>
        <p>- spython</p>
        <p>- c++</p>
    </div>
  )
}
