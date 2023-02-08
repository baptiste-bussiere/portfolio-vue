import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import gsap from "gsap"

createApp(App).mount('#app')



// Set width and height 



const headerHeight = document.getElementById("header").clientHeight

const main = document.getElementById("main")


main.style.height = `calc(100vh - ${headerHeight}px`
console.log(main.style.height);



gsap.to(".bloc-1-word", {
    rotate: 0,
    delay: 0.25,
    translateY: 0,
    stagger: 0.05,
    ease: "Back.easeOut"
})

gsap.to(".banner-welcome-word", {
    opacity: 1,
    delay: 2,
    rotate: 0,
    translateY: 75 + "px",
    stagger: 0.05,
    ease: "Back.easeOut"


})