import registerBg from "../assets/register-bg.png";
import RegistrationForm from "../components/RegistrationForm";

// Register.jsx
const Register = () => {
  return (
    <div className="min-h-screen bg-black flex">
      {/* Left Section */}
      <div className="w-1/2 relative">
        <img
          src={registerBg}
          alt="register background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute bottom-20 left-16 text-white">
          <h1 className="text-[40px] leading-[64px] font-bold">
            Discover new things on
            <br />
            Superapp
          </h1>
        </div>
      </div>

      {/* Right Section - make it scrollable */}
      <div className="w-1/2 bg-black flex justify-center items-start overflow-y-auto h-screen px-12">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Register;