import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageb')({
  component: PageB,
})

function PageB() {
  return (<div>Hello "/pageb"!</div>

  )
}
