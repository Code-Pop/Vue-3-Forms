<template>
  <input
      type="radio"
      v-bind="{ ...$attrs, onChange: updateValue }"
      :checked="modelValue === value"
      :id="uuid"
    />
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
</template>

<script>
import UniqueID from '@/features/UniqueID'
import SetupFormComponent from '@/features/SetupFormComponent'

export default {
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
    const uuid = UniqueID().getID()
    const { updateValue } = SetupFormComponent(props, context)

    return {
      updateValue,
      uuid
    }
  }
}
</script>
