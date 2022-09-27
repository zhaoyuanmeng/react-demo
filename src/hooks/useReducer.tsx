import { useReducer } from "react";

const initState = {
  count: 0,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

/*
 *@Author: 赵元达
 *@Date: 2022-09-27 11:15:26
 *@parms:
 *@Description: 计数器组件
 */
function Counter() {
  const [state, dispatch] = useReducer(reducer, initState);

  const handleAdd = () => {
    return dispatch({
      type: "increment",
    });
  };
  const handleSub = () => {
    return dispatch({
      type: "decrement",
    });
  };

  return (
    <div>
      count:{state.count}
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
}

export default Counter;
