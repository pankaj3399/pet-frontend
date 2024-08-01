import React, { useEffect, useState } from "react";
import Hero from "../../assets/images/hero.png";
import { FaSearch } from "react-icons/fa";
import Card from "../../components/Card/Card";
import person from "../../assets/images/person.jpg";
import { FaArrowRight } from "react-icons/fa";
import Testimonial from "../../components/Testimonial/Testimonial";
import assets from "../../assets/images/assets.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { getAllPets } from "../../ApiService/ApiService";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [allPets, setAllPets] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const petsPerPage = 3;

  const navigate = useNavigate();

  const renderPets = async (page) => {
    try {
      const offset = (page - 1) * petsPerPage;
      const response = await getAllPets({
        limit: petsPerPage,
        offset: offset,
      });
      console.log(response.data);
      setAllPets(response.data.pets);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
    renderPets(1)
  }, []);

  return (
    <div className="overflow-hidden">
      {/* first section starts here */}
      <div className="bg-[#FFF4E3]  grid grid-cols-2 items-center justify-center px-[140px] gap-[40px]">
        <div data-aos="fade-right">
          <h2 className="text-[#000400] text-[90px] font-bold leading-tight">
            Adopt A <br />
            Furry Friend
          </h2>
          <p className="text-[#55595e] text-[18px] mt-4">
            Life is easier with a furry best friend by your side. Find your new
            pet from our animal shelters.
          </p>
          <div className="flex items-center bg-white rounded-full shadow-md p-3 max-w-md mt-10">
            <FaSearch className="text-gray-400 mx-3" />
            <input
              type="text"
              placeholder="Choose Your Location"
              className="flex-grow outline-none"
            />
            <button className="bg-[#ffa24c] text-white px-8 py-2 rounded-full button-font">
              Search
            </button>
          </div>
        </div>
        <div data-aos="fade-left" className="flex items-center justify-center">
          <img src={Hero} className="object-cover w-[550px]" alt="" />
        </div>
      </div>
      {/* first section ends here */}

      {/* second section starts here */}
      <div
        className="bg-[#ffff] px-[140px] py-[90px] flex flex-col items-center justify-center"
      >
        <div data-aos="fade-up">
          <h2 className="text-[55px] text-center font-semibold">
            Animals Available For <br /> Adoption Near You
          </h2>
        </div>
        <div data-aos="fade-right" className="flex gap-[54px] mt-[60px]">
          {allPets.map((pet, index) => (
              <Card
              key={index}
              name={pet.name}
              age={pet.age}
              gender={pet.gender}
              imageUrl={pet.image}
              bgColor="bg-gray-100"
              temperament={pet.temperament}
            />
          ))}
        </div>
      </div>
      {/* second section ends here */}

      {/* third section starts here */}
      <div className="pb-[90px] mt-4 grid grid-cols-2 items-center justify-center px-[140px]">
        <div data-aos="fade-right" className="flex items-center justify-center">
          <img src={person} className="object-cover w-[460px]" alt="" />
        </div>
        <div data-aos="fade-left">
          <h2 className="text-[#000400] text-[55px] font-bold leading-tight">
            Adopt Pets And <br /> Save Their Lives
          </h2>
          <p className="text-[#7f817f] text-[18px] my-[34px] button-font">
            Why bother shopping for pets when they are thousands of homeless
            puppies and kittens looking for a family? Adopt rescued animals from
            our shelters and make a change in the lives of animals in your area.
          </p>
          <button onClick={() => navigate("/contact")} className="bg-[#ffa24c] text-white px-8 py-[10px] rounded-full button-font flex gap-2 items-center font-medium shadow-lg">
            Contact
            <FaArrowRight />
          </button>
        </div>
      </div>
      {/* third section ends here */}
      <div className="bg-[#FFF4E3] py-[90px]"
      style={{
        backgroundImage: `url(${assets})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      >
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-[#000400] text-[55px] font-bold leading-tight">
            Hear From Our Pet Parents
          </h2>
          <p className="text-[#55595e] text-[18px] my-[20px] button-font">
            Don’t just take our word for it. Hear from over hundreds of pet
            owners who have <br /> rescued animals from our shelters.
          </p>
        </div>
        <div data-aos="fade-left" className=""
        >
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default Home;
