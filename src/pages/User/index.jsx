import Accounts from '../../components/Accounts'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignIn } from "../../store/userAction"
import Form from "../../components/EditUser"
import "./index.css";

function User() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.USER.userData);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const getUserData = async (token) => {
      try {
          await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((userStatus) => {
            dispatch(userSignIn(userStatus.body));
          });
      }
      catch (error) {
        console.log(error);
      }
    };
 
    const token = sessionStorage.getItem("token");
    console.log("Token:", token); // Debug log for token
    if (!token) {
      navigate("/error");
    } else {
      getUserData(token);
    }
  }, [navigate, dispatch]);

    return (
      <main class="main bg-dark">
      <div class="header">
      {!modal && (
          <>
            <h2>
              Welcome back
              <br />
              {userData?.firstName} {userData?.lastName}
            </h2>
            <button onClick={(e) => setModal(true)} className="editNameBtn">
              Edit Name
            </button>
          </>
        )}
        {modal && (
          <Form setModal={setModal} />
        )}
      </div>
      <h2 class="sr-only">Accounts</h2>

      <Accounts
      title={'Argent Bank Checking (x8349)'}
      amount={'$2,082.79'}
      description={'Available Balance'}
      />

      <Accounts
      title={'Argent Bank Savings (x6712)'}
      amount={'$10,928.42'}
      description={'Available Balance'}
      />

      <Accounts
      title={'Argent Bank Credit Card (x8349)'}
      amount={'$184.30'}
      description={'Current Balance'}
      />

    </main>
    );
  }
export default User