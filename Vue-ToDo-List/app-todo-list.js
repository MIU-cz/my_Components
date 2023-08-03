const AppTodoList = ({
	data() {
		return {
			title: 'Task list',
			textline: 'input new task',

			tasks: ['task-1', 'task-2'],
			isCheked: [false, false],

			taskname: "",

			btn: {
				add: 'add item',
				del: 'delate',
			},

			clas: {
				red: 'red',
				orange: 'orange',
				gray: 'gray',
				green: 'green',
			}
		}
	},
	methods: {
		toUpperCase(item) {
			return item.toUpperCase();
		},

		// inputedValue(event) {
		// 	this.taskname = event.target.value;
		// },

		addTask() {
			if (this.taskname) {
				this.tasks.push(this.taskname);
				this.isCheked.push(false);
				this.taskname = '';
			}
			else {
				return this.toUpperCase(this.textline);
			}
		},

		dellTask(i) {
			this.tasks.splice(i, 1);
			this.isCheked.splice(i, 1);
		},

	},
	computed: {
		// upperCase() {
		// 	return this.title.toUpperCase();
		// },
	},
	watch: {
		taskname(value) {
			console.log(value + " " + value.length);
		},
	},
});

Vue.createApp(AppTodoList).mount("#appTodoList");