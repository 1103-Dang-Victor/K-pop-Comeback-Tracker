'use client';
import React from "react";
import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover } from "react-aria-components";
import { filterJSONParser } from "../scripts/filterJSONParser";

const FilterSearchComponent = () => {
    const artists = filterJSONParser();

    return (
        <div className="basis-1/2 ">
            <ComboBox className={`mr-4`}>
                <Label className="font-bold">Artists</Label>
                    <div className={`whitespace-nowrap`}>
                        <Input className={`bg-primary border-2 border-tBase rounded-md pl-2 mb-2 inline max-w-48`}
                                inputMode="text" type="search" />
                        <Button className={``}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`fill-tBase w-8 h-8 inline`}><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </Button>
                    </div>
                <Popover>
                    <ListBox selectionMode="multiple">
                        
                    </ListBox>
                </Popover>

            </ComboBox>
        </div>
    )
}

export default FilterSearchComponent;