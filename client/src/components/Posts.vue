/* eslint-disable */ 
<template>
    <div class="container">
        <h1>Posts</h1>
        <v-date-picker v-model="picker"></v-date-picker>
    </div>    
</template>

<script>
    export default {
        name : 'Posts',
        data() {
            return {
                items: [],
                picker: null,
            }
        },
        created() {
            this.fetchPosts()
        },
        methods : {
            fetchPosts() {
                let uri = "http://localhost:8081/posts";
                this.axios.get(uri).then((response) => {
                    // this.items = response.request.response.posts;
                    this.items = JSON.parse(response.request.response).posts;
                });
            }
        }
    }
</script>