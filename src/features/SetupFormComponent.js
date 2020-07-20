export default function SetupFormComponent (props, { emit }) {
  const updateValue = (event) => {
    let val = event.target.value

    if (event.target.type === 'checkbox') val = event.target.checked
    if (event.target.type === 'radio') val = props.value

    emit('update:modelValue', val)
  }

  return { updateValue }
}
