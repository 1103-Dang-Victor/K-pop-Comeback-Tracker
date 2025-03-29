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
    | {type:ReducerActionType.addArtist; payload: {artist: string}}
    | {type:ReducerActionType.removeArtist; payload: {artist: string}}

export const filterReducer = (state: FilterState, action: ReducerAction):FilterState => {
    switch(action.type) {
        case ReducerActionType.promoFilterEvent: {
                const {category, value, preValue} = action.payload;
                var updatedFilters: string[] = [];
                if (preValue) {
                        updatedFilters = state[category].filter((element) => element !== value);
                    } else {
                        updatedFilters = [...state[category], value];
                    }
                
                //console.dir(initialFilters);
                return {...state, [category]: updatedFilters};
            }
        case ReducerActionType.songFilterEvent: {
                const {category, value, preValue} = action.payload;
                var updatedFilters: string[] = [];
                    if (preValue) {
                        updatedFilters = state[category].filter((element) => element !== value);
                    } else {
                        updatedFilters = [...state[category], value];
                    }
                
                //console.dir(initialFilters);
                return {...state, [category]: updatedFilters};
            }
        case ReducerActionType.addArtist: {
                const {artist} = action.payload;
                //console.dir(initialFilters);
                return {...state, artist:[...state.artist, artist]};
            }   
        case ReducerActionType.removeArtist: {  
                const {artist} = action.payload;
                //console.dir(initialFilters);
                return {...state,  artist: state.artist.filter(a => a !== artist)};
            }   
        default:
            return state;
    }
}

