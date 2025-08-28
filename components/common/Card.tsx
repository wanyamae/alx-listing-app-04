import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-4 w-full max-w-md">
    {children}
  </div>
);

export default Card;
