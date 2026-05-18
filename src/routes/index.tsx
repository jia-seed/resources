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
    <p>so i made this for my awesome friend entirely from scratch without any coding agents and minimal copy and paste using tan stack start. down in ohio swag like ohio type of thing.</p>
    <Link to="/pagea">conceptual stuff</Link>
    </div>
  )
}