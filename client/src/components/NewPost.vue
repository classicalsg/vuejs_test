<template>
    <div class="new-post">
        <v-app id="inspire">
            <form v-on:submit.prevent="addPost">
                <v-text-field type="text" name="title" id="" placeholder="Title" v-model="post.title"></v-text-field><br>
                <!-- <v-date-picker name='abc'></v-date-picker> -->
                <v-text-field name="description" id="" cols="30" rows="10" placeholder="Description" v-model='post.description'></v-text-field><br>
                <v-btn flat large color="primary" type="submit">Add Post</v-btn>
            </form>
        </v-app>
        
    </div>
</template>

<script>
    export default {
        name : 'NewPost',
        data() {
            return {
                post: {}
            }
        }, 
        methods: {
            addPost() {
                let uri = 'http://localhost:8081/add_post';
                this.axios.post(uri, this.post).then((response) => {
                    console.log(response);
                });
            }
        }
    }
</script>

<style scoped>
    form {
        width: 50%;
        display: block;
        margin-left: 25%;
    }
</style>
