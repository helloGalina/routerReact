import FeedbackForm from "./FeedbackForm.jsx";
import picture from "../asset/IMG_20251007_191844.png";

export default function CustomFeedbackForm() {
  return (
    <div className="card border-0 shadow-lg">
      <div className="position-relative">
        <img
          src={picture}
          className="card-img-top opacity-25"
          alt="Котик обратной связи"
        />
        <div className="card-img-overlay d-flex align-items-center justify-content-center">
          <div className="card-body bg-white bg-opacity-75 rounded-4 p-4 shadow-sm w-100">
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  );
}