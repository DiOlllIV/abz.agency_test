import React from "react";

const Acquaintance = () => (
  <div className="acquaintance">
    <h1 className="acquaintance-headline">
        Let's get acquainted
    </h1>
    <div className="acquaintance-container">
      <div className="acquaintance-container__img"/>
      <div className="acquaintance-container__dscrptn">
        <h3 className="acquaintance-container__dscrptn-title">
          I am cool frontend developer
        </h3>
        <p className="acquaintance-container__dscrptn-paragraph">
            We will evaluate how clean your approach to writing CSS and Javascript 
            code is. You can use any CSS and Javascript 3rd party libraries without any 
            restriction.
            <br/><br/>
            If  3rd  party css/javascript libraries are added to the project via
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bonus points as well. Slice service directory 
            page PSD mockup into HTML5/CSS3.

        </p>
        <a className="acquaintance-container__dscrptn-link" href="">
          Sing up now
        </a>
      </div>
    </div>
  </div>
);

export default Acquaintance; 