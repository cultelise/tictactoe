import createBoard from './board';
import "./style.css";
import {mode} from './modes';


const subButton = document.getElementById("submit");
subButton.addEventListener("click", () => {
  
  createBoard();
  mode();
});
