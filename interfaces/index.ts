export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  rating: number;
  onClick?: () => void; // Optional click handler
}
// Placeholder interface for Card component props

// Placeholder interface for Button component props
export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}


export interface PropertyProps {
  id: string;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface PillProps {
  label: string;
  onClick: () => void;
  active?: boolean;
}