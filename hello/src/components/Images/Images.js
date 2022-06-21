import Logo1 from "../../images/icon1.png";
import Logo2 from "../../images/icon2.png";
import Logo3 from "../../images/icon3.png";
import Logo4 from "../../images/icon4.png";

function Images() {
  return (
    <div className="images">
      <div className="image-container">
        <img src={Logo1} alt="logo1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div className="image-container">
        <img src={Logo2} alt="logo2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their style</p>
      </div>
      <div className="image-container">
        <img src={Logo3} alt="logo3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's</p>
      </div>
      <div className="image-container">
        <img src={Logo4} alt="logo4" />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </div>
    </div>
  );
}

export default Images;
