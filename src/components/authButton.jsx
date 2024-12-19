import React from "react";

const AuthButton = ({ title, endpoint }) => {
  const handleOnClick = () => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;
    window.location.href = `${baseUrl}${endpoint}`;
  };

  return (
    <>
      <button onClick={handleOnClick}>{title}</button>
    </>
  );
};

export default AuthButton;
