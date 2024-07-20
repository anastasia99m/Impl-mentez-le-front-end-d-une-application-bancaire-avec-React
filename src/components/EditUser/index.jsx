import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userNameUpdate } from "../../store/userAction"

const Form = ({ setModal }) => {

  const userData = useSelector((store) => store.USER.userData);
  const [newUserName, setNewUserName] = useState(userData.userName);
  const dispatch = useDispatch();

  const handleSave = async (e) => {
    e.preventDefault();

    const token =
      sessionStorage.getItem("token")
    updateUserName(token);
  };

  const updateUserName = async (token) => {
    try {
      await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userName: newUserName,
        }),
      })
        .then((res) => {
          if (res.ok) {
            dispatch(userNameUpdate(newUserName));
          }
          else {
            setNewUserName(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="editForm">
      <h2>Edit user info</h2>
      <form className="editFormUserName" action="submit" onSubmit={handleSave}>
        <div>
          <label htmlFor="userName">User name : </label>
          <input
            type="text"
            id="userName"
            placeholder={userData.userName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="firstName">First name : </label>
          <input
            className="overlay"
            type="text"
            id="firstName"
            placeholder={userData.firstName}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="lastName">Last name : </label>
          <input
            className="overlay"
            type="text"
            id="lastName"
            placeholder={userData.lastName}
            readOnly
          />
        </div>
        <div className="buttonContainer">
          <button type="submit" className="editButton">Save</button>
          <button type="button" onClick={(e) => setModal(false)} className="editButton">Cancel</button>
        </div>
      </form>
    </div>

  );
};
export default Form;