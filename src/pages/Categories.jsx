import { useNavigate } from "react-router-dom";
import { useStore } from "../store/useStore";
import { useState } from "react";

import logo from "../assets/super-app-logo.png";

import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";

import CategoryCard from "../components/CategoryCard";

const categoriesArray = [
  {
    id: 1,
    title: "Action",
    image: action,
    bgColor: "#FF5209",
  },
  {
    id: 2,
    title: "Drama",
    image: drama,
    bgColor: "#D7A4FF",
  },
  {
    id: 3,
    title: "Romance",
    image: romance,
    bgColor: "#148A08",
  },
  {
    id: 4,
    title: "Thriller",
    image: thriller,
    bgColor: "#84C2FF",
  },
  {
    id: 5,
    title: "Western",
    image: western,
    bgColor: "#9F4B00",
  },
  {
    id: 6,
    title: "Horror",
    image: horror,
    bgColor: "#7358FF",
  },
  {
    id: 7,
    title: "Fantasy",
    image: fantasy,
    bgColor: "#FF4ADE",
  },
  {
    id: 8,
    title: "Music",
    image: music,
    bgColor: "#E61E32",
  },
  {
    id: 9,
    title: "Fiction",
    image: fiction,
    bgColor: "#6CD061",
  },
];

const Categories = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const setCategories = useStore(
    state => state.setCategories
  );

  const toggleCategory = (category) => {
    const isSelected = selectedCategories.some(
      (item) => item.id === category.id
    );

    let updatedCategories;

    if (isSelected) {
      updatedCategories = selectedCategories.filter(
        (item) => item.id !== category.id
      );
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length >= 3) {
      setShowError(false);
    }
  };

  const handleNextPage = () => {
    if (selectedCategories.length < 3) {
      setShowError(true);
      return;
    }

    setShowError(false);

    setCategories(selectedCategories);

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Section */}
      <div className="w-[38%] pl-20 pt-12">
        <img
          src={logo}
          alt="Super App Logo"
          className="w-40"
        />

        <h1 className="text-[42px] font-bold leading-tight mt-10">
          Choose your
          <br />
          entertainment
          <br />
          category
        </h1>

        <p className="text-[#868686] text-lg leading-8 mt-8 w-72">
          Choose minimum 3 categories
          <br />
          to get started
        </p>

        {/* Selected Categories will appear here */}
        <div className="mt-12 flex flex-wrap gap-4 min-h-10">
          {selectedCategories.map((category) => (
            <div
              key={category.id}
              className="flex items-center gap-2 bg-[#148A08] rounded-full px-5 py-1"
            >
              <span className="text-white text-lg font-medium">
                {category.title}
              </span>

              <button
                type="button"
                onClick={() => toggleCategory(category)}
                className="text-black text-2xl font-bold"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Validation Message */}
        {showError && (
          <p className="text-red-500 text-lg mt-6">
            Minimum 3 category required
          </p>
        )}
      </div>

      {/* Right Section */}
      <div className="w-[62%] flex flex-col items-center pt-14">
        <div className="grid grid-cols-3 gap-6">
          {categoriesArray.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              bgColor={category.bgColor}
              isSelected={selectedCategories.some(
                (item) => item.id === category.id
              )}
              onClick={() => toggleCategory(category)}
            />
          ))}
        </div>

        <div className="w-full flex justify-end pr-12 mt-10 mb-5">
          <button
            onClick={handleNextPage}
            className="bg-[#148A08] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;