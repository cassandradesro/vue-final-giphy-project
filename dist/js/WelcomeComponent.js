"use strict";

var WelcomeComponent = Vue.component("welcome", {
	data: function data() {
		return {
			enteredUsername: ""
		};
	},
	template: "\n\t\t<div>\n\t\t\t<h1>Hi, welcome to Giphy Battle</h1>\n\t\t\t<p>What's your name?</p>\n\t\t\t<input v-model=\"enteredUsername\" >\n\t\t\t<router-link class=\"btn\" to=\"/game\">SUBMIT</router-link>\n\t\t</div>\n\t",
	watch: {
		enteredUsername: function enteredUsername() {
			console.log(this.enteredUsername, "userEnteredUsername");
			this.$emit("userenteredusername", this.enteredUsername);
		}
	}
});
//# sourceMappingURL=WelcomeComponent.js.map
