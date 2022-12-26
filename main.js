const ROOT = document.getElementById('root')
const btns = document.querySelector('.btns')


btns.style.cssText = `
display:flex;
gap:30px;
`

const btnModal = document.createElement('button')
btns.append(btnModal)
btnModal.textContent = 'Show modal 1'
btnModal.style.cssText =`

font-size: 2rem;
padding:  10px 30px;
border-radius: 29px;
border: none;
cursor: pointer;
`

const btnModalTwo = document.createElement('button')
btns.append(btnModalTwo)
btnModalTwo.textContent = 'Show modal 2'
btnModalTwo.style.cssText =`

font-size: 2rem;

display: block;
padding:  10px 30px;
border-radius: 29px;
border: none;
cursor: pointer;
`
const btnModalThree = document.createElement('button')
btns.append(btnModalThree)
btnModalThree.textContent = 'Show modal 3'
btnModalThree.style.cssText =`

font-size: 2rem;

display: block;
padding:  10px 30px;
border-radius: 29px;
border: none;
cursor: pointer;
`

btnModal.addEventListener('mouseover',() =>{
    btnModal.style.backgroundColor = 'yellow'
})
btnModal.addEventListener('mouseout',() =>{
    btnModal.style.backgroundColor = 'white'
})



const modal = document.createElement('div')
modal.style.cssText=
`
position:fixed;
top:0;
left:0;
width:100vw;
height:100vh;
background-color: #00000060;
display:flex;
justify-content:center;
align-items:center;`


const modalWindow = document.createElement('div')
modalWindow.style.cssText=`
    width: 924px;
    height: 100px;
    background-color: white;
    padding: 95px;
    font-size:1.5rem;
    position: relative;`
 
// modalWindow.textContent = 

const title = document.createElement('h2')
title.textContent = "I'm a modal window"


title.style.cssText = `
position:absolute;
bottom:125px;
`

modalWindow.append(title)

modal.append(modalWindow) 

const titleInModal = document.createElement('p')
 titleInModal.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus harum eveniet nam quibusdam ut molestiae molestias ad reiciendis accusamus suscipit delectus itaque, mollitia tenetur, vero aut dicta, fugit illo fugiat."

 titleInModal.style.cssText = `
 width:600px;
 position:absolute;

 `
 modal.append(titleInModal)

btnModal.addEventListener('click',() =>{
    console.log('clicked');
    ROOT.append(modal)
})
 
const closeModal = document.createElement('button')
closeModal.textContent = 'X'
modalWindow.append(closeModal)
closeModal.style.cssText = `
position:absolute;
top: 1px;
left:895px;
background-color: blue;
width:30px;
height: 30px;
border: nonde;
`
closeModal.addEventListener('click',() =>{
    modal.remove()
})
