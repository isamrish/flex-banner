import React from "react";
import FlexBanner from "flex-banner";
const App = () => {
  return (
    <div>
      <FlexBanner
        title="Fully responsive react banner for websites"
        ctaLink="https://github.com/IsAmrish/flex-banner"
        ctaTitle="Learn More"
        isCenter={true}
      />
      <div
        style={{ height: "200px", padding: "30px", backgroundColor: "white" }}
      >
        <h2 style={{ margin: "0px" }}>Welcome to FlexBanner PlayGround</h2>
      </div>
    </div>
  );
};

export default App;
