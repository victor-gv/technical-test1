import "./App.css";
import Clock from "./components/Clock";
import Photo from "./components/Photo";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 h-screen">
      <Clock />
      <Photo />
    </div>
  );
}

export default App;
