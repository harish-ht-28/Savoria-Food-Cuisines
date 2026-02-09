import { Link } from "react-router-dom";
import { ChefHat, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <ChefHat className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-heading font-bold">Savoria</span>
            </Link>
            <p className="text-primary-foreground/50 max-w-sm leading-relaxed">
              Discover authentic recipes from cuisines around the world. From Italian pasta
              to Japanese ramen, embark on your next culinary adventure.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2.5">
              <li><Link to="/recipes" className="text-primary-foreground/50 hover:text-primary transition-colors text-sm">Recipes</Link></li>
              <li><Link to="/cuisines" className="text-primary-foreground/50 hover:text-primary transition-colors text-sm">Cuisines</Link></li>
              <li><Link to="/about" className="text-primary-foreground/50 hover:text-primary transition-colors text-sm">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Cuisines</h4>
            <ul className="space-y-2.5">
              {["Italian", "Japanese", "Indian", "Mexican", "Thai", "French", "American"].map((c) => (
                <li key={c}>
                  <Link to={`/recipes?cuisine=${encodeURIComponent(c)}`} className="text-primary-foreground/50 hover:text-primary transition-colors text-sm">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/30 text-sm">
            © 2026 Savoria. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-sm flex items-center gap-1.5">
            Crafted with <Heart className="h-3.5 w-3.5 text-primary fill-primary" /> for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
