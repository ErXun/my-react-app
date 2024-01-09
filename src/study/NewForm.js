import { useRef, useState } from "react";

function NewForm() {
  const [value, setValue] = useState();
  /**
   * 1. 获取 dom， useRef 生成 ref 对象，绑定 dom 标签，
   *    dom 加载完毕后，通过 ref.current 获取 dom
   */
  const inputRef = useRef(null);
  function getDom() {
    console.dir(inputRef.current);
  }
  return (
    <>
      <div>{value}</div>
      <input
        type="text"
        value={value}
        ref={inputRef}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={getDom}> 点击获取 dom </button>
    </>
  );
}

export default NewForm;
