import React from "react";

import DataAStore from "./A";
import DataBStore from "./B";

class RootStore {
  dataAStore;
  dataBStore;

  constructor() {
    this.dataAStore = new DataAStore();
    this.dataBStore = new DataBStore();
  }
}
const StroeContext = React.createContext(new RootStore());

export const useStores = () => {
  return React.useContext(StroeContext);
};
