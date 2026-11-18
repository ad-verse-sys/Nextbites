import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="card-link">
      <article className="card">
        <div className="card-hero" style={{ background: recipe.color }}>
          <span aria-hidden="true">{recipe.emoji}</span>
        </div>
        <div className="card-body">
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <div className="tags">
            <span className="tag">⏱ {recipe.minutes} min</span>
            <span className="tag">{recipe.difficulty}</span>
            <span className="tag tag-accent">{recipe.cuisine}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}