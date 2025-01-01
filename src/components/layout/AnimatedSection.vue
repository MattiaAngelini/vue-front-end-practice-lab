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
  <section :class="{ visible: isVisible }" ref="section">
    <slot></slot>
  </section>
</template>

<style scoped>
section {
  opacity: 0;
  transform: translate(0px, 200px);
  transition: opacity 1s ease-out, transform 0.5s ease-out;
}

section.visible {
  opacity: 1;
  transform: translate(0px, 0px);
}
</style>
