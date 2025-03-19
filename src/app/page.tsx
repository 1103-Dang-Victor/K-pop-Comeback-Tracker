import CalendarComponent from "./components/calendar";


export default function Home() {
  return (
    <>
      <div className="text-lg flex flex-row flex-wrap gap-2">
        <div className="border-black border-4 p-4">
          <h1 className="font-bold">Filters</h1>
          <p>Here is some text for the selection sides.</p>
        </div>

        <div className="text-lg border-black border-4 p-4">
          <h1 className="font-bold">Calendar</h1>

          <CalendarComponent></CalendarComponent>

        </div>
      </div>
    </>

  );
}
