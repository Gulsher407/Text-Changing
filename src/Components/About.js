import React from "react";

export default function About(props) {
  const headerStyle = {
    color: props.mode === "dark" ? "white" : "black"
  };

  const cardStyle = {
    backgroundColor: props.mode === "dark" ? "gray" : "white",
    color: props.mode === "dark" ? "white" : "black"
  };

  return (
    <div>
      <h2 className="py-5 px-3" style={headerStyle}>
        About Us
      </h2>

      <div id="accordion">
        {/* Collapsible Group Item 1 */}
        <div>
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={headerStyle}
              >
                Collapsible Group Item #1
              </button>
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse"
            style={cardStyle}
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="card-body">
              {/* Collapsible Group Item 1 Content */}
              HI I AM GULSHER ALI
            </div>
          </div>
        </div>

        {/* Collapsible Group Item 2 */}
        <div>
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                style={headerStyle}
              >
                Collapsible Group Item #2
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
              HI I AM GULSHER ALI
            </div>
          </div>
        </div>

        {/* Collapsible Group Item 3 */}
        <div>
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
                style={headerStyle}
              >
                Collapsible Group Item #3
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
              HI I AM GULSHER ALI
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
