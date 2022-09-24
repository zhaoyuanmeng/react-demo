import { makeAutoObservable } from "mobx";
const data = "bbb";

class DataBStore {
  public dataB = data;

  constructor() {
    makeAutoObservable(this);
  }
  setdataB = (data: string) => {
    this.dataB = data;
  };
}

export default DataBStore;
