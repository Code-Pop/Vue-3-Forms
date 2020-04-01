<template>
  <div>
    <input
      :checked="modelValue"
      v-bind="{ ...$attrs, onChange: updateValue }"
      type="checkbox"
      class="field"
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
      type: Boolean
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
