import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanstackDevtools } from '@tanstack/react-devtools'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster as Sonner } from 'sonner'
import { TooltipProvider } from '../components/tooltip'
import { Toaster } from '../components/toaster'
import { Header } from '../components/Header'

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Sonner />
          <Toaster />
          <Header />
          <main className="pt-24">
            <Outlet />
          </main>
          <TanstackDevtools
            config={{
              position: 'bottom-left',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        </TooltipProvider>
      </QueryClientProvider>
    </>
  ),
})
