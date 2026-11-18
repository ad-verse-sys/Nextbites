export type Recipe = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  color: string; // card header gradient
};

export const recipes: Recipe[] = [
  { id: "margherita-pizza", title: "Margherita Pizza", description: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.", emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian", color: "linear-gradient(135deg,#ffd6d6,#ffe8dc)" },
  { id: "paneer-tikka", title: "Paneer Tikka", description: "Smoky, spiced paneer cubes grilled with peppers and onion.", emoji: "🧆", minutes: 40, difficulty: "Medium", cuisine: "Indian", color: "linear-gradient(135deg,#ffe0b3,#ffd0a0)" },
  { id: "cold-brew-coffee", title: "Cold Brew Coffee", description: "Smooth, low-acid coffee steeped slow overnight.", emoji: "☕", minutes: 10, difficulty: "Easy", cuisine: "Drinks", color: "linear-gradient(135deg,#d6ebff,#e4f3ff)" },
  { id: "veg-burger", title: "Veg Burger", description: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.", emoji: "🍔", minutes: 30, difficulty: "Easy", cuisine: "American", color: "linear-gradient(135deg,#ffe0cc,#ffd6c0)" },
  { id: "masala-fries", title: "Masala Fries", description: "Crispy fries tossed in a punchy chaat masala mix.", emoji: "🍟", minutes: 25, difficulty: "Easy", cuisine: "Indian", color: "linear-gradient(135deg,#fff0b3,#ffe6a0)" },
  { id: "bubble-tea", title: "Bubble Tea", description: "Chilled milk tea with chewy tapioca pearls.", emoji: "🧋", minutes: 20, difficulty: "Easy", cuisine: "Drinks", color: "linear-gradient(135deg,#d6ebff,#e4f6ff)" },
  { id: "chocolate-bar", title: "Homemade Chocolate", description: "Silky dark chocolate set with nuts and sea salt.", emoji: "🍫", minutes: 45, difficulty: "Medium", cuisine: "Dessert", color: "linear-gradient(135deg,#f3d9fa,#fbd9ec)" },
  { id: "garden-salad", title: "Garden Salad", description: "Crisp greens, tomato, and a zesty lemon dressing.", emoji: "🥗", minutes: 10, difficulty: "Easy", cuisine: "Healthy", color: "linear-gradient(135deg,#d9ffd9,#eaffd6)" },
];