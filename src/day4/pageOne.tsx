import { useStores } from "../store";
import { observer } from "mobx-react";

const PageOne = observer(() => {
  const { dataAStore } = useStores();
  const { dataA, setdataA } = dataAStore;

  const handle = () => {
    setdataA("1111");
  };

  return (
    <div>
      123{dataA}
      <button onClick={handle}>点击改变</button>
    </div>
  );
});

export default PageOne;
