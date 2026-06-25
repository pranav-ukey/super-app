const CategoryCard = ({
  title,
  image,
  bgColor,
  isSelected,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-40
        h-40
        rounded-2xl
        p-3
        cursor-pointer
        border-4
        transition-all
        duration-200
        hover:scale-105
        ${
          isSelected
            ? "border-[#11B800]"
            : "border-transparent"
        }
      `}
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-white text-xl font-semibold mb-4">
        {title}
      </h2>

      <img
        src={image}
        alt={title}
        className="w-full h-20 object-cover rounded-lg"
      />
    </div>
  );
};

export default CategoryCard;