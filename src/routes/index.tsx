// src/routes/index.tsx
import { createFileRoute, useRouter, Link } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div style={{ padding: '2rem' }}>
    <h1>technical stuff</h1>
    <Link to="/pagea">conceptual stuff</Link>
    </div>
  )
}