let app = new Vue({
  el: "#app",
  data: {
    thing: " ",
    amount: " ",
    shoppinglist: [],
    showlist: false,
  },
  methods: {
    addtolist() {
      this.showlist = true;
      this.shoppinglist.push(this.item);
    },
  },
  computed: {
    item() {
      return "(" + this.amount + ") " + this.thing;
    },
  },
});
