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
        </ul>
      </nav>
      {/* 指定路由组件呈现的位置  其实就是router-view*/}
      <Outlet />
    </div>
  );
}

export default Main;
