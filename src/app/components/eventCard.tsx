'use client';
import React from "react";
import { useFilterContext } from "../hooks/filterContext";
import { applyFiltersLogic } from "../scripts/filterApplyFiltersLogic";

const EventCardComponent = () => {
    const {filterContextState} = useFilterContext();
    let matchedData = applyFiltersLogic();

    return  (
        <div className={'m-2 p-2 min-h-96'}>
            {(filterContextState.artist.length === 0 && filterContextState.promoType.length == 0
            && filterContextState.songType.length === 0) ? <p>No filters selected yet. Please select your filters.</p> 
                : (filterContextState.filtersActive) ? (
                    <>
                        {matchedData.length > 0} ? {matchedData.map((elem) => <p>{elem}</p>)}
                    </>)
                        : <p>Filters have been selected. Please hit apply.</p>}
            
            <br />
            <p>{filterContextState.filtersActive ? "True" : "False"}</p>
            <br />
            <br />
        </div>
    )
}

export default EventCardComponent;