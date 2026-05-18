export interface MenuItem {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  category: 'Pizzas' | 'Pasta' | 'Drinks' | 'Desserts';
  image: string;
}

export const SIZE_MULTIPLIERS = {
  Small: 1,
  Medium: 1.3,
  Large: 1.6,
};

export const MENU_DATA: MenuItem[] = [
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Fresh mozzarella, basil leaves, San Marzano tomato sauce, and olive oil.',
    basePrice: 350,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description: 'Crispy pepperoni slices, mozzarella, and our signature red sauce.',
    basePrice: 420,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'bbq-chicken',
    name: 'BBQ Chicken',
    description: 'Grilled chicken, red onions, cilantro, and bold BBQ sauce.',
    basePrice: 450,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'veggie-supreme',
    name: 'Veggie Supreme',
    description: 'Bell peppers, olives, onions, mushrooms, and sweet corn.',
    basePrice: 400,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'meat-lovers',
    name: 'Meat Lovers',
    description: 'Bacon, ham, pepperoni, and Italian sausage for the ultimate carnivore.',
    basePrice: 480,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'hawaiian',
    name: 'Hawaiian',
    description: 'The classic mix of sweet pineapple and salty ham.',
    basePrice: 410,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'four-cheese',
    name: 'Four Cheese',
    description: 'Mozzarella, Gorgonzola, Parmesan, and Fontina cheese blend.',
    basePrice: 440,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'truffle-mushroom',
    name: 'Truffle Mushroom',
    description: 'Wild mushrooms, truffle oil, white sauce, and fresh arugula.',
    basePrice: 520,
    category: 'Pizzas',
    image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&q=80&w=800',
  },
  // Pasta
  {
    id: 'carbonara',
    name: 'Classic Carbonara',
    description: 'Creamy sauce with guanciale, parmesan, and black pepper.',
    basePrice: 320,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1612459284970-e8f027596582?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Rich meat sauce simmered for 4 hours with fresh herbs.',
    basePrice: 340,
    category: 'Pasta',
    image: 'https://images.unsplash.com/photo-1598866539627-9c6934c9f1a2?auto=format&fit=crop&q=80&w=800',
  },
  // Drinks
  {
    id: 'lemonade',
    name: 'Fresh Lemonade',
    description: 'Hand-squeezed lemons with a hint of mint.',
    basePrice: 90,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'iced-tea',
    name: 'Pizzeria Iced Tea',
    description: 'Signature house-blend peach iced tea.',
    basePrice: 80,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
  },
  // Desserts
  {
    id: 'tiramisu',
    name: 'Original Tiramisu',
    description: 'Espresso-soaked ladyfingers with mascarpone cream.',
    basePrice: 220,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'gelato',
    name: 'Artisan Gelato',
    description: 'Two scoops of your choice: Vanilla, Chocolate, or Pistachio.',
    basePrice: 180,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1505394033343-e3813f1ad1d3?auto=format&fit=crop&q=80&w=800',
  },
];
