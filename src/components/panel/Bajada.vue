<template>
	<div id="sectionBajada" class="section">
        <ul>
          <li>
            <input 
              type="checkbox" 
              name="chkBajada" 
              id="chkBajada" 
              value="chkBajada"
              v-model="chkBajada" 
              @change="getBajada"> 
            <label for="chkBajada">Bajada</label>
          </li>
          <div class="content-input">
            <input type="text" v-model="inputBajada" v-show="chkBajada" @input="convertInArray(inputBajada)">
          </div>
        </ul>
        <div id="bajadaEditingContent" class="editing-content" v-show="chkBajada">
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
                    <tr v-for="(text, index) in arrFinalBajada">
                      <td><input type="text" :value="text.word"></td>
                      <td><input type="checkbox" id="bold" name="bold" v-model="text.bold" @change="getBajada"></td>
                      <td><input type="checkbox" id="italic" name="italic" v-model="text.italic" @change="getBajada"></td>
                      <td><input type="number" id="fontsize" name="fontsize" v-model="text.fontsize" @change="getBajada"></td>
                      <td><input type="text" id="color" name="color" v-model="text.color" @input="getBajada"></td>
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
	            inputBajada         : 'Bajada',
	            chkBajada           : false,
	            arrFinalBajada      : []
		    }
		},
		mounted: function(){
			this.convertInArray(this.inputBajada)
		},
		methods: {
			convertInArray: function(value){
				var arr =  this.$parent.formatSplit(value, ' ')
				arr.forEach(function(element, index) {
					let size = 0

					var item = {
						'word'		: element,
						'bold'		: false,
						'italic'	: false,
						'fontsize'	: 12,
						'color'	    : ''
					}
					this.arrFinalBajada[index] = item
				}.bind(this));
				this.getBajada()
			},
	      getBajada: function(){
	      	this.$emit('getBajada', this.getBajada)
	        const input  = this.arrFinalBajada

	        const bajada = `
	                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="560" bgcolor="#ffffff">
	                        <tbody>
	                            <tr>
	                                <td height="15">&nbsp;</td>
	                            </tr>
	                            <tr>
	                                <td align="center" class="titulo" style="font-family: Arial, Helvetica, sans-serif; font-size:25px; text-align:center; color:#002249; font-weight:normal;line-height: 1.1;" width="100%">
	                                    ${input.map(addr => `
									        <span style="
									        font-weight:${addr.bold ? `bold` : `normal`};
									        font-style:${addr.italic ? `italic` : `normal`};
									        font-size:${addr.fontsize}px;
									        color:${addr.color == '' ? `inherit`: addr.color};
									        ">${addr.word}</span>
									   `.trim()).join(' ')}
	                                    <br>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td height="25">&nbsp;</td>
	                            </tr>
	                        </tbody>
	                    </table>
	    
	        `
	        if (this.chkBajada)
	          this.$parent.code.bajadaCode = bajada
	        else
	          this.$parent.code.bajadaCode = ''
	        
	        this.$parent.getPreview()
	      }
		}
	}
</script>
