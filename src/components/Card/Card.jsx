import React, { useEffect, useState } from "react";
import * as SC from "./Card.styled";
import logo from "../../assets/Logo-goit.png";
import image from "../../assets/picture1.png";
import icon from "../../assets/boy.png";

const Card = () => {
  const [isFollow, setIsFollow] = useState(
    localStorage.getItem("isFollow") === "true" ? true : false
  );
  const [follow, setFollow] = useState(
    parseInt(localStorage.getItem("follow")) || 100500
  );

  const handleClick = () => {
    setIsFollow(!isFollow);

    !isFollow ? setFollow((prev) => prev + 1) : setFollow((prev) => prev - 1);
  };

  useEffect(() => {
    localStorage.setItem("isFollow", isFollow);
    localStorage.setItem("follow", follow);
  }, [isFollow, follow]);


  return (
    <SC.Card>
      <SC.LogoImg src={logo} alt="logo" />
      <SC.Img src={image} alt="notification" />
      <SC.Line></SC.Line>
      <SC.IconImg src={icon} alt="notification" />
      <SC.Tweets>777 TWEETS</SC.Tweets>
      <SC.Followers>{follow.toLocaleString()} FOLLOWERS</SC.Followers>
      <SC.Button type="button" onClick={handleClick} isFollow={isFollow}>
        {isFollow ? "FOLLOWING" : "FOLLOW"}
      </SC.Button>
    </SC.Card>
  );
};

export default Card;
