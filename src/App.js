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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/negative-action" element={<NegativeAction />} />
        <Route path="/positive-action" element={<PositiveAction />} />
        <Route path="/negative-event" element={<NegativeEvent />} />
        <Route path="/positive-event" element={<PositiveEvent />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
