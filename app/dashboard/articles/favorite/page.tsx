import FavoriteArticle from "./FavoriteArticle";

export default function FavoriteArticlesPage() {
  const favoriteIds = [1, 2, 3];

  return (
    <div>
      <h1>Favorite Articles</h1>
      {favoriteIds.map((id) => (
        <FavoriteArticle key={id} id={id} />
      ))}
    </div>
  );
}