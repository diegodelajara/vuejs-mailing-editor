<template>
	<div id="sectionBanner" class="section">
            <h3>Header</h3>
            <select name="selectImg" id="selectImg" class="select" v-model="selected" @input="getBanner">
            	<option value="border">Banner 1</option>
            	<option value="noBorder">Banner 2</option>
            	<option value="boletin">Boletín</option>
            </select>
			
			<!-- Src  -->
            <div class="content-input">
				<p class="input-title">Imagen</p>
              	<input id="bannerImg" type="text" v-model="urlBanner[selected]" @input="getBanner">
            </div>
            <!-- srC  -->
          </div>
</template>

<script>
	export default {
		data() {
			return {
				selected 					:'noBorder',
				bannerType 					: null,
	            banner                		: 'banner',
	            urlBanner 			      	: {
					'border':'http://images.masterbase.com/v1/consorciomktpro/b/app-no-cliente/banner.png',
					'noBorder':'http://images.masterbase.com/v1/consorciomktpro/b/dia-del-ninio/BANNER.jpg',
					'boletin':'http://images.masterbase.com/v1/consorciomktpro/b/boletin-abril/banner.jpg'
	            },
	            colorUno 			        : '#d7e4cb',
		    }
		},
		mounted: function(){
			this.getBanner()
		},
		methods: {
			getBanner: function(event){
				this.$emit('getBanner', this.getBanner)
		        
		        const selected    	= this.selected
		        const image2  		= this.urlBanner[selected]
		        let colorUno  		= this.colorUno


		       switch (selected) {
		       		case 'noBorder':
		       			colorUno  	= '#ffffff'
		       			break;
		       		case 'boletin':
		       			colorUno  	= '#ffffff'
		       			break;
		       	}

		        const banner = `
		                  <!-- Banner  -->
		                  <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid main-banner" style="border-top: 3px solid #de2e21;" width="600">
		                      <tbody>
		                          <tr>
		                              <td align="center" width="100%"><img alt="Consorcio Informa - Marzo" class="fluid-banner" src="${image2}" style="display: block;" width="600">
		                              </td>
		                          </tr>
		                      </tbody>
		                  </table>
		                  <!-- Fin Banner  -->
		                        `
             		this.$parent.code.bannerCode = banner
		        	this.$parent.getPreview()
		      }
		}
	}
</script>

<style>
  label {
    margin: 0 5px;
  }
  label[for="colorUno"] {
    text-align: left;
    display: inline-block;
    position: relative;
    left: -10px;
    margin: 21px 50px 5px 0;
   }
</style>
