import { Fragment, useState } from "react";
import { test } from "./../hooks/useRef";

function Children({ item, setItem }: any) {
  const setData = () => {
    setItem("bbb");
  };

  return (
    <Fragment>
      <div>父级传过来的组件是:{item}</div>
      <button onClick={setData}>点击修改父组件里面的值</button>
    </Fragment>
  );
}

function Parent() {
  let [test, setTest] = useState("aaa");

  return (
    <Fragment>
      <Children item={test} setItem={setTest}></Children>
      <div>父组件里面的值是{test}</div>
    </Fragment>
  );
}

export default Parent;
