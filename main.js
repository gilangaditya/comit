// active link
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
        sectionToP = current.offsetTop - 50,
        sectionId = current.getAttribute('id');

        if(scrollY > sectionToP && scrollY <= sectionToP + sectionHeight){
            document.querySelector('list-nav a[href*=' + sectionId +']')
            .classList.add('active_link');

        }else{
            document.querySelector('list-nav a[href*=' + sectionId +']')
            .classList.remove('active_link');
        }
    })
}

window.addEventListener('scroll', scrollActive);