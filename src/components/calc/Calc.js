import { useState } from "react";
import { Button } from "react-bootstrap";

import './Calc.css';

function Calc(){
    const date =  new Date();
    const [oper, setOper] = useState('+');
    const [result, setResult] = useState();
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    const equal = () => {
        let res = 0;
        // nan
        if(isNaN(n1) || isNaN(n2) || n1 === '' || n2 === ''){
            res = 'Not a number'
            handleResult(res);
            return;
        }
        // valid operator
        if(oper === '+' || oper === '-' || oper === '/' || oper === 'x'){
            if(oper === '+'){
                res = parseInt(n1) + parseInt(n2);
            }
            else if(oper === '-'){
                res = parseInt(n1) - parseInt(n2);
            }
            else if(oper === 'x'){
                res = parseInt(n1) * parseInt(n2);
            }
            else if(oper === '/'){
                if(parseInt(n2) === 0){
                    res = "Dividing by zero"
                }
                else{
                    res = parseInt(n1) / parseInt(n2);
                }
            }
            handleResult(res);
        }
        else{
            handleResult('Bad operator, how did you even manage that?');
        }
    }

    const handleResult = (res) => {
        // setar o resultado
        setResult(res);
        // salvar no log
        saveHistory(res);
    }


    const saveHistory = (res) => {
        // formatar o registro para inserir no historico
        let calc = date.getHours() + ":" + date.getMinutes() + " -> " + n1.toString() + " " + oper.toString() + " " + n2.toString() + " = " + res.toString();
        // pegar o registro atual da sessao caso exista senao array vazio
        let hist = JSON.parse(sessionStorage.getItem("history")) || [];
        // adiciona no array
        hist.push(calc.toString());
        // coloca na sessao
        sessionStorage.setItem("history", JSON.stringify(hist));
    }

    return(
        <div>
             <input
                type="number"
                value={n1}
                onChange={(e) => setN1(e.target.value)}
                />
            <label className="oper">{oper}</label>
            <input
                type="number"
                value={n2}
                onChange={(e) => setN2(e.target.value)}
                />
            <br></br>
            <br></br>
            <Button onClick={() => setOper('+')}>+</Button>
            <Button onClick={() => setOper('-')}>-</Button>
            <Button onClick={() => setOper('/')}>/</Button>
            <Button onClick={() => setOper('x')}>x</Button>
            <br></br>
            <Button variant="success" onClick={() => equal()}>=</Button>
            <label className="result">{result}</label>
        </div>
    );
  }
  
  export default Calc;