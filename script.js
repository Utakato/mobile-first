const qs = (selector, all = false) => all ? document.querySelectorAll(selector) : document.querySelector(selector);

const timeline = qs(".timeline")
const line = qs(".line")
const cards = qs(".card", true)
const d = document.documentElement;

const testing = () => {
    const timelineRect = timeline.getBoundingClientRect();
    const targetY = window.innerHeight * .8;
    const dist = targetY - timelineRect.top;
    
    // This makes the line extend.
    if( window.innerWidth < 768) {
        if(dist < 4399) {
            line.style.height = `${dist}px`
        }else {
            line.style.height = `4445px`
        }
    }else if (dist < 4025) {
        line.style.height = `${dist}px`
    }else {
        line.style.height = `4025px`
    }
    console.log(dist)

    // This makes the cards appear/dissapear
    cards.forEach(item => {
        const rect = item.getBoundingClientRect();
            if (rect.top + item.offsetHeight *0.1  < targetY) {
          item.classList.add('visible');
        }
        if (rect.top + item.offsetHeight / 5 > targetY) {
            item.classList.remove('visible');
          }
      });

};

window.addEventListener("scroll", testing)
