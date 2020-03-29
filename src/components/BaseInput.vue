<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="modelValue"
      v-bind="{
        ...$attrs,
        onInput: updateValue
      }"
    >
  </div>
</template>

<script>
import SetupFormInput from '@/features/SetupFormInput'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    }
  },
  setup (props, context) {
    const { updateValue } = SetupFormInput(props, context)

    return {
      updateValue
    }
  }
}
</script>
