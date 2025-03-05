
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Chat from "./pages/Chat";
import AgentBuilder from "./pages/AgentBuilder";
import CodingSpace from "./pages/CodingSpace";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="betablu-theme">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/agent-builder" element={<AgentBuilder />} />
            <Route path="/coding-space" element={<CodingSpace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </Router>
    </ThemeProvider>
  );
}

export default App;
