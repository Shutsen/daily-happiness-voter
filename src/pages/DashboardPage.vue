<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<div>{{ message }}<span v-if="user">, {{ user.first_name }}</span></div>
				<router-link v-if="user.is_manager" class="button is-light is-medium" to="/dashboard/manager">View your employee happiness</router-link>
			</div>
		</div>
	</section>
</template>

<script>
import usersApi from '../api/users.api'

export default {
	data() {
		return {
			message: 'Welcome to your dashboard',
			user: null,
			loaded: false
		}
	},
	async mounted() {
		const user_id = this.$route.params.user_id
		const user = await usersApi.getUserDetail({ user_id })
		if (user) {
			this.user = user
		}
		this.loaded = true
	}
}
</script>