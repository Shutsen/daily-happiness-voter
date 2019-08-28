<template>
	<section class="hero is-fullheight is-dark is-bold">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">{{ title }}</h1>
				<h2 class="subtitle">{{ subtitle }}</h2>
				<router-link class="button is-light is-medium" to="/signup">{{ cta }}</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			title: 'Daily Happiness Voter',
			subtitle: 'Pleasure, you can measure!',
			cta: 'Sign up now'
		}
	}
}
</script>

<style scoped>
	.button {
		margin-top: 50px;
	}
</style>