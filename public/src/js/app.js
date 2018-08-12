// ブラウザでサービスウォーカーサポートしてるか？
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function() {
    console.log("serviceWorker registered!");
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt, fired");
  event.preventDefault();
});
