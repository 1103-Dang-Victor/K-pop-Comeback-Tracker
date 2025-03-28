'use client';
import { createContext, ReactNode, useContext, useReducer } from "react";
import { filterReducer, FilterState, ReducerAction, initialFilters } from "./filterReducer";

export type FilterContextType = {
    filterContextState: FilterState;
    filterContextDispatch: React.Dispatch<ReducerAction>;
}

export const filterContext = createContext<FilterContextType| undefined>(undefined);

export function useFilterContext() {
    const filterConfiguration = useContext(filterContext);

    if (filterConfiguration === undefined) {
        throw new Error("filterConfig was undefined!");
    }

    return filterConfiguration;
}

export const FilterProvider = ({children}: {children:ReactNode}) => {
    const [filterContextState, filterContextDispatch] = useReducer(filterReducer, initialFilters);
    return (
        <filterContext.Provider value={{filterContextState, filterContextDispatch}}>
            {children}
        </filterContext.Provider>
    )
}