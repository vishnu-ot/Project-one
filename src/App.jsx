import "./App.css";
import { Header } from "./Header/Header";
import { Home } from "./Homepage/Home";
import { Footer } from "./Footer/Footer";
import { Center } from "./Center/Center";
import Rightsidemenu from "./rightside-menu/Rightsidemenu";
function App() {
  return (
    <div className="container">
      <Header />
      <div className="homes">
        <Home />
        <Center />
        <Rightsidemenu/>
      </div>
    </div>
  );
}

export default App;
