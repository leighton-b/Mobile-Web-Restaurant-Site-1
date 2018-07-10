if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker
      .register('/sw.js')
      .then(function(reg) {
      // Registration was successful
        console.log('ServiceWorker registration successful! ', reg);
      }) 
      .catch(function(err) {
      // registration failed :(
        console.log('ServiceWorker was not able to register: ', err);
      });
  });
} else {
  console.log('Service workers not supported.')
}