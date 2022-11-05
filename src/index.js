import "./style.css";
import './init'
import createBoard from './board';
import { mode } from './modes';


export const silly = () => {
  createBoard();
  mode();
}
