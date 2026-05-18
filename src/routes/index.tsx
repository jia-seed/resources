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
    <p>so i made this for my awesome friend entirely from scratch without any coding agents and minimal copy and paste using tan stack start. in addition all the contents on the site are also handwritten without ai which means the grammar will be egregious. apologies in advance. down in ohio swag like ohio type of thing.</p>
    <Link to="/pagea">conceptual stuff</Link>
    <p></p>
    <Link to="/pageb">practical stuff</Link>

    <p></p>
    <a href="https://youtu.be/GfqDIcrhqxM?si=urAhGNyo56dAGgpS">EXTREMELY IMPORTANT CONCEPTS MUST READ</a>
    </div>
  )
}