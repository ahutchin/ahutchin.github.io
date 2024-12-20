import React from "react";
import AuthButton from "../components/authButton";
import CurrentlyPlaying from "../components/currentlyPlaying";

const More = () => {
  return (
    <div className="page-body">
      <h1>More</h1>
      <p>Page for sandboxing with local back-end</p>
      <AuthButton title={"SPOTIFY LOGIN"} endpoint={"/login"} />
      <CurrentlyPlaying />
    </div>
  );
};

export default More;
