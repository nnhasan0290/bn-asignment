import Navbar from "../Navbar/Navbar";
import Post from "./Post";
import { BsPencil } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdClear } from "react-icons/md";
import { BsExclamationCircleFill } from "react-icons/bs";
import { FiThumbsUp } from "react-icons/fi";
import "./Post.css";
const MainBlog = () => {
  const recommended_groups = [
    { image: "/images/leisure.png", name: "Leisure" },
    { image: "/images/activism.jpg", name: "activism" },
    { image: "/images/mba.png", name: "Mba" },
    { image: "/images/philosophy.jpg", name: "Philosophy" },
  ];
  return (
    <div className="container">
      <Navbar />
      <div className="row nopadding justify-content-between">
        <div className="col-md-8">
          <Post />
        </div>
        <div className="col-md-3  my-5 d-flex flex-column gap-5 d-none d-md-flex">
          <div className="d-flex justify-content-between align-items-center mainBlog__right">
            <IoLocationOutline />
            <input type="text" placeholder="Enter Your Location" />
            <MdClear />
          </div>
          <div className="right__middle">
            <BsExclamationCircleFill />
            <span>
              Your location will help us serve better and extend a personalised
              experience.
            </span>
          </div>
          <div className="recommended__section">
            <h6 className="d-flex align-items-center gap-2">
              <FiThumbsUp /> Recomended Groups
            </h6>
            <div>
              {recommended_groups.map((each,i) => (
                <div key={i} className="d-flex align-items-center justify-content-between">
                  <div className="my-2 d-flex align-items-center">
                    <img className="me-2" src={each.image} alt="" />
                    <div className="recommended__name">{each.name}</div>
                  </div>
                  <button className="follow__btn">Follow</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mobile__create__post d-md-none ">
        <BsPencil />
      </div>
    </div>
  );
};

export default MainBlog;
