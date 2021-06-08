import $ from "jquery";
import "./app4.js"

const $circle = $("#app4 .circle")

$circle.on('mouseenter', () => {
  $circle.addClass('active')
}).on('mouseleave', () => {
  $circle.removeClass('active')
})