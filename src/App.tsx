import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentsPage from "./pages/components";
import EnFormPage from "./pages/components/en-form";
import EnFormBasePage from "./pages/components/en-form/base";
import IndexPage from "./pages";
import EnFormInitialValuesPage from "./pages/components/en-form/initial-values";
import EnFormRequiredFieldsPage from "./pages/components/en-form/required-fields";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/components/en-form" element={<EnFormPage />} />
        <Route path="/components/en-form/base" element={<EnFormBasePage />} />
        <Route
          path="/components/en-form/required-fields"
          element={<EnFormRequiredFieldsPage />}
        />
        <Route
          path="/components/en-form/initial-values"
          element={<EnFormInitialValuesPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
