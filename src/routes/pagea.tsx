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
        <h2>Http vs https</h2>
        <p>the “s” in https stand for “secure” 
        plain http sends everything back and forth as readable text, so someone on the same wifi or network could see the contents and tamper with it. so https wraps the http traffic in an encryption layer called tls that does a. encryption (scrambles data so anyone intercepting it sees gibberish, not passwords messages or page contents) b. Integrity (detects if data was altered in transit so ppl can’t tamper), c. authentication (ssl/tls certificate proves server is who it claims to be, not imposter).
        </p>

    </div>
  )
}
