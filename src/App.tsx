import { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import EventsList from "./components/EventsList";
import MyChoices from "./components/MyChoices";
import { useEventsStore } from "./store/eventsStore";

const App = () => {
  const setEvents = useEventsStore((state) => state.setEvents);

  useEffect(() => {
    fetch("/src/data/mock_data.json")
      .then((res) => res.json())
      .then((data) => setEvents(data.events));
  }, [setEvents]);

  return (
    <MainLayout>
      <EventsList />
      <MyChoices />
    </MainLayout>
  );
};

export default App;
