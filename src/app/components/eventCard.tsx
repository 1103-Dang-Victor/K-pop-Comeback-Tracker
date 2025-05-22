'use client';
import React from "react";
import { useFilterContext } from "../hooks/filterContext";
import { applyFiltersLogic } from "../scripts/filterApplyFiltersLogic";
import { parseCommas } from "../scripts/commaParser";

const EventCardComponent = () => {
    const {filterContextState} = useFilterContext();
    const matchedData = applyFiltersLogic();

    return  (
        <div className={'mx-auto my-2 p-2 min-h-96 text-base md:text-lg w-fit self-center md:w-full'}>
            {(filterContextState.artist.length === 0 && filterContextState.promoType.length == 0
            && filterContextState.songType.length === 0) ? <p>No filters selected yet. Please select your filters.</p> 
                : (filterContextState.filtersActive) ? ( //checking if filters are selected and apply button clicked or not
                    <>
                        {(matchedData.length > 0) ? (matchedData.map((singleResult) => {
                            return <p key={singleResult.identifier} className={`p-2 mt-2 border-b-2 border-solid rounded-lg
                            border-tBase hover:shadow-sm hover:shadow-tBase`}><b>{singleResult.value}</b><br /> 
                                Releases: {singleResult.releaseDate} <br /> 
                                Type: <br /><br />{parseCommas(singleResult.includedTypes)} </p>
                        })) : (<p>No Matches Found.</p>)}
                    </>)
                        : <p>Filters have been selected. Please hit apply.</p>}
            
            
        </div>
    )
}

export default EventCardComponent;