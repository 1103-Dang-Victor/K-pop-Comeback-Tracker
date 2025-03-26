'use client'

import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover, ToggleButton } from "react-aria-components"
import React, { useReducer, useEffect } from "react"
import { filterReducer, initialFilters, ReducerActionType} from "../hooks/filterReducer"

const FilterComponent = () => {
    const [filters, filterDispatch] = useReducer(filterReducer, initialFilters);

    //useEffect(() => {
        //console.log(filters.promoType.includes("mv"))});
        //console.log("Current Filter State on Load:", filters);}, [filters]);


    return (
        <>
            <div className="flex m-3 p-2 flex-wrap">
                <div className="basis-1/2 ">
                    <ComboBox>
                        <Label className="font-bold">Artists</Label>
                        <div>
                            <Input className={"bg-primary border-2 border-tBase rounded-md"}
                                   inputMode="text" type="search" />
                            <Button>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-tBase w-8 h-8 pt-3"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                            </Button>
                        </div>
                        <Popover>
                            <ListBox>
                                <ListBoxItem>Test</ListBoxItem>
                            </ListBox>
                        </Popover>

                    </ComboBox>
                </div>

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
                        
                        <ToggleButton className={"p-3 m-2 border-2 border-solid rounded-lg border-tBase"}>Teaser</ToggleButton>
                        <ToggleButton className={"p-3 m-2 border-2 border-solid rounded-lg border-tBase"}>Visualizer</ToggleButton>
                    </div>

                    <div className="songFilterToggles">
                        <h1 className="font-bold">Song Types</h1>
                        <ToggleButton className={"p-3 m-2"}>Album</ToggleButton>
                        <ToggleButton className={"p-3 m-2"}>EP</ToggleButton>
                        <ToggleButton className={"p-3 m-2"}>Single</ToggleButton>
                    </div>
                </div>
                
            </div>
            

        </>
    )
}

export default FilterComponent;