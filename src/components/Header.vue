<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a class="navbar-item" href="https://bulma.io">
			<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
		</a>

		<a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div id="navbarBasicExample" class="navbar-menu">
		<div class="navbar-start">
			<router-link class="navbar-item" to="/">Home</router-link>
			<a class="navbar-item" :href="links.github" target="_blank">Github repo</a>
		</div>

		<div class="navbar-end">
		<div class="navbar-item">
			<div class="buttons">
				<router-link class="button is-primary" to="/signup"><strong>Sign up</strong></router-link>
				<router-link class="button is-light" to="/login">Login</router-link>
			</div>
		</div>
		</div>
	</div>
</nav>
</template>

<script>
export default {
	data() {
		return {
			links: {
				github: 'https://github.com/Shutsen/daily-happiness-voter',
			}
		}
	}
}
</script>