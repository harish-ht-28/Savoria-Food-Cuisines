import { motion } from "framer-motion";
import { Database, Search, LayoutList, MousePointerClick, Globe, Utensils } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              About Savoria
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A global cuisine discovery platform that brings the world's best recipes to your fingertips,
              powered by intelligent data workflows and beautiful design.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-foreground leading-relaxed text-lg">
                Savoria exists to celebrate the incredible diversity of world cuisine. We believe that every
                recipe tells a story — of culture, tradition, and the universal joy of sharing a meal.
                Our platform connects food lovers with authentic recipes from six iconic culinary traditions,
                complete with detailed nutritional data and intuitive search capabilities.
              </p>
            </div>
          </section>

          {/* Data Workflow */}
          <section className="mb-16">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-8 text-center">
              Data Workflow Architecture
            </h2>
            <div className="space-y-4">
              {[
                { icon: Database, title: "RESTful API Integration", desc: "Recipe data is fetched via RESTful API calls, returning structured JSON with titles, ratings, cooking times, serving sizes, and complete nutritional profiles." },
                { icon: Search, title: "Field-Level Filtering", desc: "Users can apply search filters across multiple fields — cuisine type, minimum rating, and text search across titles and descriptions — to find exactly what they're looking for." },
                { icon: LayoutList, title: "Paginated Rendering", desc: "Results are rendered in a responsive data table with configurable pagination (15–50 results per page), star ratings, truncated titles, and sortable columns." },
                { icon: MousePointerClick, title: "Interactive Detail View", desc: "Clicking any recipe row opens a side drawer with the full recipe details: description, expandable cook/prep times, serving info, and a complete nutrition breakdown table." },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 p-6 bg-card border border-border rounded-lg"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Utensils className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-heading font-bold text-foreground">Built With</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI", "Vite"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
