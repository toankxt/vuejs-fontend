<template>
  <div>
    <h2>Page About</h2>
    <ul id="users">
      <li v-for="user in users" v-bind:key="user.id">{{ user.name }}</li>
    </ul>
  </div>
  
</template>

<script>
  import axios from 'axios';

  export default {
    name: "app",
    data() {
      return {
        users: []
      }
    },
    created() {
      axios.get("/api/users")
        .then( response => {
          this.users = response.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
  }
</script>
