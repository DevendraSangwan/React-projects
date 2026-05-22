import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  {
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    title: "Mountain Adventure",
    desc: "Explore the beautiful peaks of the world"
  },
  {
    url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    title: "Forest Journey",
    desc: "Walk through the green peaceful woods"
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    title: "Sunny Beach",
    desc: "Relax on the golden sand beaches"
  },
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
    title: "Swiss Alps",
    desc: "Enjoy the snowy mountain views"
  },
  {
    url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    title: "Waterfall Trek",
    desc: "Feel the power of nature"
  },
  {
    url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    title: "Green Valley",
    desc: "Peaceful morning in the valley"
  },
  {
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    title: "Ocean View",
    desc: "Endless blue horizon"
  },
  {
    url: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&q=80",
    title: "Winter Snow",
    desc: "Cold but beautiful winter"
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    title: "Lake Reflection",
    desc: "Calm waters reflecting the sky"
  },
  {
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80",
    title: "Mountain Lake",
    desc: "Crystal clear mountain lake"
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Main Heading */}
      <h1 className="slider-heading">
        ✨ Beautiful Nature Gallery ✨
      </h1>

      <div className="slider-wrapper">
        <div 
          className="slider-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="slide">
              <img src={image.url} alt={image.title} />
              <div className="slide-content">
                <h2>{image.title}</h2>
                <p>{image.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button className="arrow arrow-left" onClick={prevSlide}>
          ❮
        </button>

        {/* Right Arrow */}
        <button className="arrow arrow-right" onClick={nextSlide}>
          ❯
        </button>

        {/* Dots */}
        <div className="dots-container">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;