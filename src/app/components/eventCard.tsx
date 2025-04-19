'use client';
import React from "react";
import { useFilterContext } from "../hooks/filterContext";
import { ReducerActionType } from "../hooks/filterReducer";

const EventCardComponent = () => {
    const {filterContextState, filterContextDispatch} = useFilterContext();

    return  (
        <>
            <h1 className="m-4 p-2">Show results here: </h1>

            <p>No search results found.</p>
            <br />
            <br />
            <p><b>Logging: </b></p>
            <p>Artists Array Length: {filterContextState.artist.length}</p>
            <p>PromoType Array Length: {filterContextState.promoType.length}</p>
            <p>SongType Array Length: {filterContextState.songType.length}</p>
        </>
    )
}

export default EventCardComponent;