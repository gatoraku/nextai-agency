import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowLeft } from 'lucide-react'

const ServiceDetail = () => {
  const { slug } = useParams()
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => navigate('/services')}
          className="flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {t('common.back')}
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-6">
            {t(`services.items.${slug}.title`)}
          </h1>
          
          <p className="text-lg text-gray-400 mb-8">
            {t(`services.items.${slug}.description`)}
          </p>

          <div className="bg-gray-800/50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-white mb-6">
              {t('services.features')}
            </h2>
            
            <ul className="space-y-4">
              {t(`services.items.${slug}.features`, { returnObjects: true }).map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-3 text-gray-300">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              {t('common.schedule_consultation')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail