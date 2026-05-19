// src/routes/__root.tsx
/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  Link,
} from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'have a resourceathon',
      },
    ],
    links: [
      { rel: 'icon', type: 'image/png', href: '/compute.png'},
      { rel: 'compute', href: '/compute.png'},
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
        <style>{`
          body { margin: 0; padding: 0; }
          h1 { margin-top: 0; }
        `}</style>
      </head>
      <body>
        <nav style={{ padding: '4rem 1rem 1rem 4rem' }}> 
          <Link to="/">
            <img
              src="/computeblack.png"
              alt="home"
              style={{ width: '40px', height: '40px', display: 'block' }}
            />
          </Link>
        </nav>
        {children}
        <Scripts />
      </body>
    </html>
  )
}