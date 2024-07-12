import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ch1 from "../../assets/chef1.png";
import ch2 from "../../assets/chef2.png";
import ch3 from "../../assets/chef3.png";

const OurStoryPage = () => {
  const [activeChef, setActiveChef] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const threshold =
        document.querySelector(".chef-info-box")?.offsetTop || 0; // Get top position of chef info box
      if (window.scrollY > threshold) {
        setActiveChef(null);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  const chefs = [
    {
      id: 1,
      name: "Chef 1",
      img: ch1,
      description: "Chef 1 is known for their amazing non veg foods.",
    },
    {
      id: 2,
      name: "Chef 2",
      img: ch2,
      description: "Chef 2 specializes in modern veg fusion dishes.",
    },
    {
      id: 3,
      name: "Chef 3",
      img: ch3,
      description:
        "Chef 3 has a passion for creating traditional and chinese dishes .",
    },
  ];

  const handleChefClick = (chef) => {
    setActiveChef(chef);
  };

  const handleClose = () => {
    setActiveChef(null);
  };

  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-4">
          <p className="text-3xl font-bold text-primary">About Us</p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-2"></div>
        </div>
        <section className="mb-16">
          <div className="text-center max-w-[600px] mx-auto">
            <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
              {" "}
              Our Chefs{" "}
            </h2>
            <p className="text-gray-500 mb-8" data-aos="fade-up">
              {" "}
              Meet the talented chefs behind our delicious meals. They are
              dedicated to bringing you the best culinary experience.{" "}
            </p>
          </div>
          <div className="flex justify-center items-center gap-8">
            {chefs.map((chef, index) => (
              <div
                key={chef.id}
                className="flex flex-col items-center"
                data-aos="zoom-in"
                data-aos-delay={index * 200}
              >
                <img
                  className="rounded-full mb-2 cursor-pointer"
                  src={chef.img}
                  alt={chef.name}
                  onClick={() => handleChefClick(chef)}
                />
                <p className="font-bold">{chef.name}</p>
                {activeChef && activeChef.id === chef.id && (
                  <div className="chef-info-box absolute bg-white border p-4 shadow-lg rounded-lg top-0 mt-16">
                    {" "}
                    {/* Added class for threshold*/}
                    <button
                      className="absolute top-0 right-0 mt-1 mr-1 text-gray-500"
                      onClick={handleClose}
                    >
                      &times;
                    </button>
                    <p className="text-gray-800">{activeChef.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStoryPage;
