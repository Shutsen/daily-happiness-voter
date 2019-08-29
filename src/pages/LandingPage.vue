<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">{{ title }}</h1>
				<h2 class="subtitle">{{ subtitle }}</h2>
				<router-link class="button is-light is-medium is-primary" to="/signup">{{ cta_signup }}</router-link>
				<router-link class="button is-light is-medium ml-10px" to="/login">{{ cta_login }}</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			title: 'Welcome to the Daily Happiness Voter!',
			subtitle: 'Employee pleasure, you can measure!',
			cta_signup: 'Sign up now',
			cta_login: 'Log in'
		}
	}
}
</script>

<style scoped>
	.button {
		margin-top: 50px;
	}
</style>