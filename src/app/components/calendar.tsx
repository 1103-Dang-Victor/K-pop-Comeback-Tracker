'use client';

import React from "react";
import { Button, Calendar, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader,
    CalendarHeaderCell, Heading, Text } from "react-aria-components";

const CalendarComponent = () => {
    return (
        <div>
            <p>Here is some text for the actual calendar itself.</p>
            
            <Calendar aria-label="MainCalendar">
                <header>
                    <Button slot="previous">◀</Button>
                    <Heading />
                    <Button slot="next">▶</Button>
            </header>

            <CalendarGrid>
                {(date) => <CalendarCell date={date} />}
            </CalendarGrid>

            </Calendar>
        </div>
    )
}

export default CalendarComponent;