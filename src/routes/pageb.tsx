import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageb')({
  component: PageB,
})

function PageB() {
  return (
    <div style={{ padding: '2rem' }}>
        <h1>this page is for practical things</h1>
        <p>the exact step by step to building projects directly</p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>- <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Cheatsheet">html cheatsheet resource 1</a></li>
            <li>- <a href="https://www.w3schools.com/html/default.asp">html cheatsheet resource 2</a></li>
            <li>- <a href="https://nextjs.org/docs">next.js docs</a></li>
        </ul>
        <h2>using vscode</h2>
        <p>1. sometimes the code is correct but there are squiggles. just cmd+shift+p and type in typescript: restart ts server. or idk i just quit vscode and open it again and then it's fine. this happens because of a stale ttsserver cache where it's in a confused state after u edit many files.</p>
    </div>
  )
}
