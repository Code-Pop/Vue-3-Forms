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
import SetupFormComponent from '@/features/SetupFormComponent'

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
    const { updateValue } = SetupFormComponent(props, context)

    return {
      updateValue
    }
  }
}
</script>
