import { BiArchive } from "react-icons/bi"
import Search from "./components/Search"
import AppAppointment from "./components/AppAppointment"
import appointmentList from "./data.json"
import AppointmentInfo from "./components/AppointmentInfo"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1> 
        <BiArchive className="inline-block" /> Your appointment
        <Search />
        <AppAppointment />
        <ul className="divide-y divide-gray-200">
          {appointmentList.map(appointment => (
            <AppointmentInfo key={appointment.id} appointment={appointment} />
          ))}
        </ul>
      </h1>
    </div>
  );
}

export default App;
