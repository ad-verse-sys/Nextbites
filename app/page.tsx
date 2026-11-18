import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <>
      <h1 className="hero-title">
        Find your next <span>bite</span>.
      </h1>
      <p className="hero-sub">
        {recipes.length} recipes to browse, search, and cook. Pick one and get the full method.
      </p>
      <RecipeGrid recipes={recipes} />
    </>
  );
}