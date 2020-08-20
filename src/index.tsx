import React, { useRef, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { FiX } from 'react-icons/fi'
import styles from './Banner.css'
import PropTypes from 'prop-types'

import { isShowingBannerPeriodOver } from './utils/is-showing-banner-period-over'

export function FlexBanner ({
  title,
  ctaLink,
  ctaTitle,
  isCenter,
  crossIconSize,
  animationTime,
  delayToShowBanner,
  daysToLive,
  wrapperStyle,
  mainStyleTitle,
  mainStyleLink,
  crossStyle,
  hidePermanentlyOnDate
}: PropTypes.InferProps<typeof FlexBanner.propTypes>) {
  if (title === undefined) {
    throw new Error('title is required!!!')
  }
  if (ctaLink === undefined) {
    throw new Error('ctaLink is required')
  }
  const banner = useRef<HTMLDivElement>(null!)
  const [isVisible, setVisibility] = useState(false)
  const [isSlide, setSlide] = useState(false)
  const [cookies, setCookie] = useCookies(['visitedBanner'])

  const handleClick = () => {
    setSlide(true)
    setTimeout(() => {
      banner.current.remove()
    }, animationTime * 1000)
  }

  useEffect(() => {
    document.documentElement.style.setProperty('--timing', `${animationTime}s`)
    if (banner.current) {
      document.documentElement.style.setProperty(
        '--bannerHeight',
        `-${banner.current.offsetHeight}px`
      )
    }

    if (!daysToLive && hidePermanentlyOnDate instanceof Date) {
      setTimeout(() => {
        setVisibility(!isShowingBannerPeriodOver(hidePermanentlyOnDate))
      }, delayToShowBanner * 2000)
    }

    if (
      !daysToLive &&
      (!(hidePermanentlyOnDate instanceof Date) ||
        hidePermanentlyOnDate === undefined)
    ) {
      setTimeout(() => {
        setVisibility(true)
      }, delayToShowBanner * 1000)
    }

    if (cookies.visitedBanner === undefined && daysToLive) {
      setTimeout(() => {
        setVisibility(true)
        setCookie('visitedBanner', true, {
          maxAge: daysToLive * 86400
        })
      }, delayToShowBanner * 1000)
    }

    if (hidePermanentlyOnDate instanceof Date) {
      setTimeout(() => {
        setVisibility(!isShowingBannerPeriodOver(hidePermanentlyOnDate))
      }, delayToShowBanner * 2000)
    }
  }, [
    isVisible,
    setCookie,
    setVisibility,
    daysToLive,
    animationTime,
    banner,
    delayToShowBanner,
    hidePermanentlyOnDate
  ])

  if (isVisible) {
    return (
      <div
        style={{
          ...defaultWrapperStyle,
          ...wrapperStyle
        }}
        ref={banner}
        className={`${isSlide ? styles.bannerSlideUp : styles.bannerSlideDown}`}
      >
        {ctaTitle && (
          <p
            style={{
              ...defaultMainStyleTitle,
              ...mainStyleTitle,
              marginLeft: `${isCenter && 'auto'}`,
              marginRight: `${isCenter && 'auto'}`
            }}
          >
            {title}
            {ctaLink && (
              <a
                href={ctaLink}
                style={{
                  ...defaultMainStyleLink,
                  ...mainStyleLink
                }}
              >
                {ctaTitle}
              </a>
            )}
          </p>
        )}
        {!ctaTitle && (
          <a
            href={ctaLink}
            style={{
              ...defaultMainStyleTitle,
              ...mainStyleTitle,
              marginLeft: `${isCenter && 'auto'}`,
              marginRight: `${isCenter && 'auto'}`
            }}
          >
            <span>{title}</span>
          </a>
        )}

        {crossIconSize !== 0 && (
          <div
            onClick={handleClick}
            style={{
              ...defaultCrossStyle,
              ...crossStyle,
              fontSize: `${crossIconSize}px`
            }}
          >
            <FiX />
          </div>
        )}
      </div>
    )
  }
  return <React.Fragment></React.Fragment>
}
FlexBanner.propTypes = {
  title: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaTitle: PropTypes.string,
  isCenter: PropTypes.bool,
  crossIconSize: PropTypes.number,
  animationTime: PropTypes.number,
  delayToShowBanner: PropTypes.number,
  daysToLive: PropTypes.number,
  wrapperStyle: PropTypes.object,
  mainStyleTitle: PropTypes.object,
  mainStyleLink: PropTypes.object,
  crossStyle: PropTypes.object,
  hidePermanentlyOnDate: PropTypes.instanceOf(Date)
}

FlexBanner.defaultProps = {
  isCenter: true,
  crossIconSize: 22,
  animationTime: 1,
  delayToShowBanner: 2,
  daysToLive: 0
}

const defaultWrapperStyle = {
  padding: '4px',
  justifyContent: 'space-between',
  background: 'transparent',
  display: 'flex',
  backgroundColor: '#091050',
  paddingLeft: '24px',
  paddingRight: '24px'
} as React.CSSProperties

const defaultMainStyleTitle = {
  marginTop: '4px',
  marginBottom: '4px',
  color: '#fff',
  margin: '10px'
} as React.CSSProperties

const defaultMainStyleLink = {
  marginLeft: '10px',
  color: '#3245F4'
} as React.CSSProperties

const defaultCrossStyle = {
  marginTop: 'auto',
  marginBottom: 'auto',
  color: 'white',
  cursor: 'pointer'
} as React.CSSProperties

export default FlexBanner
