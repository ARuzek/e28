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

let wordscramble = new Vue({
  el: "#wordscramble",
  data: {
    name: "",
    showGame: false,
    showFeedback: false,
    hasError: false,
    guess: "",
    answer: "hello",
    mysterywordhint: "",
  },
  methods: {},
  computed: {
    getfeedback() {
      if (this.guess == this.answer) {
        return "Correct Answer";
      } else {
        this.hasError = true;
        return "That's wrong!";
      }
    },
    mysteryword() {
      const reversed = this.answer.split("").reverse().join("");
      const splitHere = Math.floor(Math.random() * reversed.length);
      return reversed
        .split(reversed[splitHere])
        .reverse()
        .join(reversed[splitHere]);
    },
  },
});
