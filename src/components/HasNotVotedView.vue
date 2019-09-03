<template>
	<div>
		<h2 class="title">{{ message }}<span v-if="user">, {{ user.first_name }}</span></h2>
		<router-link v-if="user.is_manager" class="button is-primary is-medium mb-30px" to="/dashboard/manager">View your employee happiness</router-link>
		<div>
			<p>Today, you haven't voted yet!</p>
			<p class="mb-30px">How are you feeling like?</p>
			<div class="columns">
				<div class="column" v-for="(state, i) in states" :key="i">
					<Card :state="state" @select="onSelect"/>
				</div>
			</div>
			<p>All data is being registered anonymously.</p>
		</div>
	</div>
</template>

<script>
import votesApi from '../api/votes.api'
import Card from '../components/Card'

export default {
	components: { Card },
	props: [ 'user', 'user_id' ],
	data() {
		return {
			message: 'Welcome to your dashboard',
			states: [
				{ expression: 'unhappy', score: -1 },
				{ expression: 'neutral', score: 0 },
				{ expression: 'happy', score: 1 },
			]
		}
	},
	methods: {
		async onSelect(state) {
			await votesApi.addVote(state.score, this.user_id)
			this.$emit('voted')
		}
	}
}
</script>