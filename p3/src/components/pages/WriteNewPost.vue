<template>
    <div>
        <h2>Add More Stories About Your Cats</h2>

        <div id="inputs">
            <label for="title">Add Your Blog Post Title Here:
            <input type="text" v-model="post.title" id="title" /></label>
            <cite>Required. Must be 3 - 100 characters. </cite>
<!--Add a real drag and drop with POST back to the server if you have time-->
            <label for="image">Add An Image Name:
            <input type="text" v-model="post.image" id="image"/></label>
 
            <canvas width="200px" height="400px" id="canvas" style="border:1px solid"  @mousedown="startDrawingComic($event)"  @mousemove="drawHere($event)"  @mouseup="stopDrawingComic"></canvas>

            <label for="content">Write Your Blog Post Here:</label>
            <textarea v-model="post.content" id="content" rows="50" cols="116"></textarea>
        </div>
        <button @click="addPost">Create New Blog Post</button>
        <p v-if="!showConfirmationMessage">
        {{ errors }}
        </p>
        <p v-if="showConfirmationMessage">Congrats! Your post is now published!</p>
    </div>
</template>

<script>
import { axios } from '@/app.js';
export default {
    data() {
        return {
            errors: null,
            showConfirmationMessage: false,
            post: {
                title: '',
                image: '',
                content: '', 
            },
            paint: false,
            clickX: [],
            clickY: [],
            clickDrag:[],
        };
    },
    methods: {
        startDrawingComic(event){
            console.log("Start drawing");                
            this.paint = true;
            this.addClick(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop);
            this.redraw(event.target);
        },
        drawHere(event){
            console.log("Draw Here");
            if(this.paint){
            this.addClick(event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop, true);
            this.redraw(event.target);
        }
        },
        stopDrawingComic(){
            console.log("Stop drawing");
            this.paint = false;
        },
        redraw(context){
            context = context.getContext("2d");
            context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
            context.strokeStyle = "#df4b26";
            context.lineJoin = "round";
            context.lineWidth = 5;
                        
            for(var i=0; i < this.clickX.length; i++) {		
                context.beginPath();
                if(this.clickDrag[i] && i){
                context.moveTo(this.clickX[i-1], this.clickY[i-1]);
                }else{
                context.moveTo(this.clickX[i]-1, this.clickY[i]);
                }
                context.lineTo(this.clickX[i], this.clickY[i]);
                context.closePath();
                context.stroke();
            }
        },
        addClick(x, y, dragging){
            this.clickX.push(x);
            this.clickY.push(y);
            this.clickDrag.push(dragging);
        },
        addPost() {
            axios.post('/post', this.post).then((response) => {
                if (response.data.errors) {
                    this.errors = response.data.errors;
                } else {
                    this.$emit('update-posts');
                    this.showConfirmationMessage = true;
                    this.post.title = '';
                    this.post.content = '';
                    this.post.image = '';

                }
            });
            
        },
    },
    
};
</script>

<style scoped>
   h2, p, label, button{
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    h2 {
            font-family: 'Pacifico', cursive;

    }
    canvas {
        width: 200px; 
        height: 400px; 
    }
    div {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    }
    input, button, textarea {
    border-radius: 1rem;
    border: 1px solid pink;
    }
    label {
        margin: 1rem;
        text-align: left;
    }
    button {
        padding: 1rem; 
        background-color: pink;
        font-size: 1.2rem;
        margin: 1rem;
    }
    button:hover {
        background-color: lightpink;
    }
    cite {
        margin-top: -10px; 
        margin-left: 16px; 
    }
    
</style>
