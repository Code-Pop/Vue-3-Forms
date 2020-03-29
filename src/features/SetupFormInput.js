export default (props, { emit }) => {
  const updateValue = (event) => {
    const val = (typeof props.modelValue === 'boolean')
      ? event.target.checked
      : event.target.value

    emit('update:modelValue', val)
  }

  return { updateValue }
}
