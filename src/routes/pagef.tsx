import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagef')({
  component: Leetcode,
})

function Leetcode() {
  return <div>Hello "/pagef"!</div>
}
