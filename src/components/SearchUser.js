import React, { useState } from "react";
import "../style.css";
import UserComp from "./UserComp";
function SearchUser(props) {
  const [searchText, setSearchText] = useState("");
  const [listData, setListData] = useState([...props.userList]);
  const filterData = () => {
    console.log(searchText);
  };
  return (
    <div className="searchUser">
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          placeholder="Type Name"
        />
        {listData.map((item, index) => {
          return <UserComp userName={item} key={index}></UserComp>;
        })}
      </div>
    </div>
  );
}

export default SearchUser;
