import { createApp, defineAsyncComponent } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const CreateAd = defineAsyncComponent(() =>
  import("./components/CreateAd.vue")
);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("create-ad", CreateAd);

app.mount("#app");
