"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();
  const matches = recipes.filter(
    (r) => r.title.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q)
  );

  return (
    <>
      <input
        className="search"
        type="search"
        placeholder="Search recipes or cuisines…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {matches.length === 0 ? (
        <p className="empty">No recipes match “{query}”. Try another dish or cuisine.</p>
      ) : (
        <div className="grid">
          {matches.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </>
  );
}