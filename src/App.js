import "./App.css";
import "console-success";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NegativeAction from "./pages/NegativeAction";
import PositiveAction from "./pages/PositiveAction";
import NegativeEvent from "./pages/NegativeEvent";
import PositiveEvent from "./pages/PositiveEvent";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import KarmaCapture from "./pages/KarmaCapture";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/negative-action"
          element={<KarmaCapture title="Negative Action" bgColor="#c90000" />}
        />
        <Route path="/positive-action" element={<KarmaCapture title="Positive Action" bgColor="#006b00" />} />
        <Route path="/negative-event" element={<KarmaCapture title="Negative Event" bgColor="#740000" />} />
        <Route path="/positive-event" element={<KarmaCapture title="Positive Event" bgColor="#229021" />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
