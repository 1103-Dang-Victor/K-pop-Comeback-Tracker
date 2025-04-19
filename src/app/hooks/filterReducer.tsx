export type FilterState = {
    artist: string[],
    title: string,
    releaseDate: string,
    promoType: string[],
    songType: string[]
}

export const initialFilters: FilterState = {
    artist: [] as string[],
    title: "",
    releaseDate: "",
    promoType: [] as string[],
    songType: [] as string[]
}

export const enum ReducerActionType {
    promoFilterEvent, 
    songFilterEvent, 
    artistFilterEvent,
    applyFilterEvent, //check for no artists being included then either show error requiring artist or show everything that matches?
    clearFilterEvent
}

export type ReducerAction =  
    | {type: ReducerActionType.promoFilterEvent; payload: {category: "promoType", value: string, preValue: boolean}}
    | {type: ReducerActionType.songFilterEvent; payload: {category: "songType", value: string, preValue: boolean}}
    | {type:ReducerActionType.artistFilterEvent; payload: {category: "artist", value: string}}
    | {type:ReducerActionType.clearFilterEvent;}
    | {type:ReducerActionType.applyFilterEvent;}

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
                songType: []
            };
        }
        default:
            return state;
    }
}

