import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '../components/button'
import { ArrowRight, Code, Palette, User } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <section className="min-h-screen w-full bg-[#F8F9FA] text-gray-800 font-sans antialiased">
      <div className="flex min-h-[calc(100vh-80px)] items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">Desenvolvedor</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Criando experiências digitais incríveis com código limpo e design
              moderno
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/about">
              <Button size="lg" className="group">
                <User className="w-4 h-4 mr-2" />
                Conhecer Mais
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="group">
              <Code className="w-4 h-4 mr-2" />
              Ver Projetos
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="tech-card text-left">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground text-sm">
                React, TypeScript, Next.js e mais tecnologias modernas
              </p>
            </div>

            <div className="tech-card text-left">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground text-sm">
                UI/UX design com foco na experiência do usuário
              </p>
            </div>

            <div className="tech-card text-left">
              <div className="p-3 rounded-xl bg-primary/20 w-fit mb-4">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground text-sm">
                Aplicações rápidas, otimizadas e escaláveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
