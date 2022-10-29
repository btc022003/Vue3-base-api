const Item = {
  template: `<div class="item">
      <h4>这是Item组件</h4>
      <hr/>
    </div>`,
  beforeCreate() {
    console.log('Item beforeCreate');
  },
  created() {
    console.log('Item created');
  },
  beforeMount() {
    console.log('Item beforeMount');
  },
  mounted() {
    console.log('Item mounted');
  },
  beforeUpdate() {
    console.log('Item beforeUpdate');
  },
  updated() {
    console.log('Item updated');
  },
  beforeUnmount() {
    console.log('Item beforeUnmount');
  },
  unmounted() {
    console.log('Item unmounted');
  },
};
