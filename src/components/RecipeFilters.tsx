import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cuisines } from "@/data/recipes";

interface RecipeFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  cuisineFilter: string;
  onCuisineChange: (value: string) => void;
  ratingFilter: string;
  onRatingChange: (value: string) => void;
}

const RecipeFilters = ({
  search,
  onSearchChange,
  cuisineFilter,
  onCuisineChange,
  ratingFilter,
  onRatingChange,
}: RecipeFiltersProps) => {
  return (
    <div className="bg-card border border-border rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground">Filters</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 bg-background"
          />
        </div>

        <Select value={cuisineFilter} onValueChange={onCuisineChange}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="All Cuisines" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Cuisines</SelectItem>
            {cuisines.map((c) => (
              <SelectItem key={c.name} value={c.name}>
                {c.flag} {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={ratingFilter} onValueChange={onRatingChange}>
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Any Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Any Rating</SelectItem>
            <SelectItem value="4.5">4.5+ ★</SelectItem>
            <SelectItem value="4.0">4.0+ ★</SelectItem>
            <SelectItem value="3.5">3.5+ ★</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default RecipeFilters;
