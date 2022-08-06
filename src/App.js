import "./App.css";
import "console-success";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import KarmaCapture from "./pages/KarmaCapture";
import Historic from "./pages/Historic";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/negative-action"
          element={
            <KarmaCapture
              title="Negative Action"
              bgColor="#c90000"
              karmaCategory="negative-action"
              title_category={["Negative", "negative", "Action", "action"]}
            />
          }
        />
        <Route
          path="/positive-action"
          element={
            <KarmaCapture
              title="Positive Action"
              bgColor="#006b00"
              karmaCategory="positive-action"
              title_category={["Positive", "positive", "Action", "action"]}
            />
          }
        />
        <Route
          path="/negative-event"
          element={
            <KarmaCapture
              title="Negative Event"
              bgColor="#740000"
              karmaCategory="negative-event"
              title_category={["Negative", "negative", "Event", "event"]}
            />
          }
        />
        <Route
          path="/positive-event"
          element={
            <KarmaCapture
              title="Positive Event"
              bgColor="#229021"
              karmaCategory="positive-event"
              title_category={["Positive", "positive", "Event", "event"]}
            />
          }
        />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
