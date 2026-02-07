import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Recipe } from "@/types/recipe";
import { useRecipes } from "@/hooks/useRecipes";
import RecipeFilters from "@/components/RecipeFilters";
import RecipeTable from "@/components/RecipeTable";
import RecipeDrawer from "@/components/RecipeDrawer";
import PaginationControls from "@/components/PaginationControls";
import EmptyState from "@/components/EmptyState";
import { motion } from "framer-motion";

const Recipes = () => {
  const [searchParams] = useSearchParams();
  const initialCuisine = searchParams.get("cuisine") || "all";

  const {
    recipes,
    totalRecipes,
    search,
    setSearch,
    cuisineFilter,
    setCuisineFilter,
    ratingFilter,
    setRatingFilter,
    currentPage,
    setCurrentPage,
    perPage,
    setPerPage,
    totalPages,
  } = useRecipes({ initialCuisine });

  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (initialCuisine && initialCuisine !== "all") {
      setCuisineFilter(initialCuisine);
    }
  }, []);

  const handleRowClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
              Recipe Collection
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse, search, and filter through our curated global recipe database.
            </p>
          </div>

          <RecipeFilters
            search={search}
            onSearchChange={setSearch}
            cuisineFilter={cuisineFilter}
            onCuisineChange={setCuisineFilter}
            ratingFilter={ratingFilter}
            onRatingChange={setRatingFilter}
          />

          {recipes.length > 0 ? (
            <>
              <RecipeTable recipes={recipes} onRowClick={handleRowClick} />
              <PaginationControls
                currentPage={currentPage}
                totalPages={totalPages}
                perPage={perPage}
                totalItems={totalRecipes}
                onPageChange={setCurrentPage}
                onPerPageChange={setPerPage}
              />
            </>
          ) : (
            <EmptyState type="no-results" />
          )}
        </motion.div>
      </div>

      <RecipeDrawer
        recipe={selectedRecipe}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
};

export default Recipes;
