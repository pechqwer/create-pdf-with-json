import image from '@/assets/image' // image krut

// const systemDate = () => {
//   const diffTime = localStorage.getItem('system-date:diff-time')
//   return new Date(Date.now() + ((diffTime != null) ? Number(diffTime) : 0))
// }

const printDoc = (data) => {
  console.log(data)
  const layout1 = {
    info: {
      title: 'filename',
      author: 'Core Solutions Co.,Ltd.',
      subject: 'subject of document',
      keywords: 'keywords for document',
    },
    content: [
      {
        canvas: [
          { type: 'rect', x: 206, y: 40, w: 80, h: 25, lineWidth: 1 }
        ],
        absolutePosition: { x: 205, y: 40 }
      },
      {
        canvas: [
          { type: 'rect', x: 0, y: 340, w: 100, h: 120, lineWidth: 1 }
        ],
        absolutePosition: { x: 40, y: 340 }
      },
      {
        margin: [0, 0, 0, 0],
        fontSize: 14,
        table: {
          widths: [
            '50%',
            '50%',
          ],
          body: [
            [
              {
                text: '',
                alignment: 'left',
                margin: [25, 20, 0, 0],
              },
              {
                text: 'Ref: 1099.103.85247',
                alignment: 'right',
                margin: [0, 20, 25, 0],
              },
            ],
            [
              {
                text: '',
                alignment: 'left',
                margin: [0, 0, 0, 0],
              },
              {
                text: 'Thor.Ror.20/1',
                alignment: 'right',
                margin: [0, 15, 100, 0],
              },
            ],
          ],
        },
        layout: {
          defaultBorder: false,
        },
      },
      {
        fontSize: 14,
        table: {
          widths: [
            '40%',
            '20%',
            '40%',
          ],
          body: [
            [
              {
                text: '',
              },
              {
                image: image.image,
                width: 75,
                height: 75,
                alignment: 'center',
                margin: [0, -50, 0, 0],
              },
              {
                text: '',
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
        text: 'Letter of Birth Certification',
        alignment: 'center',
      },
      {
        margin: [0, 10, 0, 0],
        style: 'content',
        table: {
          widths: [
            '50%',
            '50%',
          ],
          body: [
            [
              {
                text: 'No. 1/2561',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'Registration Office: Mueang Ubon Ratchathani District',
                alignment: 'right',
                margin: [0, 0, 25, 0],
              },
            ],
            [
              {
                text: '',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'Registration Office Code: 3401',
                alignment: 'right',
                margin: [0, 0, 25, 0],
              },
            ],
            [
              {
                text: 'Whereas MISS PORNSATIT PUKMITH',
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {
                text: 'Identification No: 3-3401-00298-57-7',
                alignment: 'left',
                margin: [0, 0, 25, 0],
              },
            ],
            [
              {
                text: 'has submitted an application for a Letter of Birth Certification, details of which are as follow\nPart 1 Applicant for the Letter of Birth Certification ',
                colSpan: 2,
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {},
            ],
          ],
        },
        layout: {
          defaultBorder: false,
        },
      },
      {
        margin: [0, 10, 0, 0],
        style: 'content',
        table: {
          widths: [
            '25%',
            '25%',
            '25%',
            '25%',
          ],
          body: [
            [
              {
                text: 'Part 1 Applicant for the Letter of Birth Certification',
                colSpan: 4,
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'Name: MISS PORNSATIT PUKMITH',
                colSpan: 2,
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {},
              {},
              {
                text: 'Identification No: 3-3401-00298-57-7',
                alignment: 'left',
                margin: [-50, 0, 0, 0],
              },
            ],
            [
              {
                text: 'Nationality: THAI',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'Date of Birth: 16 July 1968',
                alignment: 'left',
              },
              {
                text: 'Place of Birth: 68',
                alignment: 'left',
              },
              {},
            ],
            [
              {
                text: 'Being the child no: 7 of 9',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'children of  the full blood: ',
                alignment: 'left',
              },
              {},
              {},
            ],
            [
              {
                text: 'Present Address: 31',
                colSpan: 4,
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'Part 2 Father of the Applicant for the Letter of Birth Certification',
                colSpan: 4,
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'Name: MR. OOM PHUKMIT',
                colSpan: 2,
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {},
              {},
              {
                text: 'Identification No: 3-3401-00298-50-0',
                alignment: 'left',
                margin: [-50, 0, 0, 0],
              },
            ],
            [
              {
                text: 'Nationality: THAI',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'Date of Birth: 1933',
                alignment: 'left',
              },
              {
                text: 'Personal Status: Alive',
                alignment: 'left',
              },
              {},
            ],
            [
              {
                text: 'Part 3 Mother of the Applicant for the Letter of Birth Certification',
                colSpan: 4,
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'Name: -',
                colSpan: 2,
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {},
              {},
              {
                text: 'Identification No: 3-3401-00298-51-8',
                alignment: 'left',
                margin: [-50, 0, 0, 0],
              },
            ],
            [
              {
                text: 'Nationality: THAI',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'Date of Birth: 1936',
                alignment: 'left',
              },
              {
                text: 'Personal Status: Alive',
                alignment: 'left',
              },
              {},
            ],
            [
              {
                text: 'Part 4 Evidence',
                colSpan: 4,
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'Documentary evidence; namely: -',
                colSpan: 4,
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: 'Witness(es); namely',
                colSpan: 4,
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {},
              {},
              {},
            ],
            [
              {
                text: '1. Name: MR.OOM PHUKMIT',
                colSpan: 2,
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {},
              {},
              {
                text: 'Identification No: 3-3401-00298-50-0',
                alignment: 'left',
                margin: [-50, 0, 0, 0],
              },
            ],
            [
              {
                text: 'Nationality: THAI',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'Date of Birth: 1933',
                alignment: 'left',
              },
              {
                text: 'Related to the Applicant as -',
                colSpan: 2,
                alignment: 'left',
              },
              {},
            ],
            [
              {
                text: '2. Name: MRS.CHESA CHAIYASERT',
                colSpan: 2,
                alignment: 'left',
                margin: [45, 0, 0, 0],
              },
              {},
              {},
              {
                text: 'Identification No: 3-3401-00298-53-4',
                alignment: 'left',
                margin: [-50, 0, 0, 0],
              },
            ],
            [
              {
                text: 'Nationality: THAI',
                alignment: 'left',
                margin: [25, 0, 0, 0],
              },
              {
                text: 'Date of Birth: 8 March 1959',
                alignment: 'left',
              },
              {
                text: 'Related to the Applicant as -',
                colSpan: 2,
                alignment: 'left',
              },
              {},
            ],
          ],
        },
        layout: {
          defaultBorder: false,
        },
      },
      {
        style: 'content',
        text: '\n\nThe Registrar’s Instruction',
        margin: [25, 0, 0, 0],
      },
      {
        style: 'content',
        text: 'The Registrar has already verified the evidences thus issued this letter of certification to the applicant on 26 January  2018',
        margin: [45, 0, 0, 0],
      },
      {
        fontSize: 14,
        table: {
          widths: [
            '30%',
            '25%',
            '45%',
          ],
          body: [
            [
              {},
              {
                text: 'Signature',
                alignment: 'center',
                margin: [0, 0, 0, 0],
              },
              {
                text: 'MISS CHANAWAN KAEWPROM',
                alignment: 'center',
                margin: [0, 0, 100, 0],
              },
            ],
            [
              {},
              {},
              {
                text: '( MISS CHANAWAN KAEWPROM )',
                alignment: 'center',
                margin: [0, 0, 100, 0],
              },
            ],
            [
              {},
              {},
              {
                text: ' District Registrar/Local Registrar',
                alignment: 'center',
                margin: [0, 0, 100, 0],
              },
            ],
            [
              {
                text: 'Signature',
                alignment: 'right',
                margin: [0, 0, -20, 0],
              },
              {
                text: 'MISS CHANAWAN KAEWPROM',
                alignment: 'left',
                margin: [18, 0, -55, 0],
              },
              {
                text: 'Applicant for the Letter of Birth Certification',
                alignment: 'right',
                margin: [0, 0, 25, 0],
              },
            ],
            [
              {},
              {
                text: '( MISS CHANAWAN KAEWPROM )',
                alignment: 'left',
                colSpan: 2,
                margin: [15, 0, 0, 0],
              },
              {},
            ],
            [
              {},
              {
                text: 'Certified particulars from the Civil Registration Database',
                colSpan: 2,
                alignment: 'center',
                margin: [0, 0, 0, 0],
              },
              {},
            ],
            [
              {},
              {},
              {
                text: '..................................................',
                alignment: 'center',
                margin: [0, 0, 100, 0],
              },
            ],
          ],
        },
        layout: {
          defaultBorder: false,
        },
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

export default {
  printDoc,
}
