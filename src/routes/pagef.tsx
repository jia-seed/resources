import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagef')({
  component: Leetcode,
})

function Leetcode() {
  return (
        <div style={{ padding: '0 4rem 4rem' }}>
            <h1>leetcode</h1>
            <p>potentially a good resource my friend built codelingo.pro</p>
            <h2>contains duplicate</h2>
            <p>Given an integer array <mark>nums</mark>, return true if any value appears more than once in the array, otherwise return false.</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li></li>
            </ul>
        </div>
  )
}
