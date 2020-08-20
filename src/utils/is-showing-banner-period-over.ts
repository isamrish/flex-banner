export function isShowingBannerPeriodOver (dateToHide: Date): boolean {
  const now = new Date()

  if (now.getTime() > dateToHide.getTime()) {
    return true
  }
  return false
}
