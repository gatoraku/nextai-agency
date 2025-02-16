import React from 'react'
import { Brain, Database, BarChart3, Settings, Shield, Users } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import ServiceCard from './ServiceCard'

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Brain,
      title: t('services.items.strategy.title'),
      description: t('services.items.strategy.description'),
      color: "text-blue-500",
      features: t('services.items.strategy.features', { returnObjects: true }) as string[],
      slug: 'strategy'
    },
    {
      icon: Database,
      title: t('services.items.integration.title'),
      description: t('services.items.integration.description'),
      color: "text-purple-500",
      features: t('services.items.integration.features', { returnObjects: true }) as string[],
      slug: 'integration'
    },
    {
      icon: BarChart3,
      title: t('services.items.analytics.title'),
      description: t('services.items.analytics.description'),
      color: "text-green-500",
      features: t('services.items.analytics.features', { returnObjects: true }) as string[],
      slug: 'analytics'
    },
    {
      icon: Settings,
      title: t('services.items.automation.title'),
      description: t('services.items.automation.description'),
      color: "text-orange-500",
      features: t('services.items.automation.features', { returnObjects: true }) as string[],
      slug: 'automation'
    },
    {
      icon: Shield,
      title: t('services.items.compliance.title'),
      description: t('services.items.compliance.description'),
      color: "text-red-500",
      features: t('services.items.compliance.features', { returnObjects: true }) as string[],
      slug: 'compliance'
    },
    {
      icon: Users,
      title: t('services.items.training.title'),
      description: t('services.items.training.description'),
      color: "text-yellow-500",
      features: t('services.items.training.features', { returnObjects: true }) as string[],
      slug: 'training'
    }
  ]

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services