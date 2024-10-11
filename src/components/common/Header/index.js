import React from "react";
import { HeaderContainer, Username, Avatar } from "./styles";
import BoundedContainer from "../Bounded";

const UserProfile = () => {
  return (
    <BoundedContainer maxWidth="1580px">
      <HeaderContainer>
        <Username>Name Surname</Username>
        <Avatar>CC</Avatar>
      </HeaderContainer>
    </BoundedContainer>
  );
};

export default UserProfile;
