import React from 'react'

const ScrollUp = () => {

  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector(".scrollup");
    // when the scroll is higher than 560 viewport height, add the show-scroll class to a tag with the scroll-top class
    if (this.scrollY >= 560) scrollUp.classList.add('bottom-12', 'md:bottom-16');
    else scrollUp.classList.remove('bottom-12', 'md:bottom-16')
  })

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="fixed right-10 bottom-[-20%] bg-title opacity-80 p-[0.3rem_0.5rem] rounded-[0.4rem] z-tooltip transition-all duration-400 hover:bg-title-dark lg:right-6 lg:p-[0.25rem_0.4rem] xs:right-4 scrollup block md:hidden">
      <i className="uil uil-arrow-up text-[1.5rem] text-container lg:text-[1.25rem]"></i>
    </a>
  )
}

export default ScrollUp
