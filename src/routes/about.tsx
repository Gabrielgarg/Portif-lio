import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs'
import { Card } from '../components/card'
import { Badge } from '../components/badge'
import { Tree } from 'antd'
import type { TreeDataNode } from 'antd'
import {
  Monitor,
  Server,
  Cloud,
  Gamepad2,
  Code2,
  Palette,
  Database,
  Shield,
  Rocket,
  Zap,
  File,
  Terminal,
  Cpu,
  Settings,
  Layers,
  Globe,
  BookOpen,
} from 'lucide-react'

export const Route = createFileRoute('/about')({
  component: About,
})

// Estrutura de dados hierárquica com árvore do Ant Design
const skillsData = {
  frontend: {
    icon: Monitor,
    title: 'Frontend',
    description: 'Desenvolvimento de interfaces e experiência do usuário',
    treeData: [
      {
        title: (
          <div className="flex items-center gap-2">
            <span>Avançado</span>

          </div>
        ),
        key: 'frontend-avancado',
        icon: <Rocket className="w-4 h-4" />,
        children: [
          {
            title: (
              <div className="flex items-center gap-2">
                <span>Arquitetura</span>
              </div>
            ),
            key: 'frontend-avancado-arquitetura',
            icon: <Layers className="w-4 h-4" />,
            children: [
              {
                title: 'Arquitetura do projeto',
                key: 'frontend-avancado-arquitetura-projeto',
                icon: <Settings className="w-4 h-4" />,
              },
              {
                title: 'Arquitetura do workspace ou dos componentes',
                key: 'frontend-avancado-arquitetura-workspace',
                icon: <Layers className="w-4 h-4" />,
              },
              {
                title: 'Arquitetura interna dos componentes e páginas',
                key: 'frontend-avancado-arquitetura-interna',
                icon: <Code2 className="w-4 h-4" />,
              },
            ],
          },
          {
            title: 'Headless CMS',
            key: 'frontend-avancado-headless',
            icon: <Database className="w-4 h-4" />,
          },
          {
            title: (
              <div className="flex items-center gap-2">
                <span>Performance</span>
              </div>
            ),
            key: 'frontend-avancado-performance',
            icon: <Zap className="w-4 h-4" />,
            children: [
              {
                title: 'Build',
                key: 'frontend-avancado-performance-build',
                icon: <Settings className="w-4 h-4" />,
              },
              {
                title: (
                  <div className="flex items-center gap-2">
                    <span>Importações dinâmicas</span>
                  </div>
                ),
                key: 'frontend-avancado-performance-dinamicas',
                icon: <Rocket className="w-4 h-4" />,
                children: [
                  {
                    title: 'Exemplo',
                    key: 'frontend-avancado-performance-dinamicas-exemplo',
                    icon: <Code2 className="w-4 h-4" />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: (
          <div className="flex items-center gap-2">
            <span>Básico</span>
          </div>
        ),
        key: 'frontend-basico',
        icon: <Code2 className="w-4 h-4" />,
        children: [
          {
            title: 'Browser',
            key: 'frontend-basico-browser',
            icon: <Globe className="w-4 h-4" />,
          },
          {
            title: (
              <div className="flex items-center gap-2">
                <span>HTML</span>
              </div>
            ),
            key: 'frontend-basico-html',
            icon: <File className="w-4 h-4" />,
            children: [
              {
                title: 'Lista',
                key: 'frontend-basico-html-lista',
                icon: <BookOpen className="w-4 h-4" />,
              },
              {
                title: 'Semântica',
                key: 'frontend-basico-html-semantica',
                icon: <Globe className="w-4 h-4" />,
              },
              {
                title: 'Cores',
                key: 'frontend-basico-html-cores',
                icon: <Palette className="w-4 h-4" />,
              },
              {
                title: 'Escopo',
                key: 'frontend-basico-html-escopo',
                icon: <Layers className="w-4 h-4" />,
              },
              {
                title: 'Imagem',
                key: 'frontend-basico-html-imagem',
                icon: <File className="w-4 h-4" />,
              },
              {
                title: 'Meta',
                key: 'frontend-basico-html-meta',
                icon: <Settings className="w-4 h-4" />,
              },
            ],
          },
          {
            title: 'IDE\'s',
            key: 'frontend-basico-ides',
            icon: <Terminal className="w-4 h-4" />,
            children: [
              {
                title: 'VS Code',
                key: 'frontend-basico-ides-vscode',
                icon: <Code2 className="w-4 h-4" />,
                children: [
                  {
                    title: 'Linguagens',
                    key: 'frontend-basico-ides-vscode-linguagens',
                    icon: <Code2 className="w-4 h-4" />,
                    children: [
                      {
                        title: 'JS Vanilla (JS puro)',
                        key: 'frontend-basico-ides-vscode-linguagens-js',
                        icon: <Code2 className="w-4 h-4" />,
                        children: [
                          {
                            title: 'Extensões básicas para desenvolvimento',
                            key: 'frontend-basico-ides-vscode-linguagens-js-extensoes',
                            icon: <Settings className="w-4 h-4" />,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    content: {
      'frontend-avancado': {
        title: 'Frontend Avançado',
        description: 'Conceitos avançados de desenvolvimento frontend',
        content: 'Desenvolvimento frontend avançado inclui arquitetura de aplicações, otimização de performance, padrões de design avançados e integração com sistemas complexos.',
        projects: 'Projetos empresariais complexos'
      },
      'frontend-avancado-arquitetura': {
        title: 'Arquitetura Frontend',
        description: 'Estruturação e organização de projetos frontend',
        content: 'Arquitetura frontend envolve a organização de código, estruturação de componentes, gerenciamento de estado, e criação de sistemas escaláveis e maintíveis.',
        technologies: ['Component Architecture', 'State Management', 'Module Federation', 'Design Patterns'],
        level: 'Avançado',
        projects: 'Arquitetura de sistemas com 100+ componentes'
      },
      'frontend-avancado-arquitetura-projeto': {
        title: 'Arquitetura do Projeto',
        description: 'Estruturação geral e organização de projetos',
        content: 'Definição da estrutura de pastas, organização de módulos, configuração de build tools, e estabelecimento de convenções de código para projetos escaláveis.',
        technologies: ['Folder Structure', 'Module Organization', 'Build Configuration', 'Code Conventions'],
        level: 'Avançado',
        projects: 'Estruturação de 15+ projetos complexos'
      },
      'frontend-avancado-arquitetura-workspace': {
        title: 'Arquitetura do Workspace',
        description: 'Organização de componentes e workspace',
        content: 'Criação de sistemas de design, bibliotecas de componentes reutilizáveis, e organização de workspaces para múltiplos projetos e equipes.',
        technologies: ['Design System', 'Component Library', 'Monorepo', 'Storybook'],
        level: 'Avançado',
        projects: 'Sistema de componentes usado por 5+ equipes'
      },
      'frontend-avancado-arquitetura-interna': {
        title: 'Arquitetura Interna',
        description: 'Estrutura interna de componentes e páginas',
        content: 'Padrões de composição de componentes, hooks customizados, gerenciamento de estado local, e otimização de re-renderizações.',
        technologies: ['Component Composition', 'Custom Hooks', 'State Patterns', 'Render Optimization'],
        level: 'Avançado',
        projects: 'Otimização de performance em aplicações críticas'
      },
      'frontend-avancado-headless': {
        title: 'Headless CMS',
        description: 'Integração com sistemas de gerenciamento de conteúdo',
        content: 'Implementação de soluções headless CMS para gerenciamento dinâmico de conteúdo, integração com APIs de conteúdo e sistemas de preview.',
        technologies: ['Strapi', 'Contentful', 'Sanity', 'GraphQL', 'REST APIs'],
        level: 'Avançado',
        projects: '8 projetos com CMS headless'
      },
      'frontend-avancado-performance': {
        title: 'Performance Frontend',
        description: 'Otimização e performance de aplicações',
        content: 'Técnicas avançadas de otimização incluindo code splitting, lazy loading, caching strategies, e monitoramento de performance.',
        technologies: ['Code Splitting', 'Lazy Loading', 'Caching', 'Performance Monitoring'],
        level: 'Avançado',
        projects: 'Otimização resultando em 40% melhoria de performance'
      },
      'frontend-avancado-performance-build': {
        title: 'Otimização de Build',
        description: 'Configuração e otimização do processo de build',
        content: 'Configuração avançada de bundlers, otimização de assets, tree shaking, e estratégias de caching para builds eficientes.',
        technologies: ['Webpack', 'Vite', 'Rollup', 'Tree Shaking', 'Asset Optimization'],
        level: 'Avançado',
        projects: 'Redução de 60% no tempo de build'
      },
      'frontend-avancado-performance-dinamicas': {
        title: 'Importações Dinâmicas',
        description: 'Carregamento dinâmico de módulos e componentes',
        content: 'Implementação de importações dinâmicas para code splitting, lazy loading de componentes, e otimização de bundle size.',
        technologies: ['Dynamic Imports', 'React.lazy', 'Suspense', 'Route-based Splitting'],
        level: 'Avançado',
        projects: 'Redução de 50% no bundle inicial'
      },
      'frontend-avancado-performance-dinamicas-exemplo': {
        title: 'Exemplo de Importação Dinâmica',
        description: 'Implementação prática de importações dinâmicas',
        content: 'Exemplo prático de como implementar importações dinâmicas em React com lazy loading e Suspense para otimização de performance.',
        technologies: ['React.lazy', 'Suspense', 'Error Boundaries', 'Loading States'],
        level: 'Avançado',
        projects: 'Implementado em todos os projetos recentes'
      },
      'frontend-basico': {
        title: 'Frontend Básico',
        description: 'Fundamentos do desenvolvimento frontend',
        content: 'Conceitos fundamentais incluindo HTML semântico, CSS responsivo, JavaScript vanilla, e ferramentas básicas de desenvolvimento.',
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'Browser APIs'],
        level: 'Básico',
        projects: 'Base sólida para todos os projetos'
      },
      'frontend-basico-browser': {
        title: 'Browser Fundamentals',
        description: 'Funcionamento e APIs do navegador',
        content: 'Compreensão profunda de como os navegadores funcionam, APIs nativas, DOM manipulation, e otimização para diferentes browsers.',
        technologies: ['DOM API', 'Browser APIs', 'Web Standards', 'Cross-browser Compatibility'],
        level: 'Básico',
        projects: 'Aplicações compatíveis com todos os browsers modernos'
      },
      'frontend-basico-html': {
        title: 'HTML Fundamentals',
        description: 'Linguagem de marcação e estruturação',
        content: 'Domínio completo de HTML5 semântico, acessibilidade, SEO, e melhores práticas para estruturação de conteúdo.',
        technologies: ['Semantic HTML', 'Accessibility', 'SEO', 'Forms', 'Media Elements'],
        level: 'Básico',
        projects: 'Estrutura semântica em 100% dos projetos'
      },
      'frontend-basico-html-lista': {
        title: 'Listas HTML',
        description: 'Implementação e estilização de listas',
        content: 'Criação de listas ordenadas, não ordenadas, e de definição com semântica adequada e estilização responsiva.',
        technologies: ['Ordered Lists', 'Unordered Lists', 'Definition Lists', 'CSS List Styling'],
        level: 'Básico',
        projects: 'Listas interativas em interfaces de usuário'
      },
      'frontend-basico-html-semantica': {
        title: 'HTML Semântico',
        description: 'Uso adequado de elementos semânticos',
        content: 'Implementação de HTML semântico para melhorar acessibilidade, SEO, e manutenibilidade do código.',
        technologies: ['Semantic Elements', 'ARIA', 'Document Outline', 'Screen Readers'],
        level: 'Básico',
        projects: 'Semântica implementada em todos os projetos'
      },
      'frontend-basico-ides-vscode': {
        title: 'VS Code',
        description: 'Editor de código e ferramentas de desenvolvimento',
        content: 'Configuração avançada do VS Code, extensões essenciais, debugging, e automação para desenvolvimento eficiente.',
        technologies: ['Extensions', 'Debugging', 'Snippets', 'Settings Sync', 'Git Integration'],
        level: 'Básico',
        projects: 'Ambiente de desenvolvimento otimizado'
      },
      'frontend-basico-ides-vscode-linguagens-js-extensoes': {
        title: 'Extensões JS para VS Code',
        description: 'Extensões essenciais para desenvolvimento JavaScript',
        content: 'Seleção e configuração de extensões do VS Code para desenvolvimento JavaScript, incluindo linting, formatting, e debugging.',
        technologies: ['ESLint', 'Prettier', 'Debugger for Chrome', 'Auto Import', 'IntelliSense'],
        level: 'Básico',
        projects: 'Setup padrão para todos os projetos JS'
      }
    }
  },
  // Estrutura similar para backend, devops e gamedev...
  backend: {
    icon: Server,
    title: 'Backend',
    description: 'Desenvolvimento de APIs e arquitetura de sistemas',
    treeData: [
      {
        title: (
          <div className="flex items-center gap-2">
            <span>Expert</span>
          </div>
        ),
        key: 'backend-expert',
        icon: <Rocket className="w-4 h-4" />,
        children: [
          {
            title: 'Node.js',
            key: 'backend-expert-nodejs',
            icon: <Terminal className="w-4 h-4" />,
            children: [
              {
                title: 'Express.js',
                key: 'backend-expert-nodejs-express',
                icon: <Code2 className="w-4 h-4" />,
              },
              {
                title: 'NestJS',
                key: 'backend-expert-nodejs-nestjs',
                icon: <Shield className="w-4 h-4" />,
              },
            ],
          },
          {
            title: 'APIs',
            key: 'backend-expert-apis',
            icon: <Database className="w-4 h-4" />,
            children: [
              {
                title: 'REST',
                key: 'backend-expert-apis-rest',
                icon: <Globe className="w-4 h-4" />,
              },
              {
                title: 'GraphQL',
                key: 'backend-expert-apis-graphql',
                icon: <Layers className="w-4 h-4" />,
              },
            ],
          },
        ],
      },
    ],
    content: {
      'backend-expert': {
        title: 'Backend Expert',
        description: 'Desenvolvimento backend de nível expert',
        content: 'Experiência avançada em desenvolvimento de APIs robustas, arquitetura de microservices, e otimização de performance em sistemas de grande escala.',
        technologies: ['Node.js', 'Python', 'Microservices', 'Database Design'],
        level: 'Expert',
        projects: '25+ APIs em produção'
      },
      'backend-expert-nodejs': {
        title: 'Node.js Expert',
        description: 'JavaScript no servidor com expertise avançada',
        content: 'Desenvolvimento de aplicações Node.js escaláveis, otimização de performance, implementação de padrões de design, e arquitetura de sistemas distribuídos.',
        technologies: ['Express', 'NestJS', 'Fastify', 'Event Loop Optimization'],
        level: 'Expert',
        projects: '20+ aplicações Node.js em produção'
      }
    }
  },
  devops: {
    icon: Cloud,
    title: 'DevOps',
    description: 'Infraestrutura e automação',
    treeData: [
      {
        title: (
          <div className="flex items-center gap-2">
            <span>Intermediário</span>
          </div>
        ),
        key: 'devops-intermediario',
        icon: <Settings className="w-4 h-4" />,
        children: [
          {
            title: 'Cloud Platforms',
            key: 'devops-intermediario-cloud',
            icon: <Cloud className="w-4 h-4" />,
            children: [
              {
                title: 'AWS',
                key: 'devops-intermediario-cloud-aws',
                icon: <Cloud className="w-4 h-4" />,
              },
              {
                title: 'Vercel',
                key: 'devops-intermediario-cloud-vercel',
                icon: <Rocket className="w-4 h-4" />,
              },
            ],
          },
        ],
      },
    ],
    content: {
      'devops-intermediario': {
        title: 'DevOps Intermediário',
        description: 'Práticas de DevOps e automação',
        content: 'Implementação de pipelines CI/CD, containerização com Docker, e deploy automatizado em plataformas cloud.',
        technologies: ['Docker', 'CI/CD', 'AWS', 'Monitoring'],
        level: 'Intermediário',
        projects: 'Automação implementada em todos os projetos'
      }
    }
  },
  gamedev: {
    icon: Gamepad2,
    title: 'Game Development',
    description: 'Desenvolvimento de jogos e entretenimento',
    treeData: [
      {
        title: (
          <div className="flex items-center gap-2">
            <span>Intermediário</span>
          </div>
        ),
        key: 'gamedev-intermediario',
        icon: <Gamepad2 className="w-4 h-4" />,
        children: [
          {
            title: 'Game Engines',
            key: 'gamedev-intermediario-engines',
            icon: <Cpu className="w-4 h-4" />,
            children: [
              {
                title: 'Unity',
                key: 'gamedev-intermediario-engines-unity',
                icon: <Cpu className="w-4 h-4" />,
              },
              {
                title: 'Godot',
                key: 'gamedev-intermediario-engines-godot',
                icon: <Code2 className="w-4 h-4" />,
              },
            ],
          },
        ],
      },
    ],
    content: {
      'gamedev-intermediario': {
        title: 'Game Development Intermediário',
        description: 'Desenvolvimento de jogos com Unity e Godot',
        content: 'Criação de jogos 2D e 3D, implementação de mecânicas de gameplay, e design de experiências interativas.',
        technologies: ['Unity', 'C#', 'Godot', 'Game Design'],
        level: 'Intermediário',
        projects: '6 jogos desenvolvidos'
      }
    }
  }
}

// Conteúdo específico para cada tecnologia
const technologyContent = {
  // Frontend Avançado
  'React': {
    title: 'React',
    description: 'Biblioteca JavaScript para construção de interfaces de usuário',
    content: 'React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces de usuário. Utilizo React para desenvolvimento de SPAs modernas, aproveitando hooks, context API, e padrões de composição para criar componentes reutilizáveis e performáticos.',
    features: ['Hooks', 'Context API', 'Virtual DOM', 'JSX', 'Component Composition'],
    experience: '4+ anos de experiência',
    projects: '50+ projetos desenvolvidos com React'
  },
  'Next.js': {
    title: 'Next.js',
    description: 'Framework React para produção com SSR e SSG',
    content: 'Next.js é o framework React para produção que oferece rendering híbrido estático e no servidor, file-system routing, otimizações automáticas, e muito mais. Uso para criar aplicações React otimizadas com excelente performance e SEO.',
    features: ['SSR/SSG', 'API Routes', 'Image Optimization', 'File-based Routing', 'Automatic Code Splitting'],
    experience: '3+ anos de experiência',
    projects: '30+ aplicações Next.js em produção'
  },
  'TypeScript': {
    title: 'TypeScript',
    description: 'JavaScript com tipagem estática para melhor desenvolvimento',
    content: 'TypeScript adiciona tipagem estática ao JavaScript, proporcionando melhor experiência de desenvolvimento, detecção precoce de erros, e código mais maintível. Utilizo em todos os projetos modernos para garantir qualidade e escalabilidade.',
    features: ['Static Typing', 'IntelliSense', 'Refactoring', 'Interface Definitions', 'Generic Types'],
    experience: '3+ anos de experiência',
    projects: '90% dos projetos utilizam TypeScript'
  },
  'Webpack': {
    title: 'Webpack',
    description: 'Bundler de módulos para aplicações JavaScript modernas',
    content: 'Webpack é um bundler de módulos estático para aplicações JavaScript modernas. Utilizo para configurar builds customizados, otimização de assets, code splitting, e configuração de desenvolvimento.',
    features: ['Module Bundling', 'Code Splitting', 'Asset Optimization', 'Hot Module Replacement', 'Plugin System'],
    experience: '3+ anos de experiência',
    projects: 'Configuração customizada em 20+ projetos'
  },
  'Vite': {
    title: 'Vite',
    description: 'Build tool rápido para desenvolvimento web moderno',
    content: 'Vite é uma ferramenta de build que oferece desenvolvimento extremamente rápido e builds otimizados para produção. Utilizo como alternativa moderna ao Webpack para projetos que precisam de velocidade de desenvolvimento.',
    features: ['Fast HMR', 'ES Modules', 'Optimized Builds', 'Plugin Ecosystem', 'TypeScript Support'],
    experience: '2+ anos de experiência',
    projects: 'Ferramenta padrão em projetos mais recentes'
  },

  // Frontend Básico
  'HTML5': {
    title: 'HTML5',
    description: 'Linguagem de marcação semântica para web moderna',
    content: 'HTML5 é a quinta versão da linguagem de marcação HTML, trazendo elementos semânticos, APIs modernas, e suporte multimídia nativo. Uso elementos semânticos para criar estruturas acessíveis e otimizadas para SEO.',
    features: ['Semantic Elements', 'Form Validation', 'Local Storage', 'Canvas', 'Video/Audio'],
    experience: '6+ anos de experiência',
    projects: 'Base de todos os projetos web'
  },
  'CSS3': {
    title: 'CSS3',
    description: 'Estilização avançada com Flexbox, Grid e animações',
    content: 'CSS3 oferece recursos avançados como Flexbox, Grid Layout, animações, transições, e muito mais. Utilizo para criar layouts responsivos, animações fluidas, e experiências visuais atrativas.',
    features: ['Flexbox', 'Grid Layout', 'Animations', 'Media Queries', 'Custom Properties'],
    experience: '6+ anos de experiência',
    projects: 'Estilização customizada em todos os projetos'
  },
  'JavaScript': {
    title: 'JavaScript',
    description: 'Linguagem de programação dinâmica para web interativa',
    content: 'JavaScript é a linguagem que dá vida às páginas web. Domino desde conceitos básicos até recursos avançados como ES6+, async/await, destructuring, e programação funcional.',
    features: ['ES6+', 'Async/Await', 'DOM Manipulation', 'Event Handling', 'Functional Programming'],
    experience: '5+ anos de experiência',
    projects: 'Linguagem principal em todos os projetos frontend'
  },
  'Browser APIs': {
    title: 'Browser APIs',
    description: 'APIs nativas do navegador para funcionalidades avançadas',
    content: 'As Browser APIs oferecem acesso a funcionalidades nativas do navegador como geolocalização, notificações, storage local, e muito mais. Utilizo para criar experiências web ricas sem dependências externas.',
    features: ['Geolocation', 'Web Storage', 'Fetch API', 'Web Workers', 'Service Workers'],
    experience: '4+ anos de experiência',
    projects: 'Implementado em aplicações que requerem funcionalidades nativas'
  },

  // Extensões VS Code
  'ESLint': {
    title: 'ESLint',
    description: 'Linter para JavaScript que identifica e corrige problemas no código',
    content: 'ESLint é uma ferramenta de análise estática para identificar padrões problemáticos no código JavaScript. Configuro regras customizadas para manter consistência de código e detectar erros potenciais durante o desenvolvimento.',
    features: ['Code Analysis', 'Custom Rules', 'Auto-fixing', 'Plugin System', 'IDE Integration'],
    experience: 'Usado em todos os projetos',
    projects: 'Configuração padronizada para equipes de desenvolvimento'
  },
  'Prettier': {
    title: 'Prettier',
    description: 'Formatador de código para manter consistência visual',
    content: 'Prettier é um formatador de código que garante consistência de estilo em todo o projeto. Integro com ESLint e configurações do editor para formatação automática e padrões de código unificados.',
    features: ['Code Formatting', 'Style Consistency', 'Editor Integration', 'Multi-language Support', 'Configurable Rules'],
    experience: 'Ferramenta padrão em todos os projetos',
    projects: 'Setup automático em configurações de desenvolvimento'
  },
  'Debugger for Chrome': {
    title: 'Debugger for Chrome',
    description: 'Debugging avançado direto no VS Code',
    content: 'Extensão que permite debuggar aplicações JavaScript diretamente no VS Code usando o Chrome DevTools. Utilizo para debugging eficiente com breakpoints, inspeção de variáveis, e análise de performance.',
    features: ['Breakpoints', 'Variable Inspection', 'Call Stack', 'Console Integration', 'Source Maps'],
    experience: 'Ferramenta diária de debugging',
    projects: 'Debugging de aplicações complexas em produção'
  },
  'Auto Import': {
    title: 'Auto Import',
    description: 'Importação automática de módulos e componentes',
    content: 'Extensão que automatiza a importação de módulos, componentes, e funções em projetos JavaScript/TypeScript. Melhora significativamente a produtividade eliminando imports manuais e organizando dependências.',
    features: ['Automatic Imports', 'Path Resolution', 'TypeScript Support', 'Module Detection', 'Organize Imports'],
    experience: 'Economia de 30% no tempo de desenvolvimento',
    projects: 'Essencial em projetos com muitos componentes'
  },
  'IntelliSense': {
    title: 'IntelliSense',
    description: 'Autocompletar inteligente e sugestões de código',
    content: 'IntelliSense fornece autocompletar inteligente, informações de parâmetros, quick info, e listas de membros. Essencial para desenvolvimento produtivo com sugestões contextuais e detecção de erros em tempo real.',
    features: ['Auto-completion', 'Parameter Info', 'Error Detection', 'Quick Info', 'Symbol Navigation'],
    experience: 'Recurso fundamental para produtividade',
    projects: 'Acelera desenvolvimento em 40%'
  }
}

function About() {
  const [activeTab, setActiveTab] = useState('frontend')
  const [selectedTreeKey, setSelectedTreeKey] = useState<string>('frontend-avancado')
  const [selectedTechnology, setSelectedTechnology] = useState<string>('')

  // Função para lidar com seleção da árvore
  const onTreeSelect = (selectedKeys: React.Key[]) => {
    if (selectedKeys.length > 0) {
      setSelectedTreeKey(selectedKeys[0] as string)
      setSelectedTechnology('') // Resetar tecnologia selecionada
    }
  }

  // Quando muda de tab, resetar a seleção da árvore para o primeiro item
  const onTabChange = (value: string) => {
    setActiveTab(value)
    setSelectedTechnology('') // Resetar tecnologia selecionada
    const newTabData = skillsData[value as keyof typeof skillsData]
    if (newTabData?.treeData?.[0]?.key) {
      setSelectedTreeKey(newTabData.treeData[0].key as string)
    }
  }

  // Dados atuais baseados na tab ativa
  const currentTabData = skillsData[activeTab as keyof typeof skillsData]

  // Conteúdo atual baseado na seleção da árvore
  const currentContent = (currentTabData?.content as any)?.[selectedTreeKey] || {
    title: 'Selecione um tópico',
    description: 'Escolha um item na árvore para ver o conteúdo',
    content: 'Navegue pela árvore ao lado para explorar os diferentes tópicos e tecnologias.',
    technologies: [],
    level: '',
    projects: ''
  }

  return (
    <div className="">
      {/* Header */}
      {/* <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold gradient-text mb-2">Sobre Mim</h1>
          <p className="text-muted-foreground text-lg">
            Desenvolvedor apaixonado por tecnologia e inovação
          </p>
        </div>
      </div> */}

      <div className="container mx-auto px-6 py-8">
        {/* Stack Tabs */}
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-card/80 p-1">
            <TabsTrigger
              value="frontend"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              <Monitor className="w-4 h-4 mr-2" />
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              <Server className="w-4 h-4 mr-2" />
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="devops"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              <Cloud className="w-4 h-4 mr-2" />
              DevOps
            </TabsTrigger>
            <TabsTrigger
              value="gamedev"
              className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
            >
              <Gamepad2 className="w-4 h-4 mr-2" />
              Game Dev
            </TabsTrigger>
          </TabsList>

          {/* Content Area */}
          <div className="grid grid-cols-12 gap-6 mt-6">
            {/* Sidebar com Tree */}
            <div className="col-span-12 lg:col-span-4">
              <Card className="p-4 glass-effect">
                <div className="flex items-center gap-2 mb-4">
                  <currentTabData.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {currentTabData.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {currentTabData.description}
                </p>

                {/* Tree Navigation */}
                <Tree
                  defaultExpandedKeys={[
                    `${activeTab}-avancado`,
                    `${activeTab}-intermediario`,
                    `${activeTab}-expert`,
                    `${activeTab}-basico`,
                  ]}
                  selectedKeys={[selectedTreeKey]}
                  onSelect={onTreeSelect}
                  treeData={currentTabData.treeData as TreeDataNode[]}
                  className="bg-transparent [&_.ant-tree-node-selected]:!bg-transparent [&_.ant-tree-node-content-wrapper]:flex [&_.ant-tree-node-content-wrapper]:gap-2 [&_.ant-tree-node-content-wrapper]:items-center 
                  [&_.ant-tree-node-content-wrapper]:text-foreground [&_.ant-tree-node-content-wrapper:hover]:bg-primary/10 [&_.ant-tree-node-selected>.ant-tree-node-content-wrapper]:bg-primary/20 
                  [&_.ant-tree-node-selected>.ant-tree-node-content-wrapper]:text-primary [&_.ant-tree-switcher]:text-muted-foreground 
                  [&_.ant-tree-node-selected]:!text-primary [&_.ant-tree-iconEle]:!w-min [&_.ant-tree-iconEle]:!h-min [&_.ant-tree-node-content-wrapper]:px-2 [&_.ant-tree-node-content-wrapper]:py-1
                  [&_.ant-tree-node-content-wrapper]:w-full [&_.ant-tree-node-selected.ant-tree-title]:!text-primary
                  "
                  showIcon
                />
              </Card>
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              <TabsContent value={activeTab} className="mt-0">
                <div className="space-y-6">
                  {/* Main Content Card */}
                  <Card className="p-6 glass-effect border-primary/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-primary/20">
                          <currentTabData.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground">
                            {currentContent.title}
                          </h2>
                          <p className="text-muted-foreground">
                            {currentContent.description}
                          </p>
                        </div>
                      </div>

                      {currentContent.level && (
                        <Badge
                          variant="secondary"
                          className={`
                            ${currentContent.level === 'Expert' ? 'bg-green-500/20 text-green-400 border-green-500/30' : ''}
                            ${currentContent.level === 'Avançado' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : ''}
                            ${currentContent.level === 'Intermediário' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : ''}
                            ${currentContent.level === 'Básico' ? 'bg-gray-500/20 text-gray-400 border-gray-500/30' : ''}
                          `}
                        >
                          {currentContent.level}
                        </Badge>
                      )}
                    </div>

                    <div className="prose prose-invert max-w-none">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {currentContent.content}
                      </p>

                      {/* Technologies Grid */}
                      {currentContent.technologies && currentContent.technologies.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold text-foreground mb-3">
                            Tecnologias e Ferramentas
                          </h4>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {currentContent.technologies.map((tech: string, index: number) => (
                              <button
                                key={tech}
                                onClick={() => setSelectedTechnology(tech)}
                                className={`
                                  p-2 rounded-md border transition-all duration-200 text-center
                                  ${selectedTechnology === tech 
                                    ? 'bg-primary text-primary-foreground border-primary shadow-lg scale-105' 
                                    : 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:scale-102'
                                  }
                                `}
                                style={{ animationDelay: `${index * 0.1}s` }}
                              >
                                {tech}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Projects Info */}
                      {/* {currentContent.projects && (
                        <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                          <h5 className="font-medium text-foreground mb-1">Experiência</h5>
                          <p className="text-sm text-muted-foreground">{currentContent.projects}</p>
                        </div>
                      )} */}
                    </div>
                  </Card>

                  {/* Additional Info Card */}
                  <Card className="p-6 glass-effect border-primary/20">
                    {selectedTechnology && technologyContent[selectedTechnology as keyof typeof technologyContent] ? (
                      // Conteúdo específico da tecnologia selecionada
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/20">
                            <Code2 className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold gradient-text">
                              {technologyContent[selectedTechnology as keyof typeof technologyContent].title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {technologyContent[selectedTechnology as keyof typeof technologyContent].description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {technologyContent[selectedTechnology as keyof typeof technologyContent].content}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                              <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-primary" />
                                Principais Features
                              </h5>
                              <div className="flex flex-wrap gap-1">
                                {technologyContent[selectedTechnology as keyof typeof technologyContent].features.map((feature: string) => (
                                  <Badge key={feature} variant="secondary" className="text-xs">
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                              <h5 className="font-medium text-foreground mb-2 flex items-center gap-2">
                                <BookOpen className="w-4 h-4 text-primary" />
                                Experiência
                              </h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {technologyContent[selectedTechnology as keyof typeof technologyContent].experience}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {technologyContent[selectedTechnology as keyof typeof technologyContent].projects}
                              </p>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      // Conteúdo padrão quando nenhuma tecnologia está selecionada
                      <>
                        <h3 className="text-xl font-semibold mb-3 gradient-text">
                          Sobre {currentTabData.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {activeTab === 'frontend' &&
                            'Apaixonado por criar interfaces intuitivas e experiências de usuário excepcionais. Sempre buscando as melhores práticas em desenvolvimento frontend e acompanhando as últimas tendências do mercado.'}
                          {activeTab === 'backend' &&
                            'Focado em arquiteturas robustas e escaláveis. Experiência em APIs RESTful, microservices, otimização de performance e design de sistemas distribuídos.'}
                          {activeTab === 'devops' &&
                            'Especialista em automatização e deploy contínuo. Experiência com infraestrutura como código, monitoramento de sistemas e cultura DevOps.'}
                          {activeTab === 'gamedev' &&
                            'Desenvolvedor de jogos com paixão por mecânicas inovadoras e experiências imersivas. Experiência em diferentes gêneros e plataformas de jogos.'}
                        </p>
                        
                        <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                          <p className="text-sm text-primary flex items-center gap-2">
                            <Rocket className="w-4 h-4" />
                            Clique em qualquer tecnologia acima para ver detalhes específicos!
                          </p>
                        </div>
                      </>
                    )}
                  </Card>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>
    </div>
  )
}