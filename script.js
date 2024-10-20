var tl = gsap.timeline();

tl.from('#nav',{
    stagger: .1,
    duration: 1.5,
    width: 0,
    opacity: 0,
    ease: 'Expo.easeInOut'
}).from('#nav h2',{
    stagger: .1,
    x: 30,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1').from('#section1 h1',{
    stagger: .1,
    y: -30,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1').from('#section',{
    stagger: .3,    //gap between elements inside #section
    width: 0,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1.5').from('#nav2',{
    stagger: .1,
    x: 30,
    duration: 2,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=1.5').from('#section1 p',{
    stagger: .1,
    y: -30,
    duration: 3,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=2.5').from('#section1 button',{
    stagger: .1,
    y: -30,
    duration: 1,
    opacity: 0,
    ease: 'Expo.easeInOut'
}, '-=2.5')