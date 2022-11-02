import "./Head.css";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Head = () => {
  const [showModal, setShowModal] = useState(false);
  const [signState, setSignState] = useState(false);
  return (
    <>
      <div className="d-lg-flex align-items-center justify-content-between header d-none sticky-top px-5">
        <div>
          <img alt="" src="/images/logo.png" />
        </div>
        <div className="d-flex">
          <div className="input-hidden-label" aria-hidden="true">
            Search for your favorite groups in ATG
          </div>
          <div className="header__search">
            <AiOutlineSearch />
          </div>
          <input
            className="input"
            type="text"
            placeholder="Search for your favorite groups in ATG"
          />
        </div>
        <div className="header__right">
          <div className="d-flex align-items-center">
            {signState ? (
              <div onClick={() => {setSignState(false)}} className="d-flex align-items-center avatar">
                <img src="/images/avatar.png" alt="" />
                <div className="ms-2">Siddharth Goyal</div>
                <BiChevronDown />
              </div>
            ) : (
              <>
                Create an account.
                <span
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  {" "}
                  It's free{" "}
                </span>{" "}
                <BiChevronDown />
              </>
            )}
          </div>
        </div>
      </div>

      <div className="d-lg-none mobile__head">
        <div>
          <AiOutlineArrowLeft />
        </div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Join Group
        </button>
      </div>

      <div
        className={`custom-modal d-flex justify-content-center align-items-center ${
          !showModal && "d-none"
        }`}
      >
        <div className="modal__content container">
          <div className="modal__head d-none d-md-block">
            Let's learn, share & inspire each other with our passion for
            computer engineering. Sign up now 🤘🏼
          </div>
          <div className="modal_form_head">
            <h2>{signState ? `Welcome Back!` : `Create Account`}</h2>
            <div
              onClick={() => {
                setShowModal(false);
              }}
              className="modal__cross"
            >
              <ImCross />
            </div>
            <p className="d-none d-md-block">
              {signState ? "Don't" : "Already"} have an account?{" "}
              <span
                onClick={() => {
                  setSignState(!signState);
                }}
              >
                {signState ? "Create New for free" : "sign In"}
              </span>
            </p>
          </div>
          <div className="row pb-4">
            <div className="col-md-6">
              <form action="">
                <div className={`d-flex ${signState && "d-none"}`}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input
                  className={`d-block ${signState && "d-none"}`}
                  type="password"
                  placeholder="Confirm Password"
                />
                <div className="row align-items-center">
                  <div className="col-6 col-md-12">
                    <button>{signState ? `Sign In` : `Create Account`}</button>
                  </div>
                  <div className="col-6 d-md-none">
                    <div
                      onClick={() => {
                        setSignState(!signState);
                      }}
                      className="text-end button__signIn"
                    >
                      or, {signState ? `Create Account` : `Sign In`}
                    </div>
                  </div>
                </div>
              </form>
              <button>
                {" "}
                <span className="facebook__icon">
                  <BsFacebook />
                </span>{" "}
                Sign {signState ? `In` : `Up`} with Facebook
              </button>
              <button>
                <span>
                  <FcGoogle />
                </span>{" "}
                Sign {signState ? `In` : `Up`} with Google
              </button>
              {signState && (
                <p className="forgot__password">Forgot password?</p>
              )}
            </div>
            <div className="col-md-6 d-md-flex flex-column align-items-center justify-content-end">
              <img
                className="d-none d-md-block"
                src="/images/modal.png"
                alt=""
              />
              <p className={`modal__terms ${signState ? "d-none" : ""}`}>
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Head;
