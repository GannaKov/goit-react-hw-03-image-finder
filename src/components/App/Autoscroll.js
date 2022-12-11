export function autoscroll() {
    if(document.querySelector('.gallery'))
    {console.log( document.querySelector('.gallery'))
    const { height: cardHeight } =
    document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 1,
    behavior: 'smooth', });
}
    else {console.log("no")}
   

  }
 