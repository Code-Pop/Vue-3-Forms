<template>
  <div>
    <input
        type="radio"
        v-bind="{ ...$attrs, onChange: updateValue }"
        :checked="modelValue === value"
      />
    <label v-if="label">{{ label }}</label>
  </div>
</template>

<script>
import SetupFormInput from '@/features/SetupFormInput'

export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    },
    value: {
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
