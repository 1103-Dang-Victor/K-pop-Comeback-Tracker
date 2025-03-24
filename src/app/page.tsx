import CalendarComponent from "./components/calendar";


export default function Home() {
  return (
    <>
      <div className="flex flex-row flex-wrap h-auto m-1">
        
        <div className="border-black border-4 p-4 w-fit lg:basis-1/2 md:basis-full sm:basis-full">
          <h1 className="font-bold">Filters</h1>
          <p>Here is some text for the selection sides.</p>
        </div>

        <div className="border-black border-4 p-4 lg:basis-1/2 md:basis-full sm:basis-full sm:m-auto">
          <CalendarComponent></CalendarComponent>
        </div>

        <div className="border-black border-4 p-4 w-fit basis-full">
          <h1 className="font-bold">Events</h1>
          <p>Some text for where results of filtering show up.</p>
          {/*Events Listing pops up here once everything is filtered, instead of 
          click and popup next to events next to calendar on larger screen*/}
        </div>

      </div>
    </>

  );
}
