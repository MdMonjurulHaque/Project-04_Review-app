import React, { useState } from "react";
import "./review.css";
import person from "../../Data/data.jsx";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((preIndex) => {
      let newIndex = preIndex - 1;
      return check(newIndex);
    });
  };
  const next = () => {
    setIndex((nextIndex) => {
      let newIndex = nextIndex + 1;
      return check(newIndex);
    });
  };

  const check = (number) => {
    if (number > person.length - 1) {
      return 0;
    }
    if (number < 0) {
      return person.length - 1;
    }
    return number;
  };
  const randomIndex = () =>{
    let randomIndex = Math.floor(Math.random() * person.length)
if(randomIndex === index){
  randomIndex = index + 1;
}
setIndex(check(randomIndex))
  }

  const { name, title, image, desc } = person[index];
  return (
    <main>
      <section className="review-container">
        <img src={image} alt={name} height={100} width={100} />
        <h3>{name}</h3>
        <p className="p-title">{title}</p>
        <p className="p-desc">{desc} </p>
        <div>
          <button className="prev-btn" onClick={prev}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={next}>
            <FaChevronRight />
          </button>
        </div>
        <button className="surprise-btn" onClick={randomIndex}>Surprise Me</button>
      </section>
    </main>
  );
};

export default Review;
