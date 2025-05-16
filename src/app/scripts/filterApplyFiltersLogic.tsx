/* eslint-disable */
import { useFilterContext } from "../hooks/filterContext";
import {filterJSONParser} from "./filterJSONParser";

export type parsedItem = {
  value: string,
  identifier: string,
  includedTypes: string,
  releaseDate: string;
}

export const applyFiltersLogic = () => {
  const data = filterJSONParser();
  const {filterContextState} = useFilterContext();
  const results: parsedItem[] = [];

  if (filterContextState.filtersActive) {
    Object.entries(data).forEach(([groupName, releases]) => {
      if (filterContextState.artist.includes(groupName)) {
        releases.forEach((release) => {
            const promoMatch = (release.promoType.length === 0) || (filterContextState.promoType.includes(release.promoType.toLowerCase()));
            const songMatch = (release.songType.length === 0) || (filterContextState.songType.includes(release.songType.toLowerCase()));
            
            if (promoMatch && songMatch) {
              const newParsedItem:parsedItem = {
                identifier: crypto.randomUUID(),
                value: `${release.title} by ${release.artist}`,
                includedTypes: `${release.songType.toUpperCase()}, ${release.promoType.toUpperCase()}`,
                releaseDate: `${release.releaseDate}`
              };
              results.push(newParsedItem);
              
            }  
        })
      } 
    });
  }

  return results;
};
