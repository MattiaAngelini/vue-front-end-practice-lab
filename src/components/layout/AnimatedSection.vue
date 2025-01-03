<script>
export default {
  name: 'AnimatedSection',
  data() {
    return {
      isVisible: false,
    };
  },

  methods:{
    animationComponents(){
      const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    });
    observer.observe(this.$refs.section);
    }
  },
  mounted() {
    this.animationComponents()
  }
};
</script>

<template>
  <div :class="{ visible: isVisible }" ref="section">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  opacity: 0;
  transform: translate(0px, 200px);
  transition: opacity 1s ease-out, transform 0.5s ease-out;
}

div.visible {
  opacity: 1;
  transform: translate(0px, 0px);
}
</style>
