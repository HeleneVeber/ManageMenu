import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { RecipeProvider } from "./context/RecipesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecipeProvider>
    <App />
  </RecipeProvider>
);
