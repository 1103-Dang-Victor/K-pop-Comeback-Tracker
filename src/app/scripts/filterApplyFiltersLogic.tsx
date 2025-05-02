import { useFilterContext } from "../hooks/filterContext";
import {filterJSONParser} from "./filterJSONParser";
import { randomUUID } from "crypto";
//for filtering through the selected filters and matching them to an object that can be displayed in eventCard
//add fix later for artists selected being empty but filters are selected to 'require at least 1 artist to be selected' text on eventCard

export type parsedItem = {
  value: string,
  identifier: string,
  includedTypes: string;
}

export const applyFiltersLogic = () => {
  const data = filterJSONParser();
  const {filterContextState} = useFilterContext();
  let results: parsedItem[] = [];

  if (filterContextState.filtersActive) {
    Object.entries(data).forEach(([groupName, releases]) => {
      if (filterContextState.artist.includes(groupName)) {
        releases.forEach((release) => {
            const promoMatch = (release.promoType.length === 0) || (filterContextState.promoType.includes(release.promoType.toLowerCase()));
            const songMatch = (release.songType.length === 0) || (filterContextState.songType.includes(release.songType.toLowerCase()));
            
            if (promoMatch && songMatch) {
              let newParsedItem:parsedItem = {
                identifier: crypto.randomUUID(),
                value: `${release.title} by ${release.artist}`,
                includedTypes: `${release.songType}, ${release.promoType}`
              };
              results.push(newParsedItem);
              
            }  
        })
      } 
    });
  }

  return results;
};
