// in early days attachEven() was used in internet explorer
// jQuery - on() event were used in jQuery
// event objesct:- type, timeStamp, defaultPrevented, targt, toElement, srcElement, currentTarget, clintX, ClintY,screenX, ScreenY, altKey, ctrlKey, shiftKey,keyCode

// document.getElementById("river").onclick = () => {
//   alert("river image clicked");
// }; normal way of doing.

// propogation(true and false): In addEventListener event false states bubbling event, and true states capturing event

document.getElementById("images").addEventListener(
  "click",
  () => {
    console.log("clicked inside the ul");
  },
  false
);

document.getElementById("owl").addEventListener(
  "click",
  function (e) {
    console.log("Owl image clicked");
    e.stopPropagation();
  },
  false
);

document.getElementById("google").addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();
  console.log("Google clicked");
});
