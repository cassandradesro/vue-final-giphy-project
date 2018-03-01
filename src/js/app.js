const router = new VueRouter({
	routes: [
		{ path: '', component: WelcomeComponent },
		{ path: '/game', component: GameComponent },
		{ path: '/submit', component: SubmissionComponent },
		{ path: '/instruction', component: InstructionComponent },

	]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		username: "",
		seconds: 20,
		status: [],
	},
	created: function() {
		this.getStatus();

		setInterval(this.getStatus, 3000)
	},
	methods: {
		// tick: function(){
		// 	this.seconds--;
		// 	if (this.seconds == 0){
		// 		this.seconds = 20;
		// 		this.getTweets();
		// 	}
		// },
		userEnteredUsername: function (enteredUsername) {
			this.username = enteredUsername;
			console.log("app.js received and stored username", this.username)
		},
		getStatus: function() {
	
			var uri = 'http://circuslabs.net:6432/status';
			// console.log('getStatus', uri);
			axios
				.get(uri)
				.then((response) => {
					// console.log(response);	
					this.status = response.data;	
				})
				.catch((error) => {
					console.warn(error);
				});
		}
	}
});



