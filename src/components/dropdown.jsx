import React, { useState } from "react";

const Dropdown = ({ Title, Desc, Content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDropdown = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="dropdown-title">{Title}</div>
        <div className="dropdown-button">{isExpanded ? "Collapse" : "Expand"}</div>
      </div>
      <div className="dropdown-description">{Desc}</div>
      <div className={`content ${isExpanded ? "expanded" : "collapsed"}`}>{Content}</div>
    </div>
  );
};

export default Dropdown;
