import { Link, Outlet } from "react-router-dom";
function Main() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/pageOne">pageOne</Link>
          </li>
          <li>
            <Link to="/pageTwo">pageTwo</Link>
          </li>
        </ul>
      </nav>
      {/* 指定路由组件呈现的位置  其实就是router-view*/}
      <Outlet />
    </div>
  );
}

export default Main;
