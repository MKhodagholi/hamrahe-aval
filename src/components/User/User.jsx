import { useState } from "react";

import UserStyled, { ModalDeleteStyled } from "./UserStyled";

import trashIcon from "../../assets/icons/red-trash_icon.svg";
import editIcon from "../../assets/icons/edit.svg";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../store/user-slice";
import Modal from "../Modal/Modal";

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const User = ({ user }) => {
  const dispatch = useDispatch();
  const [needModal, setNeedModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const {
    id,
    email,
    first_name: firstName,
    last_name: lastName,
    avatar,
  } = user;

  const userStatusArray = ["success", "warning", "danger"];

  const userAmountArray = [21.65, 17.84, 14.81, 11.7, 8.99, 6.48, 5.22, 3.67];
  const userTtileArray = [
    "CTO",
    "CIO",
    "Tech Lead",
    "Python Engineer",
    "Java Engineer",
    "UI Engineer",
    "VP",
    "Helpdesk",
  ];

  const titlesLength = userTtileArray.length;

  const randomNumber = randomIntFromInterval(0, titlesLength - 1);

  const userAmount = userAmountArray[randomNumber];
  const userTitle = userTtileArray[randomNumber];

  console.log(userAmount);

  let userStatus = userStatusArray[0];

  if (userAmount > 10 && userAmount <= 15) {
    userStatus = userStatusArray[1];
  } else if (userAmount > 15) {
    userStatus = userStatusArray[2];
  }

  const trashIconClickHandler = () => {
    setModalTitle(`DELETE USER`);
    setNeedModal(true);
  };

  const modalCloseHandler = () => {
    setNeedModal(false);
  };

  const resetModal = () => {
    setModalTitle("");
    setNeedModal(false);
  };

  const deleteClickHandler = () => {
    dispatch(deleteUser({ id }));
    resetModal();
  };

  const cancelClickHandler = () => {
    setModalTitle("");
    setNeedModal(false);
  };

  const jsxDeleteModalContent = (
    <ModalDeleteStyled>
      <h4>Warning: If you delete this user, then you can't refuce him!</h4>
      <div className="button-group">
        <button className="delete" onClick={deleteClickHandler}>
          DELETE
        </button>
        <button className="cancel" onClick={cancelClickHandler}>
          CANCEL
        </button>
      </div>
    </ModalDeleteStyled>
  );

  return (
    <UserStyled>
      <Modal
        title={modalTitle}
        needModal={needModal}
        onClose={modalCloseHandler}
        modalContent={jsxDeleteModalContent}
      />
      <div className="user-checkbox center">
        <input type="checkbox" />
      </div>
      <div className="user-image center">
        <img src={avatar} alt={`${firstName} ${lastName}`} />
      </div>
      <div className="dynamic-space">
        <div className="user-name left">
          <p>
            {firstName} {lastName}
          </p>
        </div>
        <div className="user-email left">
          <p>{email}</p>
        </div>
        <div className="user-title left">
          <p>{userTitle}</p>
        </div>
        <div className="user-amount center">
          <p>${userAmount}</p>
        </div>
        <div className={`user-status center ${userStatus}`}>
          <p>{userStatus}</p>
        </div>
      </div>
      <div className="user-action center">
        <button onClick={trashIconClickHandler}>
          <img src={trashIcon} alt="" />
        </button>
        <button className="edit-icon">
          <img src={editIcon} alt="" />
        </button>
      </div>
    </UserStyled>
  );
};

export default User;
