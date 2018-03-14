var VoteComponent = Vue.component("vote", {
	data: function(){
		return {

		}
	},
	template: `
		<div class="vote">
			<h1>{{status.question}}</h1>
			<div>Hurry! Only {{Math.round(status.timeLeftInPhase/1000)}} seconds left to submit and vote!</div>
			<p>Vote the best GIPHY!</p>
			<router-link class="btn" to="/game"> &lt; Get more giphys!</router-link>
			
			<p v-if="this.status.phase !== 'game'"> The winner is:</p>
			<div class="winner" v-if="this.status.phase !== 'game' && status.submissions.length">
				<p>{{status.submissions[0].username}}</p>
				<img :src="status.submissions[0].giphyURL" >
			</div>

			<ul v-for="(submission, index,) in status.submissions">
				<li v-if="status.phase == 'game'">
					<img :src="submission.giphyURL">
					<p>{{submission.username}} , {{submission.upvotes.length}} vote(s)</p>
					<button @click="giphyVote(index, $event)">UPVOTE</button>
				</li>

			</ul>
		</div>
	`,
	props: ["status"],
	methods: {
		giphyVote: function(index, event){
			console.log("userVoted bitchhhh!");
			this.$emit("uservotedgiphy", index);
		},
	}
})
