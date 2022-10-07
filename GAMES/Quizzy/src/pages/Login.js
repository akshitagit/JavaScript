import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  // Function to handle login
  const handleClick = (loginType) => {
    if (loginType === "loginBtn") {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          sessionStorage.setItem("loggedInUser", JSON.stringify(user));
          sessionStorage.removeItem("guestUser");
          navigate("home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(errorMessage);
        });
    } else {
      sessionStorage.setItem("guestUser", JSON.stringify("user" + Date.now()));
      sessionStorage.removeItem("loggedInUser");
      navigate("home");
    }
  };
  return (
    <div className='login'> 
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-12'>
                  <div className='login-wrapper'>
                    <h2>White Hat Juniors Presents...</h2>
                    <img src="/Quizzy.gif" />
                      <button
                        className="primary-btn"
                        id="loginBtn"
                        onClick={(e) => {
                          handleClick(e.target.getAttribute("id"));
                        }}
                      >
                      Sign In
                      </button>
                      <button
                        className="primary-btn"
                        id="guestBtn"
                        onClick={(e) => {
                          handleClick(e.target.getAttribute("id"));
                        }}
                      >
                        Play as Guest
                      </button>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Login;
