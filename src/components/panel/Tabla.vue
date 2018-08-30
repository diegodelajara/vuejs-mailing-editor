<template>
	<div id="sectionBajada" class="section">
        <ul>
          <li>
            <input 
              type="checkbox" 
              name="chkTabla" 
              id="chkTabla" 
              value="chkTabla"
              v-model="chkTabla" 
              @change="getTabla"> 
            <label for="chkTabla">Tabla</label>
          </li>
        </ul>
      </div>
</template>

<script>
	export default {
		data() {
			return {
	            chkTabla           : false
		    }
		},
		methods: {
	      getTabla: function(){
	      	this.$emit('getTabla', this.getTabla)

	        const tabla = `
	                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid450" width="560">
		                <tbody>
		                    <tr>
		                        <td align="center" class="txt-msj" style="font-family: Arial, Helvetica, sans-serif; font-size:16px; text-align:center; color:#414141; font-weight:normal;line-height: 1.1;" width="100%">
		                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="560" bgcolor="#ffffff">
		                                <tbody><tr>
		                                    <td width="78" align="center"></td>
		                                    <td width="100" align="center" bgcolor="#6ab2e7" class="txt-ver" style="font-family:Arial, Helvetica, sans-serif;text-align:center; color:#ffffff; font-weight:400;padding:15px 10px;border-radius: 10px 0 0 0;">Renta Vitalicia</td>
		                                    <td width="100" align="center" bgcolor="#6ab2e7" class="txt-ver" style="font-family:Arial, Helvetica, sans-serif;text-align:center; color:#ffffff; font-weight:400;padding:15px 10px;border-radius: 0 10px 0 0;">Retiro Programado</td>
		                                </tr>
		                            </tbody></table>
		                        </td>
		                    </tr>
		                </tbody>
		            </table>

		            <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid450" width="560">
		                <tbody>
		                    <tr>
		                        <td align="center" class="txt-msj" style="font-family: Arial, Helvetica, sans-serif; font-size:16px; text-align:center; color:#414141; font-weight:normal;line-height: 1.1;" width="100%">
		                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="560" bgcolor="#ffffff">
		                                
		                                <tbody>
			                                <tr>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Monto de la Pensión</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Renta Fija Mensual</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Monto se recalcula anualmente</td>
			                                    
			                                </tr>
			                                <tr>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Riesgo de longevidad y Rentabilidad</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Asumido por la Compañía de Seguros de Vida</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Asumido por el afiliado</td>
			                                    
			                                </tr>
			                                <tr>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Ahorros</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Se traspasan a la Compañía de Seguros de Vida</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Propiedad del afiliado</td>
			                                    
			                                </tr>
			                                <tr>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Pensión</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Se entrega de forma Vitalicia</td>
			                                    <td align="center" class="txt-legal-fijo" style="font-size:14px;border:1px solid #414141;font-family:Arial, Helvetica, sans-serif;text-align:center; color:#414141; font-weight:400;padding:3px;">Dependiendo de la edad del afiliado, se puede agotar el fondo</td>
			                                </tr>
			                            </tbody>
		                            </table>
		                        </td>
		                    </tr>
		                    <tr>
		                        <td height="15">&nbsp;</td>
		                    </tr>
		                    <tr>
		                        <td height="15">&nbsp;</td>
		                    </tr>
		                </tbody>
		            </table>
	    
	        `
	        if (this.chkTabla)
	          this.$parent.code.tablaCode = tabla
	        else
	          this.$parent.code.tablaCode = ''
	        
	        this.$parent.getPreview()
	      }
		}
	}
</script>
