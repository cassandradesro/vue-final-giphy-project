var WelcomeComponent = Vue.component("welcome", {
	data: function(){
		return {
			enteredUsername: ""
		}
	},
	template: `
		<div>
			<h1>Hi, welcome to Giphy Battle</h1>
			<p>What's your name?</p>
			<input v-model="enteredUsername" >
			<router-link class="btn" to="/game">SUBMIT</router-link>
		</div>
	`,
	watch: {
		enteredUsername: function(){			
			console.log(this.enteredUsername, "userEnteredUsername");
			this.$emit("userenteredusername", this.enteredUsername) 
		}
	}, 
})
