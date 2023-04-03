import React, {  useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";
import like from "../images/Path.png";
import tik from "../images/Group 3921.png"

export default function Advert(data) {
  const [likes, setLikes] = useState(false);

  const likeHouse = () => {
    setLikes(!likes);
  };

  return (
    <>
      <div className=" mb-5">
        <Card className="mt-4 cards" style={{ border: "none" }}>
          <CardHeader className="p-0">
            <img
              src={like}
              alt=""
              className={`like-img  mt-2 me-2 cursor-pointer ${
                likes ? "liked" : ""
              }`}
              onClick={likeHouse}
            ></img>
            <img
              className="cards-img w-100"
              src={data?.data?.photo_links}
              alt="no img"
            ></img>
          </CardHeader>
          <CardBody>
            <div>
              <div className="mb-1 d-flex align-items-center">
                <span className="font-size-18 font-weight-400">
                  {data?.data?.monthly_rental_fee}
                </span>{" "}
                / <span className="font-size-18 font-weight-400">Aylık</span>
                <img src={tik} className="tik-icon ms-3"/>
              </div>
              <p className="font-size-17 font-weight-500 mb-1">
                {data?.data?.public_address}
              </p>
              <p className="font-size-15 font-weight-500 mb-1">
                {data?.data?.detail_text}
              </p>
            </div>
          </CardBody>
          <CardFooter>
            <div className="d-flex justify-content-between mt-3 pb-3">
              <span className="font-size-18 font-weight-400">
                {data?.data?.net_area}m² Net
              </span>

              <span className="font-size-18 font-weight-500">
                {data?.data?.room_number}+{data?.data?.lounge_number} |{" "}
                {data?.data?.bathroom_number} Banyo
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
