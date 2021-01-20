import App from "./App.svelte";
import "https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate";

// register serviceWorker
if ("serviceWorker" in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./pwabuilder-sw.js'));

const app = new App({
  target: document.body,
  props: {}
});

export default app;