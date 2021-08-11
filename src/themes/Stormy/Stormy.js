import X from './storm-cloud.png';
import O from './sun-cloud.png';
import SQ from './white-cloud.png';
import BG from './stormy-sky.png';

const primeColor = 'lightgray';
const altColor = 'darkslategrey';
const txtColor = 'black';

const Stormy = () => `
body {
  background: url(${BG}) no-repeat center fixed;
  background-size: cover;
}

.history-board {
  border-color: ${altColor};
  background-color: transparent;
}

.square {
  background: url(${SQ}) no-repeat;
  background-size: 100%;
  font-size: 0;
  border: none;
}

.X, .X:hover {
  background: url(${X}) no-repeat;
  background-size: 100%;
  font-size: 0;
}

.O, .O:hover {
  background: url(${O}) no-repeat;
  background-size: 100%;
  font-size: 0;
}

.match .start-new {  
  float: none;
}

.match-history .move-text {
  color: ${altColor};
  background-color: ${primeColor};
}

.cross:before {
  outline-color: red;
}

.btn-check:active+.btn-primary, 
.btn-check:checked+.btn-primary, 
.btn-primary.active, 
.btn-primary:active, 
.show>.btn-primary.dropdown-toggle, 
.btn-primary:hover, .btn-primary:focus {
  color: ${txtColor};
  background-color: ${altColor};
  border-color: ${primeColor};
}
`;

export default Stormy;