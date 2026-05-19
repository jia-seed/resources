import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/paged')({
  component: PageD,
})

function PageD() {
    return (
        <div style={{ padding: '0 4rem' }}>
            <h1>how this website was built</h1>
            <p>tan stack start</p>
            <a href="https://tanstack.com/start/latest/docs/framework/react/build-from-scratch">tan stack start project from scatch</a>
        </div>
  )
}
