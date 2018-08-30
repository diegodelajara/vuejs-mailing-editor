<template>
	<div id="sectionContacto" class="section">
	    <ul class="radios">
	      <li>
	        <input 
	          type="radio" 
	          name="contacto"
	          id="contacto_1"
	          value="contacto_1"
	          v-model="radioContacto" 
	          v-on:change="getContacto"> 
	        <label for="contacto_1">Contacto 1</label>
	      </li>
	      <li>
	        <input 
	          type="radio" 
	          name="contacto"
	          id="contacto_2"
	          value="contacto_2"
	          v-model="radioContacto" 
	          v-on:change="getContacto"> 
	        <label for="contacto_2">Contacto 2</label>
	      </li>
	      <li>
	        <input 
	          type="radio" 
	          name="contacto"
	          id="contacto_3"
	          value="contacto_3"
	          v-model="radioContacto" 
	          v-on:change="getContacto"> 
	        <label for="contacto_3">Contacto 3</label>
	      </li>
	    </ul>
	  </div>
</template>

<script>
	export default {
		data() {
			return {
	            radioContacto         : false
		    }
		},
		methods: {
	      getContacto: function(){
	        const radio  = this.radioContacto
	        this.$emit('getContacto', this.getContacto)
	        const op1 = `<table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid350" width="450">
	                            <tbody>
	                                <tr>
	                                    <th align="center" class="force-col">
	                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="300" height="200">
	                                            <tbody>
	                                                <tr>
	                                                    <td align="center" width="100">
	                                                        <a href="http://www.consorcio.cl?utm_source=Consorcio&utm_medium=email&utm_campaign=AntiFraude3&utm_Tmail=mailing">
	                                                            <img src=http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/via_web.png alt="Via web en consorcio.cl" class="float-center" width="123" height="157">
	                                                        </a>
	                                                    </td>

	                                                    <td align="center" width="100">
	                                                        <a href="tel:6002213000">
	                                                            <img src=http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/llamando.png alt="LLamando al 600 221 3000" class="float-center" width="123" height="157">
	                                                        </a>
	                                                    </td>
	                                                </tr>
	                                            </tbody>
	                                        </table>
	                                    </th>
	                                    <th align="center" class="force-col">
	                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="150">
	                                            <tbody>
	                                                <tr>
	                                                    <td align="center" width="100">
	                                                        <a href="#">
	                                                            <img src=http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/sucursal.png alt="En tu sucursal Consorcio más cercana" class="float-center" width="123" height="157">
	                                                        </a>
	                                                    </td>
	                                                </tr>
	                                            </tbody>
	                                        </table>
	                                    </th>
	                                </tr>
	                            </tbody>
	                        </table>`

	                        const op2 = `
	                          <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid350" width="300">
	                                  <tbody>
	                                      <tr>
	                                          <th class="force-col" style="display:inline-block; max-width:200px;  vertical-align:top;">
	                                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="150">
	                                                  <tbody>
	                                                      <tr><!-- Profesionales -->
	                                                          <td align="center" style="vertical-align: top;"><a href="https://itunes.apple.com/cl/app/consorcio-mobile/id1186318713?mt=8"><img alt="APP Store" class="float-center" height="40" src="http://images.masterbase.com/v1/consorciomktpro/b/lanzamiento/appstore.png" style="display:block; vertical-align: top;" width="123">
	                                                          </a></td>
	                                                      </tr>
	                                                      <tr>
	                                                          <td height="25">&nbsp;</td>
	                                                      </tr>
	                                                  </tbody>
	                                              </table>
	                                          </th>
	                                          <th class="force-col" style="display:inline-block; max-width:200px;  vertical-align:top;">
	                                              <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="150">
	                                                  <tbody>
	                                                      <tr><!-- Profesionales -->
	                                                          <td align="center" style="vertical-align: top;"><a href="https://play.google.com/store/apps/details?id=cl.consorcio.mobile&amp;hl=es_419"><img alt="Google play" class="float-center" height="40" src="http://images.masterbase.com/v1/consorciomktpro/b/lanzamiento/googleplay.png" style="display:block; vertical-align: top;" width="123">
	                                                          </a></td>
	                                                      </tr>
	                                                      <tr>
	                                                          <td height="25">&nbsp;</td>
	                                                      </tr>
	                                                  </tbody>
	                                              </table>
	                                          </th>
	                                      </tr>
	                                  </tbody>
	                              </table>
	                        `

	                        const op3 = `<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="350" bgcolor="#ffffff">
	                                          <tbody>
	                                              <tr>
	                                                  <td align="center" width="50%" style="padding-left: 30px;padding-right: 15px;">
	                                                      <a href="https://www.tuconsorcio.cl/app">
	                                                      <img src="http://images.masterbase.com/v1/consorciomktpro/b/seguro-de-viaje/app-consorcio.png" alt="App Consorcio" class="float-center" width="157" height="157" style="display:block;"></a>
	                                                  </td>
	                                                  <td align="center" width="50%" style="padding-left: 30px;padding-right: 15px;">
	                                                      <a href="tel:6003675000">
	                                                      <img src="http://images.masterbase.com/v1/consorciomktpro/b/seguro-de-viaje/llamando.png" alt="Llamando al 600 367 5000" class="float-center" width="157" height="157" style="display:block;"></a>

	                                                      
	                                                  </td>
	                                              </tr>
	                                              <tr>
	                                                  <td height="15">&nbsp;</td>
	                                              </tr>
	                                          </tbody>
	                                      </table>`

                if (radio == 'contacto_1') 
                  this.$parent.code.contactoCode = op1
                else if(radio == 'contacto_2')
                  this.$parent.code.contactoCode = op2
                else
                  this.$parent.code.contactoCode = op3

                this.$parent.getPreview()
	      	}
		}
	}
</script>
