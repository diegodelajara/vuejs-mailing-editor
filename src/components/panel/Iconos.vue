<template>
	<div id="sectionIconos" class="section">
	    <ul class="radios">
	      <li>
	        <input
	          type="radio"
	          name="iconos"
	          id="iconos_1x4_2x2"
	          value="iconos_1x4_2x2"
	          v-model="radioIconos"
	          v-on:change="getIconos">
	        <label for="iconos_1x4_2x2">1x4 / 2x2</label>
	      </li>
	      <li>
	        <input
	          type="radio"
	          name="iconos"
	          id="iconos_1x4_4x1"
	          value="iconos_1x4_4x1"
	          v-model="radioIconos"
	          v-on:change="getIconos">
	        <label for="iconos_1x4_4x1">1x4 / 4x1</label>
	      </li>
	      <li>
	        <input
	          type="radio"
	          name="iconos"
	          id="iconos_null"
	          value="iconos_null"
	          v-model="radioIconos"
	          v-on:change="getIconos">
	        <label for="iconos_null">No</label>
	      </li>
	    </ul>
      <div class="icon-editor" v-show="radioIconos != 'iconos_null'">
          <input id="tab1" type="radio" name="tabs" checked>
          <label for="tab1">Icono 1</label>

          <input id="tab2" type="radio" name="tabs">
          <label for="tab2">Icono 2</label>

          <input id="tab3" type="radio" name="tabs">
          <label for="tab3">Icono 3</label>

          <input id="tab4" type="radio" name="tabs">
          <label for="tab4">Icono 4</label>

          <section id="content1">
            <input type="text" placeholder="Ruta" v-model="icons.icon1.src" @input="getIconos">
            <input type="text" placeholder="Texto" v-model="icons.icon1.text" @input="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)">
            <table border="1">
              <thead>
              <tr>
                <th>Text</th>
                <th><input type="checkbox" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon1.all.bold" disabled> <span style="font-weight:bold;">Bold</span></th>
                <th><input type="checkbox"@change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon1.all.italic" disabled> <span style="font-style: italic;">Italic</span></th>
                <th><input type="number" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon1.all.fontsize" disabled> <span>Font-size</span></th>
                <th><input type="text" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon1.all.color" disabled> <span>Color</span></th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(text, index) in icons.icon1.arr">
                <td>{{text.word}}</td>
                <td><input type="checkbox"  v-model="text.bold" @change="getIconos"></td>
                <td><input type="checkbox" v-model="text.italic" @change="getIconos"></td>
                <td><input type="number" v-model="text.fontsize" @change="getIconos"></td>
                <td><input type="text" v-model="text.color" @input="getIconos"></td>
              </tr>
              </tbody>
            </table>
          </section>

          <section id="content2">
            <input type="text" placeholder="Ruta" v-model="icons.icon2.src" @input="getIconos">
            <input type="text" placeholder="Texto" v-model="icons.icon2.text" @input="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)">
            <table border="1">
              <thead>
              <tr>
                <th>Text</th>
                <th><input type="checkbox" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon2.all.bold" disabled> <span style="font-weight:bold;">Bold</span></th>
                <th><input type="checkbox"@change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon2.all.italic" disabled> <span style="font-style: italic;">Italic</span></th>
                <th><input type="number" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon2.all.fontsize" disabled> <span>Font-size</span></th>
                <th><input type="text" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon2.all.color" disabled> <span>Color</span></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="(text, index) in icons.icon2.arr">
                <td>{{text.word}}</td>
                <td><input type="checkbox" name="bold" v-model="text.bold" @change="getIconos"></td>
                <td><input type="checkbox" name="italic" v-model="text.italic" @change="getIconos"></td>
                <td><input type="number" name="fontsize" v-model="text.fontsize" @change="getIconos"></td>
                <td><input type="text" name="color" v-model="text.color" @input="getIconos"></td>
              </tr>
              </tbody>
            </table>
          </section>

          <section id="content3">
            <input type="text" placeholder="Ruta" v-model="icons.icon3.src" @input="getIconos">
            <input type="text" placeholder="Texto" v-model="icons.icon3.text" @input="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)">
            <table border="1">
              <thead>
                <tr>
                <th>Text</th>
                <th><input type="checkbox" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.bold" disabled> <span style="font-weight:bold;">Bold</span></th>
                <th><input type="checkbox"@change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.italic" disabled> <span style="font-style: italic;">Italic</span></th>
                <th><input type="number" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.fontsize" disabled> <span>Font-size</span></th>
                <th><input type="text" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.color" disabled> <span>Color</span></th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(text, index) in icons.icon3.arr">
                  <td>{{text.word}}</td>
                  <td><input type="checkbox" name="bold" v-model="text.bold" @change="getIconos"></td>
                  <td><input type="checkbox" name="italic" v-model="text.italic" @change="getIconos"></td>
                  <td><input type="number" name="fontsize" v-model="text.fontsize" @change="getIconos"></td>
                  <td><input type="text" name="color" v-model="text.color" @input="getIconos"></td>
                </tr>
              </tbody>
            </table>
          </section>

          <section id="content4">
            <input type="text" placeholder="Ruta" v-model="icons.icon4.src" @input="getIconos">
            <input type="text" placeholder="Texto" v-model="icons.icon4.text" @input="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)">
            <table border="1">
              <thead>
              <tr>
                <th>Text</th>
                <th><input type="checkbox" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.bold" disabled> <span style="font-weight:bold;">Bold</span></th>
                <th><input type="checkbox"@change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.italic" disabled> <span style="font-style: italic;">Italic</span></th>
                <th><input type="number" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.fontsize" disabled> <span>Font-size</span></th>
                <th><input type="text" @change="convertInArray(icons.icon1.text, icons.icon2.text, icons.icon3.text, icons.icon4.text)" v-model="icons.icon3.all.color" disabled> <span>Color</span></th>
              </tr>
              </thead>
              <tbody>
                <tr v-for="(text, index) in icons.icon4.arr">
                  <td>{{text.word}}</td>
                  <td><input type="checkbox" name="bold" v-model="text.bold" @change="getIconos"></td>
                  <td><input type="checkbox" name="italic" v-model="text.italic" @change="getIconos"></td>
                  <td><input type="number" name="fontsize" v-model="text.fontsize" @change="getIconos"></td>
                  <td><input type="text" name="color" v-model="text.color" @input="getIconos"></td>
                </tr>
              </tbody>
            </table>
          </section>
      </div>
	  </div>
</template>

<script>
	export default {
		data() {
			return {
        icons : {
          icon1 : {
            src : 'http://images.masterbase.com/v1/consorciomktpro/b/seguro-auto-alta-gama/1.png',
            text : 'Daños Materiales y Robo del Vehículo, con valor tradicional*',
            bold: '',
            italic: '',
            fontsize: '',
            color: '',
            arr : [],
            all: {
              bold     : false,
              italic   : false,
              fontsize : 14,
              color    : '#000000',
            }

          },
          icon2 : {
            src : 'http://imagesscl.masterbase.com/v1/consorciomktpro/b/seguro-auto-alta-gama/2.png',
            text : 'Responsabilidad Civil UF 1000',
            bold: '',
            italic: '',
            fontsize: '',
            color: '',
            arr : [],
            all: {
              bold     : false,
              italic   : false,
              fontsize : 14,
              color    : '#000000',
            }

          },
          icon3 : {
            src : 'http://imagesscl.masterbase.com/v1/consorciomktpro/b/seguro-auto-alta-gama/3.png',
            text : 'Robo de Accesorios UF 100',
            bold: '',
            italic: '',
            fontsize: '',
            color: '',
            arr : [],
            all: {
              bold     : false,
              italic   : false,
              fontsize : 14,
              color    : '#000000',
            }

          },
          icon4 : {
            src : 'http://imagesscl.masterbase.com/v1/consorciomktpro/b/seguro-auto-alta-gama/4.png',
            text : 'Asiento pasajeros por muerte e Incapacidad UF 600',
            bold: '',
            italic: '',
            fontsize: '',
            color: '',
            arr : [],
            all: {
              bold     : false,
              italic   : false,
              fontsize : 14,
              color    : '#000000',
            }

          }
        },
        radioIconos  : 'iconos_null'
		    }
		},
    mounted: function(){
      this.convertInArray(this.icons.icon1.text, this.icons.icon2.text, this.icons.icon3.text, this.icons.icon4.text)
    },
		methods: {
        convertInArray: function(icon1, icon2, icon3, icon4){
          this.icons.icon1.arr =  this.$parent.formatSplit(icon1, ' ')
          this.icons.icon2.arr =  this.$parent.formatSplit(icon2, ' ')
          this.icons.icon3.arr =  this.$parent.formatSplit(icon3, ' ')
          this.icons.icon4.arr =  this.$parent.formatSplit(icon4, ' ')

          let ifCheckBold_1       = this.icons.icon1.all.bold
          let ifCheckItalic_1     = this.icons.icon1.all.italic
          let ifFontSize_1        = this.icons.icon1.all.fontsize
          let ifColor_1           = this.icons.icon1.all.color

          let ifCheckBold_2       = this.icons.icon2.all.bold
          let ifCheckItalic_2     = this.icons.icon2.all.italic
          let ifFontSize_2        = this.icons.icon2.all.fontsize
          let ifColor_2           = this.icons.icon2.all.color

          let ifCheckBold_3       = this.icons.icon3.all.bold
          let ifCheckItalic_3     = this.icons.icon3.all.italic
          let ifFontSize_3        = this.icons.icon3.all.fontsize
          let ifColor_3           = this.icons.icon3.all.color

          let ifCheckBold_4       = this.icons.icon4.all.bold
          let ifCheckItalic_4     = this.icons.icon4.all.italic
          let ifFontSize_4        = this.icons.icon4.all.fontsize
          let ifColor_4           = this.icons.icon4.all.color

          this.icons.icon1.arr.forEach(function(element, index) {
            let item = {
              'word'      : element,
              'bold'      : ifCheckBold_1,
              'italic'    : ifCheckItalic_1,
              'fontsize'  : ifFontSize_1,
              'color'     : ifColor_1
            }
            this.icons.icon1.arr[index] = item
          }.bind(this));

          this.icons.icon2.arr.forEach(function(element, index) {
            let item = {
              'word'      : element,
              'bold'      : ifCheckBold_2,
              'italic'    : ifCheckItalic_2,
              'fontsize'  : ifFontSize_2,
              'color'     : ifColor_2
            }
            this.icons.icon2.arr[index] = item
          }.bind(this));

          this.icons.icon3.arr.forEach(function(element, index) {
            let item = {
              'word'      : element,
              'bold'      : ifCheckBold_3,
              'italic'    : ifCheckItalic_3,
              'fontsize'  : ifFontSize_3,
              'color'     : ifColor_3
            }
            this.icons.icon3.arr[index] = item
          }.bind(this));

          this.icons.icon4.arr.forEach(function(element, index) {
            let item = {
              'word'      : element,
              'bold'      : ifCheckBold_4,
              'italic'    : ifCheckItalic_4,
              'fontsize'  : ifFontSize_4,
              'color'     : ifColor_4
            }
            this.icons.icon4.arr[index] = item
          }.bind(this));


          this.getIconos()
        },
	      getIconos: function(){
	        this.$emit('getIconos', this.getIconos)
	        let radio           = this.radioIconos

          let icon1_src       = this.icons.icon1.src
          let icon1_alt       = this.icons.icon1.text
          let icon1_text      = this.icons.icon1.text
          let icon1_arr       = this.icons.icon1.arr

          let icon2_src       = this.icons.icon2.src
          let icon2_alt       = this.icons.icon2.text
          let icon2_text      = this.icons.icon2.text
          let icon2_arr       = this.icons.icon2.arr

          let icon3_src       = this.icons.icon3.src
          let icon3_alt       = this.icons.icon3.text
          let icon3_text      = this.icons.icon3.text
          let icon3_arr       = this.icons.icon3.arr

          let icon4_src       = this.icons.icon4.src
          let icon4_alt       = this.icons.icon4.text
          let icon4_text      = this.icons.icon4.text
          let icon4_arr       = this.icons.icon4.arr


	        let iconos_1x4_2x2  = `
	            <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid main-icons" width="560">
                <tbody>
                    <tr>
                        <th colspan="3" height="6" width="100%">&nbsp;</th>
                    </tr>
                    <tr>
                        <th align="center" class="force-col" style="display:inline-block;  vertical-align:top;" width="280">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="col-2" width="280">
                                <tbody>
                                    <tr>
                                        <td align="center" width="150" style="vertical-align:top">
                                            <img src="${icon1_src}" alt="${icon1_alt}" class="float-center" width="63" height="63" style="display:block;">

                                            <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:14px;text-align:center">
                                              ${icon1_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
                                            </p>
                                        </td>
                                        <td align="center" width="150" style="vertical-align:top">
                                            <img src="${icon2_src}" alt="${icon2_alt}" class="float-center" width="63" height="63" style="display:block;">

                                            <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:14px;text-align:center">
                                            ${icon2_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                        <th class="force-col" style="display:inline-block; max-width:280px;  vertical-align:top; ">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="col-2" width="280">
                                <tbody>
                                    <tr>
                                        <td align="center" width="140" style="vertical-align:top">
                                            <img src="${icon3_src}" alt="${icon3_alt}" class="float-center" width="63" height="63" style="display:block;">

                                            <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:14px;text-align:center">
                                              ${icon3_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
                                              </p>
                                        </td>
                                        <td align="center" width="140" style="vertical-align:top">
                                            <img src="${icon4_src}" alt="${icon4_alt}" class="float-center" width="63" height="63" style="display:block;    ">

                                            <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:14px;text-align:center">
                                              ${icon4_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
                                            </p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                    </tr>
                </tbody>
            </table>
	          `
	          let iconos_1x4_4x1 = `
	              <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid main-icons" width="560">
	                <tbody>
	                    <tr>
	                        <th class="force-col" style="display:inline-block; max-width:165px;  vertical-align:top; ">
	                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="130">
	                                <tbody>
	                                    <tr>
	                                        <td align="center" width="140">
	                                            <img src="${icon1_src}" alt="${icon1_alt}" class="float-center" width="100" height="100" style="display:block;">

	                                            <p style="color:#072149;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center">
                                                ${icon1_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
                                              </p>
	                                        </td>
	                                    </tr>
	                                </tbody>
	                            </table>
	                        </th>
	                        <th class="force-col" style="display:inline-block; max-width:165px;  vertical-align:top; ">
	                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="130">
	                                <tbody>
	                                    <tr>
	                                        <td align="center" width="140">
	                                            <img src="${icon2_src}" alt="${icon2_alt}" class="float-center" width="100" height="100" style="display:block;">

	                                            <p style="color:#072149;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center">
                                              ${icon2_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
                                              </p>
	                                        </td>
	                                    </tr>
	                                </tbody>
	                            </table>
	                        </th>
	                        <th class="force-col" style="display:inline-block; max-width:165px;  vertical-align:top; ">
	                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="130">
	                                <tbody>
	                                    <tr>
	                                        <td align="center" width="140">
	                                            <img src="${icon3_src}" alt="${icon3_alt}" class="float-center" width="100" height="100" style="display:block;">

	                                            <p style="color:#072149;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center">
                                                ${icon3_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
                                              </p>
	                                        </td>
	                                    </tr>
	                                </tbody>
	                            </table>
	                        </th>
	                        <th class="force-col" style="display:inline-block; max-width:165px;  vertical-align:top; ">
	                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="130">
	                                <tbody>
	                                    <tr>
	                                        <td align="center" width="140">
	                                            <img src="${icon4_src}" alt="${icon4_alt}" class="float-center" width="100" height="100" style="display:block;">

	                                            <p style="color:#072149;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center">
	                                                ${icon4_arr.map(addr => `
                                                  <span style="
                                                  font-weight:${addr.bold ? `bold` : `normal`};
                                                  font-style:${addr.italic ? `italic` : `normal`};
                                                  font-size:${addr.fontsize}px;
                                                  color:${addr.color};
                                                  ">${addr.word}</span>
                                             `.trim()).join(' ')}
	                                            </p>
	                                        </td>
	                                    </tr>
	                                </tbody>
	                            </table>
	                        </th>
	                    </tr>
	                    <tr>
	                        <td height="25">&nbsp;</td>
	                    </tr>
	                </tbody>
	            </table>
	        `
	        if (radio == 'iconos_1x4_2x2')
	          this.$parent.code.iconosCode = iconos_1x4_2x2
	        else if(radio == 'iconos_1x4_4x1')
	          this.$parent.code.iconosCode = iconos_1x4_4x1
	        else
	          this.$parent.code.iconosCode = ''

	        this.$parent.getPreview()
	      }
		}
	}
</script>
<style>

  .icon-editor {
    margin: 0 auto;
    font-size: 0;
    background-color: #eaeaea;
  }

  section {
    display: none;
    padding: 20px 0 0;
    border-top: 1px solid #ddd;
  }
  .icon-editor input[type="radio"] {
    display: none;
  }

  .icon-editor input,
  .icon-editor label,
  .icon-editor table {
    font-size: 12px
  }

  .icon-editor label {
    display: inline-block;
    margin: 0;
    padding: 15px 0;
    font-weight: 600;
    text-align: center;
    color: #bbb;
    border: 1px solid transparent;
    cursor: pointer;
    background-color: #ddd;
    position: relative;
    top: -2px;
    width: 25%;
  }
  .icon-editor input:checked + label {
    color: #555;
    border: 2px solid #999;
    border-bottom: 1px solid #eaeaea;
    position: relative;
    top: 2px;
    background-color: #eaeaea;
  }

  #tab1:checked ~ #content1,
  #tab2:checked ~ #content2,
  #tab3:checked ~ #content3,
  #tab4:checked ~ #content4 {
    display: block;
    padding: 15px;
    border: 2px solid #999;
  }
  .editing-content table {
    width: 100%;
    margin-top: 10px !important;
  }
  .icon-editor input[type="text"] {
    margin: 5px 0;
  }
  .icon-editor table thead tr th {
    font-size: 10px;
  }
  .main-icons .col-2 {
    max-width: 100%;
  }
</style>
