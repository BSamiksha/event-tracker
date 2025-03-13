import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import AddEvent from "./pages/AddEvent";
import { useEffect, useState } from "react";
import { defaultEvents } from "./assets/data";

function Layout() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />
      <div className="flex-1  mt-[70px]">
        <Outlet />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}


function App() {

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const savedEvents = localStorage.getItem('upcomingEvents');

  useEffect(() => {
    savedEvents ? setUpcomingEvents(JSON.parse(savedEvents)) : setUpcomingEvents(defaultEvents)
  }, [])

  useEffect(() => {
    localStorage.setItem('upcomingEvents', JSON.stringify(upcomingEvents));
  }, [upcomingEvents]);

  const addNewEvent = (newEvent) => {
    setUpcomingEvents((prev) => [
      ...prev,
      {...newEvent, id: prev.length + 1, createdAt: new Date().toISOString()}
    ])
  }

  return (
    <main>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/events/view" element={<Events upcomingEvents={upcomingEvents} />} />
          <Route path="/events/add-event" element={<AddEvent addNewEvent={addNewEvent} />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
