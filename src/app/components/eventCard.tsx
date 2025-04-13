import React from "react";
import { useFilterContext } from "../hooks/filterContext";
import { ReducerActionType } from "../hooks/filterReducer";

const EventCardComponent = () => {
    return  (
        <>
            <h1 className="m-4 p-2">Results</h1>
            <p>Artists Array Length: </p>
            <p>PromoType Array Length: </p>
            <p>SongType Array Length: </p>
        </>
    )
}

export default EventCardComponent;