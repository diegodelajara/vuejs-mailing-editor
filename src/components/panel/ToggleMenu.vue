<template>
	<div id="toggle" @click="toggleMenu" :class="{on:on}">
		<div class="toggle_container">
			<span></span>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				on: false
			}
		},
		methods: {
			toggleMenu: function(){
				this.on = !this.on
				this.$parent.toggleMenu = this.on

			}
		}
	}
	
</script>

<style scoped>
#toggle {
    margin: 30px auto 10px;
    position: absolute;
    right: -10px;
    z-index: 999;
    display: block;
}
#toggle.on {
    width: 2000px;
    height: 3000px;
}
.toggle_container {
    width: 28px;
    height: 30px;
    margin: 30px auto 10px;
    position: absolute;
    right: 22px;
    z-index: 999;
    display: block;
    top: -34px;
}
#toggle span:after,
#toggle span:before {
  content: "";
  position: absolute;
  left: 0;
  top: -9px;
}
#toggle span:after{
  top: 9px;
}
#toggle span {
  position: relative;
  display: block;
}

#toggle span,
#toggle span:after,
#toggle span:before {
  width: 100%;
  height: 5px;
  background-color: var(--blue);
  transition: all 0.3s;
  backface-visibility: hidden;
  border-radius: 2px;
}
#toggle.on span,
#toggle.on span:after,
#toggle.on span:before {
  background-color: #fff;
}
/* on activation */
#toggle.on span {
  background-color: transparent;
}
#toggle.on span:before {
  transform: rotate(45deg) translate(5px, 5px);
}
#toggle.on span:after {
  transform: rotate(-45deg) translate(7px, -8px);
}
#toggle.on + #menu {
  opacity: 1;
  visibility: visible;
}

/* menu appearance*/
#menu {
  position: relative;
  color: #999;
  width: 200px;
  padding: 10px;
  margin: auto;
  font-family: "Segoe UI", Candara, "Bitstream Vera Sans", "DejaVu Sans", "Bitstream Vera Sans", "Trebuchet MS", Verdana, "Verdana Ref", sans-serif;
  text-align: center;
  border-radius: 4px;
  background: white;
  box-shadow: 0 1px 8px rgba(0,0,0,0.05);
  /* just for this demo */
  opacity: 0;
  visibility: hidden;
  transition: opacity .4s;
}
#menu:after {
  position: absolute;
  top: -15px;
  left: 95px;
  content: "";
  display: block;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-bottom: 20px solid white;
}
ul, li, li a {
  list-style: none;
  display: block;
  margin: 0;
  padding: 0;
}
li a {
  padding: 5px;
  color: #888;
  text-decoration: none;
  transition: all .2s;
}
li a:hover,
li a:focus {
  background: #1ABC9C;
  color: #fff;
}
.html-preview {
    top: -3px;
    position: relative;
}
@media (min-width: 1300px) {
	#toggle {
		display: none;
	}
}
</style>
