<template>
	<div id="sectionBoxBorder" class="section">
	    <ul>
	      <li>
	        <input 
	          type="checkbox" 
	          name="chkBoxBorder" 
	          id="chkBoxBorder" 
	          value="chkBoxBorder"
	          v-model="chkBoxBorder" 
	          v-on:change="getBoxBorder">
	        <label for="chkBoxBorder">Box</label>
	      </li>
	    </ul>
	    <input v-model="icon" type="text" @input="convertInArray(text)" placeholder="Imagen" v-show="chkBoxBorder">
	    <input v-model="text" type="text" @input="convertInArray(text)" placeholder="Texto" v-show="chkBoxBorder">
		<div class="editing-content" v-show="chkBoxBorder">
	      	<label for="color-fondo">Color de fondo: </label>
	      	<input id="color-fondo" v-model="colorFondo" type="text" @input="convertInArray(text)">
	      	
	      	<table border="1">
	          <thead>
	            <tr>
	              <th>Text</th>
	              <th>Bold</th>
	              <th>Italic</th>
	              <th>Font-size</th>
	              <th>Color</th>
	            </tr>
	          </thead>
	          <tbody>
	            <tr v-for="(text, index) in arrFinal">
	              <td><input type="text" :value="text.word" disabled></td>
	              <td><input type="checkbox" id="bold" name="bold" v-model="text.bold" @change="getBoxBorder"></td>
	              <td><input type="checkbox" id="italic" name="italic" v-model="text.italic" @change="getBoxBorder"></td>
	              <td><input type="number" id="fontsize" name="fontsize" v-model="text.fontsize" @change="getBoxBorder"></td>
	              <td><input type="text" id="color" name="color" v-model="text.color" @input="getBoxBorder"></td>
	            </tr>
	          </tbody>
	        </table>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				icon  			: 'http://images.masterbase.com/v1/consorciomktpro/b/corner-maipu/gps.png',
				text 			: 'Encuéntranos en Avenida Pajaritos #1665 a pasos de Plaza de Maipú.',
	            chkBoxBorder    : false,
	            colorFondo		: '#002249',
	            arrFinal 		: []
		    }
		},
		mounted: function(){
			this.convertInArray(this.text)
		},
		methods: {
			convertInArray: function(value){
				var arr =  this.$parent.formatSplit(value, ' ')
				arr.forEach(function(element, index) {
					var item = {
						'word'		: element,
						'bold'		: false,
						'italic'	: false,
						'fontsize'	: 12,
						'color'	    : ''
					}
						this.arrFinal[index] = item
				}.bind(this));
				this.getBoxBorder()
			},
	      getBoxBorder: function(){
	      	this.$emit('getBoxBorder', this.getBoxBorder)
	        const radioBox  = this.chkBoxBorder
	        const texto = this.arrFinal

	        const box = `
	                  <table align="center" bgcolor="${this.colorFondo}" border="0" cellpadding="0" cellspacing="0" class="fluid350" width="450" style="border-radius: 10px;">
	                            <tbody>
	                                <tr>
	                                    <th class="force-col" style="display:block;vertical-align:top;">
	                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="320">
	                                            <tbody>
	                                                <tr>
	                                                    <td height="5">&nbsp;</td>
	                                                </tr>
	                                                <tr>
	                                                    <!-- Profesionales -->
	                                                    <td align="center" style="vertical-align: middle;">

	                                                        <table width="100%" border="0" align="center" cellpadding="3" cellspacing="0">
	                                                            <tbody>
	                                                                <tr>
	                                                                    <td valign="top" style="text-align:left;">
	                                                                        <img src="${this.icon}" width="63" height="63" alt="gps-icon">
	                                                                    </td>
	                                                                    <td style="font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#ffffff; text-align:justify;font-weight: normal;">
	                                                                        ${texto.map(addr => `
																		        <span style="
																		        font-weight:${addr.bold ? `bold` : `normal`};
																		        font-style:${addr.italic ? `italic` : `normal`};
																		        font-size:${addr.fontsize}px;
																		        color:${addr.color == '' ? `inherit`: addr.color};
																		        display:${this.chkBoxBorder ? 'inline': 'none'};
																		        ">${addr.word}</span>
																		   `.trim()).join(' ')}
	                                                                    </td>
	                                                                </tr>
	                                                            </tbody>
	                                                        </table>

	                                                    </td>
	                                                </tr>
	                                                <tr>
	                                                    <td height="5">&nbsp;</td>
	                                                </tr>
	                                            </tbody>
	                                        </table>
	                                    </th>
	                                </tr>
	                            </tbody>
	                        </table>
	        `
	        if (radioBox){
	          this.$parent.code.boxBorderCode = box
	        }
	        else
	          this.$parent.code.boxBorderCode = ''
	        
	        this.$parent.getPreview()
	      }
		}
	}
</script>
