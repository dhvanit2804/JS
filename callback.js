console.log("callbackjs");
console.log("DHVANIT PARATE");

setTimeout(() => {
  console.log("I am a inside a setTimeout Function");
}, 3000);

console.log("The End");

const callback = (arg) => {
    console.log(arg);
}

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callback("DHVANIT PARATE");
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback );
