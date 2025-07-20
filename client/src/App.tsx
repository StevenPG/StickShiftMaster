import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Tutorial from "@/pages/tutorial";
import About from "@/pages/about";
import FAQ from "@/pages/faq";
import Contact from "@/pages/contact";
import LearnMore from "@/pages/learn-more";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tutorial" component={Tutorial} />
      <Route path="/learn-more" component={LearnMore} />
      <Route path="/about" component={About} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
