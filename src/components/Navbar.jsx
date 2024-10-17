import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { selectTotalQTY, setOpenCart, selectUser, setUser } from "../app/CartSlice.js";
import {
  signOut,
  onAuthStateChanged,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { app } from "../firebase.js";

import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  ArrowLeftOnRectangleIcon
} from "@heroicons/react/24/outline";


import logo from "../assets/logo.png";
import { set } from "lodash";
const auth = getAuth(app);
const Navbar = () => {
  const [islogin, setIslogin] = useState(false);
  const [navState, setNavState] = useState(false);
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY);
  const user=useSelector(selectUser)
  const loginHandle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    
  };
  const logout = () => {
    signOut(auth);
    setIslogin(false)
    dispatch(
        setUser({
          user: false,
        })
      );
  };
  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIslogin(true)
        dispatch(
            setUser({
              user: user,
            })
          );
          toast.success("Login Successfull");
      } else {
        setIslogin(false)
        dispatch(
            setUser({
              user: false,
            })
          );
      }
    });
  }, []);
  
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo/img"
              className={`w-16 h-auto ${navState && "filter brightness-0"}`}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <l1 className="grid items-center">
              {islogin ? (
                 <button
                 type="button"
                 onClick={logout}
                 className="border-none outline-none active:scale-110 transition-all duration-300 relative"
               >
                  <ArrowLeftOnRectangleIcon className={`icon-style hover:text-red-500 ${
                  navState && "text-slate-900 transition-all duration-300 hover:text-red-500"
                }`}/>
                </button>
              ) : (
                // If user is not logged in, show the button
                <button
                  type="button"
                  className="button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5 "
                  onClick={loginHandle}
                >
                  Sign Up
                </button>
              )}
            </l1>

            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  navState && "text-slate-900 transition-all duration-300"
                }`}
              />
            </li>
            <li className="grid items-center">
              <button
                type="button"
                onClick={onCartToggle}
                className="border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    navState && "text-slate-900 transition-all duration-300"
                  }`}
                />
                <div
                  className={`absolute top-4 right-0 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    navState
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  }`}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
