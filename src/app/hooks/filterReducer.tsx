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
    addArtist, 
    removeArtist
}

export type ReducerAction =  
    | {type: ReducerActionType.promoFilterEvent; payload: {category: "promoType", value: string, preValue: boolean}}
    | {type: ReducerActionType.songFilterEvent; payload: {category: "songType", value: string, preValue: boolean}}
    | {type:ReducerActionType.addArtist; payload: {newArtist: string}}
    | {type:ReducerActionType.removeArtist; payload: {oldArtist: string}}

export const filterReducer = (state: FilterState, action: ReducerAction):FilterState => {
    switch(action.type) {
        case ReducerActionType.promoFilterEvent: {
                const {category, value, preValue} = action.payload;
                var updatedFilters: string[] = [];
                if (category == "promoType") {
                    if (preValue) {
                        updatedFilters = state[category].filter((element) => element !== value);
                    } else {
                        updatedFilters = [...state[category], value];
                    }
                }
                return {...state, [category]: updatedFilters};
            }
        case ReducerActionType.songFilterEvent: {
                const {category, value, preValue} = action.payload;
                var updatedFilters: string[] = [];
                if (category == "songType") {
                    if (preValue) {
                        updatedFilters = state[category].filter((element) => element !== value);
                    } else {
                        updatedFilters = [...state[category], value];
                    }
                }
                return {...state, [category]: updatedFilters};
            }
        case ReducerActionType.addArtist: {
                const {newArtist} = action.payload;
                console.log(initialFilters);
                return {...state, artist:[...state.artist, newArtist]};
            }   
        case ReducerActionType.removeArtist: {  
                const {oldArtist} = action.payload;
                return {...state,  artist: state.artist.filter(a => a !== oldArtist)};
            }   
        default:
            return state;
    }
}

