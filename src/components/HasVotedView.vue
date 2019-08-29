<template>
	<div>
		<h2 class="title">Thanks for submitting your vote today<span v-if="user">, {{ user.first_name }}</span></h2>
		<router-link v-if="user.is_manager" class="button is-primary is-medium mb-30px" to="/dashboard/manager">View your employee happiness</router-link>
		<p class="mb-30px">Tomorrow you can vote again!</p>
		<div class="columns">
			<div class="column"></div>
			<div class="column">
				<Card :state="ghostState" :disabled="true"/>
			</div>
			<div class="column"></div>
		</div>
	</div>
</template>

<script>
import Card from '../components/Card'

export default {
	components: { Card },
	props: [ 'user' ],
	data() {
		return {
			ghostState: { expression: 'ghost', },
		}
	}
}
</script>