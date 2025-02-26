
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="betablu-theme">
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}

export default App;
