import {
  connectExtensionHost,
  LookerExtensionSDK40,
} from "@looker/extension-sdk";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

const bootstrap = async () => {
  const extensionSdk = await connectExtensionHost();
  const sdk = LookerExtensionSDK40.createClient(extensionSdk);
  const root = document.createElement("div");
  root.id = "app";
  root.style.height = "100%";
  document.body.appendChild(root);

  const app = createApp(App, { extensionSdk, sdk });
  app.use(createPinia());
  app.use(router);
  app.mount("#app");
};

bootstrap();
