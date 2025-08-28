import { Product } from '@/types/product';
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import laptopImg from '@/assets/laptop.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 199.99,
    image: headphonesImg,
    description: 'Premium quality wireless headphones with noise cancellation and crystal clear sound.',
    category: 'Audio',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 299.99,
    image: smartwatchImg,
    description: 'Advanced smartwatch with health monitoring, GPS, and week-long battery life.',
    category: 'Wearables',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '3',
    name: 'Ultra-Thin Laptop',
    price: 1299.99,
    image: laptopImg,
    description: 'Powerful ultrabook with latest processor, 16GB RAM, and all-day battery life.',
    category: 'Computers',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '4',
    name: 'Premium Smartphone',
    price: 899.99,
    image: smartphoneImg,
    description: 'Flagship smartphone with professional camera system and lightning-fast performance.',
    category: 'Mobile',
    rating: 4.7,
    inStock: true,
  },
];