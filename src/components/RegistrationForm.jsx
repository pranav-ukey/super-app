import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/super-app-logo.png";
import { useStore } from "../store/useStore";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^\d{10}$/;

    if (!formData.name.trim()) newErrors.name = "Field is required";
    if (!formData.username.trim()) newErrors.username = "Field is required";
    if (!emailRegex.test(formData.email)) newErrors.email = "Field is required";
    if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Field is required";
    if (!acceptedTerms) newErrors.checkbox = "Check this box if you want to proceed";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setUser(formData);
      navigate("/categories");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[500px] flex flex-col items-center mt-12"
    >
      {/* Logo */}
      <img src={logo} alt="Super App" className="w-44 mb-3" />

      {/* Subtitle */}
      <p className="text-white text-[22px] mb-8">
        Create your new account
      </p>

      {/* Input Fields */}
      <div className="w-full flex flex-col gap-3">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full h-14 px-5 bg-[#1e1e1e] text-white text-base placeholder:text-[#555] outline-none ${
            errors.name ? "border-l-2 border-l-red-500" : ""
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm px-1 mb-1">{errors.name}</p>}

        <input
          type="text"
          name="username"
          placeholder="UserName"
          value={formData.username}
          onChange={handleChange}
          className={`w-full h-14 px-5 bg-[#1e1e1e] text-white text-base placeholder:text-[#555] outline-none ${
            errors.username ? "border-l-2 border-l-red-500" : ""
          }`}
        />
        {errors.username && <p className="text-red-500 text-sm px-1 mb-1">{errors.username}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full h-14 px-5 bg-[#1e1e1e] text-white text-base placeholder:text-[#555] outline-none ${
            errors.email ? "border-l-2 border-l-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm px-1 mb-1">{errors.email}</p>}

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          className={`w-full h-14 px-5 bg-[#1e1e1e] text-white text-base placeholder:text-[#555] outline-none ${
            errors.mobile ? "border-l-2 border-l-red-500" : ""
          }`}
        />
        {errors.mobile && <p className="text-red-500 text-sm px-1 mb-1">{errors.mobile}</p>}

      </div>

      {/* Checkbox */}
      <div className="w-full mt-5">
        <label className="flex items-center gap-3 text-[#7C7C7C] text-base cursor-pointer">
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => {
              setAcceptedTerms(e.target.checked);
              setErrors((prev) => ({ ...prev, checkbox: "" }));
            }}
            className="w-4 h-4"
          />
          Share my registration data with Superapp
        </label>
        {errors.checkbox && (
          <p className="text-red-500 text-sm mt-2">{errors.checkbox}</p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full h-14 mt-5 rounded-full bg-[#72DB73] text-white text-2xl font-bold tracking-widest hover:scale-[1.02] transition-all duration-200"
      >
        SIGN UP
      </button>

      {/* Terms */}
      <div className="w-full mt-5 text-[#7C7C7C] text-sm leading-6">
        <p>
          By clicking on Sign up, you agree to Superapp{" "}
          <span className="text-[#72DB73]">Terms and Conditions of Use</span>
        </p>
        <p className="mt-3">
          To learn more about how Superapp collects, uses, shares and protects
          your personal data please head Superapp{" "}
          <span className="text-[#72DB73]">Privacy Policy</span>
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;