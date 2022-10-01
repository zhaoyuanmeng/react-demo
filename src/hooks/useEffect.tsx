import { useState } from "react";
import { useEffect } from "react";

function Effect() {
  const [data, setData] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setData(2);
    }, 1000);
  });
  return <div>data:{data}</div>;
}

export default Effect;
