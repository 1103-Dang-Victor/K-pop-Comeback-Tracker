'use client';
import React from "react";
import { useFilterContext } from "../hooks/filterContext";

const EventCardComponent = () => {
    const {filterContextState, filterContextDispatch} = useFilterContext();

    return  (
        <div className={'m-2 p-2'}>
            {(filterContextState.artist.length === 0 && filterContextState.promoType.length == 0
            && filterContextState.songType.length === 0) ? <p>No filters selected yet. Please select your filters.</p> 
                : (filterContextState.filtersActive) ? <p>Filters are active</p> 
                    : <p>Filters are not active</p>}
            
            <br />
            <p>{filterContextState.filtersActive ? "True" : "False"}</p>
            <br />
            <br />
        </div>
    )
}

export default EventCardComponent;