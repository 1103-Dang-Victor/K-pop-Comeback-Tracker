export type FilterState = {
    artist: string[],
    title: string,
    releaseDate: string,
    promoType: string[],
    songType: string[]
    filtersActive: boolean;
}

export const initialFilters: FilterState = {
    artist: [] as string[],
    title: "",
    releaseDate: "",
    promoType: [] as string[],
    songType: [] as string[],
    filtersActive: false
}

export const enum ReducerActionType {
    promoFilterEvent, 
    songFilterEvent, 
    artistFilterEvent,
    clearFilterEvent,
    applyFilterEvent
}

export type ReducerAction =  
    | {type: ReducerActionType.promoFilterEvent; payload: {category: "promoType", value: string, preValue: boolean}}
    | {type: ReducerActionType.songFilterEvent; payload: {category: "songType", value: string, preValue: boolean}}
    | {type: ReducerActionType.artistFilterEvent; payload: {category: "artist", value: string}}
    | {type: ReducerActionType.clearFilterEvent;}
    | {type: ReducerActionType.applyFilterEvent;}

export const filterReducer = (state: FilterState, action: ReducerAction):FilterState => {
    switch(action.type) {
        case ReducerActionType.promoFilterEvent: {
                const {category, value, preValue} = action.payload;
                var updatedFilters: string[] = [];
                //if value is found to exist in filterList --> remove from list
                //otherwise --> add to the list 
                if (preValue) {
                    updatedFilters = state[category].filter((element) => element !== value);
                } else {
                    updatedFilters = [...state[category], value];
                }

                return {...state, [category]: updatedFilters};
            }
        case ReducerActionType.songFilterEvent: {
                const {category, value, preValue} = action.payload;
                var updatedFilters: string[] = [];
                //if value is found to exist in filterList --> remove from list
                //otherwise --> add to the list 
                if (preValue) {
                    updatedFilters = state[category].filter((element) => element !== value);
                } else {
                    updatedFilters = [...state[category], value];
                }

                return {...state, [category]: updatedFilters};
            }
        case ReducerActionType.artistFilterEvent: {
                const {category, value} = action.payload;
                var updatedArtists: string[] = [];

                if (state[category].includes(value)) {
                    //Remove Artist
                    updatedArtists = state[category].filter((element) => element !== value);
                } else {
                    //Add Artist
                    updatedArtists = [...state[category], value];
                }

                return {...state, [category]: updatedArtists};
            }   
        case ReducerActionType.clearFilterEvent: {
            return {...state,
                artist: [],
                promoType: [],
                songType: [],
                filtersActive: false
            };
        }
        case ReducerActionType.applyFilterEvent: {
            return {...state,
                filtersActive: true
            }
        }
        default:
            return state;
    }
}

