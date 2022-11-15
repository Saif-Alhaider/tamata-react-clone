import "./App.css";
import Carousel from "./carousel/CarouselMain";
import Navbar from "./Navbar/Main NavBar/NavbarMain";
import MainSecondNavBar from "./Navbar/Second NavBar/MainSecondNavBar";
function App() {
  return (
   <div>
    <Navbar/>
   <MainSecondNavBar/>
    <div className="block min-h-10">
    {/* <Carousel /> */}
    </div>
   </div>
  );
}

export default App;
