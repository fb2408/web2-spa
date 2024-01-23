import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const CreateMovie = defineAsyncComponent(() =>
  import("./components/CreateMovie.vue")
);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("create-movie", CreateMovie);

app.mount("#app");