'use client';

import React from "react";
import { Button, Calendar, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader,
    CalendarHeaderCell, Heading, Text } from "react-aria-components";

const CalendarComponent = () => {
    return (
        <>
            <Calendar aria-label="MainCalendar" className={"overflow-x-hidden"}>
                <header className="flex p-2 m-3 w-auto justify-between">
                    <Button slot="previous" className={"mx-5 p-3"}>◀</Button>
                    <Heading className="w-fit"/> {/*Calendar Month Label*/}
                    <Button slot="next" className={"mx-5 p-3"}>▶</Button>
                </header>

                <CalendarGrid className="flex m-2 p-2 justify-evenly w-auto">
                    <CalendarGridHeader className="hidden">
                        {(day) => <CalendarHeaderCell />}
                    </CalendarGridHeader>

                    <CalendarGridBody>
                        {(date) => <CalendarCell date={date} className={"text-center p-2.5 m-2.5"}/>}
                    </CalendarGridBody>
                    
                </CalendarGrid>

            </Calendar>
        </>
    )
}

export default CalendarComponent;