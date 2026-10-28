import { Banner } from "./components/Banner/Banner";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Routing } from "./routing/routing";

export function App() {
  return (
    <div className="layout">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
}
