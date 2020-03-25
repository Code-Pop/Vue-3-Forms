<template>
  <label v-if="label">{{ label }}</label>
  <select :value="modelValue" @change="updateValue" v-bind="$attrs">
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >{{ option }}</option>
  </select>
</template>
<script>
import SetupFormInput from '@/features/SetupFormInput'

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
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
