export type Recipe = {
  id: string;
  title: string;
  description: string;
  emoji: string;
  minutes: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  color: string;
  ingredients: string[];
  steps: string[];
};

export const recipes: Recipe[] = [
  {
    id: "margherita-pizza", title: "Margherita Pizza",
    description: "Blistered crust, San Marzano sauce, melty mozzarella, fresh basil.",
    emoji: "🍕", minutes: 35, difficulty: "Medium", cuisine: "Italian",
    color: "linear-gradient(135deg,#ffd6d6,#ffe8dc)",
    ingredients: ["250g pizza dough", "100g San Marzano tomatoes, crushed", "125g fresh mozzarella", "Fresh basil leaves", "1 tbsp olive oil", "Pinch of salt"],
    steps: ["Preheat the oven to its highest setting with a tray inside.", "Stretch the dough into a round and top with crushed tomatoes.", "Add torn mozzarella and a drizzle of olive oil.", "Bake 8–10 minutes until the crust blisters.", "Top with basil and serve hot."],
  },
  {
    id: "paneer-tikka", title: "Paneer Tikka",
    description: "Smoky, spiced paneer cubes grilled with peppers and onion.",
    emoji: "🧆", minutes: 40, difficulty: "Medium", cuisine: "Indian",
    color: "linear-gradient(135deg,#ffe0b3,#ffd0a0)",
    ingredients: ["250g paneer, cubed", "1 capsicum, cubed", "1 onion, cut in chunks", "100g thick yogurt", "1 tbsp tikka masala", "1 tbsp lemon juice", "1 tbsp oil"],
    steps: ["Mix yogurt, tikka masala, lemon juice and oil into a marinade.", "Coat paneer and vegetables and rest for 20 minutes.", "Thread onto skewers.", "Grill or pan-sear 10–12 minutes, turning, until charred at the edges.", "Serve with mint chutney."],
  },
  {
    id: "cold-brew-coffee", title: "Cold Brew Coffee",
    description: "Smooth, low-acid coffee steeped slow overnight.",
    emoji: "☕", minutes: 10, difficulty: "Easy", cuisine: "Drinks",
    color: "linear-gradient(135deg,#d6ebff,#e4f3ff)",
    ingredients: ["100g coarse ground coffee", "800ml cold water", "Ice", "Milk (optional)"],
    steps: ["Combine coffee and water in a jar and stir.", "Cover and steep in the fridge for 12–18 hours.", "Strain through a fine sieve or filter.", "Serve over ice, diluted to taste."],
  },
  {
    id: "veg-burger", title: "Veg Burger",
    description: "Crispy spiced patty, soft bun, tangy sauce, crunchy veg.",
    emoji: "🍔", minutes: 30, difficulty: "Easy", cuisine: "American",
    color: "linear-gradient(135deg,#ffe0cc,#ffd6c0)",
    ingredients: ["2 boiled potatoes, mashed", "1/2 cup mixed vegetables, finely chopped", "1 tsp chaat masala", "Breadcrumbs", "2 burger buns", "Lettuce, tomato, onion slices", "Tangy sauce"],
    steps: ["Mix potatoes, vegetables and spices, then shape into patties.", "Coat patties in breadcrumbs.", "Shallow-fry until golden on both sides.", "Toast the buns lightly.", "Assemble with sauce, veg and patty."],
  },
  {
    id: "masala-fries", title: "Masala Fries",
    description: "Crispy fries tossed in a punchy chaat masala mix.",
    emoji: "🍟", minutes: 25, difficulty: "Easy", cuisine: "Indian",
    color: "linear-gradient(135deg,#fff0b3,#ffe6a0)",
    ingredients: ["3 large potatoes", "Oil for frying", "1 tsp chaat masala", "1/2 tsp red chili powder", "Salt", "Lemon wedge"],
    steps: ["Cut potatoes into thin sticks and soak in water for 10 minutes.", "Dry thoroughly.", "Fry until golden and crisp.", "Toss with chaat masala, chili and salt.", "Finish with a squeeze of lemon."],
  },
  {
    id: "bubble-tea", title: "Bubble Tea",
    description: "Chilled milk tea with chewy tapioca pearls.",
    emoji: "🧋", minutes: 20, difficulty: "Easy", cuisine: "Drinks",
    color: "linear-gradient(135deg,#d6ebff,#e4f6ff)",
    ingredients: ["1/4 cup tapioca pearls", "2 black tea bags", "1 cup milk", "2 tbsp brown sugar", "Ice"],
    steps: ["Boil the pearls as per pack instructions, then rinse.", "Soak in brown sugar for 5 minutes.", "Brew strong tea and let it cool.", "Add pearls to a glass with ice.", "Pour in tea and milk, then stir."],
  },
  {
    id: "chocolate-bar", title: "Homemade Chocolate",
    description: "Silky dark chocolate set with nuts and sea salt.",
    emoji: "🍫", minutes: 45, difficulty: "Medium", cuisine: "Dessert",
    color: "linear-gradient(135deg,#f3d9fa,#fbd9ec)",
    ingredients: ["200g dark chocolate", "1 tbsp butter", "Handful of roasted nuts", "Pinch of sea salt"],
    steps: ["Melt chocolate and butter gently over a double boiler.", "Pour into a lined mould.", "Scatter nuts and sea salt on top.", "Chill for 30 minutes until set.", "Break into pieces."],
  },
  {
    id: "garden-salad", title: "Garden Salad",
    description: "Crisp greens, tomato, and a zesty lemon dressing.",
    emoji: "🥗", minutes: 10, difficulty: "Easy", cuisine: "Healthy",
    color: "linear-gradient(135deg,#d9ffd9,#eaffd6)",
    ingredients: ["2 cups mixed greens", "2 tomatoes, sliced", "1 cucumber, sliced", "1/2 red onion", "2 tbsp olive oil", "1 tbsp lemon juice", "Salt and pepper"],
    steps: ["Combine greens, tomato, cucumber and onion in a bowl.", "Whisk olive oil, lemon juice, salt and pepper.", "Toss the salad with the dressing.", "Serve immediately."],
  },
];

export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((r) => r.id === id);
}