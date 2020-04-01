import { isEmpty, isNull, toNumber, isDate, nth, padStart } from 'lodash'
// import { empty } from '@/plugins/empty'

let timeStamp = null

const requestSysDate = () => {
  const diffTime = localStorage.getItem('system-date:diff-time')
  return new Date(Date.now() + ((diffTime != null) ? Number(diffTime) : 0))
}

export const getSysTimeStamp = async () => {
  if (isEmpty(timeStamp)) {
    try {
      timeStamp = await requestSysDate()
    } catch (error) {
      return new Date()
    }
  }

  return new Date(timeStamp).getTime()
}

export const getSysDate = async () => {
  if (isEmpty(timeStamp)) {
    try {
      timeStamp = await requestSysDate()
    } catch (error) {
      return new Date()
    }
  }

  return new Date(timeStamp)
}

export const transDateObject = (date, buddha = true) => {
  if (!isDate(date)) return false
  return {
    year: date.getFullYear() + (buddha ? 543 : 0),
    month: date.getMonth() + 1,
    day: date.getDate(),
  }
}

export const pad = (num = 0, size = 1) => {
  if (num.toString().length < size) return `0${num}`

  return num
}

// export const transDate = (date, delimiter = '') => {
//   if (empty(date)) return null

//   return `${pad(date.year, 4)}${delimiter}${pad(date.month, 2)}${delimiter}${pad(date.day, 2)}`
// }

export const transRawDate = (rawDate) => {
  if (toNumber(rawDate) === 0) return

  const day = toNumber(rawDate.toString().substring(6, 8))
  const month = toNumber(rawDate.toString().substring(4, 6))
  const year = toNumber(rawDate.toString().substring(0, 4))

  return { day, month, year }
}

export const thaiMonth = (mm) => {
  const month = [
    { long: 'ไม่ทราบเดือน', short: '' },
    { long: 'มกราคม', short: 'ม.ค.' },
    { long: 'กุมภาพันธ์', short: 'ก.พ.' },
    { long: 'มีนาคม', short: 'มี.ค.' },
    { long: 'เมษายน', short: 'เม.ย.' },
    { long: 'พฤษภาคม', short: 'พ.ค.' },
    { long: 'มิถุนายน', short: 'มิ.ย.' },
    { long: 'กรกฎาคม', short: 'ก.ค.' },
    { long: 'สิงหาคม', short: 'ส.ค.' },
    { long: 'กันยายน', short: 'ก.ย.' },
    { long: 'ตุลาคม', short: 'ต.ค.' },
    { long: 'พฤศจิกายน', short: 'พ.ย.' },
    { long: 'ธันวาคม', short: 'ธ.ค.' },
  ]

  if (toNumber(mm) < 1 || toNumber(mm) > 12) return month[0]

  return month[Number(mm)]
}

export const dateIsNotValid = (rawDate) => {
  if (rawDate.toString().length < 7) return true
  if (rawDate.toString().length > 8) return true

  return false
}

const getLunarYear = (rawDate) => {
  const lunarYears = [
    '',
    'ปีชวด',
    'ปีฉลู',
    'ปีขาล',
    'ปีเถาะ',
    'ปีมะโรง',
    'ปีมะเส็ง',
    'ปีมะเมีย',
    'ปีมะแม',
    'ปีวอก',
    'ปีระกา',
    'ปีจอ',
    'ปีกุน',
  ]
  const stringDate = rawDate.toString().split('')
  const year = [
    nth(stringDate, -8),
    nth(stringDate, -7),
  ].join('')

  return lunarYears[toNumber(year)]
}

const getLunarMonth = (rawDate) => {
  const lunarMonths = [
    '',
    'เดือนอ้าย',
    'เดือนยี่',
    'เดือนสาม',
    'เดือนสี่',
    'เดือนห้า',
    'เดือนหก',
    'เดือนเจ็ด',
    'เดือนแปด',
    'เดือนเก้า',
    'เดือนสิบ',
    'เดือนสิบเอ็ด',
    'เดือนสิบสอง',
  ]
  const stringDate = rawDate.toString().split('')
  const month = [
    nth(stringDate, -6),
    nth(stringDate, -5),
  ].join('')

  if (month === '13') return '8-8'

  return lunarMonths[toNumber(month)]
}

const getLunarPhase = (rawDate) => {
  const stringDate = rawDate.toString().split('')
  const phase = nth(stringDate, -4)

  if (phase === '1') return 'ขึ้น'
  if (phase === '2') return 'แรม'

  return ''
}

const getLunarEvening = (rawDate) => {
  const stringDate = rawDate.toString().split('')
  const evening = [
    nth(stringDate, -3),
    nth(stringDate, -2),
  ].join('')

  return `${toNumber(evening)} ค่ำ`
}

const getLunarDay = (rawDate) => {
  const lunarDays = [
    '',
    'วันอาทิตย์',
    'วันจันทร์',
    'วันอังคาร',
    'วันพุธ',
    'วันพฤหัสบดี',
    'วันศุกร์',
    'วันเสาร์',
  ]
  const stringDate = rawDate.toString().split('')
  const day = nth(stringDate, -1)

  return lunarDays[toNumber(day)]
}

const lunarDate = (rawDate) => {
  const dateFormat = padStart(rawDate, 8, '0')
  const displayLunarDate = [
    getLunarDay(dateFormat),
    getLunarPhase(dateFormat),
    getLunarEvening(dateFormat),
    getLunarMonth(dateFormat),
    getLunarYear(dateFormat),
  ].join(' ')

  return displayLunarDate
}

export const isLunarDate = (rawDate) => {
  if (toNumber(rawDate) === 0) return false
  if (rawDate.toString().length > 8) return false
  if (toNumber(rawDate) >= 24000000) return false

  return true
}

export const displayDate = (rawDate = 0, monthType = 'short') => {
  if (toNumber(rawDate) === 0) return rawDate
  if (isLunarDate(rawDate)) return lunarDate(rawDate)

  if (rawDate.toString().length !== 8) return rawDate

  const { day, month, year } = transRawDate(rawDate)

  return `${day === 0 ? '' : day} ${thaiMonth(month)[monthType]} ${year}`
}

export const dateWithSlash = (rawDate = 0) => {
  if (toNumber(rawDate) === 0) return rawDate
  if (isLunarDate(rawDate)) return lunarDate(rawDate)

  if (rawDate.toString().length !== 8) return rawDate

  const { day, month, year } = transRawDate(rawDate)

  return `${toNumber(day)}/${toNumber(month)}/${year}`
}

export const displayAge = (years = null, months = null, days = null) => {
  if (isNull(years)) return null
  if (isNull(months)) return null
  if (isNull(days)) return null

  if (years === 0 && months === 0) return `${days} วัน`
  if (years === 0) return `${months} เดือน`
  return `${years} ปี`
}

const generateDateObject = async (date) => {
  if (date && date.toString().length === 8) {
    const now = transRawDate(date)
    return new Date(now.year - 543, now.month - 1, now.day)
  }

  const now = await getSysDate()
  return now
}

export const age = async (dateOfBirth = null, dateToCalculate = null) => {
  if (!dateOfBirth || isLunarDate(dateOfBirth)) {
    return {
      years: 0,
      months: 0,
      days: 0,
      display: '-',
    }
  }

  const now = await generateDateObject(dateToCalculate)
  const dob = transRawDate(dateOfBirth)

  let days = dob.day === 0 ? 0 : now.getDate() - dob.day
  let months = dob.month === 0 ? 0 : (now.getMonth() + 1) - dob.month
  let years = (now.getFullYear() + 543) - dob.year

  if (days < 0) {
    months -= 1
    days += (new Date(now.getFullYear(), now.getMonth(), 0).getDate())
  }

  if (months < 0) {
    years = months - 1 < 0 ? years - 1 : years
    months = months < 0 ? (months) + 12 : months - 1
  }

  if (years < 0) {
    return {
      years: 0,
      months: 0,
      days: 0,
      display: '-',
    }
  }

  return {
    years,
    months,
    days,
    display: displayAge(years, months, days),
  }
}

export default {
  getSysTimeStamp,
  getSysDate,
  // transDate,
  transDateObject,
  transRawDate,
  displayDate,
  isLunarDate,
  age,
  dateIsNotValid,
  dateWithSlash,
  pad,
}

// execute once
getSysDate()
