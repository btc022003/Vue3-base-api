const User = {
  template: `<div class="User">
      <h1>这是User组件</h1>
    </div>`,
  name: 'User',
  beforeCreate() {
    console.log('User beforeCreate');
  },
  created() {
    console.log('User created');
  },
  beforeMount() {
    console.log('User beforeMount');
  },
  mounted() {
    console.log('User mounted');
  },
  beforeUpdate() {
    console.log('User beforeUpdate');
  },
  updated() {
    console.log('User updated');
  },
  beforeUnmount() {
    console.log('User beforeUnmount');
  },
  unmounted() {
    console.log('User unmounted');
  },
};
