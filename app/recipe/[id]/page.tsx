import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecipe, recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p className="empty">Loading recipe…</p>}>
      <RecipeDetail params={params} />
    </Suspense>
  );
}

async function RecipeDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) notFound();

  return (
    <article className="detail">
      <Link href="/" className="back">← All recipes</Link>
      <div className="detail-hero" style={{ background: recipe.color }}>
        <span aria-hidden="true">{recipe.emoji}</span>
      </div>
      <h1>{recipe.title}</h1>
      <p className="hero-sub">{recipe.description}</p>
      <div className="tags">
        <span className="tag">⏱ {recipe.minutes} min</span>
        <span className="tag">{recipe.difficulty}</span>
        <span className="tag tag-accent">{recipe.cuisine}</span>
      </div>

      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Method</h2>
      <ol>
        {recipe.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </article>
  );
}