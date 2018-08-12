// ブラウザでサービスウォーカーサポートしてるか？
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js", { scope: "/" }).then(function() {
    console.log("serviceWorker registered!").catch(function(err) {
      console.log(err);
    });
  });
}

window.addEventListener("beforeinstallprompt", function(event) {
  console.log("beforeinstallprompt, fired");
  event.preventDefault();
});

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    //resolve("This is excuesd once the timer is done!");
    reject({ code: 500, message: "An error occured!" });
    //console.log("This is excuesed once tiemr is done!");
  }, 3000);
});

fetch("http://httpbin.org/ip")
  .then(function(response) {
    console.log(response);
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log(err);
  });

// promise
//   .then(function(text) {
//     return text;
//   })
//   .then(function(newText) {
//     console.log(newText);
//   });

promise
  .then(function(text) {
    return text;
  })
  .then(function(newText) {
    console.log(newText);
  })
  .catch(function(err) {
    console.log((err.code, err.message));
  });

console.log("This is excuesed right after setTimeout()");
