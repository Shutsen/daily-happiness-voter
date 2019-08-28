<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				{{ message }}
			</div>
		</div>
	</section>
</template>

<script>
import usersApi from '../api/users.api'

export default {
	data() {
		return {
			message: 'Welcome to your dashboard'
		}
	},
	mounted() {
		const user_id = this.$route.params.user_id
		usersApi.getUserDetail(user_id)
	}
}
</script>