/* eslint-disable */
'use client';
import React from "react";
import { Button, Calendar, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader,
    CalendarHeaderCell, Heading } from "react-aria-components";
import { parseValidCalendarDates } from "../scripts/validCalendarDates";

const CalendarComponent = () => {

    return (
        <>
            <Calendar aria-label="MainCalendar" className={""}
                isReadOnly
                isDateUnavailable={parseValidCalendarDates}>
                <header className={`w-25 md:w-fit flex p-2 mx-2 my-1 shrink-2 justify-self-center justify-center`}>
                    <Button slot="previous" className={`mr-4 p-3 border-2 border-solid rounded-lg border-tBase text-sm md:text-lg
                        hover:shadow-md hover:shadow-tBase `}>Back</Button>
                    <Heading className="border-b-2 border-tBase text-sm md:text-lg"/> {/*Calendar Month Label*/}
                    <Button slot="next" className={`ml-4 p-3 border-2 border-solid rounded-lg border-tBase text-sm md:text-lg
                        hover:shadow-md hover:shadow-tBase `}>Next</Button>
                </header>

                <CalendarGrid className={`flex m-0 p-3 justify-evenly w-xs text-sm md:text-lg md:w-fit md:justify-self-center md:m-2`}>
                    <CalendarGridHeader className="hidden">
                        {(day) => <CalendarHeaderCell />}
                    </CalendarGridHeader>

                    <CalendarGridBody className={``}>
                        {(date) => <CalendarCell date={date} className={`text-center p-3 m-1 rounded-md text-tBase dark:text-tBase
                            data-[selected]:bg-accent data-[selected]:text-primary data-[outside-month]:hidden 
                            data-[unavailable]:text-gray-400 dark:data-[unavailable]:text-gray-600`}/>}
                    </CalendarGridBody>
                </CalendarGrid>

            </Calendar>
        </>
    )
}

export default CalendarComponent;