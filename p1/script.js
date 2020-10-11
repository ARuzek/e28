Vue.component("feedback-text", {
  data() {
    return {};
  },
  props: ["round", "stop", "rooms"],
  template: `
  <p >
  Round {{round - 1}}: You made it though the {{rooms}} rooms in the house in {{stop}} seconds.
</p>`,
});

let app = new Vue({
  el: "#app",
  data: {
    playing: false,
    adventure: true,
    round: 1,
    stopClock: 0,
    clock: 0,
    currentRoom: 0,
    house: [
      {
        name: "Observatory",
        mystery: "You hear the flutter of bat wings.",
        doThis: "search and destroy all vampires",
        doThat: "freeze in fear",
      },
      { name: "Library", mystery: "", doThis: "", doThat: "" },
      { name: "Basement", mystery: "", doThis: "", doThat: "" },
      { name: "Greenhouse", mystery: "", doThis: "", doThat: "" },
      { name: "Attic", mystery: "", doThis: "", doThat: "" },
      { name: "Parlor", mystery: "", doThis: "", doThat: "" },
      { name: "Lounge", mystery: "", doThis: "", doThat: "" },
      { name: "Powder", mystery: "", doThis: "", doThat: "" },
    ],
    visibleHouse: [{ name: "Observatory" }],
    gameSave: [],
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
      this.playing = false;
      this.stopClock = this.clock;
      this.gameSave.push({
        game: this.round,
        time: this.stopClock,
        rooms: this.visibleHouse.length,
      });
      this.round++;
    },
  },
});
