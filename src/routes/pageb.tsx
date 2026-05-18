import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageb')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pageb"!</div>
}
