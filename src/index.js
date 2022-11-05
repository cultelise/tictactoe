import createBoard from './board';
import './init'
import { mode } from './modes';
import "./style.css";


export const silly = () => {
  createBoard();
  mode();
}
