import React from "react";
import FlexBanner from "flex-banner";
const App = () => {
  return (
    <div>
      <FlexBanner
        title="title of the banner"
        link={{
          title: "example",
          url: "https://example.com"
        }}
        delayTimeToShowBanner={1}
        slidingTime={1}
        center={true}
        timeForCookie={false}
        isCross={true}
        wrapperStyle={{
          backgroundColor: "blue",
          paddingLeft: "24px",
          paddingRight: "24px",
          textAlign: "center"
        }}
        mainStyle={{
          color: "white",
          textAlign: "center",
          margin: "10px"
        }}
        crossStyle={{
          fontSize: "16px"
        }}
      />
      <div
        style={{ height: "200px", padding: "30px", backgroundColor: "green" }}
      >
        <h2 style={{ margin: "0px" }}>This is dummy image!!!</h2>
      </div>
    </div>
  );
};

export default App;
