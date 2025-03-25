import React from "react";

export const initialFilters = {
    artist: "",
    title: "",
    releaseDate: "",
    promoType: [] as string[],
    songType: [] as string[]
}

export const enum ReducerActionType {
    promoFilterEvent, songFilterEvent
}

type ReducerAction = {
    type: ReducerActionType
    payload: {category: "promoType" | "songType", value: string, preValue: boolean}
}

export const filterReducer = (state: typeof initialFilters, action: ReducerAction):typeof initialFilters => {
    const {category, value, preValue} = action.payload;
    var updatedFilters: string[] = [];

    switch(action.type) {
        case ReducerActionType.promoFilterEvent:
            if (category == "promoType") {
                if (preValue) {
                    updatedFilters = state[category].filter((element) => element !== value);
                } else {
                    updatedFilters = [...state[category], value];
                }
            }
            console.log(state);
            return {...state, [category]: updatedFilters};
        case ReducerActionType.songFilterEvent:
            if (category == "songType") {
                if (preValue) {
                    updatedFilters = state[category].filter((element) => element !== value);
                } else {
                    updatedFilters = [...state[category], value];
                }
            }
            console.log(state);
            return {...state, [category]: updatedFilters};
        default:
            return state;
    }
}