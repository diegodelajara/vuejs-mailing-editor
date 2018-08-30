<template>
	<div id="sectionNombre" class="section">
      	<p class="input-title toggle-button">
		  	<toggle-button id="chkNom" v-model="chkNom" @change="getNom"/>
		  	<label for="chkNom">Nombre y Apellido</label>
		 </p>
        
      <div class="content-input" v-show="chkNom">
        <input id="inputNom" type="text" v-model="inputNom" :disabled="!chkNom" @input="getNom">
      </div>
      <div class="text-controls" v-show="chkNom">
        
        
      </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
	            chkNom     : false,
            	inputNom   : 'Nombre Apellido',
		    }
		},
		methods: {
			getNom: function(){
		          this.$emit('getNom', this.getNom)
		          var input = this.$parent.formatSplit(this.inputNom)

		          const nom = `<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid450" width="550">
		                            <tbody>
		                                <tr>
		                                    <td align="center" style="font-family: Arial, Helvetica, sans-serif;text-align:center; color:#072149; line-height: 1.1;" width="100%">
		                                        <span style="font-size:14px;font-weight:normal;">${input}</span>
		                                    </td>
		                                </tr>
		                            </tbody>
		                        </table>`


		          if (this.chkNom)
		            this.$parent.code.nombreCode = nom
		          else
		            this.$parent.code.nombreCode = ''
		          
		          this.$parent.getPreview()
		      }
		}
	}
</script>
