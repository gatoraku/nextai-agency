import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '97%', label: t('stats.clientSatisfaction') },
    { value: '150+', label: t('stats.projectsDelivered') },
    { value: '45%', label: t('stats.costReduction') }
  ]

  return (
    <section className="relative bg-gray-900 pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-8 text-5xl font-bold text-white lg:text-6xl">
            {t('hero.title')}
          </h1>
          
          <p className="mb-12 text-lg text-gray-300 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="inline-flex items-center bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 rounded-lg transition-colors">
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            
            <button className="inline-flex items-center bg-gray-800 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700 rounded-lg transition-colors">
              {t('hero.cta.secondary')}
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold text-blue-500">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero