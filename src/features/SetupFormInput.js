export default (props, { emit }) => {
  const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
  }

  return { updateValue }
}
