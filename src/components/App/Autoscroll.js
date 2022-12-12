export function autoscroll() {
    if(document.querySelector('.Gallery'))
    {console.log( document.querySelector('.Gallery'))
    const { height: cardHeight } =
    document.querySelector('.Gallery').firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 1,
    behavior: 'smooth', });
}
    else {console.log("no")}
   

  }
 