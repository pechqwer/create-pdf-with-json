/* eslint-disable */

export const getSysDate = () => {
  const diffTime = localStorage.getItem('system-date:diff-time')
  return new Date(Date.now() + ((diffTime != null) ? Number(diffTime) : 0))
}
