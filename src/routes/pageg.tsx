import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pageg')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pageg"!</div>
}
