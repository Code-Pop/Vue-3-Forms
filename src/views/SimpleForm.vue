<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="submitForm">

      <label>Select a category</label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >{{ option }}</option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input
        v-model="event.title"
        type="text"
        placeholder="Title"
        class="field"
      >

      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
        class="field"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
      />

      <button type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
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
      category: '',
      title: '',
      description: '',
      location: ''
    })

    return {
      submitForm,
      event,
      categories
    }
  }
}
</script>
