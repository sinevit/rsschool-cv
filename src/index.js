console.log('hi')
import './styles/main.scss'
// import generateJoke from "./generateJoke"
import logo from './asset/images/logo.svg'
import photo from './asset/images/1-298.jpg'
import phot from './asset/images/1-279.jpg'
import travel from './asset/images/travel.jpg'
import codejam from './asset/images/codjem.jpg'
import shelter from './asset/images/shelter.jpg'
import momentum from './asset/images/momentum.jpg'
import github from './asset/images/github.png'
import rsschool from './asset/images/rs-logo.svg'
import coffehouse from './asset/images/coffehouse.jpg'
import zoo from './asset/images/online-zoo.jpg'



// console.log(generateJoke())
console.log(1)

window.onload = function(){
    addMenuClickHandler();
    addOverlayClickHandler();
}

const addMenuClickHandler =() => {
    document.querySelector('.hamburger').addEventListener('click', (e) =>{
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.hamburger__menu').classList.toggle('active');
    })
}

const addOverlayClickHandler =() => {
    document.querySelector('.hamburger__menu').addEventListener('click', (e) =>{
        document.querySelector('.hamburger').classList.toggle('active');
        document.querySelector('.hamburger__menu').classList.toggle('active');
    })
}