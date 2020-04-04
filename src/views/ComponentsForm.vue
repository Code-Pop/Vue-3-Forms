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

      <h3>Are pets allowed?</h3>
      <BaseRadio
        label="Yes"
        v-model="event.pets"
        :value="1"
        name="pets"
      />

      <BaseRadio
        label="No"
        v-model="event.pets"
        :value="0"
        name="pets"
      />

      <h3>Extras</h3>
      <BaseCheckbox
        label="Catering"
        v-model="event.extras.catering"
        class="field"
      />

      <BaseCheckbox
        label="Live music"
        v-model="event.extras.music"
        class="field"
      />

      <div>
        <BaseButton
          type="submit"
          class="-fill-gradient"
        >
          Submit
        </BaseButton>
      </div>
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
      location: '',
      pets: 1,
      extras: {
        catering: false,
        music: false
      }
    })

    return {
      submitForm,
      event,
      categories
    }
  }
}
</script>
