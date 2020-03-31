import VueMdi from './components/vue-mdijs';

export default {
	install(Vue){
		Vue.component(VueMdi.name, VueMdi);
	},
	add(icons){
		VueMdi.add(icons)
	}
}
