import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

function popUp() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = (icon: IconDefinition) => {
    if (icon.iconName === "plus") {
      setIsPopupOpen(true);
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
        <div className="bg-white p-5 rounded shadow-lg">
          <h2>Popup Content</h2>
          <button onClick={() => setIsPopupOpen(false)}>Close</button>
        </div>
      </div>
    </>
  );
}
export default popUp;
