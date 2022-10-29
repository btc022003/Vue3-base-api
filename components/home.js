const Home = {
  template: `<div class="Home">
      <h1>这是Home组件</h1>
    </div>`,
  name: 'Home',
  beforeCreate() {
    console.log('Home beforeCreate');
  },
  created() {
    console.log('Home created');
  },
  beforeMount() {
    console.log('Home beforeMount');
  },
  mounted() {
    console.log('Home mounted');
  },
  beforeUpdate() {
    console.log('Home beforeUpdate');
  },
  updated() {
    console.log('Home updated');
  },
  beforeUnmount() {
    console.log('Home beforeUnmount');
  },
  unmounted() {
    console.log('Home unmounted');
  },
  activated() {
    console.log('Home activated');
  },
  deactivated() {
    console.log('Home deactivated');
  },
};
