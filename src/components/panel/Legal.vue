<template>
	<div id="sectionLegal" class="section">
        <ul>
          <li>
            <input
              type="checkbox"
              name="legal"
              id="legal"
              value="legal"
              v-model="chkLegal"
              @change="getLegal">
            <label for="legal">Frase legal</label>
          </li>
        </ul>
      </div>
</template>

<script>
	export default {
		data() {
			return {
	            chkLegal    	: false
		    }
		},
		methods: {
	      getLegal: function(){
	      	this.$emit('getLegal', this.getLegal)

	        const legal = `
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid-legales" style="max-width: 540px;" width="90%">
                            <tbody>
                                <tr>
                                    <td height="30">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td class="txt-legal-fijo" style="font-family: arial; font-size: 11px; text-align: justify; color: #7a7a7a;">El riesgo es cubierto por Compa&ntilde;&iacute;a de Seguros Generales Consorcio Nacional de Seguros S.A., seg&uacute;n las Condiciones Generales incorporadas al Dep&oacute;sito de P&oacute;lizas de la Comisi&oacute;n para el Mercado Financiero bajo el c&oacute;digo POL 3 2017 0201. La presente informaci&oacute;n s&oacute;lo representa un resumen de las coberturas, el detalle de &eacute;stas, sus l&iacute;mites y las exclusiones correspondientes se encuentran en las Condiciones Generales de la p&oacute;liza antes mencionada.
                                    </td>
                                </tr>
                                <tr>
                                    <td height="20">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
	        `
	        if (this.chkLegal){
	          this.$parent.code.legalCode = legal
	        }
	        else
	          this.$parent.code.legalCode = ''
	        
	        this.$parent.getPreview()
	      }
		}
	}
</script>
