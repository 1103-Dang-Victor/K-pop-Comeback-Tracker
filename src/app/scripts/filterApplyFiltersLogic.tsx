import { useFilterContext } from "../hooks/filterContext";
import {filterJSONParser} from "./filterJSONParser";
//for filtering through the selected filters and matching them to an object that can be displayed in eventCard


export const applyFiltersLogic = () => {
    const data = filterJSONParser();
    const {filterContextState} = useFilterContext();

    let results: string[] = [];

    data.array.forEach((group) => {
        if (filterContextState.artist.includes(group.artist)) {
            if ((filterContextState.promoType.length > 0)) {
                if (filterContextState.promoType.includes(group.promoType)) {

                }
            } else if ((filterContextState.songType.length > 0)) {
                if (filterContextState.songType.includes(group.songType)) {
                    
                }
            }
        }
    });

    
    
    return results;
}
