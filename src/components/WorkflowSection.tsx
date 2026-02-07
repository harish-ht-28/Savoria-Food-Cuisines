import { motion } from "framer-motion";
import { Search, Database, LayoutList, MousePointerClick } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Fetching",
    description: "RESTful API calls retrieve recipe data from our global cuisine database in real time.",
  },
  {
    icon: Search,
    title: "Search & Filter",
    description: "Field-level filters and full-text search let users narrow results by cuisine, rating, and more.",
  },
  {
    icon: LayoutList,
    title: "Data Rendering",
    description: "Recipes are rendered in a responsive, sortable table with star ratings, pagination, and truncation.",
  },
  {
    icon: MousePointerClick,
    title: "Interactive Details",
    description: "Click any row to open a detailed drawer with nutrition data, cooking times, and descriptions.",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our data workflow ensures a seamless experience from fetching recipes to exploring every detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card border border-border rounded-lg p-6 text-center h-full hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="absolute -top-3 -left-1 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
