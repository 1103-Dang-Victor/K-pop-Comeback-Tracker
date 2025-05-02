'use client';
import React from "react";
import { useFilterContext } from "../hooks/filterContext";
import { applyFiltersLogic } from "../scripts/filterApplyFiltersLogic";

const EventCardComponent = () => {
    const {filterContextState} = useFilterContext();
    let matchedData = applyFiltersLogic();
    console.log(matchedData.length);
    return  (
        <div className={'m-2 p-2 min-h-96'}>
            {(filterContextState.artist.length === 0 && filterContextState.promoType.length == 0
            && filterContextState.songType.length === 0) ? <p>No filters selected yet. Please select your filters.</p> 
                : (filterContextState.filtersActive) ? (
                    <>
                        {(matchedData.length > 0) ? (matchedData.map((singleResult) => {
                            return <p key={singleResult.identifier}>{singleResult.value}</p>
                        })) : (<p>No Matches Found.</p>)}
                    </>)
                        : <p>Filters have been selected. Please hit apply.</p>}
            
            
        </div>
    )
}

export default EventCardComponent;