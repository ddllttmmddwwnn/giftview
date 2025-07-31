import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  variant?: 'default' | 'premium' | 'compact';
}

const variantStyles = {
  default: 'bg-white border border-gray-200 shadow-sm',
  premium: 'bg-yellow-50 border-yellow-300 shadow-md',
  compact: 'bg-gray-100 border border-gray-300 p-2',
};

export default function CardBox({ children, variant = 'default' }: Props) {
  return (
    <div className={clsx('rounded-lg p-4 w-full max-w-[600px] mx-auto', variantStyles[variant])}>
      {children}
    </div>
  );
}