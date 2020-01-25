# flex-banner

> Fully responsive react banner for websites

[![NPM](https://img.shields.io/npm/v/flex-banner.svg)](https://www.npmjs.com/package/flex-banner) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save flex-banner
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
