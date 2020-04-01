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
