import { useState } from "react";
import { Recipe } from "@/types/recipe";
import StarRating from "@/components/StarRating";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { Clock, Users, ChevronDown, ChevronUp } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RecipeDrawerProps {
  recipe: Recipe | null;
  open: boolean;
  onClose: () => void;
}

const RecipeDrawer = ({ recipe, open, onClose }: RecipeDrawerProps) => {
  const [timeExpanded, setTimeExpanded] = useState(false);

  if (!recipe) return null;

  const nutritionRows = [
    { label: "Calories", value: `${recipe.nutrition.calories} kcal` },
    { label: "Carbohydrates", value: recipe.nutrition.carbohydrateContent },
    { label: "Cholesterol", value: recipe.nutrition.cholesterolContent },
    { label: "Fiber", value: recipe.nutrition.fiberContent },
    { label: "Protein", value: recipe.nutrition.proteinContent },
    { label: "Saturated Fat", value: recipe.nutrition.saturatedFatContent },
    { label: "Sodium", value: recipe.nutrition.sodiumContent },
    { label: "Sugar", value: recipe.nutrition.sugarContent },
    { label: "Fat", value: recipe.nutrition.fatContent },
  ];

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader className="text-left pb-4">
          <SheetTitle className="text-2xl font-heading leading-tight">
            {recipe.title}
          </SheetTitle>
          <div className="flex items-center gap-3 mt-1">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              {recipe.cuisine}
            </span>
            <StarRating rating={recipe.rating} size={14} />
          </div>
        </SheetHeader>

        <Separator />

        <div className="py-4 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Description
            </h4>
            <p className="text-foreground leading-relaxed">{recipe.description}</p>
          </div>

          {/* Serves */}
          <div className="flex items-center gap-2 text-foreground">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Serves {recipe.serves} people</span>
          </div>

          {/* Total Time - Expandable */}
          <Collapsible open={timeExpanded} onOpenChange={setTimeExpanded}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 bg-muted rounded-lg group hover:bg-muted/80 transition-colors">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">Total Time</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{recipe.totalTime}</span>
                {timeExpanded ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="mt-2 ml-4 space-y-2 p-3 bg-secondary/50 rounded-md">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Prep Time</span>
                  <span className="font-medium text-foreground">{recipe.prepTime}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Cook Time</span>
                  <span className="font-medium text-foreground">{recipe.cookTime}</span>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Separator />

          {/* Nutrition */}
          <div>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Nutrition Information
            </h4>
            <div className="border border-border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50 hover:bg-muted/50">
                    <TableHead className="text-xs font-semibold text-foreground">Nutrient</TableHead>
                    <TableHead className="text-xs font-semibold text-foreground text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nutritionRows.map((row) => (
                    <TableRow key={row.label} className="hover:bg-muted/30">
                      <TableCell className="text-sm text-foreground py-2">{row.label}</TableCell>
                      <TableCell className="text-sm text-muted-foreground text-right py-2">
                        {row.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default RecipeDrawer;
