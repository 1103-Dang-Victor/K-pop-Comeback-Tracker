import { Suspense } from "react";
import CalendarComponent from "./components/calendar";
import DarkModeButtonComponent from "./components/darkModeButton";
import EventCardComponent from "./components/eventCard";
import FilterComponent from "./components/filterWrapper";
import FooterComponent from "./components/footer";
import { FilterProvider } from "./hooks/filterContext";
import LoadingComponent from "./components/componentLoader";

export default function Home() {
  return (
    <>
      <FilterProvider>
        <div className="flex flex-row flex-wrap m-1 mt-3">
          <DarkModeButtonComponent></DarkModeButtonComponent>
          <div className={`border-tBase border-2 rounded-lg p-4 w-fit lg:basis-1/2 md:basis-full sm:basis-full
            `}>
            <h1 className="font-bold border-b-2 border-tBase">Filters</h1>
            <FilterComponent></FilterComponent>
          </div>

          <div className={`border-tBase border-y-2 border-r-2 rounded-lg lg:basis-1/2 md:basis-full sm:basis-full`}>
            <CalendarComponent></CalendarComponent>
          </div>

          <div className="border-t-2 border-tBase p-4 w-fit basis-full mt-2">
            <h1 className="font-bold p-2 border-b-2 border-tBase">Results</h1>

            <Suspense fallback={<LoadingComponent />}>
              <EventCardComponent></EventCardComponent>
            </Suspense>

            <FooterComponent></FooterComponent>
          </div>

        </div>
      </FilterProvider>
    </>

  );
}
