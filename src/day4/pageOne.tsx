
import { useStores } from "../store";
import { observer } from "mobx-react";

const PageOne = observer(() => {
  const {dataAStore} = useStores()
  const {dataA} = dataAStore
  return <div>123{ dataA}</div>
})

export default PageOne;