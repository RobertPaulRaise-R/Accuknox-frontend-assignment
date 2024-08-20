import AddWidget from "./components/AddWidget";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import { WidgetContextProvider } from "./contexts/WidgetContext";

function App() {
  return (
    <WidgetContextProvider>
      <Header />
      <Dashboard />
      <AddWidget />
    </WidgetContextProvider>
  );
}

export default App;
