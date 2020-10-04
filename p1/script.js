let app = new Vue({
  el: "#app",
  data: {
    startclock: 0,
    clock: 0,
    currentRoom: 0,
    hauntedHappenings: "something happened",
    house: [
      { name: "The Observatory" },
      { name: "The Library" },
      { name: "The Basement" },
      { name: "The Greenhouse" },
      { name: "The Attic" },
      { name: "The Parlor" },
      { name: "The Dining Room" },
      { name: "The Kitchen" },
      { name: "The Lounge" },
      { name: "The Powder Room" },
      { name: "The Study" },
      { name: "The Great Hall" },
    ],
    visibleHouse: [{ name: "The Observatory" }],
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
    moveLeft() {
      this.currentRoom--;
      this.visibleHouse.push(this.house[this.currentRoom]);
    },
    moveUp() {
      this.currentRoom = this.currentRoom - 4;
      this.visibleHouse.push(this.house[this.currentRoom]);
    },
    moveDown() {
      this.currentRoom = this.currentRoom + 4;
      this.visibleHouse.push(this.house[this.currentRoom]);
    },
  },
});
