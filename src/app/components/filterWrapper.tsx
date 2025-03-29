'use client';
import React from "react"
import { Button, ToggleButton } from "react-aria-components"
import FilterSearchComponent from "./filterSearch";
import { useFilterContext } from "../hooks/filterContext";
import { ReducerActionType } from "../hooks/filterReducer";

const FilterComponent = () => {
    const {filterContextState, filterContextDispatch} = useFilterContext();

    return (
        <> 
            <div className="flex m-3 p-2 flex-wrap">
                <FilterSearchComponent></FilterSearchComponent>

                <div className="basis-1/2">
                    <div>
                        <h1 className="font-bold">Promo Types</h1>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase
                        ${filterContextState.promoType.includes("mv") ? "bg-accent text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filterContextState.promoType.includes("mv")}
                            onPress={() => {
                                filterContextDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "mv", preValue: filterContextState.promoType.includes("mv")}
                                })
                                console.log(filterContextState);
                            }}
                        >MV</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase 
                        ${filterContextState.promoType.includes("teaser") ? "bg-accentTwo text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filterContextState.promoType.includes("teaser")}
                            onPress={() => {
                                filterContextDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "teaser", preValue: filterContextState.promoType.includes("teaser")}
                                })
                                console.log(filterContextState);
                            }}
                        >Teaser</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-2 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase 
                        `}
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