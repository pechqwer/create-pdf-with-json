const printDoc = () => {
  const layout1 = {
    info: {
      title: 'filename',
      author: 'Core Solutions Co.,Ltd.',
      subject: 'subject of document',
      keywords: 'keywords for document',
    },
    content: [
      {
        style: 'content',
        text: '\n\nPatient Profile\n\n',
        alignment: 'center',
      },
      {
        // margin: [0, 15, 0, 0],
        style: 'content',
        table: {
          widths: [
            '17%',
            '17%',
            '14%',
            '14%',
            '14%',
            '32%',
          ],
          body: [
            [
              {
                text: 'ชื่อ-สกุลผู้ป่วย: ',
                alignment: 'left',
                margin: [20, 0, 0, 0],
              },
              {
                text: '',
                alignment: 'left',
              },
              {
                text: 'อายุ:                  ปี',
                alignment: 'left',
              },
              {
                text: 'เพศ:        ',
                alignment: 'left',
              },
              {
                text: 'น้ำหนัก:               กก. ',
                alignment: 'left',
              },
              {
                text: 'ส่วนสูง:                    ซม.',
                alignment: 'left',
                margin: [0, 0, 25, 0],
              },
            ],
            [
              {
                text: 'BMI:            kg/m2    ',
                alignment: 'left',
                margin: [20, 0, 0, 0],
              },
              {
                text: 'ward:              ',
                alignment: 'left',
              },
              {
                text: 'เตียง:               ',
                alignment: 'left',
              },
              {
                text: 'HN:                ',
                alignment: 'left',
              },
              {
                colSpan: 2,
                text: 'AN         ',
                alignment: 'left',
                margin: [0, 0, 25, 0],
              },
              {},
            ],
            [
              {
                text: 'วันที่เข้ารับการรักษา:',
                alignment: 'left',
                margin: [20, 0, 0, 0],
              },
              {
                text: ' ',
                alignment: 'left',
              },
              {
                text: 'การศึกษา:      ',
                colSpan: 2,
                alignment: 'left',
              },
              {},
              {
                text: 'อาชีพ:        ',
                alignment: 'left',
                margin: [-50, 0, 0, 0],
              },
              {
                text: 'วันที่จำหน่าย:         ',
                alignment: 'left',
                margin: [-25, 0, 25, 0],
              },
            ],
          ],
        },
        layout: {
          defaultBorder: false,
        },
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: 'Medical Information',
                bold: true,
                fontSize: 20,
                alignment: 'center',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'Chief complaint (CC) :\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'History of present illness (HPI) :\n\n\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'Underlying disease :\n\n\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'Past medical history (PMH) :\n\n\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'Family history (FH) :\n\n\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'Social history (SH) :\n\n\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'ยาอื่น/สมุนไพร/อาหารเสริม :\n\n\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'ประวัติการแพ้ยา/อาหาร/อื่นๆ : \n\nลักษณะอาการที่แพ้ : \n\n\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                alignment: 'left',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      paragraph: {
        fontSize: 14,
      },
      fieldForm: {
        fontSize: 14,
        bold: true,
      },
      footer: {
        fontSize: 12,
        bold: true,
      },
    },
  }
  return layout1
}
const step1 = [
  { s: 'Temp (°C)' },
  { s: 'BP (mmHg)' },
  { s: 'PR (/min)' },
  { s: 'RR (/min)' },
  { s: 'Intake' },
  { s: 'Output' },
]

const step2 = [
  { s: 'WBC' },
  { s: 'RBC' },
  { s: 'Hgb' },
  { s: 'Hct' },
  { s: 'MCV' },
  { s: 'MCH' },
  { s: 'MCHC' },
  { s: 'RDW' },
  { s: 'Plt' },
  { s: 'Neu' },
  { s: 'Lym' },
  { s: 'Mono' },
  { s: 'Eos' },
  { s: 'Baso' },
]

const step3 = [
  { s: 'Na' },
  { s: 'K' },
  { s: 'Cl' },
  { s: 'CO2' },
  { s: 'Ca' },
  { s: 'P' },
  { s: 'Mg' },
]

const step4 = [
  { s: 'PT' },
  { s: 'INR' },
  { s: 'aPTT' },
  { s: 'TT3' },
  { s: 'FT3' },
  { s: 'TT4' },
  { s: 'FT4' },
  { s: 'TSH' },
]

const step5 = [
  { s: 'Glucose' },
  { s: 'Chol' },
  { s: 'HDL-C' },
  { s: 'LDL-C' },
]

const step6 = [
  { s: 'BUN' },
  { s: 'Cr' },
  { s: 'eGFR' },
]

const step7 = [
  { s: 'Alb' },
  { s: 'Glob' },
  { s: 'tot Bil' },
  { s: 'dir Bil' },
  { s: 'AST' },
  { s: 'ALT' },
  { s: 'ALP' },
]

const step8 = [
  { s: 'Glucose' },
  { s: 'Blood' },
  { s: 'WBC' },
  { s: 'RBC' },
  { s: 'Crystal' },
  { s: 'Bilirubin' },
  { s: 'Specific gravity' },
  { s: 'Color' },
  { s: 'Apperarance' },
  { s: 'Becteria' },
  { s: 'Albumin' },
  { s: 'pH' },
  { s: 'Ketone' },
]

const createID1 = (data = [{ s: 'new' }]) => {
  const head = data.map(f => ({
    style: 'content',
    table: {
      widths: [
        '10%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
      ],
      body: [
        [
          {
            colSpan: 11,
            style: 'content',
            text: f.s,
            alignment: 'center',
            fillColor: '#00ffff',
            border: [true, false, true, true],
          },
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
        ],
      ],
    },
    margin: [10, 0, 10, 0],
  }))
  const body = data.map(f => ({
    style: 'content',
    table: {
      widths: [
        '10%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
        '9%',
      ],
      body: [
        [
          {
            style: 'content',
            text: f.s,
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: '  ',
            border: [true, false, true, true],
          },
        ],
      ],
    },
    margin: [10, 0, 10, 0],
  }))
  return {
    body,
    head,
  }
}

const createID2 = (data = [{ s: 'new' }]) => {
  const body = data.map(f => ({
    style: 'content',
    table: {
      widths: [
        '16%',
        '17%',
        '19%',
        '16%',
        '17%',
        '16%',
      ],
      body: [
        [
          {
            style: 'content',
            text: ' \n\n',
            alignment: 'center',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: ' \n\n',
            alignment: 'center',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: ' \n\n',
            alignment: 'center',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: ' \n\n',
            alignment: 'center',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: ' \n\n',
            alignment: 'center',
            border: [true, false, false, true],
          },
          {
            style: 'content',
            text: ' \n\n',
            alignment: 'center',
            border: [true, false, true, true],
          },
          
        ],
      ],
    },
    margin: [10, 0, 10, 0],
  }))
  return {
    body,
  }
}

const page2 = () => {
  const layout1 = {
    info: {
      title: 'filename',
      author: 'Core Solutions Co.,Ltd.',
      subject: 'subject of document',
      keywords: 'keywords for document',
    },
    content: [
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: 'Physical Examination',
                bold: true,
                fontSize: 20,
                alignment: 'center',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                bold: true,
                fontSize: 20,
                alignment: 'center',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'General appearance \n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Skin \n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'HEENT\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Pulmonary \n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Cardiovascular \n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Abdominal\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Abdominal\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Rectal\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Musculoskeletal \n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Neurological\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'EKG\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: 'Microbial Test ',
                bold: true,
                fontSize: 20,
                alignment: 'center',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        table: {
          widths: ['100%'],
          body: [
            [
              {
                style: 'content',
                text: '',
                bold: true,
                fontSize: 20,
                alignment: 'center',
                border: [false, true, false, false]
              },
            ],
          ],
        },
        margin: [20, 0, 25, 0],
      },
      {
        style: 'content',
        text: 'Gram stain\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'Culture\n\n',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: [
            '10%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
          ],
          body: [
            [
              {
                colSpan: 11,
                style: 'content',
                text: 'Lab',
                alignment: 'center',
                fillColor: '#00ffff',
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
          ],
        },
        margin: [10, 0, 10, 0],
      },
      ...createID1([{ s: 'Date' }]).body,
      ...createID1([{ s: 'Vital Sign' }]).head,
      ...createID1(step1).body,
      ...createID1([{ s: 'CBC' }]).head,
      ...createID1(step2).body,
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      paragraph: {
        fontSize: 14,
      },
      fieldForm: {
        fontSize: 14,
        bold: true,
      },
      footer: {
        fontSize: 12,
        bold: true,
      },
    },
  }
  return layout1
}

const page3 = () => {
  const layout1 = {
    info: {
      title: 'filename',
      author: 'Core Solutions Co.,Ltd.',
      subject: 'subject of document',
      keywords: 'keywords for document',
    },
    content: [
      {
        style: 'content',
        table: {
          widths: [
            '10%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
          ],
          body: [
            [
              {
                colSpan: 11,
                style: 'content',
                text: 'Electrolytes',
                alignment: 'center',
                fillColor: '#00ffff',
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
          ],
        },
        margin: [10, 0, 10, 0],
      },
      ...createID1(step3).body,
      ...createID1([{ s: 'Hematology' }]).head,
      ...createID1(step4).body,
      ...createID1([{ s: 'Thyroid Test' }]).head,
      ...createID1(step5).body,
      ...createID1([{ s: 'Renal' }]).head,
      ...createID1(step6).body,
      ...createID1([{ s: 'Livel' }]).head,
      ...createID1(step7).body,
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      paragraph: {
        fontSize: 14,
      },
      fieldForm: {
        fontSize: 14,
        bold: true,
      },
      footer: {
        fontSize: 12,
        bold: true,
      },
    },
  }
  return layout1
}

const page4 = () => {
  const layout1 = {
    info: {
      title: 'filename',
      author: 'Core Solutions Co.,Ltd.',
      subject: 'subject of document',
      keywords: 'keywords for document',
    },
    content: [
      {
        style: 'content',
        table: {
          widths: [
            '10%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
          ],
          body: [
            [
              {
                colSpan: 11,
                style: 'content',
                fillColor: '#00ffff',
                text: 'Urine analysis (UA)',
                alignment: 'center',
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
          ],
        },
        margin: [10, 0, 10, 0],
      },
      ...createID1(step8).body,
      ...createID1([{ s: 'Drug levels' }]).head,
      ...createID1([{ s: '' }, { s: '' }, { s: '' }]).body,
      { text: '\n\n' },
      {
        style: 'content',
        table: {
          widths: [
            '10%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
            '9%',
          ],
          body: [
            [
              {
                colSpan: 11,
                style: 'content',
                fillColor: '#00ffff',
                text: 'Medication / Date',
                alignment: 'center',
              },
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
              {},
            ],
          ],
        },
        margin: [10, 0, 10, 0],
      },
      ...createID1([{ s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }, { s: '' }]).body,
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      paragraph: {
        fontSize: 14,
      },
      fieldForm: {
        fontSize: 14,
        bold: true,
      },
      footer: {
        fontSize: 12,
        bold: true,
      },
    },
  }
  return layout1
}

const page5 = () => {
  const layout1 = {
    info: {
      title: 'filename',
      author: 'Core Solutions Co.,Ltd.',
      subject: 'subject of document',
      keywords: 'keywords for document',
    },
    content: [
      {
        text: 'ข้อมูลการใช้ยา :\n\n',
        style: 'content',
        margin: [20, 0, 0, 0],
      },
      {
        style: 'content',
        table: {
          widths: [
            '16%',
            '17%',
            '19%',
            '16%',
            '17%',
            '16%',
          ],
          body: [
            [
              {
                style: 'content',
                text: '\nวันที่เริ่มได้รับยา\n\n',
                alignment: 'center',
              },
              {
                style: 'content',
                text: '\nเวลาที่ได้รับยาครั้งล่าสุด\n\n',
                alignment: 'center',
              },
              {
                style: 'content',
                text: '\nวันที่ตรวจวัดระดับยาในเลือด\n\n',
                alignment: 'center',
              },
              {
                style: 'content',
                text: '\nเวลาที่ตรวจวัด\n\n',
                alignment: 'center',
              },
              {
                style: 'content',
                text: '\nระดับยาในเลือดที่วัดได้\n\n',
                alignment: 'center',
              },
              {
                style: 'content',
                text: '\nหมายเหตุ\n\n',
                alignment: 'center',
              },
            ],
          ],
        },
        margin: [10, 0, 10, 0],
      },
      // ...createID1([{ s: 'Date' }]).body,
      ...createID2([{ s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }, { s: ' ' }]).body,
    ],
    styles: {
      header: {
        fontSize: 16,
        bold: true,
      },
      paragraph: {
        fontSize: 14,
      },
      fieldForm: {
        fontSize: 14,
        bold: true,
      },
      footer: {
        fontSize: 12,
        bold: true,
      },
    },
  }
  return layout1
}

export default {
  printDoc, page2, page3, page4, page5,
}
