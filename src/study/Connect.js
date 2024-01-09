/**
 *  component 通信
 */

// 父子通信
// 父传子
// 子传父： 在子组件中调用父组件的函数进行传递参数

function Parent() {
  const name = "erXun";
  const getMsg = (msg) => {
    console.log(msg);
  };

  return (
    <Children name={name} onGetMsg={getMsg}>
      <div>信息： 123</div>
    </Children>
  );
}

function Children(props) {
  //   console.log(props);
  const childMsg = "this msg from children";
  return (
    <>
      来自父组件的 name 值为 {props.name} {props.children}
      <button onClick={() => props.onGetMsg(childMsg)}>子传父</button>
    </>
  );
}

function Connect() {
  return (
    <>
      <Parent />
    </>
  );
}

export default Connect;
