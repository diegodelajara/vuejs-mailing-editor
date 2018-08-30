<template>
	<div id="sectionBoxBorder2" class="section">
	    <ul>
	      <li>
	        <input 
	          type="checkbox" 
	          name="chkBoxBorderComplex" 
	          id="chkBoxBorderComplex" 
	          value="chkBoxBorderComplex"
	          v-model="chkBoxBorderComplex" 
	          @input="getBoxBorderComplex">
	        <label for="chkBoxBorderComplex">Box Border Complex</label>
	      </li>
	    </ul>
	  </div>
</template>

<script>
	export default {
		data() {
			return {
	            chkBoxBorderComplex   : false,
		    }
		},
		methods: {
	      getBoxBorderComplex: function(){
        	this.$emit('getBoxBorderComplex', this.getBoxBorderComplex)
	        const chk = this.chkBoxBorderComplex

	        var op1 = `<table align="center" bgcolor="#ececec" border="0" cellpadding="0" cellspacing="0" class="fluid450" width="550" style="border-radius: 5px;">
	                            <tbody>
	                                <tr>
	                                    <th>
	                                        
	                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid450" width="450">
	                                            <tbody>
	                                                <tr>
	                                                    <th height="6">&nbsp;</th>
	                                                </tr>
	                                                <tr>
	                                                    <td align="center" style="font-family: Arial, Helvetica, sans-serif; font-size:16px; text-align:center; color:#15284b; font-weight:normal;line-height: 1.1;" width="100%">

	                                                        Te recordamos los <span style="font-weight: bold;">beneficios</span> de tu <span style="font-weight: bold;">Seguro con APV:</span>
	                                                        
	                                                    </td>
	                                                </tr>
	                                                <tr>
	                                                    <th height="5">&nbsp;</th>
	                                                </tr>
	                                            </tbody>
	                                        </table>

	                                    </th>
	                                </tr>
	                                <tr>
	                                    <th class="force-col" style="display:block;vertical-align:top;">
	                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="520">
	                                            <tbody>
	                                                <tr>
	                                                    <!-- Profesionales -->
	                                                    <td align="center" style="vertical-align: middle;">

	                                                        <table width="100%" border="0" align="center" cellpadding="3" cellspacing="0">
	                                                              <tbody>
	                                                                <tr>
	                                                                    <td valign="top" style="text-align:left;"><img src="http://images.masterbase.com/v1/consorciomktpro/b/apv-abril/4.png" alt="Cubre todo tipo de cáncer" width="70" height="70"></td>
	                                                                    <td style="font-weight: normal;font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#454545; text-align:justify;">Puedes  <span style="font-weight: bold;">mejorar el monto de la pensión</span> que recibirás a futuro, adelantar tu edad de jubilación, ahorrar para imprevistos, obtener beneficios tributarios.</td>
	                                                                  </tr>
	                                                                  <tr>
	                                                                    <td valign="top" style="text-align:left;"><img src="http://images.masterbase.com/v1/consorciomktpro/b/apv-abril/5.png" alt="Entregamos UF 50 de libre disposición al asegurado una vez diagnosticado de cáncer." width="70" height="70"></td>
	                                                                    <td style="font-weight: normal;font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#454545; text-align:justify;">Además de contar con un seguro de vida, el APV de Consorcio te permite <span style="font-weight: bold;">contratar</span> adicionalmente la <span style="font-weight: bold;">Cobertura de invalidez 2/3</span>, que te indemnizará en caso de sufrir la pérdida irreversible de tu capacidad de trabajo, producto de un accidente o enfermedad.</td>
	                                                                  </tr>
	                                                                  <tr>
	                                                                    <td valign="top" style="text-align:left;"><img src="http://images.masterbase.com/v1/consorciomktpro/b/apv-abril/6.png" alt="Puedes hacer uso de tu seguro desde el minuto en que o contratas." width="70" height="70"></td>
	                                                                    <td style="font-weight: normal;font-family: Arial, Helvetica, sans-serif; font-size:12px; color:#454545; text-align:justify;">También puedes  <span style="font-weight: bold;">decidir el monto de primas a pagar</span> y el capital asegurado de tu seguro de vida.</td>
	                                                                  </tr>
	                                                                </tbody>
	                                                            </table>  
	                                                    </td>
	                                                </tr>
	                                                <tr>
	                                                    <td height="25">&nbsp;</td>
	                                                </tr>
	                                            </tbody>
	                                        </table>
	                                    </th>
	                                </tr>
	                            </tbody>
	                        </table>`

	        if (!chk) 
	          this.$parent.code.boxBorderComplexCode = op1
	        else
	          this.$parent.code.boxBorderComplexCode = ''

	        this.$parent.getPreview()
	      }
		}
	}
</script>
