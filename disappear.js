document.querySelector("#images").addEventListener("click", (e) => {
  console.log(e.target.parentNode);
  if (e.target.tagName === "IMG") {
    console.log(e.target.id);
    let removeIt = e.target.parentNode;
    removeIt.remove();
  }

  //   removeIt.parentNode.removeChild(removeIt);
});