import { Component, lazy, Suspense, type ErrorInfo, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Apps = lazy(() => import("./pages/Apps"));
const AppDetail = lazy(() => import("./pages/AppDetail"));
const ShiprMcfMigration = lazy(() => import("./pages/ShiprMcfMigration"));
const Contact = lazy(() => import("./pages/Contact"));
const Partnerships = lazy(() => import("./pages/Partnerships"));
const PartnerDirectory = lazy(() => import("./pages/PartnerDirectory"));
const Careers = lazy(() => import("./pages/Careers"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

class AppErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Application render error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
          <div className="max-w-md">
            <h1 className="font-heading text-3xl font-extrabold text-foreground">This page could not be loaded.</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Please refresh the page and try again. If the problem continues, contact our support team.</p>
            <button type="button" onClick={() => window.location.reload()} className="btn-primary mt-6">Refresh page</button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

const PageLoading = () => (
  <main className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
    <div>
      <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-primary/20 border-t-primary" aria-hidden="true" />
      <p className="mt-4 text-sm text-muted-foreground">Loading Thalia Technologies…</p>
    </div>
  </main>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppErrorBoundary>
          <Suspense fallback={<PageLoading />}>
            <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/apps/:slug" element={<AppDetail />} />
            <Route path="/apps/shipr/amazon-mcf-migration" element={<ShiprMcfMigration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/partnerships/all-partners" element={<PartnerDirectory />} />
            <Route path="/become-a-partner" element={<Navigate to="/partnerships" replace />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AppErrorBoundary>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
