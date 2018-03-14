const router = new VueRouter({
	routes: [
		{ path: '', component: WelcomeComponent },
		{ path: '/game', component: GameComponent },
		{ path: '/vote', component: VoteComponent },
		{ path: '/instruction', component: InstructionComponent, },

	]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		username: localStorage.getItem("username"),
		seconds: 20,
		status: [],
		localtimeleft: 0,
	},
	created: function() {
		this.getStatus();

		setInterval(this.getStatus, 3000)

		setInterval(() => {
			this.localTimeLeft -= 1000
			if(this.LocalTimeLeft < 0){
				this.getStatus();
			}
		}, 1000)
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
			localStorage.setItem("username", this.username);
			console.log("app.js received and stored username", this.username)

		},
		getStatus: function() {
	
			var uri = 'http://circuslabs.net:6432/status';
			// console.log('getStatus', uri);
			axios
				.get(uri)
				.then((response) => {
					// console.log("status", response);	
					this.status = response.data;	
					this.localTimeLeft = this.status.timeLeftInPhase;
				})
				.catch((error) => {
					console.warn(error);
				});
		
		},
		userSelectedGiphy: function(giphyURL) {
			console.log("userSelectedGiphy bitchhhh!");
			var uri = 'http://circuslabs.net:6432/submission';

			axios.post(uri, {
				giphyURL: giphyURL,
				username: this.username
			}).then(function(res) {
				console.log(res)
			})
				

		}, 

		userVotedGiphy: function(index){

			var uri = 'http://circuslabs.net:6432/upvote/' + index;

			console.log("userVotedGiphy", uri)

			axios.post(uri, {
				username: this.username
			}).then(function(res) {
				console.log(res)
			})
		}
	}
});



