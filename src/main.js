import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import BaseCard from "./components/ui/BaseCard.vue";
import BaseButton from "./components/ui/BaseButton.vue";
import BaseDialog from "./components/ui/BaseDialog.vue";
import BaseSpinner from "./components/ui/BaseSpinner.vue";
import InitialBackground from "./components/ui/InitialBackground.vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseDialog", BaseDialog);
app.component("BaseSpinner", BaseSpinner);
app.component("InitialBackground", InitialBackground);

app.mount("#app");
