<template>
	<div id="sectionTitulo" class="section">
		<p class="input-title toggle-button">
		  	<toggle-button id="chkTitulo" v-model="chkTitulo" @change="getTitle" />
	    	Titulo
		</p>
		<div class="editingTemplate" v-show="chkTitulo">
			<input type="text" placeholder="Titulo" v-model="titulo">
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
	            chkTitulo        : false,
            	titulo           : 'Contrata tu Seguro Oncológico'
		    }
		},
		methods: {
			getTitle: function(){
				let titulo = this.titulo

				let titleTable = `
		                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid main-title" width="600" bgcolor="">
		                            <tbody>
		                                <tr>
		                                    <th>
		                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid450" width="550" bgcolor="#ffffff">
		                                            <tbody>
		                                                <tr>
		                                                    <td height="5">&nbsp;</td>
		                                                </tr>
		                                                <tr>
		                                                    <td align="center" style="font-family: Arial, Helvetica, sans-serif;text-align:center; color:#e2221f; line-height: 1.1;" width="100%">
		                                                    		<span style="font-size:22px; font-weight:bold;">${titulo}</span>
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
		                        </table>`
					          
					        if (this.chkTitulo)
					            this.$parent.code.tituloCode = titleTable
					        else
					            this.$parent.code.tituloCode = ''

		                    this.$parent.getPreview()
			}
		}
	}
</script>
