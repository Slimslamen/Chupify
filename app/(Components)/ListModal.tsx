import React, { useContext } from "react";
import { IContext } from "../Interfaces/types";
import { AppContext } from "../Context/SpotifyContext";

export default function ListModal() {
  const { openModal, setOpenModal } = useContext(AppContext)! as IContext;

  const ModalFunction = () => {
    document.body.style.overflow = "unset";
    setOpenModal(!openModal)
  }
  
  return (
    <div className={`z-50 flex items-center justify-center fixed inset-0 ${openModal ? "hidden": ""}`}>
      <div className="blackBackground absolute inset-0"></div>
      <div className="cookies-card relative z-50 bg-white rounded-lg shadow-lg text-center">
        <p className="cookie-para mb-2 mt-5">Artist is already in the list, and can not be added again.</p>
        <div className="mt-10">
          <button onClick={ModalFunction} className="accept cookie-button">Close</button>
        </div>
      </div>
    </div>
  );
}
