import "./App.css";
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
      <Admin />
    </div>
  );
}

export default App;
