import date from '@/plugins/date'
import numberToWord from '@/plugins/numberToWord'
import titlePrint from '@cdglib/js-title-print'
import currencyFormat from '@/plugins/currencyFormat'
/* eslint-disable */

const styles = {
    header: {
        fontSize: 16,
        bold: true
    },
    paragraph: {
        fontSize: 14
    },
    fieldForm: {
        fontSize: 14,
        bold: true
    },
    footer: {
        fontSize: 12,
        bold: true
    }
}

const border = (border) => {
  if (!border) return [false, false, false, false]
  border = border.toLowerCase()
  return [border.indexOf('l') !== -1, border.indexOf('t') !== -1, border.indexOf('r') !== -1, border.indexOf('b') !== -1]
}

export default async (data, send = false) => {
    // if (send) return setLayoutSend(data)
    return setLayout(data)
}

const setLayout = (data) => {
    // const TABLE_COL = ['7%', '20%', '9%', '12%', '11.5%', '10%', '7%', '10%', '10%', '7%', '8%']
    const TABLE_COL = ['10%', '30%', '15%', '15%', '15%', '15%']
    let tHead = ['ลำดับที่', 'ชื่อตัว - ชื่อสกุล', 'ค่าธรรมเนียม', 'ค่าปรับ', 'รวม', '']
    let tBody = data.items
    let rcode = data.items[0].rcode
    // let subRcode = data.items[0].rcodeBranch
    // let rcode = data.items[0].rcode
    let subRcode = `${data.items[0].rcode}${data.items[0].rcodeBranch}`
    let sumFee = 0
    let sumFine = 0
    let count = 1
    const genTable = (array = [], fee = 0, fine = 0, title = data.txtRcode) => ([
        {
            table: {
                headerRows: 4,
                widths: TABLE_COL,
                body: [
                    [
                        { style: 'header', text: 'รายงานการตรวจสอบรายได้และนำส่งเงินระบบทะเบียนราษฎร', colSpan: 6, alignment: 'center' }, '', '', '', '', ''
                    ],
                    [
                        { style: 'fieldForm', text: title, colSpan: 6, alignment: 'center' }, '', '', '', '', ''
                    ],
                    [
                        { style: 'fieldForm', text: data.txtFind, colSpan: 6, alignment: 'center' }, '', '', '', '', ''
                    ],
                    tHead.map((title, index) => ({ text: title, style: 'fieldForm', alignment: 'center' })),
                    ...array,
                    [
                        {},
                        {
                            style: 'fieldForm',
                            text: 'รวมทั้งหมด',
                            alignment: 'center'
                        },
                        {
                            style: 'fieldForm',
                            text: currencyFormat(sumFee),
                            alignment: 'right'
                        },
                        {
                            style: 'fieldForm',
                            text: currencyFormat(sumFine),
                            alignment: 'right'
                        },
                        {
                            style: 'fieldForm',
                            text: currencyFormat(sumFee + sumFine),
                            alignment: 'right'
                        },
                        {},
                    ],
                ]
            },
            layout: {
                hLineWidth: (i, node) => 0,
                vLineWidth: (i, node) => 0,
                paddingTop: (i, node) => 4.5,
                paddingBottom: (i, node) => 4.5
            }
        },
        {
            table: {
                widths: ['50%', '50%'],
                body: [
                    [
                        {
                            style: 'fieldForm',
                            text: `รวมค่าธรรมเนียมและค่าปรับ เป็นเงิน ${currencyFormat(sumFee + sumFine)} บาท (${numberToWord(sumFee + sumFine).monetary})`,
                            alignment: 'center',
                            colSpan: 2
                        },
                        {}
                    ],
                ]
            },
            layout: {
                hLineWidth: (i, node) => i <= 1 ? 0.5 : 0,
                vLineWidth: (i, node) => 0
            }
        }
    ])

    const getData = (row = {}) => [
        {
            style: 'paragraph',
            text: count++,
            alignment: 'center'
        },
        {
            style: 'paragraph',
            text: row.name,
            alignment: 'left'
        },
        {
            style: 'paragraph',
            text: row.sumFee,
            alignment: 'right'
        },
        {
            style: 'paragraph',
            text: row.sumFine,
            alignment: 'right'
        },
        {
            style: 'paragraph',
            text: currencyFormat(row.sumFee + row.sumFine),
            alignment: 'right'
        },
        {
            style: 'paragraph',
            text: '',
            alignment: 'right'
        },
    ]

    return {
        header: (curPage, numPage) => {
            return {
                margin: [10, 10],
                stack: [
                    {
                        style: 'footer',
                        text: `หน้าที่ ${curPage}/${numPage}`,
                        alignment: 'right'
                    }
                ]
            }
        },
        content: [
            // {
            ...(_ => {
                let result = []
                let array = []
                tBody.forEach((row, index) => {
                    if (subRcode !== `${row.rcode}${row.rcodeBranch}`) {
                        result.push(genTable(array, sumFee, sumFine, tBody[index - 1]))
                        result.push({ text: '', pageBreak: 'after' })
                        subRcode = `xxxx`
                        count = 1
                        sumFee = 0
                        sumFine = 0
                        if (rcode !== row.rcode) {
                            // sumAllFee = 0
                            // sumAllFine = 0
                        }

                        array = [getData(row)]
                    } else {
                        array.push(getData(row))
                        if (index === (tBody.length - 1)) {
                            if (!(row.error === true)) {
                                sumFee += row.sumFee
                                sumFine += row.sumFine
                                // sumAllFee += row.fee
                                // sumAllFine += row.fine
                            }
                            result.push(genTable(array, sumFee, sumFine))
                        }
                    }

                    if (!(row.error === true)) {
                        sumFee += row.sumFee
                        sumFine += row.sumFine
                        // sumAllFee += row.fee
                        // sumAllFine += row.fine
                    }
                })

                return result
            })()
            // {
            //     table: {
            //         widths: ['50%', '50%'],
            //         body: [
            //             [
            //                 {
            //                     style: 'fieldForm',
            //                     text: `รวมค่าธรรมเนียมและค่าปรับ (ทั้งสำนักทะเบียน) เป็นเงิน ${sumAllFee + sumAllFine} บาท (${Vue.numberToWord(sumAllFee + sumAllFine).monetary})`,
            //                     alignment: 'center',
            //                     colSpan: 2
            //                 },
            //                 {}
            //             ],
            //             [
            //                 {
            //                     margin: [0, 10, 0, 0],
            //                     style: 'fieldForm',
            //                     text: 'ลงชื่อ.............................................................ผู้ส่งเงิน',
            //                     alignment: 'center'
            //                 },
            //                 {
            //                     margin: [0, 10, 0, 0],
            //                     style: 'fieldForm',
            //                     text: 'ลงชื่อ.............................................................ผู้รับเงิน',
            //                     alignment: 'center'
            //                 }
            //             ],
            //             [
            //                 {
            //                     margin: [0, 0, 8, 0],
            //                     style: 'fieldForm',
            //                     text: '(.............................................................)',
            //                     alignment: 'center'
            //                 },
            //                 {
            //                     margin: [0, 0, 8, 0],
            //                     style: 'fieldForm',
            //                     text: '(.............................................................)',
            //                     alignment: 'center'
            //                 }
            //             ]
            //         ]
            //     },
            //     layout: {
            //         hLineWidth: (i, node) => i <= 1 ? 0.5 : 0,
            //         vLineWidth: (i, node) => 0
            //     }
            // }
        ],
        footer: [
            {
                margin: [20, 10],
                table: {
                    widths: ['100%'],
                    body: [
                        [
                            {
                                style: 'footer',
                                text: `วันที่พิมพ์รายงาน: ${data.date}`,
                                alignment: 'right',
                                border: [false, true, false, false]
                            }
                        ]
                    ]
                }
            }
        ],
        styles: {
            ...styles
        }
    }
}

