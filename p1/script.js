let app = new Vue({
  el: "#app",
  data: {
    clock: 0,
    hauntedHappenings: "something happened",
    house: [
      { name: "The Observatory" },
      { name: "The Library" },
      { name: "The Basement" },
    ],
  },
  methods: {
    getTime: function () {
      window.setInterval(this.clock++, 1000);
    },
  },
});
