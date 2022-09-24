import { makeAutoObservable } from "mobx";
const data = "aaa";

class DataAStore {
  public dataA = data;

  constructor() {
    makeAutoObservable(this);
  }
  setdataA = (data: string) => {
    this.dataA = data;
  };
}

export default DataAStore;
