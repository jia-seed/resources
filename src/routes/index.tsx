// src/routes/index.tsx
import { createFileRoute, useRouter, Link } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div style={{ padding: '0 4rem' }}>
    <h1>technical stuff</h1>
    <p>so i made this for my awesome friend entirely from scratch without any coding agents and minimal copy and paste using tan stack start. in addition all the contents on the site are also handwritten without ai which means the grammar will be egregious. apologies in advance. down in ohio swag like ohio type of thing.</p>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <li>a. <Link to="/pagea">conceptual stuff</Link></li>
      <li>b. <Link to="/pageb">practical stuff</Link></li>
      <li>c. <Link to="/pagec">agentic engineering</Link></li>
      <li>d. <Link to="/paged">how this website was built</Link></li>
      <li>e. <Link to="/pagee">security practices</Link></li>
      <li><a href="https://youtu.be/GfqDIcrhqxM?si=urAhGNyo56dAGgpS">EXTREMELY IMPORTANT CONCEPTS MUST READ</a></li>
      <li><Link to="/cube">bonus (hehe): how to solve a rubik's cube</Link></li>
    </ul>
    </div>
  )
}