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