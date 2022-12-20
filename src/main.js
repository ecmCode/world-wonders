import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faArrowLeft, faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons'


import "./index.css";

/* add icons to the library */
library.add(faArrowLeft, faArrowRight, faBars)

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
