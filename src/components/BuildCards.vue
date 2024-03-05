<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    text: {
      type: String,
      default: 'text',
      required: true
    },
    img: {
      type: String,
      default: 'text',
      required: true
    },
    alt: {
      type: String,
      default: 'text'
    }
  },
  setup(props) {
    // Use ref to create a reactive variable to hold the image source

    const imageSrc = ref('')

    // Load the image dynamically when the component is mounted
    import('../assets/' + props.img).then((src) => {
      imageSrc.value = src.default // Set the src of the img element
    })

    // Return the reactive variable to be used in the template
    return {
      imageSrc
    }
  }
})
</script>

<template>
  <sections class="Cards">
    <h3>{{ text }}</h3>
    <img :src="imageSrc" :alt="alt" />
  </sections>
</template>

<style>
.Cards {
  padding: 5px;
  border: 1px solid transparent;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 80px;
  background-color: #201a29;
  box-shadow: 1px 12px 16px -6px rgba(0, 0, 0, 0.86);
  -webkit-box-shadow: 1px 12px 16px -6px rgba(0, 0, 0, 0.86);
  -moz-box-shadow: 1px 12px 16px -6px rgba(0, 0, 0, 0.86);
}
h3 {
  display: flex;
  align-items: center;
}
</style>
