// import "./App.css";
// import Recipe from "./Pages/Recipe/Recipe";
// import Favourites from "./Pages/Favourites/Favourites";
// import Footer from "./Components/Footer";

// function App() {
//   return (
//     <div className="App">
//       <Recipe />
//       {/* <Favourites /> */}
//       {/* <Footer/> */}
//     </div>
//   );
// }

// export default App;

import React from "react";
import Meal from "../src/Pages/Home/Home";

import { Routes, Route } from "react-router-dom";
import Recipe from "./Pages/Recipe/Recipe";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Meal />}></Route>
        <Route path="/items/:id" element={<Recipe />}></Route>
      </Routes>
    </div>
  );
}

export default App;
