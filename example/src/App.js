import React from "react";

import BannerComponent from "flex-banner";
const App = () => {
  const config = {
    title: "Title of banner",
    link: {
      title: "Google",
      url: `https://google.com`
    },
    delayTimeToShowBanner: 1,
    slidingTime: 1,
    center: true, // Whether Align the main block items center or not
    timeForCookie: false, // in days { default is false or number } = number represents days to keep
    isCross: true,
    wrapperStyle: {
      backgroundColor: "blue",
      paddingLeft: "24px",
      paddingRight: "24px",
      textAlign: "center"
    },
    mainStyle: {
      color: "white",
      textAlign: "center",
      margin: "10px"
    },
    crossStyle: {
      fontSize: "16px"
    }
  };
  return (
    <div>
      <BannerComponent config={config} />
      <div
        style={{ height: "200px", padding: "30px", backgroundColor: "green" }}
      >
        <h2 style={{ margin: "0px" }}>This is dummy image!!!</h2>
      </div>
    </div>
  );
};

export default App;
