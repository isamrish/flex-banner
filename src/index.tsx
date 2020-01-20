import React from "react";
import { useRef, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { FiX } from "react-icons/fi";
import styles from "./Banner.css";

export interface BannerConfig {
  config: {
    title: string;
    link?: {
      title?: string;
      url?: string;
    };
    timeForCookie: number | false;
    wrapperStyle: object;
    mainStyle: object;
    crossStyle: object;
    delayTimeToShowBanner: number;
    slidingTime: number;
    center: boolean;
    isCross: boolean;
  };
}

const BannerComponent: React.FunctionComponent<BannerConfig> = ({ config }) => {
  const banner = useRef<HTMLDivElement>(null!);
  const [isVisible, setVisibility] = useState(false);
  const [isSlide, setSlide] = useState(false);
  const [cookies, setCookie] = useCookies(["visitedBanner"]);
  const {
    title,
    link,
    timeForCookie,
    wrapperStyle,
    mainStyle,
    crossStyle,
    delayTimeToShowBanner,
    slidingTime,
    center,
    isCross
  } = config;
  let age: number = 0;
  if (typeof timeForCookie === "number") {
    age = timeForCookie;
  }
  const handleClick = () => {
    setSlide(true);
    setTimeout(() => {
      banner.current.remove();
    }, slidingTime * 1000);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--timing", `${slidingTime}s`);
    if (banner.current) {
      document.documentElement.style.setProperty(
        "--bannerHeight",
        `-${banner.current.offsetHeight}px`
      );
    }

    if (!timeForCookie) {
      setTimeout(() => {
        setVisibility(true);
      }, delayTimeToShowBanner * 1000);
    }
    if (cookies.visitedBanner === undefined && timeForCookie) {
      setTimeout(() => {
        setVisibility(true);
        setCookie("visitedBanner", true, { maxAge: age * 86400 });
      }, delayTimeToShowBanner * 1000);
    }
  }, [
    isVisible,
    setCookie,
    setVisibility,
    timeForCookie,
    slidingTime,
    banner,
    delayTimeToShowBanner
  ]);
  if (isVisible) {
    return (
      <div
        style={{
          padding: "4px",
          justifyContent: "space-between",
          background: "transparent",
          display: "flex",
          ...wrapperStyle
        }}
        ref={banner}
        className={`${isSlide ? styles.bannerSlideUp : styles.bannerSlideDown}`}
      >
        <p
          style={{
            marginTop: "4px",
            marginBottom: "4px",
            ...mainStyle,
            marginLeft: `${center && "auto"}`,
            marginRight: `${center && "auto"}`
          }}
        >
          {title}
          {link && (
            <a href={link.url} style={{ color: "white", marginLeft: "10px" }}>
              {link.title}
            </a>
          )}
        </p>
        {isCross && (
          <div
            onClick={handleClick}
            style={{
              fontSize: "16px",
              marginTop: "auto",
              marginBottom: "auto",
              color: "white",
              cursor: "pointer",
              ...crossStyle
            }}
          >
            <FiX />
          </div>
        )}
      </div>
    );
  }
  return <></>;
};

export default BannerComponent;
