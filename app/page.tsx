import RecipeCard from "./components/RecipeCard";
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
      <input className="search" type="search" placeholder="Search recipes or cuisines…" disabled />
      <div className="grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}