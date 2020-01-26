<div align="center">
  <img src="./media/flex-banner.svg" alt="flex-banner" />
</div>

<br />

<div align="center">
  Fully responsive react banner for websites. It is useful when you want to show important message to your website visitors such as product updates announcement, upcoming event announcement etc.
</div>

<br />
<div align="center">
[![NPM](https://img.shields.io/npm/v/flex-banner.svg)](https://www.npmjs.com/package/flex-banner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/IsAmrish/flex-banner.svg?branch=master)](https://travis-ci.com/IsAmrish/flex-banner)
</div>

## Install

```bash
npm install --save flex-banner
```

or

```bash
yarn add flex-banner
```

## Usage

```tsx
import * as React from "react";

import FlexBanner from "flex-banner";

class Example extends React.Component {
  render() {
    return (
      <FlexBanner
        title="title of the banner" // string
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
    );
  }
}
```

## License

MIT © [isamrish](https://github.com/isamrish)
