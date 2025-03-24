'use client'

import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover, ToggleButton } from "react-aria-components"
import React from "react"
import { LocalizedStringProvider } from "react-aria-components/i18n"

const FilterComponent = () => {
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
                    <div>
                        <h1 className="font-bold">Promo Types</h1>
                        <ToggleButton className={"p-3 m-2"}>MV</ToggleButton>
                        <ToggleButton className={"p-3 m-2"}>Teaser</ToggleButton>
                        <ToggleButton className={"p-3 m-2"}>Visualizer</ToggleButton>
                    </div>

                    <div>
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