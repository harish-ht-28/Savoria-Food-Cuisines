import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
        className="group block rounded-lg overflow-hidden bg-card border border-border hover:shadow-xl transition-all duration-300"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={`${name} cuisine`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="text-3xl">{flag}</span>
            <h3 className="text-xl font-heading font-bold text-primary-foreground">{name}</h3>
          </div>
        </div>
        <div className="p-5">
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
          <span className="text-xs font-medium text-primary">
            {recipeCount} recipes →
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default CuisineCard;
