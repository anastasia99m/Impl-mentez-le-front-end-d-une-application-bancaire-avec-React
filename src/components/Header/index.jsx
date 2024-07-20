import logo from '../../assets/argentBankLogo.webp';
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userSignOut } from "../../store/userAction";
import "./index.css"

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((store) => store.USER.userStatus);
  const userData = useSelector((store) => store.USER.userData);

  const handleSignOut = () => {
    // sessionStorage.getItem("token")
  sessionStorage.removeItem("token")
    // : localStorage.removeItem("token");
    dispatch(userSignOut());
    navigate("/accueil");
  };

    return (
        <nav class="main-nav">
            <NavLink to='/' class="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={logo}
                alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </NavLink>
            
            {!userStatus.connected && (
                <div className="signIn">
                    <i className='fa fa-user-circle' />
                    <NavLink to='/connexion'><p>Sign In</p></NavLink>
                </div>
            )}

            {userStatus.connected && (
                <div className="userMenu">
                    <i className='fa fa-user-circle' />
                    {userData.userName}
                    <NavLink to='/' onClick={handleSignOut} className="signOut">
                        <i className="fa fa-sign-out"></i>
                        <p>Sign Out</p>
                    </NavLink>
                </div>
             )}
        </nav>
    );
  }
export default Header