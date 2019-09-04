<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container max-w-800px">
				<div v-if="!loaded"></div>
				<div v-else-if="error">
					<h2 class="title">This user does not exist</h2>
					<router-link class="button is-light is-medium" :to="`/login`">Try again</router-link>
				</div>
				<HasVotedView v-else-if="hasVotedToday" :user="user"/>
				<HasNotVotedView v-else :user="user" @voted="getUserDetail"/>
			</div>
		</div>
	</section>
</template>

<script>
import usersApi from '../api/users.api'
import { getDayMonthYearString } from '../../utils/date'
import HasVotedView from '../components/HasVotedView'
import HasNotVotedView from '../components/HasNotVotedView'

export default {
	components: { HasVotedView, HasNotVotedView },
	data() {
		return {
			user: null,
			user_id: localStorage.getItem('user_id'),
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
			const today = getDayMonthYearString()
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
		}
	}
}
</script>