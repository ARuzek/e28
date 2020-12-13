<template>
  <div>
    <p v-if="showConfirmationMessage">
        Congrats! Your post is now published! Visit the home screen to see your published post. 
    </p>
    <div v-else>
    <div>
      <h2>Add More Stories About Your Cats</h2>

      <div id="inputs">
        <label for="title"
          >Add Your Blog Post Title Here:
          <input type="text" required v-model="post.title" id="title" @blur="validate()"
        /></label>
        <cite>Required. Must be 3 - 100 characters. </cite>
        <ul v-if="errors">
          <li
            class="error"
            v-for="(error, index) in errors.title"
            :key="index"
          >
            {{ error}}
          </li>
        </ul>
        <label>Use Your Mouse to Draw A Comic of Your Cat:</label>
        <canvas
          width="200px"
          height="150px"
          id="canvas"
          style="border:1px solid"
          @mousedown="startDrawingComic($event)"
          @mousemove="drawHere($event)"
          @mouseup="stopDrawingComic"
        ></canvas>

        <label for="content">Write Your Blog Post Here:</label>
        <textarea
          v-model="post.content"
          id="content"
          rows="10"
          cols="116"
          @blur="validate()"
          required
        ></textarea>
        <cite>Required. Must be at least 10 characters. </cite>
        <ul v-if="errors">
          <li
            class="error"
            v-for="(error, index) in errors.content"
            :key="index"
          >
            {{ error}}
          </li>
        </ul>

      </div>
      <button @click="addPost">Create New Blog Post</button>
      
    </div>
   
    
  </div>
</template>

<script>
import { axios } from "@/common/app.js";
import Validator from "validatorjs";

export default {
  data() {
    return {
      
      errors: null,
      showConfirmationMessage: false,
      post: {
        title: "",
        image: "",
        content: "",
        drawing: "",
      },
      paint: false,
      clickX: [],
      clickY: [],
      clickDrag: [],
    };
  },
  computed: {
    // Get our user state from the Vuex store
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      axios.post("login", this.data).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
        } else {
          this.loginErrors = response.data.errors;
        }
      });
    },
    register() {
      axios.post("register", this.registration).then((response) => {
        if (response.data.errors) {
          this.registryErrors = response.data.errors;
        } else {
          this.$store.dispatch("authUser");
          this.successfulRegistry = true;
        }
      });
    },
    logout() {
      axios.post("logout").then((response) => {
        if (response.data.success) {
          this.$store.commit("setUser", null);
        }
      });
    },
    addPost() {
      //citation: https://stackoverflow.com/questions/44806870/saving-canvas-to-json-and-loading-json-to-canvas
      let canvasData = document.getElementById("canvas").toDataURL();
      this.post.drawing = JSON.stringify(canvasData);
        axios.post("/post", this.post).then((response) => {
          if (response.data.errors) {
            this.errors = response.data.errors;
          } else {
            this.$emit("update-posts");
            this.showConfirmationMessage = true;
            this.post.title = "";
            this.post.content = "";
            this.post.image = "";
            this.post.drawing = "";
          }
        });
      
    },
    validate() {
      let validator = new Validator(this.post, {
        title: "required|between:3,100",
        content: "required|min:10",
      });
      this.errors = validator.errors.all();

      return validator.passes();
    },
    //STOP - Don't grade after this point.
    //Citation: The following is based on code that is not my own, but I thoguht it was a cool feature.
    startDrawingComic(event) {
      console.log("Start drawing");
      this.paint = true;
      this.addClick(
        event.pageX - event.target.offsetLeft,
        event.pageY - event.target.offsetTop
      );
      this.redraw(event.target);
    },
    drawHere(event) {
      console.log("Draw Here");
      if (this.paint) {
        this.addClick(
          event.pageX - event.target.offsetLeft,
          event.pageY - event.target.offsetTop,
          true
        );
        this.redraw(event.target);
      }
    },
    stopDrawingComic() {
      console.log("Stop drawing");
      this.paint = false;
    },
    redraw(context) {
      context = context.getContext("2d");
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.strokeStyle = "#000000";
      context.lineJoin = "round";
      context.lineWidth = 5;
      for (var i = 0; i < this.clickX.length; i++) {
        context.beginPath();
        if (this.clickDrag[i] && i) {
          context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
        } else {
          context.moveTo(this.clickX[i] - 1, this.clickY[i]);
        }
        context.lineTo(this.clickX[i], this.clickY[i]);
        context.closePath();
        context.stroke();
      }
    },
    addClick(x, y, dragging) {
      this.clickX.push(x);
      this.clickY.push(y);
      this.clickDrag.push(dragging);
    },
  },
};
</script>

<style scoped>
.error {
    color: red; 
}
.account {
  display: flex;
  flex-direction: row;
}
h2,
p,
label,
button {
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
h2 {
  font-family: "Pacifico", cursive;
}
canvas {
  width: 200px;
  height: 150px;
  margin: 0 auto;
 
}
div {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
input,
button,
textarea {
  border-radius: 1rem;
  border: 1px solid #ffd9d9;
}
textarea {
  padding: 1rem; 
}
label {
  margin: 1rem;
  text-align: left;
}
button {
  padding: 1rem;
  background-color: #ffd9d9;
  font-size: 1.2rem;
  margin: 1rem;
}
button:hover {
  background-color: lightpink;
}
cite {
  margin-left: 16px;
}
</style>
