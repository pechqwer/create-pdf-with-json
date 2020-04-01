const thaiDateFormat = (date, isFull) => {
  let returnThaiDate = ''
  let month = ''


  returnThaiDate = Number(date.substring(6, 8))

  if (isFull) {
    if (date.substring(4, 6) === '01') month = 'มกราคม'
    if (date.substring(4, 6) === '02') month = 'กุมภาพันธ์'
    if (date.substring(4, 6) === '03') month = 'มีนาคม'
    if (date.substring(4, 6) === '04') month = 'เมษายน'
    if (date.substring(4, 6) === '05') month = 'พฤษภาคม'
    if (date.substring(4, 6) === '06') month = 'มิถุนายน'
    if (date.substring(4, 6) === '07') month = 'กรกฎาคม'
    if (date.substring(4, 6) === '08') month = 'สิงหาคม'
    if (date.substring(4, 6) === '09') month = 'กันยายน'
    if (date.substring(4, 6) === '10') month = 'ตุลาคม'
    if (date.substring(4, 6) === '11') month = 'พฤศจิกายน'
    if (date.substring(4, 6) === '12') month = 'ธันวาคม'
  } else {
    if (date.substring(4, 6) === '01') month = 'ม.ค.'
    if (date.substring(4, 6) === '02') month = 'ก.พ.'
    if (date.substring(4, 6) === '03') month = 'มี.ค.'
    if (date.substring(4, 6) === '04') month = 'เม.ย.'
    if (date.substring(4, 6) === '05') month = 'พ.ค.'
    if (date.substring(4, 6) === '06') month = 'มิ.ย.'
    if (date.substring(4, 6) === '07') month = 'ก.ค.'
    if (date.substring(4, 6) === '08') month = 'ส.ค.'
    if (date.substring(4, 6) === '09') month = 'ก.ย.'
    if (date.substring(4, 6) === '10') month = 'ต.ค.'
    if (date.substring(4, 6) === '11') month = 'พ.ย.'
    if (date.substring(4, 6) === '12') month = 'ธ.ค.'
  }


  returnThaiDate += ` ${month} `
  returnThaiDate += date.substring(0, 4)
  return returnThaiDate
}
const thaiMonthFormat = (month, isFull) => {
  let returnMonth = ''


  if (isFull) {
    if (month === '01') returnMonth = 'มกราคม'
    if (month === '02') returnMonth = 'กุมภาพันธ์'
    if (month === '03') returnMonth = 'มีนาคม'
    if (month === '04') returnMonth = 'เมษายน'
    if (month === '05') returnMonth = 'พฤษภาคม'
    if (month === '06') returnMonth = 'มิถุนายน'
    if (month === '07') returnMonth = 'กรกฎาคม'
    if (month === '08') returnMonth = 'สิงหาคม'
    if (month === '09') returnMonth = 'กันยายน'
    if (month === '10') returnMonth = 'ตุลาคม'
    if (month === '11') returnMonth = 'พฤศจิกายน'
    if (month === '12') returnMonth = 'ธันวาคม'
  } else {
    if (month === '01') returnMonth = 'ม.ค.'
    if (month === '02') returnMonth = 'ก.พ.'
    if (month === '03') returnMonth = 'มี.ค.'
    if (month === '04') returnMonth = 'เม.ย.'
    if (month === '05') returnMonth = 'พ.ค.'
    if (month === '06') returnMonth = 'มิ.ย.'
    if (month === '07') returnMonth = 'ก.ค.'
    if (month === '08') returnMonth = 'ส.ค.'
    if (month === '09') returnMonth = 'ก.ย.'
    if (month === '10') returnMonth = 'ต.ค.'
    if (month === '11') returnMonth = 'พ.ย.'
    if (month === '12') returnMonth = 'ธ.ค.'
  }

  return returnMonth
}
const monthToNumber = (month) => {
  const monthArray = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม',
    'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน',
    'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม']

  let returnString = ''
  monthArray.forEach((value, index) => {
    if (month.trim() === value) returnString = (index + 1).toString().padStart(2, '0')
  })
  return returnString
}

const toYear = (date) => {
  return date.toString().substring(0, 4)
}

const toDay = (date) => {
  return Number(date.toString().substring(6, 8))
}
export default {
  thaiDateFormat, thaiMonthFormat, monthToNumber, toYear, toDay,
}
