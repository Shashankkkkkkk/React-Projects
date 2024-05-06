import { useState, useEffect } from "react";
import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {

  const [eventData, setEventData] = useState([]); // Create a state variable to store the event data
  const [loading, setLoading] = useState(false); // Create a state variable to store the loading state

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      try {
        const res = await fetch('https://eonet.gsfc.nasa.gov/api/v2.1/events');
        if (!res.ok) { // if HTTP-status is 200-299
          // get the error message from the body or default to response status
          const message = `An error has occured: ${res.status}`;
          throw new Error(message);
        }
        const { events } = await res.json();

        setEventData(events);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
      
    }

    fetchEvents();
  }, []); // Fetch the data when the component mounts

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader />}
    </div>
  )
}

export default App;
