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
			<input v-model="giphyString">

			<ul>
				<li v-for="giphy in giphys">
					<img src="{{giphy.images.original.url}}">
				</li>
			</ul

			<!--<button @click="giphySearch">Search</button>-->
		</div>
	`,
	props:["status",],
	watch: {
		giphyString: function() {
			this.giphySearch();
		}
	},
	methods: {
		giphySearch: function(){
			var api_key = 'CEaSZI3qWDRHdDm7mNflLNWRBwa5bQmj';
			//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
			var uri = "http://api.giphy.com/v1/gifs/search?q=" + encodeURIComponent(this.giphyString) + "&api_key=" + api_key + "&limit=10";
			axios
				.get(uri)
				.then((response) => {
					console.log(response);	
					this.giphys = response.data.data;	
				})
				.catch((error) => {
					console.warn(error);
				});
		}

	}

})
