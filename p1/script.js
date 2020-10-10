let app = new Vue({
  el: "#app",
  data: {
    stopclock: 0,
    clock: 0,
    currentRoom: 0,
    hauntedHappenings: "something happened",
    house: [
      { name: "Observatory" },
      { name: "Library" },
      { name: "Basement" },
      { name: "Greenhouse" },
      { name: "Attic" },
      { name: "Parlor" },
      { name: "Lounge" },
      { name: "Powder" },
    ],
    visibleHouse: [{ name: "Observatory" }],
  },
  methods: {
    timer() {
      setInterval(() => {
        this.clock++;
      }, 1000);
    },
    moveRight() {
      this.currentRoom++;
      this.visibleHouse.push(this.house[this.currentRoom]);
    },
    playAgain() {
      this.currentRoom = 0;
      this.visibleHouse = [{ name: "Observatory" }];
      this.clock = 0;
    },
  },
});
