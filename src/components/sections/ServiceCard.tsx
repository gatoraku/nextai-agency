import React from 'react'
import { useNavigate } from 'react-router-dom'

interface ServiceCardProps { 
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  color: string;
  slug: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  color,
  slug
}) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/services/${slug}`)}
      className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      <div className="mb-4">
        <Icon className={`h-8 w-8 ${color}`} />
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-6">
        {description}
      </p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-2 text-gray-300">
            <span className={`${color} mt-1.5 text-lg leading-none`}>•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard