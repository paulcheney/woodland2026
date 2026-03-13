// INTERSECTION OBSERVER 

// get me a list of all the sections
const myListToObserve = document.querySelectorAll(".fadein");
console.log(myListToObserve)

// a comma deliniated list of name/value pairs controlling how the observer works
let observerOptions = {
  //null is the default and references the viewport
  root: null,
  //alters the viewport. negative values decrease the size.
  rootMargin: '0px 0px -20% 0px',
  //0 is barely showing, 1 is fully showing
  threshold: 0
}

//AllItems is a list of all elements being watched
const myObserver = new IntersectionObserver(allItems => {
  console.log(allItems)
  allItems.forEach(singleItem => {
    //console.log(singleItem.target)
    if (singleItem.isIntersecting) {
      myObserver.unobserve(singleItem.target)
      //console.log('still observing')
      if (singleItem.target.className.indexOf("fadein") >= 0) {
        singleItem.target.classList.remove("fadein")
        //console.log('removed FADIN class')
      } // end if
    } // end isintersecting
  })
}, observerOptions)

//call the function for each image in the page
myListToObserve.forEach(itemToBeObserved => myObserver.observe(itemToBeObserved));
