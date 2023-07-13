import React from "react";

export default function About(props) {
  const headerStyle = {
    color: props.mode === "dark" ? "#ffffff" : "#000000",
    fontWeight: props.mode === "dark" ? "bold" : "normal"
  };

  const cardStyle = {
    backgroundColor: props.mode === "dark" ? "#333333" : "#ffffff",
    color: props.mode === "dark" ? "#ffffff" : "#000000",
    border: `1px solid ${props.mode === "dark" ? "#ffffff" : "#000000"}`,
    borderRadius: "4px"
  };

  return (
    <div>
      <h2 className="py-5 px-3" style={headerStyle}>
        About the Text Manipulator Website
      </h2>

      <div id="accordion">
        {/* Collapsible Group Item 1 */}
        <div>
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={headerStyle}
              >
                Features and Functionality
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            style={cardStyle}
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              {/* Collapsible Group Item 1 Content */}
              Our text manipulation web-app provides a comprehensive set of tools to enhance and modify your text. 
              With a user-friendly interface, it allows you to transform text to uppercase, 
              lowercase, or title case effortlessly. Additionally, you can count the characters 
              and words in your text accurately. The Text-Menuplater also offers features to remove extra spaces,
               replace specific words or characters, and generate Lorem Ipsum text for design purposes. Experience the power of our text manipulation web-app and streamline your text processing tasks with ease.
            </div>
          </div>
        </div>

        {/* Collapsible Group Item 2 */}
        <div>
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                style={headerStyle}
              >
                Customization Options
              </button>
            </h5>
          </div>

          <div
            id="collapseTwo"
            className="collapse"
            style={cardStyle}
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="card-body">
              {/* Collapsible Group Item 2 Content */}
              Customize your text manipulation experience with our web-app. Choose from a range of customization options to tailor the output to your specific needs. Whether it's the formatting style, text alignment, or special character handling, our web-app gives you the flexibility to achieve the desired results. Take advantage of the customization options available and make your text manipulation workflow more efficient.
            </div>
          </div>
        </div>

        {/* Collapsible Group Item 3 */}
        <div>
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
                style={headerStyle}
              >
                Usage Guidelines
              </button>
            </h5>
          </div>

          <div
            id="collapseThree"
            className="collapse"
            style={cardStyle}
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              {/* Collapsible Group Item 3 Content */}
              Familiarize yourself with the usage guidelines to make the most out of our text manipulation web-app. We recommend using plain text without any special formatting for optimal results. Ensure that you have a stable internet connection while using the web-app. If you encounter any issues or have suggestions for improvement, feel free to reach out to our support team. We strive to provide an exceptional user experience and value your feedback.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
