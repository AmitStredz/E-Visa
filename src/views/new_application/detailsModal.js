import React from "react";
import { FiInfo } from "react-icons/fi";

const detailsModal = ({ isVisible, onClose, onVerify, user }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-5 sm:p-10 bg-gray-800 bg-opacity-75 z-[10000]">
      <div className="flex flex-col gap-5 bg-white p-3 sm:p-10 text-[14px] sm:text-[16px] rounded shadow-lg w-[40rem] overflow-y-scroll h-full">
        <div className="flex gap-2 items-center">
          <FiInfo size={40} />
          <h2 className="text-2xl font-bold mb-2">Verify User Details</h2>
        </div>
        <p>
          <strong>First Name:</strong> {user.first_name}
        </p>
        <p>
          <strong>Surname:</strong> {user.surname}
        </p>
        <p>
          <strong>Date of Birth:</strong> {user.date_of_birth}
        </p>
        <p>
          <strong>Place of Birth:</strong> {user.place_of_birth}
        </p>
        <p>
          <strong>Mother's Name:</strong> {user.mothers_name}
        </p>
        <p>
          <strong>Father's Name:</strong> {user.fathers_name}
        </p>
        <p>
          <strong>Passport Number:</strong> {user.passport_number}
        </p>
        <p>
          <strong>Passport Issue Date:</strong> {user.passport_issue_date}
        </p>
        <p>
          <strong>Passport Expiry Date:</strong> {user.passport_expiry_date}
        </p>
        <p>
          <strong>Supporting Doc. Type:</strong> {user.supporting_doc_type}
        </p>
        <p>
          <strong>Supporting Doc. Form:</strong> {user.supporting_doc_form}
        </p>
        <p>
          <strong>Supporting Doc. Number:</strong> {user.supporting_doc_no}
        </p>
        <p>
          <strong>Supp Doc. Expiry Date:</strong> {user.supporting_doc_expiry_date}
        </p>
        <p>
          <strong>Email address:</strong> {user.email}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phone_number}
        </p>
        <p>
          <strong>Address:</strong> {user.address}
        </p>
        <div className="mt-4">
          <button
            className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={onVerify}
          >
            Verify
          </button>
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded"
            onClick={onClose}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default detailsModal;
