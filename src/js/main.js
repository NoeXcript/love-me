((doc, win) => {
    'use strict'
    const container = doc.querySelector('.container')

    if (container) {
        const cordenates = container.getBoundingClientRect()
        const { x: minX, y: minY, } = cordenates
      

        const btn = doc.querySelector('.btn-no')

        btn.onmouseover = (e) => {
            let x = - Math.floor(Math.random() * minX)
            let y = - Math.floor(Math.random() * minY) + 50




            e.target.style.transform = `translate(${x}px, ${y}px)`
        }




    }
})(document, window)