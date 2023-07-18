const slides = document.querySelectorAll('.slide')

// slides.forEach(function(item) {
//   item.addEventListener('click', function(){
//     this.classList.add('active')
//   })
// })

for (const slide of slides) {
  slide.addEventListener('click', () => {
    clearActiveClasses()
    slide.classList.add('active')
  })
}

function clearActiveClasses() {
  slides.forEach(function(item){
    item.classList.remove('active')
  })
}