import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'E-commerce Redesign',
    category: 'UI/UX',
    description: 'Полное переосмысление пользовательского опыта для крупного маркетплейса',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Research', 'Design System', 'Mobile'],
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 2,
    title: 'Banking App',
    category: 'Mobile',
    description: 'Создание интуитивного мобильного приложения для управления финансами',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    tags: ['iOS', 'Android', 'Fintech'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'SaaS Dashboard',
    category: 'Web',
    description: 'Дизайн комплексной аналитической панели для B2B продукта',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Analytics', 'Data Viz', 'Enterprise'],
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'Health & Fitness',
    category: 'Mobile',
    description: 'Приложение для отслеживания здоровья с геймификацией',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['Wellness', 'Gamification', 'Social'],
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 5,
    title: 'Educational Platform',
    category: 'Web',
    description: 'Онлайн-платформа для обучения с интерактивными элементами',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    tags: ['EdTech', 'Video', 'Interactive'],
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Smart Home Control',
    category: 'UI/UX',
    description: 'Интерфейс для управления умным домом с голосовым ассистентом',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    tags: ['IoT', 'Voice UI', 'Automation'],
    color: 'from-yellow-500 to-orange-500'
  }
];

const categories = ['All', 'UI/UX', 'Mobile', 'Web'];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState('All');
  const navigate = useNavigate();

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F35] to-[#2A1F3D]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <nav className="relative z-10 container mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent animate-fade-in">
          Alexandra Ivanova
        </h1>
        <div className="flex gap-6 items-center animate-fade-in">
          <a href="#work" className="text-white/70 hover:text-white transition-colors">Работы</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">Обо мне</a>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
            Связаться
          </Button>
        </div>
      </nav>

      <section className="relative z-10 container mx-auto px-6 pt-20 pb-32">
        <div className="max-w-4xl animate-fade-in-up">
          <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
            Product Designer
          </Badge>
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Создаю цифровые
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              продукты
            </span>
            <br />
            которые любят
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl">
            Специализируюсь на UX/UI дизайне мобильных и веб-приложений. 
            5+ лет опыта работы с продуктами в финтех, e-commerce и SaaS.
          </p>
          <div className="flex gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Смотреть работы
              <Icon name="ArrowDown" className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              Скачать резюме
              <Icon name="Download" className="ml-2" size={20} />
            </Button>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      <section id="work" className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-4xl font-bold mb-4">Избранные работы</h3>
          <p className="text-white/70 text-lg">Проекты, которыми я горжусь больше всего</p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  : "border-white/20 text-white/70 hover:text-white hover:bg-white/10"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/case/${project.id}`)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <Icon 
                    name="ArrowRight" 
                    size={40} 
                    className="text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                  />
                </div>
              </div>
              <Badge className="mb-3 bg-purple-500/20 text-purple-300 border-purple-500/30">
                {project.category}
              </Badge>
              <h4 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-white/60 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="outline"
                    className="border-white/20 text-white/60"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <h3 className="text-4xl font-bold mb-6">Обо мне</h3>
          <p className="text-xl text-white/70 mb-8">
            Я продуктовый дизайнер с фокусом на создание интуитивных и красивых интерфейсов. 
            Верю, что хороший дизайн — это не только эстетика, но и решение реальных проблем пользователей.
          </p>
          <div className="flex justify-center gap-4 mt-12">
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Icon name="Linkedin" className="mr-2" size={20} />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Icon name="Github" className="mr-2" size={20} />
              Behance
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
              <Icon name="Mail" className="mr-2" size={20} />
              Email
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-white/50">
          <p>© 2024 Alexandra Ivanova. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
