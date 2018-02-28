const router = new VueRouter({
	routes: [
		{ path: '', component: WelcomeComponent },
		{ path: '/game', component: GameComponent },
		{ path: '/submit', component: SubmissionComponent },
	]
});

var app = new Vue({
	el: "#app",
	router: router,
	data: {
		username: "",
		seconds: 20
	},
	created: function() {
		// use created to do initial AJAX lookups
		// this.getTweets();
		// setInterval(this.tick, 1000)
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
		getGiphys: function() {
			if (!this.hashtag || this.hashtag.length <= 3) {
				this.tweets = [];
				return;
			}
			var uri = '?op=search_tweets&q=';
			console.log('getTweets', uri);
			axios
				.get(uri)
				.then((response) => {
					console.log(response);
					if (response && response.data && response.data.statuses) {
					} else {
						console.warn("Valid response from twitter api/proxy, but bad data");
					}
				})
				.catch((error) => {
					console.warn(error);
				});
		}
	}
});



