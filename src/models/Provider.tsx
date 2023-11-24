import React, { useEffect, useState } from "react";
import { rootStore, RootStoreContext } from "./Root";

export const Provider = ({ children }: any) => {
  return (
    <RootStoreContext.Provider
      value={{
        ...rootStore,
      }}
    >
      {children}
    </RootStoreContext.Provider>
  );
};
