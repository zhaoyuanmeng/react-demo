import { Link, Outlet } from "react-router-dom";
function Main() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/day3/pageOne">day3/pageOne</Link>
          </li>
          <li>
            <Link to="/day3/pageTwo">day3/pageTwo</Link>
          </li>
          <li>
            <Link to="/day4/pageOne">day4/pageTwo</Link>
          </li>
          <li>
            <Link to="/communicate">组件通信</Link>
          </li>
          <li>
            <Link to="/effect">effect</Link>
          </li>
          <li>
            <Link to="/slot">slot</Link>
          </li>
          <li>
            <Link to="/useReducer">useReducer</Link>
          </li>
          <li>
            <Link to="/useCallback">useCallback</Link>
          </li>
        </ul>
      </nav>
      {/* 指定路由组件呈现的位置  其实就是router-view*/}
      <Outlet />
    </div>
  );
}

export default Main;
