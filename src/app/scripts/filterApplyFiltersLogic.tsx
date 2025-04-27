import { useFilterContext } from "../hooks/filterContext";
import {filterJSONParser} from "./filterJSONParser";
import { FilterState } from "../hooks/filterReducer";
//for filtering through the selected filters and matching them to an object that can be displayed in eventCard


export const applyFiltersLogic = () => {
  const data = filterJSONParser();
  const {filterContextState} = useFilterContext();
  let results: string[] = [];

  if (filterContextState.filtersActive) {
    Object.entries(data).forEach(([groupName, releases]) => {
      if (filterContextState.artist.includes(groupName)) {
        releases.forEach((release) => {
            const promoMatch = (release.promoType.length === 0) || (filterContextState.promoType.includes(release.promoType.toLowerCase()));
            const songMatch = (release.songType.length === 0) || (filterContextState.songType.includes(release.songType.toLowerCase()));
            
            if (promoMatch && songMatch) {
              results.push(`${release.artist} - ${release.title}
                            \n ${release.releaseDate}\
                            \n Types - ${release.promoType}, ${release.songType}`)
            } else if (promoMatch) { //songType empty -> allow all songTypes

            } else if (songMatch) { //promoType empty -> allow all promoTypes

            }
        })
  
      } else {
        //artist list is empty 
        //check now through only promo types and song types since artists are not relevant now 
        releases.forEach((release) => {
          
        })
      }
    });
  }

  return results;
};
