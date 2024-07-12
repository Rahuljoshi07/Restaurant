import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import im1 from "../../assets/img1.png";
import im2 from "../../assets/img2.png";
import im3 from "../../assets/img3.png";

const testimonialData = [
  {
    id: 1,
    name: "Mr. U",
    text: "This pizzeria's cheesy goodness is no joke! Perfect crust, delicious sauce, and generous toppings make it a must-try.  (5 stars)",
    img: im1,
  },
  {
    id: 2,
    name: "Mr. R",
    text: "The playground equipment is rusty and the bathrooms are unclean. Not ideal for a fun day out with the kids. (2 stars)",
    img: im2,
  },
  {
    id: 3,
    name: "Mr. A",
    text: "This short story collection packs a punch. Hilarious writing and relatable characters make it a quick and delightful read.  (4 stars)",
    img: im3,
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="300"
      className="py-10 dark:bg-gray-800 dark:text-white"
    >
      <div className="container">
        <div className="text-center mt-0 mb-8">
          <h2 className="text-3xl font-bold">What Customers Say About Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialData.map((data) => (
            <div
              key={data.id}
              className="shadow-lg rounded-xl bg-white dark:bg-gray-900 p-6"
            >
              <div className="flex justify-center items-center mb-4">
                <img
                  className="rounded-full"
                  src={data.img}
                  alt={data.name}
                  style={{ width: 100, height: 100 }}
                />
              </div>
              <Slider {...settings}>
                <div>
                  <p className="text-gray-500 dark:text-gray-300 text-sm">
                    {data.text}
                  </p>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                </div>
              </Slider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
