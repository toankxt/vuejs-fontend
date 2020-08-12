import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videos: [],
    tags: []
  },
  mutations: {
    SET_VIDEOS( state, videos) {
      state.videos = videos;
    },

    SET_TAGS( state, tags ) {
      state.tags = tags;
    }
  },
  actions: {
    async loadVideos( {commit} ) {
      let response = await axios.get("/api/videos");
      let videos = response.data;
      // let tags = response.data.included.filter(i => i.type === "tag")
      // debugger
      commit('SET_VIDEOS', videos);
      // commit('SET_TAGS', tags);
    }
  },
  modules: {
    
  }
})
