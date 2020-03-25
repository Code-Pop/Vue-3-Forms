<template>
  <form @submit.prevent="submitForm">
    <h1>Create an event</h1>

    <label>
      Select a category
      <select name="category" v-model="event.category">
        <option v-for="category in categories" :value="category" :key="category">{{ category }}</option>
      </select>
    </label>

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
