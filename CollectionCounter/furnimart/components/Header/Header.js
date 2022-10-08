import { useRouter } from "next/router";
import { useState } from "react";
import { FiShoppingCart, FiUser } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import Link from "next/link";
import {
  currentCartState,
  currentUserState,
  numberOfItemsInCart,
  userNameState,
} from "../../lib/recoil-atoms";

export const Header = () => {
  const userName = useRecoilValue(userNameState);
  const cartItemNumber = useRecoilValue(numberOfItemsInCart);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const router = useRouter();
  const resetUser = useResetRecoilState(currentUserState);
  const resetCart = useResetRecoilState(currentCartState);

  const logoutUser = () => {
    // Reset user and cart atoms
    resetUser();
    resetCart();
    localStorage.removeItem("currentUser");
    router.push("/login");
  };

  return (
    <div className="header bg-gray-100 py-8">
      <div className="container mx-auto px-40">
        <div className="flex items-center justify-between">
          <div className="header__logo">
            <Link href="/">
              <h1 className="text-3xl font-bold cursor-pointer">
                <span className="text-green-500">Furni</span>mart
              </h1>
            </Link>
          </div>
          <div className="header__searchbar flex items-center justify-center border rounded-lg bg-white">
            <input
              type="text"
              className="w-96 bg-white mx-1 p-2 outline-none"
              name="searchbar"
              id="searchbar"
            />
            <span className="mx-3 text-xl text-gray-400">
              <IoSearch />
            </span>
          </div>
          <ul className="header__navigation text-xl text-gray-700 font-medium cursor-pointer select-none">
            <li>
              <div className="relative">
                {cartItemNumber > 0 && (
                  <span className="absolute flex items-center justify-center top-0 right-full text-sm font-bold bg-green-500 text-white w-5 h-5 rounded-full">
                    {cartItemNumber}
                  </span>
                )}
                <Link href="/cart">
                  <FiShoppingCart />
                </Link>
              </div>
            </li>
            <li>
              <div className="relative">
                <FiUser
                  onClick={(e) => setIsSettingsVisible(!isSettingsVisible)}
                />
                <ul
                  className={`${
                    isSettingsVisible ? "scale-100" : "scale-0"
                  } transform origin-top-right overflow-hidden transition duration-75 ease-in z-10 absolute right-0 top-full bg-white rounded shadow-2xl text-center mt-3`}
                >
                  <li className="px-4 w-full py-1">
                    Hi, <span className="font-bold">{userName}</span>
                  </li>
                  <li className="px-4 w-full py-1 hover:bg-gray-300 whitespace-nowrap">
                    My Orders
                  </li>
                  <li className="px-4 w-full py-1 hover:bg-gray-300">
                    Settings
                  </li>
                  <li
                    className="px-4 w-full py-1 hover:bg-gray-300"
                    onClick={logoutUser}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
