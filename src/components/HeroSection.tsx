import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-food.jpg";

const floatingEmojis = ["🍕", "🍣", "🌮", "🍛", "🥘", "🍜"];

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="A beautiful spread of international cuisine"
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-foreground/20" />
      </div>

      {/* Floating Emojis */}
      {floatingEmojis.map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl md:text-4xl pointer-events-none select-none opacity-0"
          style={{
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: [0, -30, -10],
            rotate: [0, 10, -5],
          }}
          transition={{
            duration: 4,
            delay: i * 0.8,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        >
          {emoji}
        </motion.span>
      ))}

      {/* Content */}
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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-dark"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-primary font-medium tracking-wide uppercase text-xs">
              Global Cuisine Discovery
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-[1.1]">
            Discover World{" "}
            <span className="gradient-text italic">Flavors</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed max-w-lg">
            Explore authentic recipes from seven iconic cuisines. Each dish tells a story
            of culture, tradition, and unforgettable taste.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="text-base px-8 h-12 shadow-lg glow-primary group">
              <Link to="/recipes">
                Browse Recipes
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base px-8 h-12 border-2 border-primary-foreground/80 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/25 hover:text-primary-foreground font-semibold backdrop-blur-sm"
            >
              <Link to="/cuisines">
                <Utensils className="mr-2 h-4 w-4" />
                Explore Cuisines
              </Link>
            </Button>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "30+", label: "Recipes" },
              { value: "7", label: "Cuisines" },
              { value: "4.5★", label: "Avg Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-2xl font-heading font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-xs text-primary-foreground/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
