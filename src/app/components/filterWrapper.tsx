'use client';
import React, { useReducer } from "react"
import { Button, ToggleButton } from "react-aria-components"
import { filterReducer, initialFilters, ReducerActionType} from "../hooks/filterReducer"
import FilterSearchComponent from "./filterSearch";
//import { filterContext } from "../hooks/filterContext";

const FilterComponent = () => {
    const [filters, filterDispatch] = useReducer(filterReducer, initialFilters);


    return (
        <> 
            {/*<filterContext.Provider value={{filterContextState: filters, filterContextDispatch: filterDispatch}} ></filterContext.Provider>*/}
            <div className="flex m-3 p-2 flex-wrap">
                <FilterSearchComponent></FilterSearchComponent>

                <div className="basis-1/2">
                    <div>
                        <h1 className="font-bold">Promo Types</h1>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase 
                        ${filters.promoType.includes("mv") ? "bg-accent text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filters.promoType.includes("mv")}
                            onPress={() => {
                                filterDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "mv", preValue: filters.promoType.includes("mv")}
                                })
                            }}
                        >MV</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase 
                        ${filters.promoType.includes("teaser") ? "bg-accentTwo text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filters.promoType.includes("teaser")}
                            onPress={() => {
                                filterDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "teaser", preValue: filters.promoType.includes("teaser")}
                                })
                            }}
                        >Teaser</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase 
                        ${filters.promoType.includes("visualizer") ? "bg-accentThree text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filters.promoType.includes("visualizer")}
                            onPress={() => {
                                filterDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "visualizer", preValue: filters.promoType.includes("visualizer")}
                                })
                            }}
                        >Visualizer</ToggleButton>
                
                    </div>

                    <div className="songFilterToggles">
                        <h1 className="font-bold">Song Types</h1>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase`}>Album</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase`}>EP</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase`}>Single</ToggleButton>
                    </div>

                        <Button className={`p-3 m-2 border-2 border-solid rounded-full border-tBase
                            hover:shadow-md hover:shadow-tBase`}> Apply </Button>
                    
                        <Button className={`p-3 m-2 border-2 border-solid rounded-full border-tBase
                            hover:shadow-md hover:shadow-tBase`}> Clear </Button>
                </div>
            </div>
            
            
        </>
    )
}

export default FilterComponent;