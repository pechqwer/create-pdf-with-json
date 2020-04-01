/* eslint-disable */
export default (n) => {

  const numberToWords = (number) => {
    if (!number && typeof number !== 'number') return ''

    const numberArray = ['ศูนย์', 'หนึ่ง', 'สอง', 'สาม', 'สี่', 'ห้า', 'หก', 'เจ็ด', 'แปด', 'เก้า']
    const digitArray = ['', 'สิบ', 'ร้อย', 'พัน', 'หมื่น', 'แสน']

    let outData = ''
    number = number < 0 ? number * -1 : number
    outData = number < 0 ? 'ลบ' : ''

    let splitNumber = number.toString().split('.')
    let preDotNumber = splitNumber[0]
    for (let i = 0; i < preDotNumber.length; i++) {
      if (parseInt(preDotNumber) === 0) {
        outData += 'ศูนย์'
        break
      }

      let numDigit = parseInt(preDotNumber[i])
      let digit = preDotNumber.length - 1 - i
      let digitLoop = (preDotNumber.length - 1 - i) % 6
      let numberText = numberArray[numDigit]
      switch (digitLoop) {
        case 0:
          if (numDigit === 1 && number[i - 1] !== 0) {
            numberText = 'เอ็ด'
          } else {
            numberText = numberArray[numDigit]
          }

          break
        case 1:
          if (numDigit === 1) {
            numberText = ''
          } else if (numDigit === 2) {
            numberText = 'ยี่'
          } else {
            numberText = numberArray[numDigit]
          }

          break
      }

      if (numDigit !== 0) { outData += `${numberText}${digitArray[digitLoop]}` }

      if (digit % 6 === 0 && digit !== 0) { outData += `ล้าน` }
    }

    // let tmpPostDotNumberText = ''
    // if (splitNumber[1] > 0) {
    //   let postDotNumber = splitNumber[1]

    //   for (let i = postDotNumber.length - 1; i >= 0; i--) {
    //     let numDigit = parseInt(postDotNumber[i])

    //     if (!tmpPostDotNumberText && numDigit === 0) continue

    //     tmpPostDotNumberText = `${numberArray[numDigit]}${tmpPostDotNumberText}`
    //   }
    // }

    // outData = tmpPostDotNumberText ? `${outData}จุด${tmpPostDotNumberText}` : outData

    let tmpPostDotNumberText = numberToWords(splitNumber[1] ? parseInt(splitNumber[1].padEnd(2, '0')) : null).word || ''

    return {
      word: tmpPostDotNumberText ? `${outData}จุด${tmpPostDotNumberText}` : outData,
      monetary: `${outData}${tmpPostDotNumberText ? 'บาท' : 'บาทถ้วน'}${`${tmpPostDotNumberText}${tmpPostDotNumberText ? 'สตางค์' : ''}`}`
    }
  }

  return numberToWords(n)
}
