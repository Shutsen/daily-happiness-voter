<template>
	<div>
		<InputRadioButton
			v-for="option in options"
			:key="`option_${option.id}`"
			:option="option"
			:selected="option.id == value.id"
			@select="update(option)"
		/>
	</div>
</template>

<script>
import InputRadioButton from './InputRadioButton'

export default {
	components: { InputRadioButton, },
	props: {
		options: {
			type: Array,
			required: true
		},
		value: {
			type: Object,
			required: true
		}
	},
	methods: {
		update (option) {
			this.$emit('input', option)
		}
	}
}
</script>
