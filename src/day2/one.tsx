// 使用舒服的hooks
import { useState } from "react";

// 经纬度转换成三角函数中度分表形式。
function rad(d: any) {
  return (d * Math.PI) / 180.0;
}

// 根据经纬度计算距离，参数分别为第一点的纬度，经度；第二点的纬度，经度
function getDistance(lat1: any, lng1: any, lat2: any, lng2: any) {
  var radLat1 = rad(lat1);
  var radLat2 = rad(lat2);
  var a = radLat1 - radLat2;
  var b = rad(lng1) - rad(lng2);
  var s =
    2 *
    Math.asin(
      Math.sqrt(
        Math.pow(Math.sin(a / 2), 2) +
          Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
      )
    );
  s = s * 6378.137; // EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000; //输出为公里

  var distance: any = s;
  var distance_str = "";

  if (parseInt(distance) >= 1) {
    distance_str = distance.toFixed(1) + "km";
  } else {
    distance_str = distance * 1000 + "m";
  }

  //s=s.toFixed(4);
  console.info("lyj 距离是", s);
  console.info("lyj 距离是", distance_str);
  return s;
}

export default function Main() {
  // 声明一个state变量

  const [count, setCount] = useState(0);

  // 点击事件
  const handleCount = () => {
    // 更新count
    setCount(count + 1);
  };
  return (
    <div>
      <p>当前count值：{count}</p>
      <p>
        经纬度对应的值是：
        {getDistance(114.552251, 38.059746, 114.56025, 38.060055)}
      </p>
      <p>
        经纬度对应的值是：
        {getDistance(114.552246, 38.059732, 114.555053, 38.060108)}
      </p>
      <button onClick={handleCount}>+1操作</button>
    </div>
  );
}
