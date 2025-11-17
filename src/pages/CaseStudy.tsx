import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const caseStudies = {
  '1': {
    title: 'E-commerce Redesign',
    client: 'Mega Marketplace',
    year: '2024',
    role: 'Lead Product Designer',
    category: 'UI/UX',
    tags: ['Research', 'Design System', 'Mobile'],
    hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
    overview: 'Полное переосмысление пользовательского опыта для одного из крупнейших маркетплейсов в СНГ. Проект охватывал как мобильную, так и веб-версию платформы.',
    problem: 'Высокий процент отказов на этапе оформления заказа (78%), сложная навигация по категориям товаров, устаревший визуальный стиль, не соответствующий современным трендам.',
    solution: 'Разработка новой дизайн-системы, упрощение процесса покупки до 3 шагов, внедрение персонализированных рекомендаций на основе ML-алгоритмов.',
    process: [
      {
        title: 'Исследование',
        description: 'Провели глубинные интервью с 50 пользователями, проанализировали аналитику и тепловые карты, изучили конкурентов.',
        image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80'
      },
      {
        title: 'Прототипирование',
        description: 'Создали low-fi и high-fi прототипы, провели A/B тестирование различных вариантов интерфейса.',
        image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80'
      },
      {
        title: 'Дизайн-система',
        description: 'Разработали комплексную дизайн-систему с компонентами для Web и Mobile, темной и светлой темой.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
      }
    ],
    results: [
      { metric: '45%', description: 'Снижение отказов' },
      { metric: '2.3x', description: 'Рост конверсии' },
      { metric: '67%', description: 'Увеличение времени в приложении' },
      { metric: '4.8★', description: 'Рейтинг в App Store' }
    ]
  },
  '2': {
    title: 'Banking App',
    client: 'FinTech Bank',
    year: '2024',
    role: 'Senior Product Designer',
    category: 'Mobile',
    tags: ['iOS', 'Android', 'Fintech'],
    hero: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
    overview: 'Создание мобильного приложения нового поколения для управления финансами с акцентом на простоту и безопасность.',
    problem: 'Пользователи находят традиционные банковские приложения сложными и перегруженными функциями, которыми не пользуются.',
    solution: 'Минималистичный интерфейс с фокусом на главных операциях, быстрый доступ к платежам через виджеты, биометрическая аутентификация.',
    process: [
      {
        title: 'User Research',
        description: 'Анализ поведения пользователей, карты пути клиента, выявление болевых точек.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
      },
      {
        title: 'UI Design',
        description: 'Разработка чистого интерфейса с понятной визуальной иерархией и интуитивной навигацией.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80'
      },
      {
        title: 'Тестирование',
        description: 'Юзабилити-тестирование с фокус-группами, итеративные улучшения на основе фидбека.',
        image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80'
      }
    ],
    results: [
      { metric: '95%', description: 'Успешность первого входа' },
      { metric: '3.2x', description: 'Больше транзакций' },
      { metric: '89%', description: 'Удовлетворенность UX' },
      { metric: '1.2M', description: 'Скачиваний за квартал' }
    ]
  }
};

export default function CaseStudy() {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseData = id ? caseStudies[id as keyof typeof caseStudies] : null;

  if (!caseData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F35] to-[#2A1F3D] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Кейс не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F35] to-[#2A1F3D]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <nav className="relative z-10 container mx-auto px-6 py-8 flex items-center justify-between">
        <Button 
          variant="ghost" 
          className="text-white hover:bg-white/10"
          onClick={() => navigate('/')}
        >
          <Icon name="ArrowLeft" className="mr-2" size={20} />
          Назад к портфолио
        </Button>
      </nav>

      <div className="relative z-10">
        <div className="container mx-auto px-6 pt-8 pb-20">
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              {caseData.category}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{caseData.title}</h1>
            <div className="flex flex-wrap gap-6 text-white/70 mb-8">
              <div>
                <span className="block text-sm text-white/50">Клиент</span>
                <span className="text-lg">{caseData.client}</span>
              </div>
              <div>
                <span className="block text-sm text-white/50">Год</span>
                <span className="text-lg">{caseData.year}</span>
              </div>
              <div>
                <span className="block text-sm text-white/50">Роль</span>
                <span className="text-lg">{caseData.role}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseData.tags.map(tag => (
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

          <div className="mb-20 animate-scale-in">
            <img 
              src={caseData.hero} 
              alt={caseData.title}
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

          <div className="max-w-3xl mx-auto space-y-16">
            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Обзор проекта
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                {caseData.overview}
              </p>
            </section>

            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Проблема</h2>
              <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="text-lg text-white/70 leading-relaxed">
                  {caseData.problem}
                </p>
              </div>
            </section>

            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Решение</h2>
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20">
                <p className="text-lg text-white/80 leading-relaxed">
                  {caseData.solution}
                </p>
              </div>
            </section>

            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center">Процесс работы</h2>
              <div className="space-y-12">
                {caseData.process.map((step, index) => (
                  <div 
                    key={index} 
                    className="group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-xl font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-white/70 mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-12 text-center">Результаты</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {caseData.results.map((result, index) => (
                  <div 
                    key={index}
                    className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:border-purple-500/30 transition-colors"
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
                      {result.metric}
                    </div>
                    <div className="text-white/70">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center pt-12 animate-fade-in-up">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8"
                onClick={() => navigate('/')}
              >
                Смотреть другие проекты
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </section>
          </div>
        </div>
      </div>

      <footer className="relative z-10 border-t border-white/10 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-white/50">
          <p>© 2024 Alexandra Ivanova. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
