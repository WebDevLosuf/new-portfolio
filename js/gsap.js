gsap.registerPlugin(ScrollTrigger);

const tlStart = gsap.timeline({})

tlStart.from('.author',{
    x:-400,
    duration:2,
    opacity:0,
    ease:"back.out(1.5)",
    
})

gsap.from('.skills-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.my-skills',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse ',
    }
})


gsap.from('.project-card',{
    stagger:0.3,
    opacity:0,
    y:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.my-works',
        start: 'top 70%',
        end:'30% 50%',
        scrub: 2,
        toggleActions: 'play none none reverse ',
    }
})


gsap.from('.footer__copyright',{
    opacity:0,
    x:-200,
    scrollTrigger:{
        // markers:true,
        trigger: '.footer',
        start: 'top 100%',
        end:'50% 100%',
        scrub: 2,
        toggleActions: 'play none none reverse ',
    }
})

gsap.from('.footer__contacts',{
    opacity:0,
    x:200,
    scrollTrigger:{
        // markers:true,
        trigger: '.footer',
        start: 'top 100%',
        end:'50% 100%',
        scrub: 2,
        toggleActions: 'play none none reverse ',
    }
})

function paralax() {
    const preview = document.querySelector('.preview');
    const initialX = preview.offsetLeft + preview.offsetWidth / 2;
    const initialY = preview.offsetTop + preview.offsetHeight / 2;

    document.addEventListener('mousemove', function(event){
    const mouseX = event.clientX - initialX;
    const mouseY = event.clientY - initialY;

    gsap.to(
        '.preview__avatar-background img', 
        {
        x: mouseX * 0.01, 
        y: -mouseY * 0.01, 
        ease: 'power2.out' ,
        },);

    })

}

paralax();