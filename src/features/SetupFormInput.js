export default (props, { emit }) => {
  const updateValue = (event) => {
    const val = ['checkbox', 'radio'].includes(event.target.type)
      ? event.target.checked
      : event.target.value

    emit('update:modelValue', val)
  }

  return { updateValue }
}
