import { useContext, createContext } from "react";
import { types, Instance } from "mobx-state-tree";

const RootModel: any = types.model({});

export interface RootInstance extends Instance<typeof RootModel> {}

export const RootStoreContext = createContext<null | RootInstance>(null);

export const rootStore = RootModel.create({});

export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
