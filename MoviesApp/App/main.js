import Vue from 'vue'
import App from './App'
import router from './router'

/*
createApp(App)
	.use(router)
	.mount('#app')
	*/

new Vue({

	el: '#app',
	template: '<app/>',
	components: { App },
		router,
	render: (h) => h(App)
}).$mount('#app').use(router);

