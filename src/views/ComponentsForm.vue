<template>
  <div>
    <h1>Create an Event</h1>
    <form @submit.prevent="createEvent">
      <BaseSelect
        label="Select a category"
        :options="categories"
        v-model="event.category"
        error="This field is required"
      />

      <h3>Name & describe your event</h3>
      <BaseInput
        label="Title"
        v-model="event.title"
        type="text"
        error="This field is required"
      />

      <BaseInput
        label="Description"
        v-model="event.description"
        type="text"
      />

      <h3>Where is your event?</h3>
      <BaseInput
        label="Location"
        v-model="event.location"
        type="text"
      />

      <h3>Are pets allowed?</h3>
      <BaseRadioGroup
        v-model="event.pets"
        name="pets"
        :options="[
          { value: 1, label: 'Yes' },
          { value: 0, label: 'No' }
        ]"
      />

      <template v-if="event.pets === 0">
        <h3>Are you sure? 🐶</h3>
        <BaseRadioGroup
          v-model="event.petsagain"
          name="petsagain"
          :options="[
            { value: 1, label: 'Yes' },
            { value: 0, label: 'No' }
          ]"
        />
      </template>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox
          label="Catering"
          v-model="event.extras.catering"
        />
      </div>

      <div>
        <BaseCheckbox
          label="Live music"
          v-model="event.extras.music"
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
export default {
  data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      }
    }
  },
  methods: {
    createEvent () {
      console.log('submit')
    }
  }
}
</script>
