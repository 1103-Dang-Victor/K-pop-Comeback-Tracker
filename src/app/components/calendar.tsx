'use client';
import React from "react";
import { Button, Calendar, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader,
    CalendarHeaderCell, Heading } from "react-aria-components";
import { parseValidCalendarDates } from "../scripts/validCalendarDates";

const CalendarComponent = () => {

    return (
        <>
            <Calendar aria-label="MainCalendar" className={"overflow-x-hidden"}
                isDateUnavailable={parseValidCalendarDates}>
                <header className="flex p-2 m-3 justify-between">
                    <Button slot="previous" className={`mx-5 p-3 border-2 border-solid rounded-lg border-tBase 
                        hover:shadow-md hover:shadow-tBase active:scale-95`}>Back</Button>
                    <Heading className="w-fit border-b-2 border-tBase"/> {/*Calendar Month Label*/}
                    <Button slot="next" className={`mx-5 p-3 border-2 border-solid rounded-lg border-tBase 
                        hover:shadow-md hover:shadow-tBase active:scale-95`}>Next</Button>
                </header>

                <CalendarGrid className="flex m-2 p-3 justify-evenly w-auto">
                    <CalendarGridHeader className="hidden">
                        {(day) => <CalendarHeaderCell />}
                    </CalendarGridHeader>

                    <CalendarGridBody>
                        {(date) => <CalendarCell date={date} className={`text-center p-3 m-1 rounded-md text-tBase dark:text-tBase
                            data-[selected]:bg-accent data-[selected]:text-primary data-[outside-month]:hidden
                            data-[unavailable]:text-gray-500 dark:data-[unavailable]:text-gray-600`}/>}
                    </CalendarGridBody>
                </CalendarGrid>

            </Calendar>
        </>
    )
}

export default CalendarComponent;