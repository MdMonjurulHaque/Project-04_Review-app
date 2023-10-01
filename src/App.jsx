import React from "react";
import Review from "./Components/Review/Review";
import "./app.css";

const App = () => {
  return (
    <div className="container">
      <h2 className="title">Our Reviews</h2>
      <div className="underline"></div>
      <Review />
    </div>
  );
};

export default App;
