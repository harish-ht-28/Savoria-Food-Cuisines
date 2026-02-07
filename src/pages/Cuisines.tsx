import { motion } from "framer-motion";
import CuisineCard from "@/components/CuisineCard";
import { cuisines, recipes } from "@/data/recipes";

import cuisineItalian from "@/assets/cuisine-italian.jpg";
import cuisineJapanese from "@/assets/cuisine-japanese.jpg";
import cuisineIndian from "@/assets/cuisine-indian.jpg";
import cuisineMexican from "@/assets/cuisine-mexican.jpg";
import cuisineThai from "@/assets/cuisine-thai.jpg";
import cuisineFrench from "@/assets/cuisine-french.jpg";

const cuisineImages: Record<string, string> = {
  Italian: cuisineItalian,
  Japanese: cuisineJapanese,
  Indian: cuisineIndian,
  Mexican: cuisineMexican,
  Thai: cuisineThai,
  French: cuisineFrench,
};

const Cuisines = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              World Cuisines
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Each cuisine is a window into a culture's history, geography, and soul.
              Pick a cuisine to explore its signature recipes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cuisines.map((cuisine, index) => (
              <CuisineCard
                key={cuisine.name}
                name={cuisine.name}
                description={cuisine.description}
                flag={cuisine.flag}
                image={cuisineImages[cuisine.name]}
                recipeCount={recipes.filter((r) => r.cuisine === cuisine.name).length}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cuisines;
