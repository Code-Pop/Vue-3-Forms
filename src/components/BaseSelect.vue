<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: updateValue
      }"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >{{ option }}</option>
    </select>
  </div>
</template>

<script>
import SetupFormComponent from '@/features/SetupFormComponent'

export default {
  inheritAttrs: false,
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
    const { updateValue } = SetupFormComponent(props, context)

    return {
      updateValue
    }
  }
}
</script>
