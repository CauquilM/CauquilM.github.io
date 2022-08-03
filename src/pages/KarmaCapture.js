import Form from "../components/Form"
import FooterSaveBtn from "../components/FooterSaveBtn";

function KarmaCapture(props) {
  return (
    <div>
      <style>{`body{background-color:${props.bgColor};color:wheat}`}</style>
        <h1>{props.title}</h1>
      <FooterSaveBtn />
    </div>
  );
}

export default KarmaCapture;
