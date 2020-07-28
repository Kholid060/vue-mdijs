import VueMdi from './components/vue-mdijs.vue';

export const VMdi = VueMdi;

export default {
	install(Vue){
		Vue.component(VueMdi.name, VueMdi);
	},
	add(icons){
		VueMdi.add(icons);
	}
}
