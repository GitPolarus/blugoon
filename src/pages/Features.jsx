import {
  FaChartArea,
  FaCheckSquare,
  FaQuestionCircle,
  FiLifeBuoy,
} from "react-icons/fa";

import FeaturesCards from "../components/FeaturesCards";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-intro">
        <h2>Greatest Features</h2>
        <p>
          Praesent posuere fringilla elit, non maximus tellus posuere nec. Nunc
          eu sapien nec est elementum sodales.
        </p>
      </div>
      <div className="features-cards-container flex">
        <FeaturesCards
          cardTitle="Top Performance"
          cardDescription="Donec sit amet tempor quam. Maecenas nec aliquam leo, sed tincidunt urna."
        >
          <FaChartArea />
        </FeaturesCards>

        <FeaturesCards
          cardTitle="Trusted Service"
          cardDescription="Etiam at porta nulla, et euismod enim. Nullam semper ipsum et dui
        scelerisque."
        >
          <FaCheckSquare />
        </FeaturesCards>

        <FeaturesCards
          cardTitle="Need Help?"
          cardDescription="Phasellus orci leo, elementum ac risus id, euismod porta lorem. Quisque feugiat."
        >
          <FaChartArea />
        </FeaturesCards>

        <FeaturesCards
          cardTitle="Quick Support"
          cardDescription="Mauris eu est vitae erat condimentum pellentesque. Fusce vehicula nunc."
        >
          <FaChartArea />
        </FeaturesCards>
      </div>
    </div>
  );
};

export default Features;
