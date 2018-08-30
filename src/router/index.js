import Vue 						from 'vue'
import Router 					from 'vue-router'

import Mail        				from '@/components/Mail'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/mail',
			name: 'mail',
			components: {
				  'main-content': Mail
			}
		}
	]
})
