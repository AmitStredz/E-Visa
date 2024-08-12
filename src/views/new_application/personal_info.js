import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Header from "../homepage/pages/header";
import Footer from "../homepage/pages/footer";
import img1 from "./assets/applyBanner.webp";

import TermsModal from "./termsModal";
import axios from "axios";
import { Cookies } from "react-cookie";
import { FiInfo } from "react-icons/fi";

import DetailsModal from "./detailsModal";

export default function Personal_info() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    visa_type: localStorage.getItem("visa_type"),
    country_region: localStorage.getItem("country_region"),
    travel_document: localStorage.getItem("travel_document"),
    arrival_date: localStorage.getItem("arrival_date"),
    prerequisites_check: true,
    first_name: "",
    surname: "",
    date_of_birth: "",
    place_of_birth: "",
    mothers_name: "",
    fathers_name: "",
    passport_number: "",
    passport_issue_date: "",
    passport_expiry_date: "",
    supporting_doc_type: "",
    supporting_doc_form: "",
    supporting_doc_no: "",
    supporting_doc_expiry_date: "",
    email: "",
    phone_number: "",
    address: "",
    accept_terms: true,
  });

  const [isFormValid, setIsFormValid] = useState(false); //to check e-mail validity.

  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showAddPersonModal, setShowAddPersonModal] = useState(false);
  const [showOnNextModal, setShowOnNextModal] = useState(false);

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleCheckboxClick = () => {
    console.log("checked: ", isChecked);

    if (isChecked) {
      console.log("if");
      setIsChecked(false);
    } else {
      console.log("else");
      setShowTermsModal(true);
    }
  };

  const handleModalClose = () => {
    setShowTermsModal(false);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const validateForm = () => {
      // const phoneRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // const isNameValid = fullName.trim() !== "";

      setIsFormValid(emailRegex.test(currentUser.email));
    };

    validateForm();
  }, [currentUser.email]);

  // Validate user data
  const isUserDataComplete = (user) => {
    for (const key in user) {
      if (user.hasOwnProperty(key)) {
        // Check if the field is empty, excluding prerequisites_check and accept_terms
        if (user[key] === "" || user[key] === null) {
          return false;
        }
      }
    }
    return true;
  };

  const handleAddClick2 = () => {
    console.log("CurrentUser: ", currentUser);
    // handleCheckboxClick();
    setShowAddPersonModal(false);

    if (!isFormValid) {
      alert("Invalid e-mail. Please Enter a valid email Address.");
      return;
    }

    setUsers([...users, currentUser]);
    setCurrentUser({
      visa_type: localStorage.getItem("visa_type"),
      country_region: localStorage.getItem("country_region"),
      travel_document: localStorage.getItem("travel_document"),
      arrival_date: localStorage.getItem("arrival_date"),
      prerequisites_check: true,
      first_name: "",
      surname: "",
      date_of_birth: "",
      place_of_birth: "",
      mothers_name: "",
      fathers_name: "",
      passport_number: "",
      passport_issue_date: "",
      passport_expiry_date: "",
      supporting_doc_type: "",
      supporting_doc_form: "",
      supporting_doc_no: "",
      supporting_doc_expiry_date: "",
      email: "",
      phone_number: "",
      address: "",
      accept_terms: true,
    });
    console.log("Users: ", users);
  };

  const handleAddClick1 = () => {
    if (!isUserDataComplete(currentUser)) {
      alert("Enter all the input fields...");
      return;
    } else if (!isFormValid) {
      alert("Invalid e-mail. Please Enter a valid email Address.");
      return;
    } else {
      setShowAddPersonModal(true);
    }
  };

  const handleNextClick1 = () => {
    if (users.length == 0) {
      if (!isUserDataComplete(currentUser)) {
        alert("Enter all the input fields...");
        return;
      } else if (!isFormValid) {
        alert("Invalid e-mail. Please Enter a valid email Address.");
        return;
      } else {
        setUsers([...users, currentUser]);
        setShowOnNextModal(true);
      }
    } else {
      handleNextClick2();
    }
  };

  const handleNextClick2 = async (e) => {
    // e.preventDefault();
    if (isLoading) return; // Prevent multiple clicks

    setIsLoading(true);

    const data = {
      users: users,
    };
    console.log("Users sent: ", users);
    try {
      const response = await axios.post(
        "https://evisa-6a188817e8b4.herokuapp.com/api/visa-applications/create-multiple/",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response: ", response);

      if (response.data.session_id) {
        localStorage.setItem("session_id", response.data.session_id);
        localStorage.setItem("count", users.length);
        navigate("/payment");
      }
    } catch (error) {
      setIsLoading(false);
      // console.error("There was an error!", error);
      alert(
        "There was some Network Error: " +
          (error.response?.data || error.message)
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="overflow-hidden text-black bg-slate-600 bg-opacity-20 relative">
      <Header></Header>

      <div
        className="w-screen h-40 sm:h-96 bg-bottom bg-cover"
        style={{ backgroundImage: `url(${img1})` }}
      ></div>

      <div className="w-full flex justify-center h mb-10">
        <div className="w-full lg:w-4/5 justify-start p-5 md:p-10 flex flex-col gap-5">
          <h1 className="text-[28px] font-semibold ">Application</h1>
          <div className="flex flex-wrap text-[14px] sm:text-[16px] items-center gap-1">
            <p className="text-slate-500">Country/Region</p>
            <p>{"->"}</p>
            <p className="text-slate-500">ArrivalDate</p>
            <p>{"->"}</p>
            <p className="text-slate-500">Prerequisites</p>
            <p>{"->"}</p>
            <p className="font-semibold">Personal Information</p>
          </div>

          {users.length > 0 && (
            <>
              <div className=" flex flex-col gap-2 p-3 sm:p-7 sm:px-10 bg-slate-200 lg:w-[40rem]">
                {users.map((user, index) => (
                  <div
                    key={index}
                    className="flex justify-between p-2 border border-slate-500"
                  >
                    <div className="flex flex-col">
                      <strong>
                        {user.firstName} {user.surname}
                      </strong>
                      <span className="text-slate-500 text-[12px]">
                        {user.email}
                      </span>
                    </div>
                    <strong>{user.passportNumber}</strong>
                  </div>
                ))}

                <div className="flex justify-end">
                  <button
                    className="p-1 px-4 bg-green-500 text-white"
                    onClick={handleNextClick2}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </>
          )}

          {/* <form
            // action="#"
            // method="POST"
            className="lg:w-[40rem] flex flex-col gap-5 sm:p-5"
          > */}
          <div className="lg:w-[40rem] flex flex-col gap-5 sm:p-5">
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Given/First Name(s)
              </label>
              <input
                name="first_name"
                value={currentUser.first_name}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5 "
              >
                Surname(s)
              </label>
              <input
                name="surname"
                value={currentUser.surname}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-2 items-center">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Date of Birth
              </label>
              <input
                name="date_of_birth"
                value={currentUser.date_of_birth}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Place of Birth
              </label>
              <input
                name="place_of_birth"
                value={currentUser.place_of_birth}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Mother's Name
              </label>
              <input
                name="mothers_name"
                value={currentUser.mothers_name}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Father's Name
              </label>
              <input
                name="fathers_name"
                value={currentUser.fathers_name}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Passport Number
              </label>
              <input
                name="passport_number"
                value={currentUser.passport_number}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-2 items-center  w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Passport Issue Date
              </label>
              <input
                name="passport_issue_date"
                value={currentUser.passport_issue_date}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-2 items-center w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Passport Expiry Date
              </label>
              <input
                name="passport_expiry_date"
                value={currentUser.passport_expiry_date}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Type of Supporting Doc.
              </label>
              <select
                className="border-2 border-slate-400 h-8 w-3/5"
                name="supporting_doc_type"
                value={currentUser.supporting_doc_type}
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select a Supporting Doc Type
                </option>
                <option>Visa</option>
                <option>Residence Permit</option>
              </select>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Supporting Doc. Form
              </label>
              <select
                className="border-2 border-slate-400 h-8 w-3/5 transition-all"
                value={currentUser.supporting_doc_form}
                name="supporting_doc_form"
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Select a Supporting Doc Form
                </option>
                <option>Ireland</option>
                <option>Schengen</option>
                <option>U.S.A</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Supporting Doc. No
              </label>
              <input
                name="supporting_doc_no"
                value={currentUser.supporting_doc_no}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-2 items-center w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Supp. Doc. Expiry Date
              </label>
              <input
                name="supporting_doc_expiry_date"
                value={currentUser.supporting_doc_expiry_date}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8"
                type="date"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                E-mail address
              </label>
              <input
                name="email"
                value={currentUser.email}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Phone Number
              </label>
              <input
                name="phone_number"
                value={currentUser.phone_number}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>
            <div class="flex gap-3 items-center justify-between w-full">
              <label
                for="visa-type"
                class="block text-[16px] font-semibold w-2/5"
              >
                Address
              </label>
              <input
                name="address"
                value={currentUser.address}
                onChange={handleInputChange}
                required
                className="border-2 border-slate-400 h-8 w-3/5"
              ></input>
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onClick={handleCheckboxClick}
                ></input>{" "}
                I have read and accept the provisions of the Türkiye Entry
                Commitment and Information Form.
              </label>
            </div>

            <div class="flex flex-col sm:flex-row gap-2 justify-evenly mt-5">
              <button
                onClick={handleAddClick1}
                disabled={!isChecked}
                type="submit"
                name="save-continue"
                class={`sm:w-5/12 py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  ${
                  isChecked
                    ? "text-white bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-300"
                }`}
              >
                Add a new Person
              </button>
              <button
                onClick={handleNextClick1}
                disabled={!isChecked || isLoading}
                type="submit"
                name="save-continue"
                class={`sm:w-5/12 py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium   ${
                  isChecked && !isLoading
                    ? "text-white bg-green-600  hover:bg-green-700"
                    : "bg-green-300"
                }`}
              >
                {isLoading ? "Loading..." : "Save and Continue"}
              </button>
            </div>
          </div>
          {/* </form> */}

          <div className="flex flex-col gap-5">
            <p>
              <span className="font-semibold">Important Note: </span>Fields with
              (*) must have correct details. Leaving it blank will halt the
              submission of the application. Inaccurate, mismatched, and
              incomplete information may cause delay or cancellation of visa.
              Enter the correct captcha code for security purposes.
            </p>
            <p>
              To ensure accuracy, take time to review all the details in the
              form before clicking Register. The application fee may vary on the
              type of visa, nationality, and processing time chosen. The
              applicant will receive a notification once the form gets submitted
              successfully.
            </p>
            <p>
              <span className="font-semibold">Disclaimer: </span>Turkish visa
              issued by this commercial website is applied direclty at the
              Governmet of Turkey Tmmigration office. Government of Turkey has
              not appointed directly, indirectly or exclusively. We are not
              affiliated with the Government of Turkey.
            </p>
          </div>

          <div
            className="lg:absolute mt-6 bg-yellow-100 border-l-4 border-yellow-500 text-red-700 p-4 sm:w-[30rem]  right-10 top-96"
            role="alert"
          >
            <p className="font-bold mb-5">Information Note:</p>
            <ul className="list-disc list-inside gap-5 flex flex-col">
              <ul>
                Please note that the information that you provide must match the
                information on your passport. Otherwise, your e-Visa will be
                invalid.
              </ul>
              <ul>
                Travel agencies can create group applications by clicking here
              </ul>
            </ul>
          </div>

          {showTermsModal && (
            <TermsModal onClose={() => handleModalClose(true)} />
          )}

          <DetailsModal
            isVisible={showAddPersonModal}
            onClose={() => setShowAddPersonModal(false)}
            onVerify={handleAddClick2}
            user={currentUser}
          />
          <DetailsModal
            isVisible={showOnNextModal}
            onClose={() => setShowOnNextModal(false)}
            onVerify={handleNextClick2}
            user={currentUser}
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
