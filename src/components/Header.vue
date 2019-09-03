<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<div class="navbar-item">
			<img src="/img/happy.png" width="28" height="28">
		</div>

		<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<a class="navbar-item" :href="links.github" target="_blank">View source code</a>
		</div>
	</div>
	<div class="navbar-end">
		<div class="navbar-item">
			<div class="buttons">
				<router-link v-if="!isLoggedIn" class="button is-light" to="/login">Log in</router-link>
				<div v-else class="button is-light" @click="logout">Log out</div>
			</div>
		</div>
	</div>
</nav>
</template>

<script>
import { EventBus } from '../utils/eventBus'
import { removeAuthenticatedState } from '../utils/auth'

export default {
	data() {
		return {
			links: {
				github: 'https://github.com/Shutsen/daily-happiness-voter',
			},
			isLoggedIn: false
		}
	},
	created() {
		EventBus.$on('logged-in', () => {
			console.log('We can see you logged in, sincerely yours.. the header component')
			this.isLoggedIn = true
		})
	},
	methods: {
		logout() {
			removeAuthenticatedState()
			this.isLoggedIn = false
			this.$router.push('/login')
		}
	}
}
</script>