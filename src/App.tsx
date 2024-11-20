import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsPage from "./pages/components";
import EnFormPage from "./pages/components/en-form";
import EnFormBasePage from "./pages/components/en-form/base";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/en-form" element={<EnFormPage />} />
        <Route path="/components/en-form/base" element={<EnFormBasePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
