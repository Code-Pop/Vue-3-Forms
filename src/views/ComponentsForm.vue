<template>
  <form @submit.prevent="submitForm">
    <h1>Create an event</h1>

    <BaseSelect
      label="Select a category"
      :options="categories"
      v-model="event.category"
    />

    {{ event }}
  </form>
</template>

<script>
import { reactive } from 'vue'

const categories = [
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community'
]

export default {
  setup () {
    const submitForm = () => { console.log('Submit') }
    const event = reactive({
      category: ''
    })

    return {
      submitForm,
      event,
      categories
    }
  }
}
</script>
