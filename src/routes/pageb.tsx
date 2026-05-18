import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageb')({
  component: PageB,
})

function PageB() {
  return (
    <div style={{ padding: '2rem' }}>
        <h1>this page is for practical things</h1>
        <p>the exact step by step to building projects directly</p>
        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Cheatsheet">html site 2</a>
        <a href="https://www.w3schools.com/html/default.asp">html resource site 2</a>
        <a href="https://nextjs.org/docs">next.js docs</a>
    </div>
  )
}
