"use strict";

var GameComponent = Vue.component("game", {
	data: function data() {
		return {
			giphyString: "",
			giphys: []
		};
	},

	template: "\n\t\t<div class=\"game\">\n\t\t\t<h1>{{status.question}}</h1>\n\t\t\t<div>Hurry! Only {{Math.round(status.timeLeftInPhase/1000)}} seconds left to submit and vote!</div>\n\t\t\t<input v-if=\"this.status.phase === 'game'\" v-model=\"giphyString\">\n\t\t\t<router-link class=\"btn\" to=\"/vote\">Vote!</router-link>\n\n\t\t\t<ul v-if=\"this.status.phase === 'game'\">\n\t\t\t\t<li @click=\"giphySelect(giphy.images.original.url)\" v-for=\"giphy in giphys\">\n\t\t\t\t\t<img :src=\"giphy.images.original.url\">\n\t\t\t\t</li>\n\t\t\t</ul>\n\n\t\t\t<p v-if=\"this.status.phase !== 'game'\">Can't search right now, the game is over! </p>\n\t\n\t\t</div>\n\t",
	props: ["status", "localtimeleft"],
	watch: {
		status: function status() {
			console.log("status has changed!");
			if (this.status.phase !== "game") {
				this.giphys = [];
				this.giphyString = "";
			}
		},
		giphyString: function giphyString() {
			this.giphySearch();
		}
	},
	methods: {
		giphySelect: function giphySelect(giphyURL) {
			console.log("giphySelect", giphyURL);
			this.$emit("userselectedgiphy", giphyURL);
			event.target.parentNode.classList.add("active");
			// this.giphys = []
			// this.giphyString = ""
		},
		giphySearch: function giphySearch() {
			var _this = this;

			var api_key = 'CEaSZI3qWDRHdDm7mNflLNWRBwa5bQmj';
			//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"
			var uri = "http://api.giphy.com/v1/gifs/search?q=" + encodeURIComponent(this.giphyString) + "&api_key=" + api_key + "&limit=12";
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
