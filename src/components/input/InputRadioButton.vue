<template>
	<div
		class="button ml-5px"
		:class="{ 'is-primary': selected }"
		@click="$emit('select')"
	>
		{{ option.name }}
	</div>
</template>

<script>

export default {
	props: [ 'option', 'selected' ]
}
</script>
