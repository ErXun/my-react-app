/**
 * B站 留言
 */

import { useState, useEffect } from "react";

function List({ commentArr }) {
  return (
    <div className="list">
      {commentArr.map((ele) => {
        return <div key={ele.date}>{ele.content}</div>;
      })}
    </div>
  );
}

function Submit({ inputChange, handleSubmit }) {
  // input Value
  // const [iValue, setIValue] = useState("");
  // function inputChange(value) {
  //   setIValue(value);
  // }

  return (
    <div>
      <img src="" alt="" />
      <input
        onChange={(e) => {
          inputChange(e.target.value);
        }}
      />
      <button onClick={() => handleSubmit()}>发布</button>
    </div>
  );
}

export default function Comment() {
  const [status, setStatus] = useState([
    {
      name: "最热",
      arr: [],
      isSelect: true,
      className: "t-item t-item-selected",
    },
    {
      name: "最新",
      arr: [],
      isSelect: false,
      className: "t-item",
    },
  ]);

  function handleSelect(item) {
    const arr = status.map((ele) => {
      ele.isSelect = ele.name === item.name;
      ele.className = ele.isSelect ? "t-item t-item-selected" : "t-item";
      return ele;
    });
    setStatus(arr);
  }

  // 评论 list
  const [commentArr, setCommentArr] = useState([]);
  const [iValue, setIValue] = useState("");
  function inputChange(value) {
    setIValue(value);
  }
  function handleSubmit() {
    const arr = JSON.parse(JSON.stringify(commentArr));
    arr.unshift({
      content: iValue,
      date: new Date().valueOf(),
    });
    setCommentArr(arr);
  }

  useEffect(() => {
    console.log("commentArr", commentArr);
  });

  return (
    <>
      <div className="title flex">
        评论 545{" "}
        <div className="flex">
          {status.map((item, index) => {
            return (
              <div
                className={item.className}
                key={index}
                onClick={() => handleSelect(item)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
      <Submit inputChange={inputChange} handleSubmit={handleSubmit} />
      <List commentArr={commentArr} />
    </>
  );
}
