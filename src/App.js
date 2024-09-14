import React, { Fragment, useState, useEffect } from "react";
import "h8k-components";

import { image1, image2, image3, image4 } from "./assets/images";
import { Thumbs, Viewer } from "./components";

const title = "Catalog Viewer";

function App() {
  const catalogsList = [
    {
      thumb: image1,
      image: image1,
    },
    {
      thumb: image2,
      image: image2,
    },
    {
      thumb: image3,
      image: image3,
    },
    {
      thumb: image4,
      image: image4,
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideShow, setSlideShow] = useState(false);
  const [slideTimer, setSlideTimer] = useState(null);
  const slideDuration = 3000;

  // Update the active index for next
  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % catalogs.length);
  };

  // Update teh active index for previous
  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex -1 + catalogs.length) % catalogs.length)
  };

  return (
    <Fragment>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-column justify-content-center mt-75">
        <div className="layout-row justify-content-center">
          <div className="card pt-25">
            <Viewer catalogImage={catalogs[activeIndex].image} />
            <div className="layout-row justify-content-center align-items-center mt-20">
              <button
                className="icon-only outlined"
                data-testid="prev-slide-btn"
                onClick={goToPrevSlide}
              >
                <i className="material-icons">arrow_back</i>
              </button>
              <Thumbs items={catalogs} currentIndex={activeIndex} />
              <button
                className="icon-only outlined"
                data-testid="next-slide-btn"
                onClick={goToNextSlide}
              >
                <i className="material-icons">arrow_forward</i>
              </button>
            </div>
          </div>
        </div>
        <div className="layout-row justify-content-center mt-25">
          <input
            type="checkbox"
            data-testid="toggle-slide-show-button"
            onChange={(e) => setSlideShow(e.target.checked)}
          />
          <label className="ml-6">Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
