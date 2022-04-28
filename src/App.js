import { BiArchive } from "react-icons/bi"
import Search from "./components/Search"

function App() {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1> 
        <BiArchive className="inline-block" /> Your appointment
        <Search />
      </h1>
    </div>
  );
}

export default App;
