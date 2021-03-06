Vue.component("feedback-text", {
  data() {
    return {};
  },
  props: ["round", "stop", "rooms"],
  template: `
  <p >
  Round {{round}}: You made it though the {{rooms}} rooms in the house in {{stop}} seconds.
</p>`,
});

let app = new Vue({
  el: "#app",
  data: {
    playing: false,
    adventure: true,
    wonGame: false,
    round: 1,
    stopClock: 0,
    clock: 0,
    currentRoom: 0,
    house: [
      {
        name: "Attic",
        mystery: "You feel a rodent brush against your leg.",
        doThis: "Stay calm",
        doThat: "Scream!",
      },
      {
        name: "Lounge",
        mystery: "A huge spider web fills the room.",
        doThis: "Start dusting",
        doThat: "Look around for spiders",
      },
      {
        name: "Parlor",
        mystery: "The grandfather clock strikes midnight.",
        doThis: "Listen for the undead",
        doThat: "Check your watch for accuracy",
      },
      {
        name: "Powder",
        mystery: "You see a large mirror with words written in blood.",
        doThis: "Ew. Gross...",
        doThat: "Try to decipher the message",
      },
      {
        name: "Observatory",
        mystery: "You hear the flutter of bat wings.",
        doThis: "Search and destroy all vampires",
        doThat: "Freeze in fear",
      },
      {
        name: "Library",
        mystery: "You see a ghost clearly visible in front of you. ",
        doThis: "Attempt to make conversation",
        doThat: "Run away",
      },
      {
        name: "Greenhouse",
        mystery:
          "The plants seem to be moving up the walls toward the moonlight.",
        doThis: "Collect a specimen",
        doThat: "Search for edible produce",
      },
      {
        name: "Basement",
        mystery: "There's a strange liquid dripping on the stone floor.",
        doThis: "It's just leaky plumbing",
        doThat: "Take a closer look",
      },
    ],
    visibleHouse: [{ name: "Attic" }],
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
      if (this.currentRoom < 7) {
        this.currentRoom++;
        this.visibleHouse.push(this.house[this.currentRoom]);
        this.adventure = true;
      } else {
        this.wonGame = true;
      }
    },
    flipACoin() {
      let coin = Math.random();
      if (coin <= 0.5) {
        this.moveRight();
      } else {
        this.endGame();
      }
    },
    playAgain() {
      this.currentRoom = 0;
      this.visibleHouse = [{ name: "Attic" }];
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
