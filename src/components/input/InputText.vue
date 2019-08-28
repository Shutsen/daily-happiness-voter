<template>
  <div class="input-field">
    <label class="input-label" :for="`input_${label}`">
      {{ label }}
      <span v-if="required" class="text-red-500 font-bold">*</span>
    </label>
    <input
      class="input-text"
      :id="`input_${label}`"
      :type="type"
      :disabled="disabled"
      autocomplete="off"
      @input="input($event.target.value)"/>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    input (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss">
  .input-field {
    flex: 1 0;
    text-align: left;
  }

  .input-label, .input-text {
    display: block;
    width: calc(100% - 12px);
    margin-right: 12px;
  }

  .input-label {
    margin-bottom: 6px;
  }

  .input-text {
    height: 48px;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid black;
    border-style: solid;
    box-sizing: border-box;

    &:focus {
      outline-color: #41b883;
    }
  }
</style>
