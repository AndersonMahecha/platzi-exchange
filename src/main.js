import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import Chartick from "vue-chartkick";
import Char from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import dollarFilter from "@/filters";

Vue.use(VueSpinners);
Vue.use(Chartick.use(Char));
Vue.filter("dollar", dollarFilter);
Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
  filter: { dollar: dollarFilter },
}).$mount("#app");
