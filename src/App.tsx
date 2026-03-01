import { Toaster } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import EnterprisePage from "./pages/Enterprise";
import Start from "./pages/Start";
import Sell from "./pages/Sell";
import Afiiliate from "./pages/Afiiliate";
import Login from "./pages/Login";
import EnterpriseContactForm from "./pages/Enterprisecontactform";
import CheckoutPage from "./pages/CheckoutPage";
import SidekickPage from "./pages/SidekickPage";
import WebsiteBuilder from "./pages/WebsiteBuilder";
import ThemeStore from "./pages/ThemeStore";
import Domains from "./pages/Domains";
import Online from "./pages/Online";
import PosPage from "./pages/PosPage";
import SalesChannels from "./pages/SalesChannels";
import International from "./pages/International";
import B2BEcommerce from "./pages/B2BEcommerce";
import Markets from "./pages/Markets";
import MarketingPage from "./pages/MarketingPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import OrdersPage from "./pages/OrdersPage";
import QRGeneratorPage from "./pages/QRGeneratorPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/Enterprise" element={<EnterprisePage />} />
          <Route path="/start" element={<Start />} />
          <Route path="/Sell" element={<Sell />} />
          <Route path="/Afiiliate" element={<Afiiliate />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Enterprisecontactform" element={<EnterpriseContactForm />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/SidekickPage" element={<SidekickPage />} />
          <Route path="/WebsiteBuilder" element={<WebsiteBuilder />} />
          <Route path="/ThemeStore" element={<ThemeStore />} />
          <Route path="/Domains" element={<Domains />} />
          <Route path="/Online" element={<Online />} />
          <Route path="/PosPage" element={<PosPage />} />
          <Route path="/SalesChannels" element={<SalesChannels />} />
          <Route path="/International" element={<International />} />
          <Route path="/B2BEcommerce" element={<B2BEcommerce />} />
          <Route path="/Markets" element={<Markets />} />
          <Route path="/MarketingPage" element={<MarketingPage />} />
          <Route path="/AnalyticsPage" element={<AnalyticsPage />} />
          <Route path="/OrdersPage" element={<OrdersPage />} />
          <Route path="/QRGeneratorPage" element={<QRGeneratorPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
