"use client";

import { useFavorites, toggleFavorite, type Favorite } from "@/lib/store";

export default function FavoriteButton({
  favorite,
  className,
}: {
  favorite: Omit<Favorite, "savedAt">;
  className?: string;
}) {
  const favorites = useFavorites();
  const saved = favorites.some((f) => f.id === favorite.id);

  return (
    <button
      type="button"
      className={`favbtn ${saved ? "on" : ""} ${className ?? ""}`}
      aria-pressed={saved}
      aria-label={saved ? "Retirer des favoris" : "Ajouter aux favoris"}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(favorite);
      }}
    >
      {saved ? "♥" : "♡"}
    </button>
  );
}
