var GameComponent = Vue.component("game", {
	template: `
		<div class="game">
			<p>As soon as you press 'GO' you will get a word.</p>
			<p>Find the best/funniest Giphy to go with the prompt above.</p>
			<p>The user with the most votes <span>WINS</span>!!!</p>
			<p>Ready. Set. <router-link class="btn" to="/game">Go!</router-link></p>
		</div>
	`,
})
