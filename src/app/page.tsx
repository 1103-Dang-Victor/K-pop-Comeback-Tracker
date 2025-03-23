import CalendarComponent from "./components/calendar";


export default function Home() {
  return (
    <>
      
      <div className="flex flex-row flex-wrap h-auto">
        
        <div className="border-black border-4 p-4 basis-1/3">
          <h1 className="font-bold">Filters</h1>
          <p>Here is some text for the selection sides.</p>
        </div>

        <div className="text-lg border-black border-4 p-4 basis-2/3 ">
          <CalendarComponent></CalendarComponent>
        </div>

        <div>
          {/*Events Listing pops up here once everything is filtered, instead of 
          click and popup next to events next to calendar on larger screen*/}
        </div>

      </div>
    </>

  );
}
