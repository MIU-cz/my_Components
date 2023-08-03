const App = ({
	// data() {	return {}},
	// alternate data:
	data: () => ({
		title: 'I am Groot',
		ultitle: '<h2>some lists</h2>',
		person: {
			name: 'Groot',
			job: 'Avanger',
			power: '100'
		},
		myArr: [1, 2, 3, 4, 5]
	}),
	methods: {
		addItemArray() {
			// this.myArr.unshift(this.$refs.inputAddItemArray.value);
			this.myArr.push(this.$refs.inputAddItemArray.value);
			this.$refs.inputAddItemArray.value = '';
		}
	},
	computed: {
		evenMyArr() {
			return this.myArr.filter(i => i % 2 === 0)
		}
	},
});

Vue.createApp(App).mount('#app');