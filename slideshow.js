// whenever we load a page, always display the first slide
var currentSlide = 0
// 1. A function that takes use to the next slide

// Here we set how many slides we have
var totalSlides = $('.holder div').length

var moveSlide = function (slide) {
  // we are going to turn our currentSlide into a negative vw unit
  var leftPosition = -slide * 100 + 'vw'

  // pass the vw unit into our CSS method below
  // here we grab the holder and change to the second slide
  $('.holder').css('left', leftPosition)

  var slideNumber = slide + 1

  $('.steps').text(slideNumber + ' / ' + totalSlides)
}

// Here we assign a function to our next slide variable
var nextSlide = function () {
  // increment our current slide by reassigning it and incrementing it by 1
  currentSlide = currentSlide + 1

  // here we test to check whether current slide number is greater than
  // or equal to the numberOfSlides. If it is,  we are going to set the currentSlide
  // back to zero (its initial state)

  if (currentSlide >= totalSlides) {
    currentSlide = 0
  }

  moveSlide(currentSlide)
}

var previousSlide = function () {
  currentSlide = currentSlide - 1

  // if our current slide is less than 0, we want to set out currentSlide
  // to the last one

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  moveSlide(currentSlide)
}

// setInterval allows us to run a function every X amount of time
var autoSlide = setInterval(function () {
  // Here our next slide function will be run
  nextSlide()
  // runs every 3000 milliseconds
}, 3000)

$('.next').on('click', function () {
  // This is going to cancel our autoSlide interval function
  // As the user has taken over control of the slideshow
  clearInterval(autoSlide)
  nextSlide()
})

$('.prev').on('click', function () {
  clearInterval(autoSlide)
  previousSlide()
})

// here we set the text for the steps

// here we set a slidenumber variable which increments by 1 because
// our array starts at 0
var slideNumber = currentSlide + 1
// here we set the text for the steps using currentSlide and total number
$('.steps').text(slideNumber + ' / ' + totalSlides)

// Whenever an event occurs in javascript we can also capture all of
// the data that comes along with it

$('body').on('keydown', function (event) {
  var keyCode = event.keyCode

// If the keycode is equal to our left arrow
// run the previous slide function

  if (keyCode === 37) {
    clearInterval(autoSlide)
    previousSlide()
  }

  // If the keycode is equal to our right arrow
  // run the next slide function

  if (keyCode === 39) {
    clearInterval(autoSlide)
    nextSlide()
  }

})
