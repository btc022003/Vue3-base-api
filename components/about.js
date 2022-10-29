const About = {
  template: `<div class="About">
      <h1>这是About组件</h1>
    </div>`,
  name: 'About',
  beforeCreate() {
    console.log('About beforeCreate');
  },
  created() {
    console.log('About created');
  },
  beforeMount() {
    console.log('About beforeMount');
  },
  mounted() {
    console.log('About mounted');
  },
  beforeUpdate() {
    console.log('About beforeUpdate');
  },
  updated() {
    console.log('About updated');
  },
  beforeUnmount() {
    console.log('About beforeUnmount');
  },
  unmounted() {
    console.log('About unmounted');
  },
};
