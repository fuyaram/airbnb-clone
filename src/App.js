import Filters from "./components/Filters";

import Navbar from "./components/Navbar";
import Rentals from "./components/Rentals";
import Footer1 from "./components/Footer1";
function App() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />
      {/* Filters */}
      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        <Filters />
        {/* Rentals */}
        <Rentals />
      </div>

      {/* Footer */}
     
      <Footer1 />
    </div>
  );
}

export default App;
