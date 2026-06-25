import profile from "../assets/profile.png";
import { useStore } from "../store/useStore";

const ProfileCard = () => {
  const user = useStore((state) => state.user);
  const categories = useStore((state) => state.categories);

  return (
    <div className="bg-[#5746EA] rounded-[20px] p-5 h-[235px] flex gap-4">
      <img
        src={profile}
        alt="Profile"
        className="w-[80px] h-[200px] object-cover rounded-full border-2 border-white self-center"
      />

      <div className="flex flex-col justify-center flex-1">
        <p className="text-white text-[18px]">
          {user?.name}
        </p>

        <p className="text-white text-[14px]">
          {user?.email}
        </p>

        <h2 className="text-white text-[34px] font-bold leading-none mt-3">
          {user?.username}
        </h2>

        <div className="grid grid-cols-2 gap-2 mt-6">
          {categories.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="bg-[#9F94FF] rounded-full text-center text-white py-2 text-sm font-medium"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;