import { Recipe } from "@/types/recipe";
import StarRating from "@/components/StarRating";
import { Clock, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RecipeTableProps {
  recipes: Recipe[];
  onRowClick: (recipe: Recipe) => void;
}

const RecipeTable = ({ recipes, onRowClick }: RecipeTableProps) => {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50 hover:bg-muted/50">
            <TableHead className="font-semibold text-foreground w-[30%]">Title</TableHead>
            <TableHead className="font-semibold text-foreground">Cuisine</TableHead>
            <TableHead className="font-semibold text-foreground">Rating</TableHead>
            <TableHead className="font-semibold text-foreground">Total Time</TableHead>
            <TableHead className="font-semibold text-foreground text-right">Serves</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipes.map((recipe) => (
            <TableRow
              key={recipe.id}
              onClick={() => onRowClick(recipe)}
              className="cursor-pointer transition-colors hover:bg-primary/5"
            >
              <TableCell className="font-medium max-w-[200px]">
                <span className="block truncate" title={recipe.title}>
                  {recipe.title}
                </span>
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
                  {recipe.cuisine}
                </span>
              </TableCell>
              <TableCell>
                <StarRating rating={recipe.rating} size={14} />
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1.5 text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="text-sm">{recipe.totalTime}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1.5 text-muted-foreground">
                  <Users className="h-3.5 w-3.5" />
                  <span className="text-sm">{recipe.serves}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecipeTable;
