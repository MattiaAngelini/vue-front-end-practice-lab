<script>
export default {
  name: 'AnimatedSection',
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
        }
      });
    });

    observer.observe(this.$refs.section);
  },
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
  transition: opacity 0.8s ease-out, transform 1s ease-out;
}

section.visible {
  opacity: 1;
}
</style>
