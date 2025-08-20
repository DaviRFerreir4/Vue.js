import { createApp } from "vue"
import App from "./App.vue"
import Contact from "./components/Contact.vue"
import ButtonCounter from "./components/ButtonCounter.vue"

const app = createApp(App)

app.component("contact", Contact)
app.component("buttonCounter", ButtonCounter)

app.mount("#app")