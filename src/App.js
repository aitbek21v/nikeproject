import "./App.css";
import NavbarCarusel from "./components/Navbar/NavbarCarusel";
import NavbarSort from "./components/Navbar/NavbarSort";
import NavbarTest from "./components/Navbar/NavbarTest";
import NavbarTop from "./components/Navbar/NavbarTop";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <NavbarTest />
      <NavbarSort />
      <NavbarCarusel />
      <Admin />
    </div>
  );
}

export default App;
