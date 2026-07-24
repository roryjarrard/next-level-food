export default async function MealDetails({ params }) {
  const { mealId } = await params;

  return (
    <main>
      <h1>Meal Details: {mealId}</h1>
    </main>
  );
}
