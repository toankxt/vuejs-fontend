// src/server.js
import { Server, Model } from "miragejs";
import userJSON from "./mirage/users.json";
import videoJSON from "./mirage/videos.json";
import tagJSON from './mirage/tags.json';

export function makeServer({ environment = "development" } = {}) {
    let server = new Server({
        environment,

        models: {
            user: Model,
        },

        routes() {
            this.namespace = "api"

            /** api get all user */
            this.get("/users", () => {
                return userJSON
            });

            /** api get all videos */
            this.get("/videos", () => {
                return videoJSON
            })

            /** api get all tags */
            this.get("/tags", () => {
                return tagJSON
            })
            
        },
    })

    return server
}