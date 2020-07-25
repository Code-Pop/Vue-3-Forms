<template>
  <div>
    <button :id="id" v-bind="$attrs" class="button">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ['id']
}
</script>
