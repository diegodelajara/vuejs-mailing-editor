<template>
	<div class="section">
		<p class="input-title toggle-button">
		  	<toggle-button id="chkBoletin" v-model="toggle" @change="getToggle" />
		  	<label for="chkBoletin">Boletín</label>

		  	<div class="editingTemplate" v-if="toggle">
		  		<input type="text" placeholder="Texto" v-model="name" @input="getNameBoletin">
		  		<textarea placeholder="Texto" v-model="texto" @input="getTextBoletin" cols="10" rows="10"></textarea>
		  		<label>PRODUCTO</label>
		  		<input type="text" placeholder="Texto" v-model="images.img1" @input="getBodyBoletin">
		  		<input type="text" placeholder="Texto" v-model="imagesText.img1" @input="getBodyBoletin">
		  		<label>TIPS/PREVENCIÓN</label>
		  		<input type="text" placeholder="Texto" v-model="images.img2" @input="getBodyBoletin">
		  		<input type="text" placeholder="Texto" v-model="imagesText.img2" @input="getBodyBoletin">
		  		<label>PREGUNTAS FRECUENTES</label>
		  		<input type="text" placeholder="Texto" v-model="images.img3" @input="getBodyBoletin">
		  		<input type="text" placeholder="Texto" v-model="imagesText.img3" @input="getBodyBoletin">
		  		<label>PANORAMAS</label>
		  		<input type="text" placeholder="Texto" v-model="images.img4" @input="getBodyBoletin">
		  		<input type="text" placeholder="Texto" v-model="imagesText.img4" @input="getBodyBoletin">
		  	</div>
		</p>
	</div>
</template>

<script>
	export default {
		mounted: function(){
			this.getNameBoletin()
			this.getTextBoletin()
			this.getBodyBoletin()
		},
		data(){
			return {
				toggle : false,
				name : 'Hola Sebastián Huerta,',
				texto : 'En esta edición nos dedicamos al cuidado de tu mascota y sus necesidades, porque sabemos lo importante que es para ti. También podrás informarte acerca de los detalles de tu pensión y conocer tips necesarios para cuidar tu salud en abril. Recuerda, con tan solo un click podrás enterarte además de exclusivos panoramas para disfrutar esta temporada.',
				images: {
					img1 : 'http://images.masterbase.com/v1/consorciomktpro/b/boletin-rrvv-agosto/producto.jpg',
					img2 : 'http://images.masterbase.com/v1/consorciomktpro/b/boletin-rrvv-agosto/tips.jpg',
					img3 : 'http://images.masterbase.com/v1/consorciomktpro/b/boletin-rrvv-agosto/pf.jpg',
					img4 : 'http://images.masterbase.com/v1/consorciomktpro/b/boletin-rrvv-agosto/ps.jpg'
				},
				imagesText: {
					img1 : 'CONOCE EL SEGURO PARA MASCOTAS DE CONSORCIO',
					img2 : 'QUE EL FRÍO NO SE UNA EXCUSA',
					img3 : 'REVISA MÁS DETALLES DE TU PENSIÓN',
					img4 : '¡ENCUENTRA TU PANORAMA IDEAL PARA ESTA TEMPORADA!'	
				}
			}
		},
		methods: {
			getToggle: function(){
				this.getNameBoletin()
				this.getTextBoletin()
				this.getBodyBoletin()
			},
			getNameBoletin: function(){

				let name = this.name
				const nameTable = `
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid350" width="350">
									<tbody>
										<tr>
											<td height="15">&nbsp;</td>
										</tr>
										<tr>
											<td align="center" class="titulo" style="font-family: Arial, Helvetica, sans-serif; font-size:28px; text-align:center; color:#002b5f; font-weight:bold;" width="100%">${name}</td>
										</tr>
										<tr>
											<td height="5">&nbsp;</td>
										</tr>
									</tbody>
								</table>`
							if (this.toggle){
								this.$parent.$parent.templates.boletin.name = nameTable
							}
							else{
								this.$parent.$parent.templates.boletin.name = ''
							}
							this.$parent.$parent.getPreview()
			},
			getTextBoletin: function(){
				let text = this.texto
				let textTable = `
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid-margen" width="500">
									<tbody>
										<tr>
											<td class="txt-a" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; text-align:center; color:#454545; font-weight:normal; padding:15px 24px;">
					                            ${text} 
					                        </td>
										</tr>
										<tr>
											<td height="5">&nbsp;</td>
										</tr>
									</tbody>
								</table>`
							if (this.toggle){
								this.$parent.$parent.templates.boletin.text = textTable
							}
							else{
								this.$parent.$parent.templates.boletin.text = ''
							}
							this.$parent.$parent.getPreview()
			},
			getBodyBoletin: function(){
				let imgProducto 	= this.images.img1
				let imgTips 		= this.images.img2
				let imgPf 			= this.images.img3
				let imgPanoramas 	= this.images.img4

				let txtProducto 	= this.imagesText.img1
				let txtTips 		= this.imagesText.img2
				let txtPf 			= this.imagesText.img3
				let txtPanoramas 	= this.imagesText.img4

				const body = `
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
					                        
											  <td align="center" width="100%"><a href="#"><img alt="PRODUCTO" border="0" class="fluid-banner" height="169" src="${imgProducto}" style="display:block;" width="600"></a></td>

										</tr>
									</tbody>
								</table>
								<table align="center" bgcolor="#eff3f7" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
											<td align="center" bgcolor="#eff3f7" class="txt-a" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; text-align:center; color:#454545; font-weight:normal; padding:15px 30px;"><span style="font-size:14px; font-weight:bold; color:#002b5f">- PRODUCTO -</span><br>
											${txtProducto}</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
					                        
											  <td align="center" width="100%"><a href="https://www.consorcio.cl/boletin/tips?utm_source=Consorcio&amp;utm_medium=email&amp;utm_campaign=Boletin3Tips&amp;utm_Tmail=mailing"><img alt="TIPS/PREVENCIóN" border="0" class="fluid-banner" height="169" src="${imgTips}" style="display:block;" width="600"></a></td>
					                        
										</tr>
									</tbody>
								</table>
								<table align="center" bgcolor="#eff3f7" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
											<td align="center" bgcolor="#eff3f7" class="txt-a" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; text-align:center; color:#454545; font-weight:normal; padding:15px 30px;"><span style="font-size:14px; font-weight:bold; color:#3fa1dd">- TIPS/PREVENCIÓN -</span><br>
											${txtTips}</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
					                        
											<td align="center" width="100%"><a href="https://www.consorcio.cl/boletin/preguntas?utm_source=Consorcio&amp;utm_medium=email&amp;utm_campaign=Boletin3Preguntas&amp;utm_Tmail=mailing"><img alt="PREGUNTAS FRECUENTES" border="0" class="fluid-banner" height="169" src="${imgPf}" style="display:block;" width="600"></a></td>
					                        
										</tr>
									</tbody>
								</table>
								<table align="center" bgcolor="#eff3f7" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
											<td align="center" bgcolor="#eff3f7" class="txt-a" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; text-align:center; color:#454545; font-weight:normal; padding:15px 30px;"><span style="font-size:14px; font-weight:bold; color:#ea171c">- PREGUNTAS FRECUENTES -</span><br>
											${txtPf}</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
					                        
											<td align="center" width="100%"><a href="https://www.consorcio.cl/boletin/panoramas?utm_source=Consorcio&amp;utm_medium=email&amp;utm_campaign=Boletin3Panoramas&amp;utm_Tmail=mailing"><img alt="PANORAMAS" border="0" class="fluid-banner" height="169" src="${imgPanoramas}" style="display:block;" width="600"></a></td>
					                        
										</tr>
									</tbody>
								</table>
								<table align="center" bgcolor="#eff3f7" border="0" cellpadding="0" cellspacing="0" class="fluid" width="600">
									<tbody>
										<tr>
											<td align="center" bgcolor="#eff3f7" class="txt-a" style="font-family: Arial, Helvetica, sans-serif; font-size:12px; text-align:center; color:#454545; font-weight:normal; padding:15px 30px;"><span style="font-size:14px; font-weight:bold; color:#76b900">- PANORAMAS -</span><br>
											${txtPanoramas}</td>
										</tr>
									</tbody>
								</table>
								<table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" width="100%" bgcolor="#eff3f7">
									<tbody>
										<tr>
											<td height="30">&nbsp;</td>
										</tr>
										<tr>
					                        
											<td align="center"><a href="https://www.consorcio.cl/boletin?utm_source=Consorcio&amp;utm_medium=email&amp;utm_campaign=Boletin3&amp;utm_Tmail=mailing"><img alt="ver boletin" class="fluid-btn" height="41" src="http://images.masterbase.com/v1/consorciomktpro/b/boletin-abril/btn.png" style="display: block;" width="167"></a></td>
					                        
										</tr>
										<tr>
											<td height="30">&nbsp;</td>
										</tr>
									</tbody>
								</table>
							 `
							if (this.toggle){
								this.$parent.$parent.templates.boletin.body = body
							}
							else{
								this.$parent.$parent.templates.boletin.body = ''
							}
							this.$parent.$parent.getPreview()
			}
		}
	}
</script>
