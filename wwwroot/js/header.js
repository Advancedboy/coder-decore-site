let lastScroll = 0
const defaultOffSet = 1200
const header = document.querySelector('.header__scroll')

const scrollPostion = () => window.pageYOffset || document.documentElement.scrollTop
const containHide = () => header.classList.contains('.visible')
window.addEventListener('scroll', () => {
    if(scrollPostion() > defaultOffSet){
        header.classList.add('visible')
    }
    if(scrollPostion() < defaultOffSet){
        header.classList.remove('visible')
    }
    lastScroll = scrollPostion()
})