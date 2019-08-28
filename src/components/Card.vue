<template>
	<div @click="select" class="card" :class="{ disabled: disabled }">
		<div class="card-image">
			<figure class="image is-square">
				<div class="img" :class="`${state.expression}-face`"></div>
			</figure>
		</div>
		<div class="card-content">
			<div v-if="!disabled" class="content">
				Give us a {{ state.expression }} face
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: [ 'state', 'disabled' ],
	methods: {
		select() {
			this.$emit('select', this.state)
		}
	}
}
</script>