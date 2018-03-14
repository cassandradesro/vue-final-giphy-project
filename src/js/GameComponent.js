var GameComponent = Vue.component("game", {
	data() {
		return {
			giphyString: "",
			giphys: []
		}
	},
	template: `
		<div class="game">
			<h1>{{status.question}}</h1>
			<div>Hurry! Only {{Math.round(status.timeLeftInPhase/1000)}} seconds left to submit and vote!</div>
			<input v-if="this.status.phase === 'game'" v-model="giphyString">
			<router-link class="btn" to="/vote">Vote!</router-link>

			<ul v-if="this.status.phase === 'game'">
				<li @click="giphySelect(giphy.images.original.url)" v-for="giphy in giphys">
					<img :src="giphy.images.original.url">
				</li>
			</ul>

			<p v-if="this.status.phase !== 'game'">Can't search right now, the game is over! </p>
	
		</div>
	`,
	props:["status", "localtimeleft",],
	watch: {
		status: function() {
			console.log("status has changed!")
			if (this.status.phase !== "game") {
				this.giphys = [];
				this.giphyString = "";
			}
		},
		giphyString: function() {
			this.giphySearch();
		}
	},
	methods: {
		giphySelect: function(giphyURL){
			console.log("giphySelect", giphyURL)
			this.$emit("userselectedgiphy", giphyURL)
			event.target.parentNode.classList.add("active")
			// this.giphys = []
			// this.giphyString = ""
		},
		giphySearch: function(){
			var api_key = 'CEaSZI3qWDRHdDm7mNflLNWRBwa5bQmj';
			//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
			var uri = "http://api.giphy.com/v1/gifs/search?q=" + encodeURIComponent(this.giphyString) + "&api_key=" + api_key + "&limit=12";
			axios
				.get(uri)
				.then((response) => {
					console.log(response);	
					this.giphys = response.data.data;	
				})
				.catch((error) => {
					console.warn(error);
				});
		},

	}

})
