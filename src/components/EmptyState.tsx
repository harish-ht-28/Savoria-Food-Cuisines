import { SearchX, UtensilsCrossed } from "lucide-react";

interface EmptyStateProps {
  type?: "no-results" | "no-data";
  message?: string;
}

const EmptyState = ({ type = "no-results", message }: EmptyStateProps) => {
  const isNoResults = type === "no-results";

  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mb-6">
        {isNoResults ? (
          <SearchX className="h-10 w-10 text-muted-foreground" />
        ) : (
          <UtensilsCrossed className="h-10 w-10 text-muted-foreground" />
        )}
      </div>
      <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
        {isNoResults ? "No recipes found" : "No data available"}
      </h3>
      <p className="text-muted-foreground max-w-md">
        {message ||
          (isNoResults
            ? "Try adjusting your search or filter criteria to find what you're looking for."
            : "It looks like there's no data to display right now. Please check back later.")}
      </p>
    </div>
  );
};

export default EmptyState;
