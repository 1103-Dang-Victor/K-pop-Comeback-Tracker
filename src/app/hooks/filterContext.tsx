import { createContext, useContext } from "react";
import { FilterState, ReducerAction } from "./filterReducer";

export type FilterContextType = {
    filterContextState: FilterState;
    filterContextDispatch: React.Dispatch<ReducerAction>;
}

export const filterContext = createContext<FilterContextType| undefined>(undefined);

