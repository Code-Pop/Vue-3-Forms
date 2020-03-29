<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="event.category"
      />

      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        v-model="event.title"
        type="text"
        placeholder="Title"
        class="field"
      />

      <BaseInput
        label="Description"
        v-model="event.description"
        type="text"
        placeholder="Description"
        class="field"
      />

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        v-model="event.location"
        type="text"
        placeholder="Location"
        class="field"
      />

      <BaseButton type="submit" class="-fill-gradient">Submit</BaseButton>
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
