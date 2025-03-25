'use client'

import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover, ToggleButton } from "react-aria-components"
import React, { useReducer } from "react"
import { filterReducer, initialFilters, ReducerActionType} from "../hooks/filterReducer"

const FilterComponent = () => {
    const [filters, filterDispatch] = useReducer(filterReducer, initialFilters);

    return (
        <>
            <div className="flex m-3 p-2 flex-wrap">
                <div className="basis-1/2">
                    <ComboBox className={""}>
                        <Label className="font-bold">Artists</Label>
                        <div>
                            <Input />
                            <Button>▼</Button>
                        </div>
                        <Popover>
                            <ListBox>
                                <ListBoxItem>Test</ListBoxItem>
                            </ListBox>
                        </Popover>

                    </ComboBox>
                </div>

                <div className="basis-1/2">
                    <div className="promoFilterToggles">
                        <h1 className="font-bold">Promo Types</h1>
                        
                        <ToggleButton className={"p-3 m-2"}
                            isSelected={filters.promoType.includes("mv")}
                            onPress={() => {
                                filterDispatch({
                                    type: ReducerActionType.promoFilterEvent,
                                    payload: {category: "promoType", value: "mv", preValue: filters.promoType.includes("mv")}
                                })
                            }}
                        >MV</ToggleButton>
                        
                        <ToggleButton className={"p-3 m-2"}>Teaser</ToggleButton>
                        <ToggleButton className={"p-3 m-2"}>Visualizer</ToggleButton>
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