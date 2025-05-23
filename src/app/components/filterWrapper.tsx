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

                <div className="basis-1/2 text-sm md:text-lg">
                    <div className={'justify-items-center md:justify-items-start'}>
                        <h1 className="font-bold my-2">Promo Types</h1>
                        
                        <ToggleButton className={`p-3 m-1 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase
                        ${filterContextState.promoType.includes("mv") ? "bg-accent text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filterContextState.promoType.includes("mv")}
                            onPress={() => {
                                filterContextDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "mv", preValue: filterContextState.promoType.includes("mv")}
                                })
                            }}
                        >MV</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-1 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase 
                        ${filterContextState.promoType.includes("teaser") ? "bg-accentTwo text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filterContextState.promoType.includes("teaser")}
                            onPress={() => {
                                filterContextDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "teaser", preValue: filterContextState.promoType.includes("teaser")}
                                })
                            }}
                        >Teaser</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-1 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase 
                        ${filterContextState.promoType.includes("visualizer") ? "bg-accentThree text-primary font-bold dark:text-tBase" : ""}`}
                            isSelected={filterContextState.promoType.includes("visualizer")}
                            onPress={() => {
                                filterContextDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "visualizer", preValue: filterContextState.promoType.includes("visualizer")}
                                })
                            }}
                        >Visualizer</ToggleButton>
                
                    </div>

                    <div className={'justify-items-center md:justify-items-start'}>
                        <h1 className="font-bold my-2">Song Types</h1>
                        
                        <ToggleButton className={`p-3 m-1 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase
                        ${filterContextState.songType.includes("album") ? "bg-secondary font-bold dark:text-tBase" : ""}`}
                        isSelected={filterContextState.songType.includes("album")}
                        onPress={() => {
                            filterContextDispatch({
                                type: ReducerActionType.songFilterEvent,
                                payload: {category: "songType", value: "album", preValue: filterContextState.songType.includes("album")}
                            })
                        }}
                        >Album</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-1 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase
                        ${filterContextState.songType.includes("ep") ? "bg-secondaryTwo font-bold dark:text-tBase" : ""}`}
                        isSelected={filterContextState.songType.includes("ep")}
                        onPress={() => {
                            filterContextDispatch({
                                type: ReducerActionType.songFilterEvent,
                                payload: {category: "songType", value: "ep", preValue: filterContextState.songType.includes("ep")}
                            })
                        }}
                        >EP</ToggleButton>
                        
                        <ToggleButton className={`p-3 m-1 b-2 border-2 border-solid rounded-lg border-tBase duration-250
                        hover:shadow-md hover:shadow-tBase
                        ${filterContextState.songType.includes("single") ? "bg-secondaryThree font-bold dark:text-tBase" : ""}`}
                        isSelected={filterContextState.songType.includes("single")}
                        onPress={() => {
                            filterContextDispatch({
                                type: ReducerActionType.songFilterEvent,
                                payload: {category: "songType", value: "single", preValue: filterContextState.songType.includes("single")}
                            })
                        }}
                        >Single</ToggleButton>
                        
                    </div>
                    
                    <p className={'my-8'}><b>Selected Artists:</b> {filterContextState.artist.join(', ')} </p>
                    
                    <Button className={`p-3 m-1 border-2 border-solid rounded-full border-tBase justify-self-auto
                        hover:shadow-md hover:shadow-tBase`}
                        onPress={() => {
                            filterContextDispatch({
                                type:ReducerActionType.applyFilterEvent
                            });
                            
                        }}
                        > Apply </Button>
                    
                    <Button className={`p-3 m-1 border-2 border-solid rounded-full border-tBase justify-self-auto
                        hover:shadow-md hover:shadow-tBase`}
                        onPress={() => {
                            filterContextDispatch({
                                type: ReducerActionType.clearFilterEvent
                            })
                        }}
                        > Clear </Button>
                    
                </div>
            </div>
        </>
    )
}

export default FilterComponent;