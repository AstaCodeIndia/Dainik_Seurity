import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Card = ({ title, icon, children, className = '' }: CardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      <div className="p-6">
        {(icon || title) && (
          <div className="flex items-center mb-4">
            {icon && <div className="mr-3 text-blue-600">{icon}</div>}
            {title && <h3 className="text-xl font-semibold text-gray-900">{title}</h3>}
          </div>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Card;
