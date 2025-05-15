import { DateValue } from "react-aria-components";
import { applyFiltersLogic, parsedItem } from "./filterApplyFiltersLogic";
import { fromDate } from "@internationalized/date";

export let parseValidCalendarDates = (date: DateValue) => {
    let matchedData:parsedItem[] = applyFiltersLogic();

    let matchedDates: DateValue[] = matchedData.map(function(item) {
        return fromDate(new Date(item.releaseDate), 'America/Los_Angeles');
    })

    let insideMatchedDates = matchedDates.some((validDate) => {
        validDate.compare(date) === 0;
    }) 
    
    return !insideMatchedDates;
}