import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { currentUserState } from "../../lib/recoil-atoms";

export const LoginForm = () => {
  const router = useRouter();
  const setUserState = useSetRecoilState(currentUserState);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

  let baseURL = "http://localhost:3001";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Check if user is trying to login or signup
    if (isLoginFormVisible) {
      // Get user data from
      const user = {
        email: data.get("loginEmail"),
        password: data.get("loginPassword"),
      };

      // Send user data to server to authenticate
      fetch(`${baseURL}/users?email=${user.email}&password=${user.password}`)
        .then((res) => res.json())
        .then((user) => {
          processUser(user);
        })
        .catch((err) => {
          console.log(err);
          alert("Credentials did not match !");
        });
    } else {
      const user = {
        name: data.get("userName"),
        email: data.get("signupEmail"),
        password: data.get("signupPassword"),
      };

      // Send user data to server to create new user
      fetch(
        `${baseURL}/addUser?name=${user.name}&email=${user.email}&password=${user.password}`
      )
        .then((res) => res.json())
        .then((user) => {
          processUser(user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const processUser = (user) => {
    // Check if user is authenticated or not
    if (Object.getOwnPropertyNames(user).length === 0) {
      return;
    }
    // Set user to currentUserState atom
    setUserState(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    router.push("/");
  };

  const toggleLoginSignup = (e) => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  return (
    <main className="h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl">
        <span className="text-green-500">Furni</span>mart
      </h1>
      <div className="bg-white rounded-xl shadow-xl py-8 my-8">
        <h2 className="text-gray-700 text-3xl text-center">
          {isLoginFormVisible ? "Login" : "Signup"}
        </h2>
        <span className="flex flex-col items-center justify-between">
          <form
            id="loginSignupForm"
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-start py-8 px-8 w-80 max-h-60"
          >
            {/* Login Inputs */}
            <input
              className={`${
                isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-green-700`}
              name="loginEmail"
              type="text"
              placeholder="Email"
            />
            <input
              className={`${
                isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-green-700`}
              name="loginPassword"
              type="password"
              placeholder="Password"
            />

            {/* SignUp Inputs */}
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-green-700`}
              name="userName"
              type="text"
              placeholder="Name"
            />
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-green-700`}
              name="signupEmail"
              type="text"
              placeholder="Email"
            />
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-green-700`}
              name="signupPassword"
              type="password"
              placeholder="Password"
            />
            <input
              className={`${
                !isLoginFormVisible ? "block" : "hidden"
              } w-full bg-white px-2 border border-gray-400 rounded-lg my-2 py-2 outline-none focus:border-green-700`}
              name="signupConfirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </form>
          <span className="flex flex-col w-full items-center justify-center">
            {/* <span className={`${isRequestSent ? "block" : "hidden"} mt-10`}>
                <Image src="/spinner.gif" width={32} height={32} />
              </span> */}
            <button
              form="loginSignupForm"
              className={`w-1/2 h-10 bg-green-500 rounded text-white mt-10`}
              type="submit"
            >
              {isLoginFormVisible ? "Login" : "Signup"}
            </button>
            <button
              type="button"
              className="text-gray-700 cursor-pointer my-5"
              onClick={toggleLoginSignup}
            >
              {isLoginFormVisible ? "Create account" : "Already have account?"}
            </button>
          </span>
        </span>
      </div>
    </main>
  );
};
