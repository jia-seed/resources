// src/routes/index.tsx
import { createFileRoute, useRouter, Link } from '@tanstack/react-router'


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const router = useRouter()
  const state = Route.useLoaderData()

  return (
    <div style={{ padding: '0 4rem 4rem' }}> 
    <h1>technical stuff</h1>

    <p style={{ color: 'darkgreen' }}><strong>updates!</strong> 5-18-26 [10:13pm pst] updates to resources.build are a rubik's cube solving page <Link to="/cube">[bonus cube page]</Link> (nicely filled out for now), a security practices page <Link to="/pagee">[page e]</Link>, some vscode shortcuts in practical stuff <Link to="/pageb">[page b]</Link>. in addition i just improved the padding lol. + VIDEO EXAMPLES</p>

    <p style={{ color: 'darkgreen' }}>things that are coming soon: building an entire next.js project from scratch, doing everything in the terminal, and how this site was built.</p>

    <p>so i made this for my awesome friend entirely from scratch without any coding agents and minimal copy and paste using tan stack start. in addition all the contents on the site are also handwritten without ai which means the grammar will be egregious. 
    apologies in advance. down in ohio swag like ohio type of thing.</p>

    <p>
    this resources site is meant to be extremely practical. <strong>starting from the absolute, absolute beginning. assuming absolutely zero prior knowledge.</strong> there's minimal theory and it's for project building. in 2026, everyone is writing code with ai and people don't understand anything. which they really don't need to lowkey. however, i wanted to make this per the conversation with my friend, 
    but i also want to deepen my own understanding of how things work, because majoring in computer engineering barely taught me anything. and, i imagine that's kind of how it is for the majority of compsci/eng students regarding building practical projects lol.
    </p>
    <h2>all the contents are here:</h2>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <li>a. <Link to="/pagea">conceptual stuff</Link></li>
      <li>b. <Link to="/pageb">practical stuff</Link></li>
      <li>c. <Link to="/pagec">agentic engineering</Link></li>
      <li>d. <Link to="/paged">how this website was built</Link></li>
      <li>e. <Link to="/pagee">security practices</Link></li>
      <li><a href="https://youtu.be/GfqDIcrhqxM?si=urAhGNyo56dAGgpS">EXTREMELY IMPORTANT CONCEPTS MUST READ</a></li>
      <li><Link to="/cube">bonus (hehe): how to solve a rubik's cube</Link></li>
    </ul>

    <p>my plans for this are to lean hard into fullstack to the point where you can make an entire site from scratch with a frontend, backend, database, and api call while understanding all of it. things i WISH i could add sooner are a section on electronics, robotics, machine learning, production engineering, virtual machines, virtual environments (which really falls under many of those topics and actually already falls under the ones above, so i guess we'll encounter that) and etc but i NEED to stay focused.</p>

    </div>
  )
}