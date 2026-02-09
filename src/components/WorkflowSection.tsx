import { motion } from "framer-motion";
import { Search, Database, LayoutList, MousePointerClick } from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Data Fetching",
    description: "RESTful API calls retrieve recipe data from our global cuisine database in real time.",
    emoji: "📡",
  },
  {
    icon: Search,
    title: "Search & Filter",
    description: "Field-level filters and full-text search let users narrow results by cuisine, rating, and more.",
    emoji: "🔍",
  },
  {
    icon: LayoutList,
    title: "Data Rendering",
    description: "Recipes are rendered in a responsive, sortable table with star ratings, pagination, and truncation.",
    emoji: "📊",
  },
  {
    icon: MousePointerClick,
    title: "Interactive Details",
    description: "Click any row to open a detailed drawer with nutrition data, cooking times, and descriptions.",
    emoji: "✨",
  },
];

const WorkflowSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-muted/40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Our data workflow ensures a seamless experience from fetching recipes to exploring every detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-card border border-border rounded-xl p-6 text-center h-full hover-lift relative overflow-hidden">
                {/* Step number */}
                <div className="absolute -top-px -left-px w-10 h-10 rounded-br-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Background emoji */}
                <span className="absolute top-3 right-3 text-4xl opacity-10 group-hover:opacity-20 transition-opacity">
                  {step.emoji}
                </span>

                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 mt-2 group-hover:bg-primary/20 transition-colors">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
