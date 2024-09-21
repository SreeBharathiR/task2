import React from "react";
import "./DeleteButton.css";
const DeleteButton = ({ rev, iddelete }) => {
  return (
    <img
      className="deleteimg"
      alt="delete"
      src="delete.png"
      onClick={() => rev(iddelete)}
    ></img>
  );
};

export default DeleteButton;
