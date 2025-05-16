import { DateValue } from "react-aria-components";
import { applyFiltersLogic, parsedItem } from "./filterApplyFiltersLogic";
import { fromDate } from "@internationalized/date";

export const parseValidCalendarDates = (date: DateValue) => {
    const matchedData:parsedItem[] = applyFiltersLogic();

    const matchedDates: DateValue[] = matchedData.map(function(item) {
        return fromDate(new Date(item.releaseDate), 'America/Los_Angeles');
    })

    const insideMatchedDates = matchedDates.some(validDate => 
        validDate.compare(date) === 0) 
    
    return !insideMatchedDates;
}