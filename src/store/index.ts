import React from "react";

import DataAStore from "./A";
import DataBStore from "./B";

class RootStore {
  public dataAStore: Object;
  public dataBStore: Object;

  constructor() {
    this.dataAStore = new DataAStore();
    this.dataBStore = new DataAStore();
  }
}
const StroeContext = React.createContext(new RootStore());

export const useStores = () => {
  return React.useContext(StroeContext);
};
