"use strict";

var VoteComponent = Vue.component("vote", {
	data: function data() {
		return {};
	},
	template: "\n\t\t<div class=\"vote\">\n\t\t\t<h1>{{status.question}}</h1>\n\t\t\t<div>Hurry! Only {{Math.round(status.timeLeftInPhase/1000)}} seconds left to submit and vote!</div>\n\t\t\t<p>Vote the best GIPHY!</p>\n\t\t\t<router-link class=\"btn\" to=\"/game\"> &lt; Get more giphys!</router-link>\n\t\t\t\n\t\t\t<p v-if=\"this.status.phase !== 'game'\"> The winner is:</p>\n\t\t\t<div class=\"winner\" v-if=\"this.status.phase !== 'game' && status.submissions.length\">\n\t\t\t\t<p>{{status.submissions[0].username}}</p>\n\t\t\t\t<img :src=\"status.submissions[0].giphyURL\" >\n\t\t\t</div>\n\n\t\t\t<ul v-for=\"(submission, index,) in status.submissions\">\n\t\t\t\t<li v-if=\"status.phase == 'game'\">\n\t\t\t\t\t<img :src=\"submission.giphyURL\">\n\t\t\t\t\t<p>{{submission.username}} , {{submission.upvotes.length}} vote(s)</p>\n\t\t\t\t\t<button @click=\"giphyVote(index, $event)\">UPVOTE</button>\n\t\t\t\t</li>\n\n\t\t\t</ul>\n\t\t</div>\n\t",
	props: ["status"],
	methods: {
		giphyVote: function giphyVote(index, event) {
			console.log("userVoted bitchhhh!");
			this.$emit("uservotedgiphy", index);
		}
	}
});
//# sourceMappingURL=VoteComponent.js.map
