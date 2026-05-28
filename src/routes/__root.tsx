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
      { rel: 'icon', type: 'image/png', href: '/computewhite.png'},
      { rel: 'computewhite', href: '/computewhite.png'},
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
          code {
          background: #f4f4f4;
          padding: 0.75rem 1rem;
          border-radius: 4px;
          overflow-x: auto;
          font-family: monospace;
          font-size: 0.8rem;
          line-height: 1.4;
          white-space: pre-wrap;
          word-break: break-word;
          max-width: 100%;
          margin: 0.5rem 0;
          }
          pre {
          background: #f4f4f4;
          padding: 0.75rem 1rem;
          font-family: inherit;
          line-height: 1.8;
          font-size: inherit;
          font-weight: inherit;
          max-width: 600px;
          }
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