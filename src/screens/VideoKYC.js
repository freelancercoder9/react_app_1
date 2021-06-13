import React from "react";
import MenuOption from "../components/MenuOption";
import SearchUser from "../components/SearchUser";
import { faBars, faPlus, faPersonBooth, faUser, faCommentDots, faBox, faList, faMap, faScrewdriver } from "@fortawesome/free-solid-svg-icons";
function VideoKYC() {
  const menuList = [
    { iconName: faBars, menuName: "WorkApps", isHeader: true, isLine: true },
    { iconName: faPlus, menuName: "New", isHeader: false, isLine: false },
    { iconName: faPersonBooth, menuName: "Available", isHeader: false, isLine: false },
    { iconName: faUser, menuName: "Contacts", isHeader: false, isLine: true },
    { iconName: faCommentDots, menuName: "Chats", isHeader: false, isLine: false },
    { iconName: faBox, menuName: "Video KYC", isHeader: false, isLine: false },
    { iconName: faCommentDots, menuName: "KYC Bank", isHeader: false, isLine: false },
    { iconName: faList, menuName: "Memo", isHeader: false, isLine: false },
    { iconName: faMap, menuName: "Map", isHeader: false, isLine: true },
    { iconName: faScrewdriver, menuName: "Admin", isHeader: false, isLine: true },
  ];
  const names = ["Vivek k shahir", "Shailesh Chawda", "Rajendra Desmane", "Kiran Kumar", "Balu"];
  const clickEvent = (optionName) => {
    console.log("clicked : ", optionName);
  };
  return (
    <div className="videoKYC">
      <div>
        {menuList.map((item, index) => {
          return <MenuOption onClickEvent={clickEvent} iconName={item.iconName} menuName={item.menuName} isHeader={item.isHeader} isLine={item.isLine} key={index}></MenuOption>;
        })}
      </div>
      <div>
        <SearchUser userList={names}></SearchUser>
      </div>
    </div>
  );
}

export default VideoKYC;
