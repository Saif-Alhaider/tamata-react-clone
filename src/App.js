import "./App.css";
import Carousel from "./carousel/CarouselMain";
import Navbar from "./Navbar/NavbarMain";
function App() {
  return (
   <div>
    <Navbar/>
   
    <div className="block min-h-10">
    <Carousel />
    </div>
   </div>
  );
}

export default App;
