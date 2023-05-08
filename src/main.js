import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton";
import BaseDialog from "./components/UI/BaseDialog";
import InitialBackground from "./components/UI/InitialBackground";
const app = createApp(App);
app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.component("BaseDialog", BaseDialog);
app.component("InitialBackground", InitialBackground);

app.mount("#app");
