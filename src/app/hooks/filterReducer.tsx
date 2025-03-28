import React from "react";

export type FilterState = {
    artist: string,
    title: string,
    releaseDate: string,
    promoType: string[],
    songType: string[]
}

export const initialFilters: FilterState = {
    artist: "",
    title: "",
    releaseDate: "",
    promoType: [] as string[],
    songType: [] as string[]
}

export const enum ReducerActionType {
    promoFilterEvent, songFilterEvent
}

export type ReducerAction = {
    type: ReducerActionType
    payload: {category: "promoType" | "songType", value: string, preValue: boolean}
}

export const filterReducer = (state: FilterState, action: ReducerAction):FilterState => {
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
            return {...state, [category]: updatedFilters};
        case ReducerActionType.songFilterEvent:
            if (category == "songType") {
                if (preValue) {
                    updatedFilters = state[category].filter((element) => element !== value);
                } else {
                    updatedFilters = [...state[category], value];
                }
            }
            return {...state, [category]: updatedFilters};
        default:
            return state;
    }
}

