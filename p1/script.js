Vue.component("feedback-text", {
  data() {
    return {};
  },
  props: ["round", "stop"],
  template: `
  <p >
  Round {{round - 1}}: You made it though the house in {{stop}} seconds.
</p>`,
});

let app = new Vue({
  el: "#app",
  data: {
    playing: false,
    adventure: false,
    round: 1,
    stopClock: 0,
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
      this.playing = true;
      setInterval(() => {
        this.clock++;
      }, 1000);
    },
    moveRight() {
      this.currentRoom++;
      this.visibleHouse.push(this.house[this.currentRoom]);
      this.adventure = true;
    },
    playAgain() {
      this.currentRoom = 0;
      this.visibleHouse = [{ name: "Observatory" }];
      this.clock = 0;
      this.playing = true;
    },
    endGame() {
      this.round++;
      this.playing = false;
      this.stopClock = this.clock;
    },
  },
});
