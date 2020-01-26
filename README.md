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

<div align="center">
  <sub>A small react component `FlexBanner` to help you . Built with ❤︎ by
  <a href="https://github.com/isamrish">Amrish Kushwaha</a>
</div>

<br />

<p align="center">
  <img src="./media/flex-banner.gif" alt="flexBanner example video">
</p>

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
        title="Fully responsive react banner for websites"
        ctaLink="https://github.com/IsAmrish/flex-banner"
        ctaTitle="Learn More"
        isCenter={true}
      />
    );
  }
}
```

### FlexBanner in Mobile View

<p align="center">
  <img src="./media/flex-banner-mobile.gif" alt="flexBanner example video">
</p>

## License

MIT © [isamrish](https://github.com/isamrish)
