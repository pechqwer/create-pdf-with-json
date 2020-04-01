<template>
  <v-app id="app">
    <v-layout row>
      <v-flex xs2>
        <v-btn @click="printDocRcode">pdf-eng-birth20/1</v-btn>
      </v-flex>

      <v-flex xs2>
        <v-btn @click="printDocRcode2">pdf-eng-birth</v-btn>
      </v-flex>

      <v-flex xs2>
        <v-btn @click="callApiTest">call-api</v-btn>
      </v-flex>

      <v-flex xs2>
        <v-btn @click="printBill">report-bill-ors</v-btn>
      </v-flex>

      <v-flex xs2>
        <v-btn @click="printPuifai">test-puifai</v-btn>
      </v-flex>

      <v-flex xs2>
        <v-btn @click="notifyWindows">NOTIFY WINDOWS</v-btn>
      </v-flex>

      <v-flex xs2>
        <v-btn @click="DNA">DNA</v-btn>
      </v-flex>


      <!-- <v-flex>
        <input id="file" ref="file" type="file" @change="handleFileUploadTXT">
      </v-flex>
      <v-flex class="primary--text">
        Text<br>
        {{ arrayText }}
      </v-flex>
      <v-flex>
        Map Json<br>
        {{ arrayJson }}
      </v-flex> -->
      <v-flex>
        <input id="file" ref="file" type="file" accept=".xlsx" @change="handleFileUploadEXCEL">
      </v-flex>

      <!-- <format-pid
        v-model="textCard"
        pid-card
        icon=" "
        label="เลขประจำตัวประชาชน"
        @GetError="keycode"
        @clickbtn="addData"/> -->
    </v-layout>
  </v-app>
</template>

<script>
import pdfTemplate from '@/js/birth20-1'
import pdfPui from '@/js/testMedi'
import date from '@/plugins/date'
import { generateRepository, generateValidate, generateFileModel, generateMapFieldInsert, generateMapFieldUpdate, generateQueryParameter } from '@/function/generateKotlinByFileExcel'
import { getSysDate } from '@/plugins/systemDate'
import pdfeng from '@/js/eng-birth'
// import { isEmpty } from 'lodash'
import dataMockDNA from '@/mock/DNA'
import dataMockLogin from '@/mock/Login'
import readXlsxFile from 'read-excel-file'
import pdfVerifyRegister from '@/js/pdfSummaryRcode'
import pdfDNA from '@/js/pdfDNA'
import axios from 'axios'
import JSZip from 'jszip';
import TreeDataTable from 'v-tree-data-table';
// import formatPid from '@cdglib/vuetify-pid-format-thai'

export default {
  name: 'Orsrequest',
  components: {
    TreeDataTable,
  //   formatPid,
  },
  data() {
    return {
      container: '',
      notifications: [],
      object: {},
      arrayJson: [],
      arrayText: [],
      textCard: '',
      dialog: true,
      loginInfo: {},
      loading: true,
      error: false,
      systemName: process.env.VUE_APP_SYSTEM,
      appName: process.env.VUE_APP_NAME,
      appVersion: process.env.VUE_APP_VERSION,
      location: 'permission',
      elementSize: {
        header: {},
        navigation: {},
        tabs: {},
        content: {},
      },
      route: { /* tabs: [], breadcrumbs: [], */ },
    }
  },
  mounted() {
    const docFrag = document.createDocumentFragment();
    const notyfContainer = document.createElement('div');
    notyfContainer.className = 'notyf';
    docFrag.appendChild(notyfContainer);
    document.body.appendChild(docFrag);
    this.container = notyfContainer;
  },
  methods: {
    keycode(value) {
      console.log(value)
    },
    addData(value) {
      console.log(value)
    },
    async printBill() {
      const option = { orientation: 'landscape', margin: [10, 25, 10, 40] }
      const dateCurrent = `${getSysDate().getFullYear() + 543}${String(getSysDate().getMonth() + 1).padStart(2, '0')}${String(getSysDate().getDate()).padStart(2, '0')}`
      const tableBodies = [
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายสินธร งอกเงย',
          sumFine: 50,
          sumFee: 100,
          sum: 150,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายวรเวช คงดี',
          sumFine: 0,
          sumFee: 100,
          sum: 100,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายดินแดง พักรบ',
          sumFine: 0,
          sumFee: 20,
          sum: 20,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายอรชัย ใจเย็น',
          sumFine: 0,
          sumFee: 10,
          sum: 10,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายสินธร งอกเงย',
          sumFine: 50,
          sumFee: 100,
          sum: 150,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายเอกฤทธิ์ ขมเล็ก',
          sumFine: 20,
          sumFee: 0,
          sum: 20,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายแดน กิตติคุณาพงษ์',
          sumFine: 10,
          sumFee: 20,
          sum: 30,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นางสาวศยามล หนูสม',
          sumFine: 50,
          sumFee: 10,
          sum: 60,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายถาวร คงแก้ว',
          sumFine: 0,
          sumFee: 60,
          sum: 60,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นางเรไร คงศิริ',
          sumFine: 10,
          sumFee: 10,
          sum: 20,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นายปรีชา สาตี',
          sumFine: 40,
          sumFee: 40,
          sum: 80,
        },
        {
          rcodeBranch: '0001',
          rcode: '7704',
          name: 'นางสาวสุวิมล ทองมา',
          sumFine: 200,
          sumFee: 10,
          sum: 210,
        },
      ]
      const dataPrint = {
        txtFind: 'ตรวจสอบด้วย วันที่ออกใบเสร็จ ประจาวันที่: 1 ต.ค. 2562 ถึง 16 ต.ค. 2562',
        txtRcode: 'สำนักทะเบียน: อำเภอบางสะพาน',
        date: `${date.thaiDateFormat(`${dateCurrent}`, false)}`,
        items: tableBodies,
        sum: 290,
      }
      // eslint-disable-next-line no-undef
      this.printDoc(await this.pdfMake.createPdfToDataUrl(await pdfVerifyRegister(dataPrint), option))
    },
    async callApiTest() {
      // eslint-disable-next-line no-unused-vars
      const data = {
        pid: 1149900397140,
        cid: '1231das12313',
        authType: 1,
        envelop: 1,
      }
      const a = await axios.post('http://localhost:3000')
      console.log(a)
    },
    notifyWindows() {
      const card = this.buildNotificationCard.call(this, 'hellow', 'notyf__icon--alert');
      card.className += ' notyf--alert';
      this.container.appendChild(card);
      this.notifications.push(card);
    },
    buildNotificationCard(messageText, iconClass) {
      // Card wrapper
      const notification = document.createElement('div');
      notification.className = 'notyf__toast';

      const wrapper = document.createElement('div');
      wrapper.className = 'notyf__wrapper';

      const iconContainer = document.createElement('div');
      iconContainer.className = 'notyf__icon';

      const icon = document.createElement('i');
      icon.className = iconClass;

      const message = document.createElement('div');
      message.className = 'notyf__message';
      message.innerHTML = messageText;

      // Build the card
      iconContainer.appendChild(icon);
      wrapper.appendChild(iconContainer);
      wrapper.appendChild(message);
      notification.appendChild(wrapper);

      const notify = this;
      setTimeout(() => {
        notification.className += ' notyf--disappear';
        notification.addEventListener(notify.animationEnd, (event) => {
          event.target === notification && notify.container.removeChild(notification);
        });
        const index = notify.notifications.indexOf(notification);
        notify.notifications.splice(index, 1);
      }, 2000);

      return notification;
    },
    async printPuifai() {
      // eslint-disable-next-line no-unused-vars
      const data = {
        date: 'xxxxx',
        nationFather: 'xxxx',
      }
      const option = { orientation: 'portrait', margin: [10, 25, 10, 40] }
      this.printDoc(await this.pdfMake.createPdfToDataUrl([await pdfPui.printDoc(), await pdfPui.page2(), await pdfPui.page3(), await pdfPui.page4(), await pdfPui.page5()], option))
    },
    async printDocRcode() {
      const data = {
        date: 'xxxxx',
        nationFather: 'xxxx',
      }
      const option = { orientation: 'portrait', margin: [10, 25, 10, 40] }
      this.printDoc(await this.pdfMake.createPdfToDataUrl(await pdfTemplate.printDoc(data, true), option))
    },
    async printDocRcode2() {
      // eslint-disable-next-line no-unused-vars
      const data = {
        date: 'xxxxx',
        nationFather: 'xxxx',
      }
      const option = { orientation: 'portrait', margin: [10, 25, 10, 40] }
      this.printDoc(await this.pdfMake.createPdfToDataUrl(await pdfeng.pdfBirth(), option))
    },
    getDataInTextFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        const arrJson = []
        reader.readAsText(file)
        reader.onload = (event) => {
          const lines = event.target.result.split('\n')
          this.arrayText.push(event.target.result.split('\n'))
          lines.forEach((element) => {
            const splitText = element.split('|')
            if (splitText.length === 71) {
              arrJson.push({
                rcode: splitText[0].trim(),
                branch: splitText[1].trim(),
                year: splitText[2].trim(),
                addDate: splitText[3].trim(),
                firstName: splitText[4].trim(),
                lastName: splitText[5].trim(),
                popStatus: splitText[6].trim(),
                nat: splitText[7].trim(),
              })
            }
          })
          resolve(arrJson)
        }
      })
    },
    async handleFileUploadTXT() {
      const file = this.$refs.file.files[0]
      const json = await this.getDataInTextFile(file)
      this.arrayJson = json
    },
    async DNA() {
      const option = { orientation: 'landscape', margin: [18, 25, -60, 35] }
      // const tableBodies = [dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA,dataMockDNA]
      const tableBodies = [dataMockDNA]
      const dataPrint = {
        year: getSysDate().getFullYear() + 543,
        txtRcode: dataMockLogin.user.rcode.description,
        items: tableBodies,
      }
      // eslint-disable-next-line no-undef
      this.printDoc(await this.pdfMake.createPdfToDataUrl(await pdfDNA(dataPrint), option))
    },
    async handleFileUploadEXCEL() {
      const file = this.$refs.file.files[0]
      await readXlsxFile(file).then((rows) => {
        this.object.field = []
        rows.forEach((row, index) => {
          if (index === 0) this.object.database = row[0].replace('Database: ', '')
          if (index === 1) {
            const table = row[0].replace('Table: TAB_', '.')
            console.log(table)
            const split = table.split('_')
            console.log(split)
            switch (split.length) {
              case 1:
                this.object.project = table.substring(0, 1) + table.substring(1, table.length)
                break
              case 2:
                this.object.project = split[0].replace('.', '').substring(0, 1) + split[0].replace('.', '').substring(1, split[0].length).toLowerCase() + split[1].substring(0, 1).toUpperCase() + split[1].substring(1, split[1].length).toLowerCase()
                break
              default: console.log('not work !!')
            }
            this.object.database += row[0].replace('Table:TAB_', '.')
          }
          if (index > 2 && row[2] != null && row[3] != null) {
            // eslint-disable-next-line no-nested-ternary
            this.object.field.push({ name: row[1], type: row[2].toLowerCase().length > 4 ? 'String' : row[3] > 12 ? 'Long' : 'Int' })
          }
        })
      })
      const model = await generateFileModel(this.object)
      const mapFieldInsert = await generateMapFieldInsert(this.object)
      const mapFieldUpdate = await generateMapFieldUpdate(this.object)
      const mapFiled = mapFieldInsert.concat(mapFieldUpdate)
      const mapQueryParameter = await generateQueryParameter(this.object)
      const validate = await generateValidate(this.object)
      const repository = await generateRepository(this.object)
      const zip = new JSZip()
      zip.file('model.kt', model)
      zip.file('mapField.kt', mapFiled)
      zip.file('mapQueryParameter.kt', mapQueryParameter)
      zip.file('validate.kt', validate)
      zip.file('repository.kt', repository)
      zip.generateAsync({ type: 'blob' }).then((content) => {
        // eslint-disable-next-line no-undef
        saveAs(content, 'archive.zip')
      })
    },
    //
  },
}
</script>

<style type="text/css" media="screen">
  @-webkit-keyframes a{0%{opacity:0;bottom:-15px;max-height:0;max-width:0;margin-top:0}30%{opacity:.8;bottom:-3px}to{opacity:1;bottom:0;max-height:200px;margin-top:12px;max-width:400px}}@keyframes a{0%{opacity:0;bottom:-15px;max-height:0;max-width:0;margin-top:0}30%{opacity:.8;bottom:-3px}to{opacity:1;bottom:0;max-height:200px;margin-top:12px;max-width:400px}}@-webkit-keyframes b{0%{opacity:1;bottom:0}30%{opacity:.2;bottom:-3px}to{opacity:0;bottom:-15px}}@keyframes b{0%{opacity:1;bottom:0}30%{opacity:.2;bottom:-3px}to{opacity:0;bottom:-15px}}@-webkit-keyframes c{0%{opacity:0}30%{opacity:.5}to{opacity:.6}}@keyframes c{0%{opacity:0}30%{opacity:.5}to{opacity:.6}}@-webkit-keyframes d{0%{opacity:.6}30%{opacity:.1}to{opacity:0}}@keyframes d{0%{opacity:.6}30%{opacity:.1}to{opacity:0}}.notyf__icon--alert,.notyf__icon--confirm{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--alert:after,.notyf__icon--alert:before{content:"";background:#ed3d3d;display:block;position:absolute;width:3px;border-radius:3px;left:9px}.notyf__icon--alert:after{height:3px;top:14px}.notyf__icon--alert:before{height:8px;top:4px}.notyf__icon--confirm:after,.notyf__icon--confirm:before{content:"";background:#3dc763;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--confirm:after{height:6px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--confirm:before{height:11px;-webkit-transform:rotate(45deg);transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;-webkit-animation:a .3s forwards;animation:a .3s forwards;box-shadow:0 1px 3px 0 rgba(0,0,0,.45);position:relative;padding-right:13px}.notyf__toast.notyf--alert{background:#ed3d3d}.notyf__toast.notyf--confirm{background:#3dc763}.notyf__toast.notyf--disappear{-webkit-animation:b .3s 1 forwards;animation:b .3s 1 forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast.notyf--disappear .notyf__message{opacity:1;-webkit-animation:b .3s 1 forwards;animation:b .3s 1 forwards;-webkit-animation-delay:.1s;animation-delay:.1s}.notyf__toast.notyf--disappear .notyf__icon{opacity:1;-webkit-animation:d .3s 1 forwards;animation:d .3s 1 forwards}.notyf__wrapper{display:table;width:100%;padding-top:20px;padding-bottom:20px;padding-right:15px;border-radius:3px}.notyf__icon{width:20%;text-align:center;font-size:1.3em;-webkit-animation:c .5s forwards;animation:c .5s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__icon,.notyf__message{display:table-cell;vertical-align:middle;opacity:0}.notyf__message{width:80%;position:relative;-webkit-animation:a .3s forwards;animation:a .3s forwards;-webkit-animation-delay:.15s;animation-delay:.15s}.notyf{position:fixed;bottom:20px;right:30px;width:20%;color:#fff;z-index:1}@media only screen and (max-width:736px){.notyf__container{width:90%;margin:0 auto;display:block;right:0;left:0}}
</style>
