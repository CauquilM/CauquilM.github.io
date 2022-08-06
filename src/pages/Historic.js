import HistoricDetails from "../components/HistoricDetails";
import Error404 from "../components/Error404";
import { useSearchParams } from "react-router-dom";

function Historic() {
  const [searchParams, setSearchParams] = useSearchParams();

  const karmaParams = searchParams.get("karmaCategory");

  return (
    <div>
      {karmaParams === "negative-action" ||
      karmaParams === "positive-action" ||
      karmaParams === "negative-event" ||
      karmaParams === "positive-event" ? (
        <HistoricDetails />
      ) : (
        <Error404 />
      )}
    </div>
  );
}
export default Historic;
