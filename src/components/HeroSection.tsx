import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A beautiful spread of international cuisine"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative z-10 container mx-auto h-full flex items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 mb-6"
          >
            <Utensils className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-sm">
              Global Cuisine Discovery
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-[1.1]">
            Discover World{" "}
            <span className="text-primary italic">Flavors</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed max-w-lg">
            Explore authentic recipes from six iconic cuisines. Each dish tells a story
            of culture, tradition, and unforgettable taste.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8 h-12 shadow-lg">
              <Link to="/recipes">
                Browse Recipes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 border-2 border-primary-foreground/80 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/25 hover:text-primary-foreground font-semibold backdrop-blur-sm"
            >
              <Link to="/cuisines">
                Explore Cuisines
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
