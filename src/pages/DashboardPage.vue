<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container max-w-800px">
				<div v-if="!loaded"></div>
				<div v-else-if="error">
					<h2 class="title">This user does not exist</h2>
					<router-link class="button is-light is-medium" :to="`/dashboard`">Try again</router-link>
				</div>
				<div v-else-if="hasVotedToday">
					<h2 class="title">Thanks for submitting your vote today<span v-if="user">, {{ user.first_name }}</span></h2>
					<p class="mb-30px">Tomorrow you can vote again!</p>
					<div class="columns">
						<div class="column"></div>
						<div class="column">
							<Card :state="ghostState" :disabled="true"/>
						</div>
						<div class="column"></div>
					</div>
				</div>
				<div v-else>
					<h2 class="title">{{ message }}<span v-if="user">, {{ user.first_name }}</span></h2>
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
					<router-link v-if="user.is_manager" class="button is-light is-medium" to="/dashboard/manager">View your employee happiness</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import usersApi from '../api/users.api'
import votesApi from '../api/votes.api'
import { getYearMonthDay } from '../../utils/date'
import Card from '../components/Card'

export default {
	components: { Card },
	data() {
		return {
			message: 'Welcome to your dashboard',
			user: null,
			user_id: localStorage.getItem('user_id'),
			states: [
				{ expression: 'unhappy', score: -1 },
				{ expression: 'neutral', score: 0 },
				{ expression: 'happy', score: 1 },
			],
			ghostState: { expression: 'ghost', },
			error: false,
			loaded: false
		}
	},
	async mounted() {
		await this.getUserDetail()
		this.loaded = true
	},
	computed: {
		hasVotedToday() {
			const today = getYearMonthDay()
			return this.user.last_voted_at === today
		}
	},
	methods: {
		async getUserDetail() {
			try {
				const user = await usersApi.getUserDetail({ user_id: this.user_id })
				if (user) {
					this.user = user
				}
			} catch(err) {
				this.error = true
			}
		},
		async onSelect(state) {
			await votesApi.addVote(state.score, this.user_id)
			this.getUserDetail()
		}
	}
}
</script>