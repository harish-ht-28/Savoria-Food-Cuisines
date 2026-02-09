import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CuisineCardProps {
  name: string;
  description: string;
  flag: string;
  image: string;
  recipeCount: number;
  index: number;
}

const CuisineCard = ({ name, description, flag, image, recipeCount, index }: CuisineCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link
        to={`/recipes?cuisine=${encodeURIComponent(name)}`}
        className="group block rounded-xl overflow-hidden bg-card border border-border hover-lift glow-card"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={`${name} cuisine`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          
          {/* Recipe count badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-dark text-primary-foreground text-xs font-semibold">
            {recipeCount} recipes
          </div>

          {/* Name overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-3xl drop-shadow-lg">{flag}</span>
              <h3 className="text-xl font-heading font-bold text-primary-foreground drop-shadow-md">{name}</h3>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CuisineCard;
