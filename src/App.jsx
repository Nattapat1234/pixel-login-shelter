import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import LoginPage from "./pages/LoginPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import SignupPage from "./pages/SignupPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import ProfilePage from "./pages/ProfilePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/workouts" element={<WorkoutsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;