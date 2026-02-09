import HeroSection from "@/components/HeroSection";
import WorkflowSection from "@/components/WorkflowSection";
import CuisineCard from "@/components/CuisineCard";
import { cuisines, recipes } from "@/data/recipes";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import cuisineItalian from "@/assets/cuisine-italian.jpg";
import cuisineJapanese from "@/assets/cuisine-japanese.jpg";
import cuisineIndian from "@/assets/cuisine-indian.jpg";
import cuisineMexican from "@/assets/cuisine-mexican.jpg";
import cuisineThai from "@/assets/cuisine-thai.jpg";
import cuisineFrench from "@/assets/cuisine-french.jpg";
import cuisineAmerican from "@/assets/cuisine-american.jpg";

const cuisineImages: Record<string, string> = {
  Italian: cuisineItalian,
  Japanese: cuisineJapanese,
  Indian: cuisineIndian,
  Mexican: cuisineMexican,
  Thai: cuisineThai,
  French: cuisineFrench,
  American: cuisineAmerican,
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Featured Cuisines */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Explore World Cuisines
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Dive into six iconic culinary traditions, each with its own rich heritage and unforgettable flavors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </section>

      <WorkflowSection />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary rounded-2xl p-12 md:p-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-4">
              Ready to Start Cooking?
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
              Browse our complete collection of recipes with detailed nutrition data, cooking times, and more.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base px-8 h-12">
              <Link to="/recipes">
                View All Recipes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
