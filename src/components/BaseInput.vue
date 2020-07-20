<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <input
    v-bind="{
      ...$attrs,
      id: uuid,
      value: modelValue,
      placeholder: label,
      onInput: updateValue
    }"
  >
</template>

<script>
import SetupFormComponent from '@/features/SetupFormComponent'
import UniqueID from '@/features/UniqueID'

export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  setup (props, context) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid = UniqueID().getID()

    return {
      updateValue,
      uuid
    }
  }
}
</script>
