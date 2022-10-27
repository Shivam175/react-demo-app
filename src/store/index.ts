import { createStore, persist } from "easy-peasy";
import { StoreModel } from "./interface/index";
import AppModel from "./model/index";

const store = createStore<StoreModel>(persist(AppModel));

export default store;