/* eslint-disable */

const styles = {
  header: {
    fontSize: 14,
    bold: true
  },
  paragraph: {
    fontSize: 10
  },
  fieldForm: {
    fontSize: 13,
    bold: true
  },
  footer: {
    fontSize: 12,
    bold: true
  }
}

const setLayout = (data) => {
  const TABLE_COL = ['4%', '11.5%', '7%', '9%', '5%', '9%', '5%', '11.5%', '5%', '8%', '9%', '6%']
  let tBody = data.items
  let count = 1
  const genTable = (array = []) => ([
    {
      table: {
        headerRows: 3,
        widths: TABLE_COL,
        body: [
          [
            { style: 'header', text: `แบบรายงานผู้เข้าร่วมโครงการตรวจสารพันธุกรรมเพื่อแก้ไขปัญหาสถานะและสิทธิของคนไทยที่ตกหล่นทางทะเบียน ประจำปีงบประมาณ พ.ศ. ${data.year}`, colSpan: 12, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', ''
          ],
          [
            { style: 'header', text: 'ซึ่งนายทะเบียนอำเภอ/นายทะเบียนท้องถิ่นส่งตรวจสารพันธุกรรม (DNA)', colSpan: 12, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', ''
          ],
          [
            { style: 'header', text: `สำนักทะเบียน ${data.txtRcode}`, colSpan: 12, alignment: 'center', border: [false, false, false, false] }, '', '', '', '', '', '', '', '', '', '', ''
          ],
          [
            { text: 'ลำดับที่', style: 'fieldForm', alignment: 'center', rowSpan: 3 },
            { text: 'ข้อมูลของผู้ขอลงรายการสัญชาติไทยโดยการแจ้งเกิด/เพิ่มชื่อ', style: 'fieldForm', alignment: 'center', colSpan: 6 },
            {},
            {},
            {},
            {},
            {},
            { text: 'ข้อมูลคู่ตรวจ', style: 'fieldForm', alignment: 'center', colSpan: 3 },
            {},
            {},
            { text: 'หน่วยรับตรวจสารพันธุกรรม (DNA)', style: 'fieldForm', alignment: 'center', rowSpan: 3 },
            { text: 'หมายเหตุ', style: 'fieldForm', alignment: 'center', rowSpan: 3 }
          ],
          [
            {},
            { text: 'ชื่อ - ชื่อสกุล เลขประจำตัว', style: 'fieldForm', alignment: 'center', rowSpan: 2 },
            { text: 'วัน/เดือน/ปีเกิด', style: 'fieldForm', alignment: 'center', rowSpan: 2 },
            { text: 'ข้อมูลของบิดา', style: 'fieldForm', alignment: 'center', colSpan: 2 },
            {},
            { text: 'ข้อมูลของมารดา', style: 'fieldForm', alignment: 'center', colSpan: 2 },
            {},
            { text: 'ชื่อ - ชื่อสกุล เลขประจำตัว', style: 'fieldForm', alignment: 'center', rowSpan: 2 },
            { text: 'สัญชาติ', style: 'fieldForm', alignment: 'center', rowSpan: 2 },
            { text: 'ความเกี่ยวพัน', style: 'fieldForm', alignment: 'center', rowSpan: 2 },
            {},
            {}
          ],
          [
            {},
            {},
            {},
            { text: 'ชื่อ - ชื่อสกุล', style: 'fieldForm', alignment: 'center'},
            { text: 'สัญชาติ', style: 'fieldForm', alignment: 'center' },
            { text: 'ชื่อ - ชื่อสกุล', style: 'fieldForm', alignment: 'center', },
            { text: 'สัญชาติ', style: 'fieldForm', alignment: 'center' },
            {},
            {},
            {},
            {},
            {}
          ],
          ...array,
        ]
      },
      layout: {
        hLineWidth: (i, node) => 1,
        vLineWidth: (i, node) => 1,
        paddingTop: (i, node) => 4.5,
        paddingBottom: (i, node) => 4.5
      }
    },
  ])

  const getData = (row = {}) => [
    {
      style: 'paragraph',
      text: count++,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.title.description}${row.firstName} ${row.lastName}\n${row.pid}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.dateOfBirth.toString().substring(6, 8)}/${row.dateOfBirth.toString().substring(6, 8)}/${row.dateOfBirth.toString().substring(0, 4)}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.father.firstName} ${row.father.lastName}`,
      alignment: 'left',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.father.nationality.description}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.mother.firstName} ${row.mother.lastName}`,
      alignment: 'left',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.mother.nationality.description}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.partner.title.description}${row.partner.firstName} ${row.partner.lastName}\n${row.partner.pid}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.partner.nationality.description}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.partner.ref.split('#')[1]}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.testUnit.description}`,
      alignment: 'center',
      rowSpan: 2,
    },
    {
      style: 'paragraph',
      text: `${row.terminateCause}`,
      alignment: 'center',
      rowSpan: 2,
    },
  ]

  const getRowEmpty = (row = {}) => [
    {},{},{},{},{},{},{},{},{},{},{},{},
  ]

  return {
    header: (curPage, numPage) => {
      return {
        margin: [20, 10],
        stack: [
          {
            style: 'footer',
            text: `หน้าที่ ${curPage}/${numPage}\n\n\n\n\n`,
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
          if (tBody.length === 1) {
            array.push(getData(row))
            array.push(getRowEmpty())
            result.push(genTable(array))
          } else if (array.length == 0) {
            array = [getData(row)]
            array.push(getRowEmpty())
          } else if (index % 11 == 0) {
            result.push(genTable(array))
            result.push({ text: '', pageBreak: 'after' })
            array = [getData(row)]
            array.push(getRowEmpty())
          } else {
            array.push(getData(row))
            array.push(getRowEmpty())
            if (index === (tBody.length - 1)) {
              result.push(genTable(array))
            }
          }
        })

        return result
      })()
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

export default async (data) => {
  return setLayout(data)
}
