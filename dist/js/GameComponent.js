"use strict";

var GameComponent = Vue.component("game", {
	data: function data() {
		return {
			giphyString: "",
			giphys: []
		};
	},

	template: "\n\t\t<div class=\"game\">\n\t\t\t<h1>{{status.question}}</h1>\n\t\t\t<input v-model=\"giphyString\">\n\n\t\t\t<ul>\n\t\t\t\t<li v-for=\"giphy in giphys\">\n\t\t\t\t\t<img src=\"{{giphy.images.original.url}}\">\n\t\t\t\t</li>\n\t\t\t</ul\n\n\t\t\t<!--<button @click=\"giphySearch\">Search</button>-->\n\t\t</div>\n\t",
	props: ["status"],
	watch: {
		giphyString: function giphyString() {
			this.giphySearch();
		}
	},
	methods: {
		giphySearch: function giphySearch() {
			var _this = this;

			var api_key = 'CEaSZI3qWDRHdDm7mNflLNWRBwa5bQmj';
			//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
			var uri = "http://api.giphy.com/v1/gifs/search?q=" + encodeURIComponent(this.giphyString) + "&api_key=" + api_key + "&limit=10";
			axios.get(uri).then(function (response) {
				console.log(response);
				_this.giphys = response.data.data;
			}).catch(function (error) {
				console.warn(error);
			});
		}

	}

});
//# sourceMappingURL=GameComponent.js.map
