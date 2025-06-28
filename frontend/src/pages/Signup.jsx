import React,{useState} from "react";
import signupImg from "../assets/images/signup.gif";
import avatar from "../assets/images/avatar-icon.png"
import { Link } from "react-router-dom";
const Signup = () => {

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "customer",
  });

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
  const file = event.target.files[0];

    console.log(file);
  };

  const submitHandler = async event => {
    event.preventDefault();
  };

  return (
    <section className="px-3 xl:px-0 bg-[url('./assets/images/mask.png')] bg-cover bg-no-repeat">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">

          <div className="hidden lg:block rounded-l-lg">
            <figure className="rounded-l-lg">
              <img src={signupImg} alt="" className=" w-full rounded-l-lg" />
            </figure>
          </div>

          <div className="rounded-l-lg lg:pl-16 py-3">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-5">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="space-y-3 mb-2">
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="name"
                  value={formData.name}
                  onChange = {handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange = {handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <input
                  type="password"
                  placeholder="Create a Password"
                  name="password"
                  value={formData.password}
                  onChange = {handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                  minLength="8"
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <input
                  type="password"
                  placeholder="Confirm Your Password"
                  name="confirmPassword"
                  value={formData.password}
                  onChange = {handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor cursor-pointer"
                  required
                />
              </div>
              
              <div className="mb-5">
                {/* Role Selection */}
                <label
                  htmlFor="role"
                  className="text-headingColor font-bold text-[16px] leading-7 block mb-2"
                >
                  Are you a:
                </label>
                <select
                  name="role"
                  id="role"
                  value={formData.role}
                  onChange = {handleInputChange}
                  className="w-full text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none border-b border-solid border-[#0066ff61] focus:border-b-primaryColor"
                >
                  <option value="Customer">Customer</option>
                  <option value="Helper">Helper</option>
                </select>

                {/* Gender Selection */}
                <label
                  htmlFor="gender"
                  className="text-headingColor font-bold text-[16px] leading-7 block mt-4 mb-2"
                >
                  Gender:
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange = {handleInputChange}
                  className="w-full text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none border-b border-solid border-[#0066ff61] focus:border-b-primaryColor"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div className="mb-5 flex items-center gap-3">
                <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                  <img src={avatar} alt="" className="w-full rounded-full" />
                </figure>

                <div className="relative w-[130px] h-[50px]">
                  <input
                    type="file"
                    name="photo"
                    id="customFile"
                    onChange = {handleFileInputChange}
                    accept=".jpg, .png"
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                  />

                  <label
                    htmlFor="customFile"
                    className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#90f2e6] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                  >
                    Upload Photo
                  </label>
                </div>
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py"
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to="/login" className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;