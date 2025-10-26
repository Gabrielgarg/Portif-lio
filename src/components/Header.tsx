import { Link } from '@tanstack/react-router'
import { FolderGit2, Home, Mail, User } from 'lucide-react';

const navItems = [
  { name: "Início", href: "/", icon: Home },
  { name: "Sobre Mim", href: "/sobre", icon: User },
  { name: "Projetos", href: "/projetos", icon: FolderGit2 },
  { name: "Contato", href: "/contato", icon: Mail },
];

export function Header() {
  return (

    <>
     <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20rem] left-[-20rem] w-[50rem] h-[50rem] bg-emerald-200/20 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute bottom-[-10rem] right-[-10rem] w-[40rem] h-[40rem] bg-sky-200/20 rounded-full filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <nav className="flex items-center gap-2 px-3 py-2 bg-white/60 backdrop-blur-md border border-gray-200/80 rounded-full shadow-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={'/'}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium
                ${
                  false
                    ? "bg-emerald-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </header>
    </>
    // <header>
    //   <nav className="border-b border-border bg-card/50">
    //     <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    //       <Link to="/">
    //         <Button variant="ghost" className="text-xl font-bold gradient-text">
    //           Portfolio
    //         </Button>
    //       </Link>
    //       <div className="flex gap-4">
    //         <Link to="/">
    //           <Button variant="ghost">Home</Button>
    //         </Link>
    //         <Link to="/about">
    //           <Button variant="ghost">Sobre Mim</Button>
    //         </Link>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
  )
}
