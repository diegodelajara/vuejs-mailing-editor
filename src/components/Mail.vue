<template>
  <div class="mailing-body">
    <div class="container">
      <div class="row"> 
        <div class="col-lg-12">
          <toggle-menu></toggle-menu>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="menu-mailing" :class="{toggleMenu}">
              

            <!-- childEvents es un objeto creado en data() -->
            <banner @getBanner="childEvents.banner = $event"></banner>
            <div class="section">
              <titulo></titulo>
              <templates></templates>
              <nombre @getNom="childEvents.nombre = $event"></nombre>
              <bajada @getBajada="childEvents.bajada = $event"></bajada>
              <tabla @getTabla="childEvents.tabla = $event"></tabla>
              <iconos @getIconos="childEvents.iconos = $event"></iconos>
              <box-border @getBoxBorder="childEvents.boxBorder = $event"></box-border>
              <box-border-complex @getBoxBorderComplex="childEvents.boxBorderComplex = $event"></box-border-complex>
              <contacto @getContacto="childEvents.contacto = $event"></contacto>
              <legal @getLegal="childEvents.legal = $event"></legal>
            </div>

            <!-- Iconos 2x3 / 6x1-->
            <div id="sectionIconos1" class="section">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="iconos_2x3_6x1"
                    id="iconos_2x3_6x1"
                    value="iconos_2x3_6x1"
                    v-model="panel.chk_iconos_2x3_6x1"
                    v-on:change="getIconos_2x3_6x1">
                  <label for="iconos_2x3_6x1">2x3 / 6x1</label>
                </li>
              </ul>
            </div>

            <!-- Iconos 3x1 / 2x1 -->
            <div id="sectionIconos2" class="section">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="iconos_3x1_2x1"
                    id="iconos_3x1_2x1"
                    value="iconos_3x1_2x1"
                    v-model="panel.chk_iconos_3x1_2x1"
                    v-on:change="getIconos_3x1_2x1">
                  <label for="iconos_3x1_2x1">3x1 / 2x1</label>
                </li>
              </ul>
            </div>
            <!-- Iconos 3x2 / 1x5 -->
            <div id="sectionIconos3" class="section">
              <ul>
                <li>
                  <input
                    type="checkbox"
                    name="iconos_3x2_1x5"
                    id="iconos_3x2_1x5"
                    value="iconos_3x2_1x5"
                    v-model="panel.chk_iconos_3x2_1x5"
                    v-on:change="getIconos_3x2_1x5">
                  <label for="iconos_3x2_1x5">3x2 / 1x5</label>
                </li>
              </ul>
            </div>
            <button id="refresh" @click="refreshHtml">Generar HTML</button>
          </div>
        </div>
                
        <div class="col-lg-6">
          <div class="html-preview" :class="{toggleMenu}">
            <div v-html="preview.previewHTML"></div>
          </div>
          <modal id="modal" name="html" width="85%" height="70%">
            <!-- <span class="close" @click="closeModal">&times;</span> -->
              <div class="code" id="code">
                <code>
                  <pre>
                    {{contentModal}}
                  </pre>
                </code>
            </div>
          </modal>
        </div>
                
        <div class="col-lg-12 col-xl-3">
          <div class="html-preview mobile-preview" :class="{toggleMenu}">
            <div v-html="preview.previewHTML"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner             from './panel/Banner'
import Nombre             from './panel/Nombre'
import Titulo             from './panel/Titulo'
import Bajada             from './panel/Bajada'
import Tabla              from './panel/Tabla'
import Iconos             from './panel/Iconos'
import BoxBorder          from './panel/BoxBorder'
import BoxBorderComplex   from './panel/BoxBorderComplex'
import Contacto           from './panel/Contacto'
import Legal              from './panel/Legal'
import ToggleMenu         from './panel/ToggleMenu'

import Templates          from './templates/Templates'


  export default {
    name: 'mail',
    components: {
      Banner,
      Titulo,
      Nombre,
      Bajada,
      Tabla,
      Iconos,
      BoxBorder,
      BoxBorderComplex,
      Contacto,
      Legal,
      ToggleMenu,
      Templates
    },
    data () {
      return {
        contentModal : null,
        modal : false,
        childEvents: {
          banner: null,
          nombre: null,
          bajada: null,
          tabla:  null,
          iconos: null,
          boxBorderComplex: null,
          contacto: null,
          legal: null
        },
        panel: {
          chk_iconos_2x3_6x1    : false,
          chkBoxBorderDashed    : false,
          chk_iconos_3x1_2x1    : false,
          chk_iconos_3x2_1x5    : false
        },
        code :{
          bannerCode                : '',
          urlBannerCode             : '',
          nombreCode                : '',
          tituloCode                : '',
          subTituloCode             : '',
          bajadaCode                : '',
          iconosCode                : '',
          boxBorderCode             : '',
          iconos_2x3_6x1Code        : '',
          boxBorderComplexCode      : '',
          boxBorderDashedCode       : '',
          iconos_3x1_2x1Code        : '',
          iconos_3x2_1x5Code        : '',
          contactoCode              : '',
          tablaCode                 : '',
          legalCode                 : '',
        },
        preview : {
          previewHTML : ''
        },
        templates: {
          boletin: {
            name: null,
            text: null,
            body: null
          }
        },
        toggleMenu: false
      }
    },
    mounted: function(){
      this.getPreview()
    },
    methods: {
      htmlFromatCodes: function(myString){
        const vocalesToLower = [/á/g,/é/g,/í/g,/ó/g,/ú/g]
        const newVocalesToLower = ['&aacute;','&eacute;','&iacute;','&oacute;','&uacute;']
        
        const vocalesToUpper = [/Á/g,/É/g,/Í/g,/Ó/g,/Ú/g]
        const newVocalesToUpper = ['&Aacute;','&Eacute;','&Iacute;','&Oacute;','&Uacute;']

        const iexcl = /¡/g
        const newIexcl = '&iexcl;'

        const iQuest = /¿/g
        const newIquest = '&iquest;'

        const ntilde = /ñ/g
        const newNtilde = '&ntilde;'

        const ntildeToUpper = /Ñ/g
        const newNtildeToUpper = '&Ntilde;'

        vocalesToLower.forEach( function(element, index) {
          myString = myString.replace(element, newVocalesToLower[index])
        });

        vocalesToUpper.forEach( function(element, index) {
          myString = myString.replace(element, newVocalesToUpper[index])
        });

        myString = myString.replace(iexcl, newIexcl)

        myString = myString.replace(iQuest, newIquest)

        myString = myString.replace(ntilde, newNtilde)

        myString = myString.replace(ntildeToUpper, newNtildeToUpper)

        return myString
      },
      formatSplit: function(arr, sep){
        return arr.split(sep)
      },
      refreshHtml: function(){
        this.contentModal = this.htmlFromatCodes(this.formatHtml(this.preview.previewHTML))
        this.$modal.show('html',  {
          height: 'auto'
        })
      },
      formatHtml: function(myString){
        let patron        = /&lt;/g
        let nuevoValor    = "<"

        let patron2       = /&gt;/g
        let nuevoValor2   = ">"


        myString            = myString.replace(patron, nuevoValor);
        myString            = myString.replace(patron2, nuevoValor2);

        return myString
      },
      reverseFormatHtml: function(myString){
        const patron        = /</g
        const nuevoValor    = "&lt;"

        const patron2       = />/g
        const nuevoValor2   = "&gt;"
        myString            = myString.replace(patron, nuevoValor);
        myString            = myString.replace(patron2, nuevoValor2);

        return myString
      },
      getPreview: function(){
        var urlBanner         = this.code.urlBannerCode
        var banner            = this.formatHtml(this.code.bannerCode)
        var nombre            = this.formatHtml(this.code.nombreCode)
        var titulo            = this.formatHtml(this.code.tituloCode)
        var bajada            = this.formatHtml(this.code.bajadaCode)
        var tabla             = this.formatHtml(this.code.tablaCode)
        var iconos            = this.formatHtml(this.code.iconosCode)
        var boxBorder         = this.formatHtml(this.code.boxBorderCode)
        var iconos_2x3_6x1    = this.formatHtml(this.code.iconos_2x3_6x1Code)
        var boxBorderComplex  = this.formatHtml(this.code.boxBorderComplexCode)
        var boxBorderDashed   = this.formatHtml(this.code.boxBorderDashedCode)
        var iconos_3x1_2x1    = this.formatHtml(this.code.iconos_3x1_2x1Code)
        var iconos_3x2_1x5    = this.formatHtml(this.code.iconos_3x2_1x5Code)
        var contacto          = this.formatHtml(this.code.contactoCode)
        var legal             = this.formatHtml(this.code.legalCode)

        //Boletin
        let boletinName = this.templates.boletin.name
        let boletinText = this.templates.boletin.text
        let boletinBody = this.templates.boletin.body

        var template =  boletinName + boletinText + boletinBody

        this.preview.previewHTML =
        `
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>

                <!--[if IE]>
                    <style>
                        a {text-decoration: none!important;color: #004292!important; border: none!important; outline: none!important;}
                    </style>
                <![endif]-->
                <style type="text/css">
                /* Resets: see reset.css for details */
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div{line-height: 100%;}

                    html,
                    body {
                        margin: 0 auto !important;
                        padding: 0 !important;
                        width: 100% !important;
                        min-width: 100%!important;
                    }
                    .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0;}

                    /* What it does: Stops email clients resizing small text. */
                    * {
                        -ms-text-size-adjust: 100%;
                        -webkit-text-size-adjust: 100%;
                    }

                    /* What it does: Centers email on Android 4.4 */
                    div[style*="margin: 16px 0"] {
                        margin:0 !important;
                    }

                    /* What it does: Stops Outlook from adding extra spacing to tables. */
                    table,
                    td {
                        mso-table-lspace: 0pt !important;
                        mso-table-rspace: 0pt !important;
                        table {border-collapse: collapse;}
                    }

                    /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */
                    table {
                        border-spacing: 0 !important;
                        border-collapse: collapse !important;
                        margin: 0 auto !important;
                        mso-table-lspace:0pt !important; mso-table-rspace:0pt !important;
                    }
                    table table table {
                        table-layout: auto;
                    }

                    /* What it does: Uses a better rendering method when resizing images in IE. */
                    img {
                        -ms-interpolation-mode:bicubic;
                    }

                    /* What it does: A work-around for iOS meddling in triggered links. */
                    *[x-apple-data-detectors] {
                        color: inherit !important;
                        text-decoration: none !important;
                    }

                    /* What it does: A work-around for Gmail meddling in triggered links. */
                    .x-gmail-data-detectors,
                    .x-gmail-data-detectors *,
                    .aBn {
                        border-bottom: 0 !important;
                        cursor: default !important;
                    }

                    /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */
                    .a6S {
                      display: none !important;
                      opacity: 0.01 !important;
                    }

                      a {text-decoration: none!important;color: #6fc3de!important; border: none!important; outline: none!important;}
                      .email-container {margin: auto!important; width: 100%!important; max-width: 600px!important;}
                      .fluid {margin: 0 auto!important;}
                      .fluid-margen {margin: 0 auto!important;}
                      .tabla-rrss {width: 100%!important; max-width:130px!important; margin: 0 auto!important;}
                      .fluid-info {width: 100%!important; max-width: 500px!important;}
                      th {font-weight: normal!important;}

                    /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
                    /* Create one of these media queries for each additional viewport size you'd like to fix */

                    @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */
                        .email-container { min-width: 375px !important;}
                    }
                </style>
                <style type="text/css">/* Media Queries */
                    @media screen and (max-width: 480px) {
                        .email-container {
                            width: 100% !important;
                            border: none!important;
                        }
                        .fluid {
                            width: 100%!important;
                            max-width: 100% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                            /*display: block!important;*/
                        }
                       .fluid-info {
                            width: 100%!important;
                            max-width: 100% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .fluid-margen {
                            width: 90% !important;
                            max-width: 90% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                            /*display: block!important;*/
                        }
                         .fluid350 {
                            width: 80% !important;
                            max-width: 80% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                            /*display: block!important;*/
                        }
                         .fluid450 {
                            width: 90% !important;
                            max-width: 90% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .fluid350-2 {
                            width: 90% !important;
                            max-width: 90% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                         .fluid300 {
                            width: 80% !important;
                            max-width: 80% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .fluid-logo {
                            width: 70% !important;
                            max-width: 70% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .fluid-banner {
                            width: 100% !important;
                            max-width: 100% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .fluid-btn {
                            width: 60% !important;
                            max-width: 60% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .fluid-logo-footer {
                            width: 60% !important;
                            max-width: 60% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .fluid-legales {
                            width: 90%!important;
                            max-width: 90% !important;
                            height: auto !important;
                            margin-left: auto !important;
                            margin-right: auto !important;
                        }
                        .img-icon {
                            width: 84px!important;
                            height: 84px !important;
                        }
                        .tabla-rrss {width: 160px!important; max-width: 160px !important; margin: 0 auto!important;}
                        .force-col {display: block!important; width: 100%!important; max-width: 100%!important;/* clear: both!important;*/ float: left!important;}
                        .column-2 {float: none !important; width: 100% !important; margin-bottom: 0px!important; padding-bottom: 0px!important;}
                        .ocultar {display: none!important;}
                        .ocultar-d {display: block!important;}

                        img.rrss-icono { width: 40px!important; height: 40px!important; }
                        .txt-ver {font-size: 13px!important;}
                        .titulo {font-size: 30px!important;}
                        .sub-titulo {font-size: 25px!important;}
                        .bajada {font-size: 20px!important;}
                        .txt-cuerpo {font-size: 16px!important;}
                        .txt-msj {font-size: 20px!important;}
                        .txt-a {font-size: 16px!important;}
                        .txt-legal {font-size: 13px!important;}
                        .txt-legal-fijo {font-size: 12px!important;}
                        .txt-b {padding: 0 24px !important;}
                        .txt-c {padding: 15px 30px !important;}
                    }
                </style>
            </head>
            <body bgcolor="#ffffff" leftmargin="0" marginheight="0" marginwidth="0" topmargin="0"><!--[if gte mso 9]>
                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                        <tr>
                            <td align="center" valign="top" width="600" style="width:600px;">
                <![endif]--><!-- Texto previo -->
            <table align="center" border="0" style="max-width: 600px;" width="100%">
                <tbody>
                    <tr>
                        <td style="display:none !important; visibility:hidden; mso-hide:all; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px;opacity:0; overflow:hidden;">Conoce nuestro Newsletter</td>
                    </tr>
                    <tr>
                        <td height="5">&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="txt-ver" style="font-family: Arial, Helvetica, sans-serif; font-size:11px; color:#454545; text-align: center;">Si no visualizas bien este e-mail, haz <a href="#!vistamail3!#" style="color: #002b5f;" target="_blank">click aqu&iacute;</a></td>
                    </tr>
                    <tr>
                        <td height="5">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <!-- Fin texto previo -->

            <table class="email-container" style="margin:0 auto; padding:0; max-width: 600px; border: 1px solid #d5d5d5;">
                <tbody>
                    <tr>
                        <td><!-- header logo -->
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid" style="max-width: 600px;" width="100%" bgcolor="#ffffff">
                            <tbody>
                                <tr>
                                    <td height="25">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="center" width="100%"><img alt="Consorcio" border="0" class="fluid-logo" height="55" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/logo-consorcio.png" style="display: block;" width="250" /></td>
                                </tr>
                                <tr>
                                    <td height="15">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Fin header logo -->

                        


                        <!-- imagen principal -->
                        ${banner}
                        <!-- Fin imagen principal -->

                        
                        <!-- titulo -->
                        ${titulo}
                        <!-- Fin titulo -->

                        
                        <!-- Template -->
                        ${template}
                        <!-- Fin Template -->


                        <!-- Nombre -->
                        ${nombre}
                        <!-- Fin Nombre -->



                        <!-- Otro titulo -->
                        ${bajada}
                        <!-- Otro titulo -->

                        <!-- Espacio -->
                        <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid450" width="100%">
                            <tbody>
                                <tr>
                                    <th height="20">&nbsp;</th>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Fin Espacio -->

                        <!-- Tabla -->

                          ${tabla}

                        <!-- Fin Tabla -->

                        <!-- 4 Iconos en 2col-2row / 1row-4col -->

                          ${iconos}

                        <!-- Fin 4 Iconos en 2col-2row / 1row-4col -->

                        <!-- Bg border-radius -->
                          ${boxBorder}
                        <!-- Fin bg border-radius -->



                        <!-- 6 iconos 2-col / 1-col -->

                        ${iconos_2x3_6x1}

                        <!-- Fin 6 iconos 2-col/1-col-->



                        <!-- Tabla bg icon/text -->

                        ${boxBorderComplex}

                        <!-- Fin Tabla bg icon/text -->


                        <!-- Tabla dashed icono texto -->

                        ${boxBorderDashed}

                        <!-- Fin Tabla dashed icono texto -->

                        <!-- 3 Iconos 3-col / 1-col -->
                        ${iconos_3x1_2x1}
                        <!-- 3 Iconos 3-col / 1-col -->

                        ${iconos_3x2_1x5}

                        <!-- Contacto -->
                          ${contacto}
                        <!-- Fin Contacto -->

                        <!-- Frase legal -->
                          ${legal}
                        <!-- Fin Frase legal -->

                       







                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid-margen" style="border-bottom: 1px solid #cecece;" width="500">
                            <tbody>
                                <tr>
                                    <td height="50">&nbsp;</td>
                                </tr>
                                <tr>
                                    <td align="center" width="100%"><img alt="Consorcio" border="0" class="fluid-logo-footer" height="34" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/logo-consorcio-gris.png" style="display: block;" width="155" /></td>
                                </tr>
                                <tr>
                                    <td height="20">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>

                        <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid-info" width="510">
                            <tbody>
                                <tr>
                                    <th colspan="3" height="6" width="100%">&nbsp;</th>
                                </tr>
                                <tr>
                                    <th align="center" class="force-col" style="display:inline-block;  vertical-align:top;" width="334">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="334">
                                        <tbody>
                                            <tr>
                                                <td align="center" height="35" width="166"><a href="tel:6002213000"><img alt="Contact Center" border="0" class="tel" height="35" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-base/footer-contact2.png" width="138" /></a></td>
                                                <td align="center" width="1"><img class="linea" height="38" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/linea.png" width="1px" /></td>
                                                <td align="center" height="38" width="166"><a href="https://www.consorcio.cl/seguros"><img alt="Clhat en l&iacute;nea" border="0" class="redes" height="35" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-base/footer-chat.png" width="138" /></a></td>
                                                <td align="center" class="ocultar" width="1"><img class="linea" height="38" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/linea.png" width="1px" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </th>
                                    <th class="force-col" style="display:inline-block; max-width:165px;  vertical-align:top; ">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="165">
                                        <tbody>
                                            <tr>
                                                <td align="center" height="38" width="166"><a href="https://www.tuconsorcio.cl/app"><img alt="APP Consorcio" border="0" class="tel" height="35" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-base/footer-app.png" width="138" /></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Fin Footer info-->
                        <!-- Footer rrss-->

                        <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="tabla-rrss" width="130">
                            <tbody>
                                <tr>
                                    <td align="center" class="fluid-info" width="100%">
                                    <table align="center" width="100%">
                                        <tbody>
                                            <tr>
                                                <td width="15" height="25">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td><a href="https://www.facebook.com/ConsorcioCL"><img align="Facebook" class="rrss-icono" height="30" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/fb.png" style="border: none; outline: none;" width="30" /></a></td>
                                                <td width="20">&nbsp;</td>
                                                <td><a href="https://twitter.com/Consorcio_cl"><img align="Facebook" class="rrss-icono" height="30" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/tw.png" style="border: none; outline: none;" width="30" /></a></td>
                                                <td width="20">&nbsp;</td>
                                                <td><a href="https://www.youtube.com/user/consorciocl"><img align="Facebook" class="rrss-icono" height="30" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/yt.png" style="border: none; outline: none;" width="30" /></a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td height="20">&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Fin Footer rrss -->

                        <!-- tips seguridad -->

                        <table align="center" bgcolor="#eaeaea" border="0" cellpadding="0" cellspacing="0" class="fluid main-tips" width="100%">
                            <tbody>
                                <tr>
                                    <td align="center">
                                    <table border="0" cellpadding="0" cellspacing="0" class="fluid-margen" width="500">
                                        <tbody>
                                            <tr>
                                                <td colspan="3" height="20">&nbsp;</td>
                                                <!-- espacio -->
                                            </tr>
                                            <tr>
                                                <td><img height="46" src="http://images.masterbase.com/v1/consorciomktpro/b/mail-resp/alerta.png" width="46" /></td>
                                                <td width="10">&nbsp;</td>
                                                <td>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                    <tbody>
                                                        <tr>
                                                            <td align="justify" class="txt-legal" style="font-family: Arial, Helvetica, sans-serif; font-size:13px;  color:#454545; text-align: left; vertical-align: top;"><strong>&middot;</strong></td>
                                                            <td width="5">&nbsp;</td>
                                                            <td align="justify" class="txt-legal" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;  color:#454545; text-align: left; vertical-align: top;"><strong>Nunca</strong> abras ni descargues archivos de remitentes desconocidos, ni facilites datos personales.</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="justify" class="txt-legal" style="font-family: Arial, Helvetica, sans-serif; font-size:13px;  color:#454545; text-align: left; vertical-align: top;"><strong>&middot;</strong></td>
                                                            <td width="5">&nbsp;</td>
                                                            <td align="justify" class="txt-legal" style="font-family: Arial, Helvetica, sans-serif; font-size:11px;  color:#454545; text-align: left; vertical-align: top;"><strong>Nunca</strong> uses la opci&oacute;n &quot;guardar contrase&ntilde;a&quot; en las pantallas iniciales de sitios de internet.</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" height="20">&nbsp;</td>
                                                <!-- espacio -->
                                            </tr>
                                        </tbody>
                                    </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <!-- Fin tips seguridad --></td>
                    </tr>
                </tbody>
            </table>
            <!-- legal generico -->

            <table align="center" border="0" cellpadding="0" cellspacing="0" class="fluid-legales main-legal" style="max-width: 600px;" width="100%">
                <tbody>
                    <tr>
                        <td height="20">&nbsp;</td>
                    </tr>
                    <tr style="text-align: : justify" valign="center">
                        <td class="txt-legal-fijo" style="font-family: arial; font-size: 11px; text-align: justify; color: #7a7a7a;">Este correo electr&oacute;nico ha sido enviado a #!email!#.</td>
                    </tr>
                    <tr>
                        <td height="10">&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="txt-legal-fijo" style="font-family: arial; font-size: 11px; text-align: justify; color: #7a7a7a;">Por favor agradecemos No Contestar a esta casilla. Si requiere efectuar consultas, solicitudes, corregir errores en el env&iacute;o o en sus datos, cont&aacute;ctenos directamente en nuestro sitio <strong>www.<span style="font-size: 1px;">&nbsp;</span>consorcio.<span style="font-size: 1px;">&nbsp;</span>cl</strong>. Este correo electr&oacute;nico fue enviado a trav&eacute;s de MasterBase&reg; por Consorcio Financiero S.A. Direcci&oacute;n: El Bos<i style="display:none;">-</i>que Sur<span style="font-size: 10px;">&nbsp;</span>180, piso 1 Las <i style="display:none;">-</i>Con<i style="display:none;">-</i>des &middot; San<i style="display:none;">-</i>tiago <i style="display:none;">-</i>Chile.</td>
                    </tr>
                    <tr>
                        <td height="10">&nbsp;</td>
                    </tr>
                    <tr>
                        <td class="txt-legal-fijo" style="font-family: arial; font-size: 11px; text-align: justify; color: #7a7a7a;">Le informamos que si no desea recibir m&aacute;s de este tipo de mensajes, puede anular su suscripci&oacute;n <strong><a href="https://register.masterbase.com/v0/CONSORCIOMKTPRO/#!serial!#/#!contrasena!#/marcarusu?boletin=9&amp;habilitado=1&amp;opcion=1" style="color:#002b5f;" target="_blank">aqu&iacute;</a></strong>, en Cumplimiento a la ley del Consumidor N&deg; 19.496 y sus posteriores modificaciones, especialmente lo prescrito por el Art&iacute;culo 28b que regula el env&iacute;o de correos electr&oacute;nicos.</td>
                    </tr>
                    <tr>
                        <td height="20">&nbsp;</td>
                    </tr>
                </tbody>
            </table>
            <!-- fin legal generico --><!--[if gte mso 9]>
                                        </td>
                                    </tr>
                                </table>
                                <![endif]--></body>
            </html>
        `
      },
      getIconos_2x3_6x1: function(){

        const chk  = this.panel.chk_iconos_2x3_6x1
        const op1 = `
                      <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid" width="560">
                            <tbody>
                                <tr>
                                    <th colspan="3" height="6" width="100%">&nbsp;</th>
                                </tr>
                                <tr>
                                    <th align="center" class="force-col icons-6x1" style="vertical-align:top;">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="280" height="100">
                                            <tbody>
                                                <tr><!-- 100 anos -->
                                                    <td align="center" width="100" style="vertical-align: top;">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/1.png" alt="Nunca te pediremos tus datos o claves personales por medio de un e-mail o llamado telef&oacute;nico." class="float-center" width="73" height="73" style="display:block;">


                                                    </td>
                                                    <td align="center" width="180">

                                                        <p style="color:#262626;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:13px;text-align:left;">
                                                            <span style="font-weight: bold;color: #002249;font-size: 16px;">Datos</span> <br>
                                                            <span style="font-weight: bold;">Nunca</span> te pediremos tus datos o claves personales por medio de un e-mail o llamado telef&oacute;nico
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                    <th align="center" class="force-col icons-6x1" style="vertical-align:top;">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="280" height="100">
                                            <tbody>
                                                <tr>
                                                    <td align="center" width="100" style="vertical-align: top;">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/2.png" alt="Ingresa siempre a nuestro sitio web digitando: www.consorcio.cl." class="float-center" width="73" height="73" style="display:block;">
                                                    </td>
                                                    <td align="center" width="180" style="vertical-align: middle;">

                                                        <p style="color:#262626;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:13px;text-align:left;">
                                                            <span style="font-weight: bold;color: #002249;font-size: 16px;">Web</span> <br>
                                                            <span style="font-weight: bold;">Ingresa</span> siempre a nuestro sitio web digitando: <a href="http://www.consorcio.cl?utm_source=Consorcio&utm_medium=email&utm_campaign=AntiFraude&utm_Tmail=mailing" style="text-decoration: none !important;color: #262626 !important;font-weight: bold;">www.consorcio.cl</a>
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid" width="560">
                            <tbody>
                                <tr>
                                    <th align="center" class="force-col icons-6x1" style="vertical-align:top;" >
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="280" height="100">
                                            <tbody>
                                                <tr>
                                                    <td align="center" width="100" style="vertical-align: top;">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/3.png" alt="Nunca abras ni descargues archivos de remitentes desconocidos." class="float-center" width="73" height="73" style="display:block;">


                                                    </td>
                                                    <td align="center" width="180">

                                                        <p style="color:#262626;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:13px;text-align:left;">
                                                            <span style="font-weight: bold;color: #002249;font-size: 16px;">Archivos</span> <br>
                                                            <span style="font-weight: bold;">Nunca</span> abras ni descargues archivos de remitentes desconocidos
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                    <th align="center" class="force-col icons-6x1" style="vertical-align:top;" >
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="280" height="100">
                                            <tbody>
                                                <tr>
                                                    <td align="center" width="100" style="vertical-align: top;">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/4.png" alt="Recuerda mantener el antivirus de tu computador actualizado." class="float-center" width="73" height="73" style="display:block;">


                                                    </td>
                                                    <td align="center" width="180">

                                                        <p style="color:#262626;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:13px;text-align:left;">
                                                            <span style="font-weight: bold;color: #002249;font-size: 16px;">Antivirus</span> <br>
                                                            <span style="font-weight: bold;">Recuerda</span> mantener el antivirus de tu computador actualizado
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                            </tbody>
                        </table>

                        <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid" width="560">
                            <tbody>
                                <tr>
                                    <th align="center" class="force-col icons-6x1" style="vertical-align:top;" >
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="280" height="100">
                                            <tbody>
                                                <tr>
                                                    <td align="center" width="100" style="vertical-align: top;">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/5.png" alt="Actualiza constantemente tu clave. No utilices contrase&ntilde;as asociadas a datos personales y no las compartas con terceros." class="float-center" width="73" height="73" style="display:block;">


                                                    </td>
                                                    <td align="center" width="180" style="vertical-align: middle;">

                                                        <p style="color:#262626;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:13px;text-align:left;">
                                                            <span style="font-weight: bold;color: #002249;font-size: 16px;">Clave</span> <br>
                                                            <span style="font-weight: bold;">Actualiza</span> constantemente tu clave. No utilices contrase&ntilde;as asociadas a datos personales y no las compartas con terceros
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                    <th align="center" class="force-col icons-6x1" style="vertical-align:top;" >
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="280" height="100">
                                            <tbody>
                                                <tr>
                                                    <td align="center" width="100" style="vertical-align: middle;">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/anti-fraude/6.png" alt="No copies ni pegues  enlaces que fueron enviados por e-mail." class="float-center" width="73" height="73" style="display:block;">


                                                    </td>
                                                    <td align="center" width="180" style="vertical-align: middle;">

                                                        <p style="color:#262626;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:13px;text-align:left;">
                                                            <span style="font-weight: bold;color: #002249;font-size: 16px;">Copy/Paste</span> <br>
                                                            <span style="font-weight: bold;">No copies ni pegues</span>  enlaces que fueron enviados por e-mail
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
        `

        if (chk)
          this.code.iconos_2x3_6x1Code = op1
        else
          this.code.iconos_2x3_6x1Code = ''

        this.getPreview()
      },
      getBoxBorderDashed: function(){

        const chk  = this.panel.chkBoxBorderDahed

        var op1 = `
          <table id="tabla" align="center" cellpadding="0" cellspacing="0" class="fluid450" width="560" bgcolor="#ffffff" style="border:1px dashed #cccccc;">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="560">
                                            <tbody>
                                                <tr>
                                                    <td height="25">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                    <!-- 100 anos -->
                                                    <td align="center">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/app-no-cliente/icon-circle.png" alt="Haz tu Denuncio de Siniestro" class="float-center" width="100" height="100">
                                                    </td>

                                                </tr>
                                                <tr>
                                                    <td height="5" width="100%">&nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="560">
                                            <tbody>
                                                <tr>
                                                    <td align="center" style="vertical-align: top;">
                                                            <table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                                <tbody><tr>
                                                                    <td style="font-family: Arial, Helvetica, sans-serif; font-size:18px; color:#004292;text-align: center;">Haz tu <span style="font-weight: bold;">
                                                                        Denuncio de Siniestro</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                            <table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                                <tbody><tr>
                                                                    <td style="font-family: Arial, Helvetica, sans-serif; font-size:14px; color:#004292;text-align: center;">Recuerda que a través de  <span style="font-weight: bold;">TU APP Consorcio</span> puedes hacerlo

                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                            <table width="85%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                                <tbody><tr>
                                                                    <td style="font-family: Arial, Helvetica, sans-serif; font-size:14px; color:#404040;text-align: justify;">
                                                                        Sólo debes ingresar tus datos personales y el de terceros involucrados en caso que corresponda, completar los detalles de lo ocurrido y listo.
                                                                    </td>
                                                                </tr>
                                                            </tbody></table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td height="25">&nbsp;</td>
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
        `

          if (chk)
            this.code.boxBorderDashedCode = op1
          else
            this.code.boxBorderDashedCode = ''

          this.getPreview()
      },
      getIconos_3x1_2x1: function(){

        const chk  = this.panel.chk_iconos_3x1_2x1
        const op1 = `
                    <table align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="fluid-info" width="510">
                            <tbody>
                                <tr>
                                    <th align="center" class="force-col" style="display:inline-block;  vertical-align:top;" width="334">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="334">
                                        <tbody>
                                            <tr>
                                                <td align="center" width="140" style="vertical-align: top;">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/abril-seguro-oncologico//1.png" alt="Contrata tu seguro oncológico" class="float-center" width="100" height="100" style="display:block;">

                                                        <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:14px;text-align:center">Contrata tu<br>
            <span style="color: #ea171c;font-weight: bold;">Seguro Oncológico</span></p>
                                                    </td>
                                                <td align="center" width="140">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/abril-seguro-oncologico//2.png" alt="Asocia el pago de tu plan a PAT o PAC y documenta 12 cuotas de pago" class="float-center" width="100" height="100" style="display:block;">

                                                        <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:14px;text-align:center">Asocia el pago de tu plan a <span style="font-weight: bold;">PAT o PAC</span> y documenta 12 cuotas de pago</p>
                                                    </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                    </th>
                                    <th class="force-col" style="display:inline-block; max-width:162px;  vertical-align:top; ">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="160">
                                        <tbody>
                                            <tr>
                                                <td align="center" width="140">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/abril-seguro-oncologico//3.png" alt="¡Y listo! Obtén automáticamente 2 cuotas SIN COSTO" class="float-center" width="100" height="100" style="display:block;">

                                                        <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: normal;font-size:14px;text-align:center">
                                                            <span style="font-weight: bold;">¡Y listo!</span> Tienes<br>
                                                            automáticamente<br><span style="font-weight: bold;">2 cuotas SIN COSTO</span></p>
                                                    </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </th>
                                </tr>
                                <tr>
                                    <th colspan="3" height="25" width="100%">&nbsp;</th>
                                </tr>
                            </tbody>
                        </table>
        `

        if (chk)
          this.code.iconos_3x1_2x1Code = op1
        else
          this.code.iconos_3x1_2x1Code = ''

        this.getPreview()
      },
      getIconos_3x2_1x5: function(){

        const chk  = this.panel.chk_iconos_3x2_1x5
        const op1 = `
                    <table align="center" bgcolor="#eaeef4" border="0" cellpadding="0" cellspacing="0" class="fluid450 bg-icons" width="560">
                <tbody>
                    <tr>
                        <th align="center" class="force-col" style="display:inline-block;  vertical-align:top;" width="180">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="180">
                                <tbody>
                                    <tr>
                                        <td align="center" width="150">
                                            <img src="http://images.masterbase.com/v1/consorciomktpro/b/seguro_viajes_20180313/1.png" alt="Asistencia médica" class="float-center" width="83" height="83" style="display:block;">

                                            <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center" class="fluid350">Asistencia médica</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                        <th class="force-col" style="display:inline-block; max-width:180px;  vertical-align:top; ">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2 " width="180">
                                <tbody>
                                    <tr>
                                        <td align="center" width="140">
                                            <img src="http://images.masterbase.com/v1/consorciomktpro/b/seguro_viajes_20180313/2.png" alt="Reembolso de gastos por vuelo demorado o cancelado" class="float-center" width="83" height="83" style="display:block;">

                                            <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center" class="fluid350">Reembolso de gastos por vuelo demorado o cancelado</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                        <th class="force-col" style="display:inline-block; max-width:180px;  vertical-align:top; ">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="180">
                                <tbody>
                                    <tr>
                                        <td align="center" width="140">
                                            <img src="http://images.masterbase.com/v1/consorciomktpro/b/seguro_viajes_20180313/3.png" alt="Asistencia en caso de robo o extravío de documentos" class="float-center" width="83" height="83" style="display:block;">

                                            <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center" class="fluid350">Asistencia en caso de robo o extravío de documentos</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                    </tr>
                </tbody>
            </table>
            <table align="center" bgcolor="#eaeef4" border="0" cellpadding="0" cellspacing="0" class="fluid450 bg-icons" width="560">
                <tbody>
                    <tr><th>
                        <table align="center" bgcolor="#eaeef4" border="0" cellpadding="0" cellspacing="0" class="fluid" width="360">
                            <tbody>
                                <tr>
                                    <th colspan="3" height="6" width="100%">&nbsp;</th>
                                </tr>
                                <tr>
                                    <th align="center" class="force-col" style="display:inline-block;  vertical-align:top;" width="180">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="180">
                                            <tbody>
                                                <tr>
                                                    <td align="center" width="150">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/seguro_viajes_20180313/4.png" alt="Localización de equipajes" class="float-center" width="83" height="83" style="display:block;">

                                                        <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight:bold;font-size:14px;text-align:center">Localización de equipajes</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                    <th class="force-col" style="display:inline-block; max-width:180px;  vertical-align:top; ">
                                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="column-2" width="180">
                                            <tbody>
                                                <tr>
                                                    <td align="center" width="140">
                                                        <img src="http://images.masterbase.com/v1/consorciomktpro/b/seguro_viajes_20180313/5.png" alt="Extravío y demora en la entrega de equipaje" class="float-center" width="83" height="83" style="display:block;">

                                                        <p style="color:#000000;font-family:Arial, Helvetica, sans-serif;font-weight: bold;font-size:14px;text-align:center" class="fluid350">Extravío y demora en la entrega de equipaje</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </th>
                                </tr>
                                <tr>
                                    <th colspan="3" height="6" width="100%">&nbsp;</th>
                                </tr>
                            </tbody>
                        </table>
                    </th>
                </tr></tbody>
            </table>
        `

        if (chk)
          this.code.iconos_3x2_1x5Code = op1
        else
          this.code.iconos_3x2_1x5Code = ''

        this.getPreview()
      }
    }
  }
</script>

<style>
  .col-lg-3 {
      width: 20%;
      float: left;
  }
  .col-lg-9 {
    width: 55%;
    left: 450px;
    position: relative;
  }

  .code, .v--modal {
      background-color: #333;
  }
  
  .code pre {color: #4fc08d;}
  code {background-color: transparent;color: #777;}

  .menu-mailing {
    overflow-y: scroll;
    background: #eaeaea;
    padding: 10px;
    height:100%;
    overflow: auto;
    position: fixed;
    max-width: 400px;
    z-index: 9999 !important;
    left: -400px !important;
  }
  .menu-mailing.toggleMenu {
    left: 0 !important;
  }
  #refresh {
    width: 150px;
    height: 50px;
    background: #4fc08d;
    border: 1px solid #4fc08d;
    cursor: pointer;
    border-radius: 2px;
    color: #fff;
    font-family: Exo,sans-serif;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 6px;
    margin: 15px 0;
    margin-left: 0;
    border-radius: 5px;
  }
  #refresh:hover {
    background: #459873;
  }
  .select ,
  textarea,
  input[type="text"] {
    display: block;
    width: 100%;
    padding-left: 7px;
  }
  input[type="text"] {
    height: 34px;
  }
input[type="number"],
.editing-content input[type="text"],
.icon-editor table input[type="text"]{
    width: 65px;
    height: 21px;
    margin: 0 auto;
    display: inline;
    font-size: 12px;
}
.editing-content table {
    width: 100%;
    margin-top: 10px !important;
}
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.6);
}

.icon-editor table {
    width: 100%;
}
.menu-mailing {left: 0;
  transition: left .8s ease;
  z-index: 99;
}
@media (max-width: 768px){
  .col-lg-9 {left:0;width: 100%;}

  h1 {left: 0 !important;position: relative;}
}



h1 {
    left: 233px;
}
span.close {
    position: absolute;
    z-index: 9999;
    font-size: 52px;
    right: 70px;
    top: 52px;
    cursor: pointer;
}
.menu-mailing textarea,
.menu-mailing input {
    font-size: 12px;
}
.container {
    max-width: 100%;
    margin: 0;
}
.col-lg-3 {
    padding: 0;
}
.mobile-preview {
  width: 100%;
  max-width: 375px;
}
.mobile-preview table{
    width: 92%;
}
.mobile-preview .fluid-banner {
    width: 100%;
    height: auto;
}
 
.mobile-preview table.main-banner,
.mobile-preview table.fluid450,
.mobile-preview .main-title,
.mobile-preview .main-tips,
.mobile-preview .main-legal{
    width: 100%;
}
.mobile-preview .main-icons {
    width: 70%;
}
.mobile-preview .main-title table{
    width: 92%;
}
.section {
    background-color: #eaeaea;
    padding: 5px;
    margin: 10px 0;
}
.section .title {
    font-size: 1.5em;
    color: #666;
    margin: 20px 0;
}
.html-preview:before {
  transition: all 2s ease;
}
.html-preview.toggleMenu:before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    display: block;
    position: absolute;
    min-width: 1900px;
    left: -300px;
}
@media (max-width: 1280px){
  .menu-mailing {
    width: 21%;
  }
  .mobile-preview {
    width: 100%;
    max-width: 375px;
    margin: 0 auto;
  }
}
@media (min-width: 1300px){
  .menu-mailing {
    left: 0 !important;
  }
  .html-preview.toggleMenu:before {
    content: none;
  }
}
p.input-title {
    text-align: left;
    margin: 6px 0;
    margin-left: 4px;
}
.editing-content td:first-child input[type="text"] {
    border: 0;
    background-color: #e2e2e2;
}
.mobile-preview table.bg-icons tr th {
    width: 58%;
}
.v--modal-overlay .v--modal-box {
    overflow: auto;
}
.v--modal-overlay {
  z-index: 9999;
}
.mobile-preview .icons-6x1 {
    display: block;
}
.section ul, 
.section ul li{
    margin: 0;
}
</style>
