import { useMemo, useState } from "react";
import { recipes as allRecipes } from "@/data/recipes";
import { Recipe } from "@/types/recipe";

interface UseRecipesOptions {
  initialCuisine?: string;
}

export function useRecipes(options?: UseRecipesOptions) {
  const [search, setSearch] = useState("");
  const [cuisineFilter, setCuisineFilter] = useState(options?.initialCuisine || "all");
  const [ratingFilter, setRatingFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15);

  const filtered = useMemo(() => {
    let result = [...allRecipes];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.cuisine.toLowerCase().includes(q)
      );
    }

    if (cuisineFilter && cuisineFilter !== "all") {
      result = result.filter((r) => r.cuisine === cuisineFilter);
    }

    if (ratingFilter && ratingFilter !== "all") {
      const minRating = parseFloat(ratingFilter);
      result = result.filter((r) => r.rating >= minRating);
    }

    return result;
  }, [search, cuisineFilter, ratingFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const safePage = Math.min(currentPage, totalPages);

  const paginated = useMemo(() => {
    const start = (safePage - 1) * perPage;
    return filtered.slice(start, start + perPage);
  }, [filtered, safePage, perPage]);

  const handlePerPageChange = (newPerPage: number) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleCuisineChange = (value: string) => {
    setCuisineFilter(value);
    setCurrentPage(1);
  };

  const handleRatingChange = (value: string) => {
    setRatingFilter(value);
    setCurrentPage(1);
  };

  return {
    recipes: paginated,
    totalRecipes: filtered.length,
    search,
    setSearch: handleSearchChange,
    cuisineFilter,
    setCuisineFilter: handleCuisineChange,
    ratingFilter,
    setRatingFilter: handleRatingChange,
    currentPage: safePage,
    setCurrentPage,
    perPage,
    setPerPage: handlePerPageChange,
    totalPages,
  };
}
