'use client';
import React from "react";
import { Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover } from "react-aria-components";
import { filterJSONParser } from "../scripts/filterJSONParser";
import { useFilterContext } from "../hooks/filterContext";
import { ReducerActionType } from "../hooks/filterReducer";

const FilterSearchComponent = () => {
    const {filterContextState, filterContextDispatch} = useFilterContext();
    const artists = filterJSONParser();

    return (
        <div className="basis-1/2">
            <ComboBox className={`mr-4`}>
                <Label className="font-bold">Artists</Label>
                    <div className={`whitespace-nowrap`}>
                        <Input className={`bg-primary border-2 border-tBase rounded-md pl-2 mb-2 inline max-w-48`}
                                inputMode="text" type="search" />
                        <Button className={``}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={`fill-tBase w-8 h-8 inline`}><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                        </Button>
                    </div>
                <Popover className={`border-2 border-tBase rounded-md p-1 m-1 min-w-48 shadow-sm shadow-tBase`}>
                    <ListBox selectionMode="multiple"
                        renderEmptyState={() => "No artists found. :( "}>
                        {Object.entries(artists).map(([artistGroup, releases]) => 
                            <ListBoxItem 
                            className={`p-1 hover:shadow-lg hover:shadow-accent data-[pressed]:bg-accent
                            rounded-md hover:ring-accent hover:ring-2`} 
                            onAction={() => {
                                filterContextDispatch({
                                    type: ReducerActionType.artistFilterEvent,
                                    payload: {category: "artist", value: artistGroup}
                                });
                            }}
                            key={artistGroup}
                            >{artistGroup}</ListBoxItem>)}
                    </ListBox>
                </Popover>
            </ComboBox>
        </div>
    )
}

export default FilterSearchComponent;