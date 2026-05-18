import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pagec')({
  component: PageC,
})

function PageC() {
  return <div>Hello "/pagec"!</div>
}
