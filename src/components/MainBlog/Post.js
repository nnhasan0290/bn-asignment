import { FiMoreHorizontal } from "react-icons/fi";
import { BsShareFill, BsEye } from "react-icons/bs";
import { IoMdBriefcase } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { useState } from "react";
import postObject from "./postObject";
import {BsCalendarEvent} from "react-icons/bs";

const Post = () => {
  const [showOption, setShowOption] = useState(false);
  return postObject.map((each, i) => {
    return (
      <div key={i} className="post my-3">
        {each.image && (
          <div className="post__image">
            <img width="100%" src={each.image} alt="" />
          </div>
        )}

        <div className="post__content">
          <div className="post__category">
            <span className="pb-md-2 pb-1">{each.category}</span>
          </div>
          <div className="d-flex justify-content-between post__title">
            <div className="me-3">{each.title}</div>
            <div
              onClick={() => setShowOption(!showOption)}
              className="post__title__icon d-flex align-items-center justify-content-center position-relative"
            >
              <FiMoreHorizontal />
              {showOption && (
                <ul className="m-0 position-absolute">
                  <li>Edit</li>
                  <li>Report</li>
                  <li>Option 3</li>
                </ul>
              )}
            </div>
          </div>
          {each.description ? (
            <div className="post__description">
              I’ve worked in UX for the better part of a decade. From now on, I
              plan to rei…
            </div>
          ) : (
            <div className="">
              {
                each.details.company ?(
                  <div className="post__details ">
                <IoMdBriefcase className="" />
                <span>{each.details.company}.</span>
              </div>
                ) : (
                  <div className="post__details ">
                <BsCalendarEvent/>
                <span>{each.details.date}</span>
              </div>
                )
              }
              <div className="post__details">
                <CiLocationOn />
                <span>{each.details.location}</span>
              </div>
              <button
                className={`w-100 post__details__btn text-${each.details.btn_type}`}
              >
                {each.details.btn_text}
              </button>
            </div>
          )}

          <div className="d-flex post__author justify-content-between">
            <div className="d-flex gap-2 align-items-center">
              <div className="mr-2">
                <img src={each.author.img} width={50} height={50} alt="" />
              </div>
            </div>

            <div className="d-lg-flex w-100 justify-content-lg-between ms-2 me-4">
              <div className="">
                <h4 className="p-0 m-0">{each.author.name}</h4>
              </div>
              <div className=" d-flex align-items-center justify-content-start ">
                <div className="me-1">
                  <BsEye />
                </div>
                <span>1.4k views</span>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <div className="post__author__icon d-flex justify-content-center align-items-center">
                <BsShareFill />
                <span className="d-lg-none">share</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Post;
