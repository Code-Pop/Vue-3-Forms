<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="event.category"
        class="field"
        error="This field is required"
      />

      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        v-model="event.title"
        type="text"
        class="field"
        error="This field is required"
      />

      <BaseInput
        label="Description"
        v-model="event.description"
        type="text"
        class="field"
      />

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        v-model="event.location"
        type="text"
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
      <div>
        <BaseCheckbox
          label="Catering"
          v-model="event.extras.catering"
          class="field"
        />
      </div>

      <div>
        <BaseCheckbox
          label="Live music"
          v-model="event.extras.music"
          class="field"
        />
      </div>

      <div>
        <BaseButton
          type="submit"
          class="-fill-gradient"
          something="else"
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
    const createEvent = () => { console.log('Submit') }
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
      createEvent,
      event,
      categories
    }
  }
}
</script>
