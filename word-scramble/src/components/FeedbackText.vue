<template>
<div v-if='feedback' class='feedback' :class="{ pass : correct, fail: !correct }">
     <div v-if='correct'>You got it! Nice work. <button @click='loadGame'>Play again</button></div>
     <div v-else>Sorry, that’s not correct. Please try again.</div>
</div>
</template>

<script>

export default {
  props: ["feedback", "correct"],
}

</script>

 <style>
 
        .pass {
            background-color: green;
        }

        .fail {
            background-color: red;
        }

        .feedback {
            display: inline-block;
            padding: 5px;
            margin: 10px 0;
            color: white;
            font-weight: bold;
        }
   </style>     