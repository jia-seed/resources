import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagea')({
  component: PageA,
})

function PageA() {
  return ( 
    <div style={{ padding: '0 4rem 4rem' }}>
        <h1>this page is for the conceptual aspects of technical stuff</h1> 
        <h2>programming languages</h2>
        <p>1. some (not all) different programming languages and their overarching differences</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>- typescript</li>
          <li>- javascript</li>
          <li>- python</li>
          <li>- c++</li>
          <li>- rust</li>
          <li>- go</li>
        </ul>
        <h2>random things i thought about that you have to know</h2>
        <p>people always ask these questions in some kind of way to assert dominance. i really should organize this page.</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>- what is a pointer</li>
          <li>-how to reverse a binary tree</li>
        </ul>
    </div>
  )
}
