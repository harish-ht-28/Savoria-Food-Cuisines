import { Link } from "react-router-dom";
import { ChefHat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ChefHat className="h-7 w-7 text-primary" />
              <span className="text-2xl font-heading font-bold">Savoria</span>
            </Link>
            <p className="text-primary-foreground/60 max-w-sm leading-relaxed">
              Discover authentic recipes from cuisines around the world. From Italian pasta
              to Japanese ramen, embark on your next culinary adventure.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><Link to="/recipes" className="text-primary-foreground/60 hover:text-primary transition-colors">Recipes</Link></li>
              <li><Link to="/cuisines" className="text-primary-foreground/60 hover:text-primary transition-colors">Cuisines</Link></li>
              <li><Link to="/about" className="text-primary-foreground/60 hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Cuisines</h4>
            <ul className="space-y-2">
              {["Italian", "Japanese", "Indian", "Mexican", "Thai", "French"].map((c) => (
                <li key={c}>
                  <Link to={`/cuisines`} className="text-primary-foreground/60 hover:text-primary transition-colors">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 Savoria. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-sm">
            Crafted with passion for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
