import { useState } from "react";
import Comment from "./Comment.js";
import NewForm from "./study/NewForm.js";
import Connect from "./study/Connect.js";

function App() {
  return (
    <div>
      {/* <MyButton />
      <MultiplyButton /> */}

      {/* <Comment /> */}
      {/* <NewForm /> */}

      <Connect />
    </div>
  );
}

/**
 *  onClick 函数传参
 */
function handleClick() {
  console.log("我点击了");
}

function handleClick2(name, e) {
  console.log("-----" + name, e);
}

function MyButton() {
  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClick2("传参111", e)}>Click me2</button>
    </>
  );
}

/**
 *  useState， React 的 state 是只读的，不能直接修改 state（值会变化，但视图不会更新），
 *  需要通过 setState 来替换 state
 */
function MultiplyButton() {
  const [obj, setObj] = useState({
    name: "张三",
    age: 18,
  });
  const handleObjChange = () => {
    setObj({
      ...obj,
      name: "李四",
    });
    alert("enhhhhh");
  };

  const [arr, setArr] = useState([1, 2, 3]);

  const handleArrChange = () => {
    arr.splice(0, 1, 99);
    const newArr = [...arr];
    setArr(newArr);
  };

  return (
    <>
      <div onClick={handleObjChange}>{obj.name}</div>
      <div onClick={handleArrChange}>{arr}</div>
    </>
  );
}

export default App;
