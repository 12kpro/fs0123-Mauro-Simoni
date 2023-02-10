document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('button').forEach(button =>{
            button.addEventListener('click',(e) => {
                calculator.calculatorSet(e.target.value,e.target.dataset.type)
            })
        })
  });

const calculator = {
    // Parametri della calcolatrice operandi, operatore e risultato
    parameter: { 
        n: '',
        m: '',
        operator: '',
        result: ''
    },
    // Operazioni consentite e simbolo corrispondente
    allowedOperator: [
        {type:'add', symbol: '&plus;'},
        {type:'subtract', symbol: '&minus;'},
        {type:'multiply', symbol: '&times;'},
        {type:'divide', symbol: '&divide;'}
    ],
    updateDisplay: function(){
        // Eseguo l'aggiornamento delle informazioni presenti sul display
        let p = this.parameter
        let operationDisplay = document.getElementById('operation')
        let resultDisplay = document.getElementById('result')
        let symbol = this.findSymbol(p.operator)
        if ( p.result === 'error' ){
            this.disableControls(true)
        }

        if ( p.n  && p.m && p.operator ){
            operationDisplay.innerHTML = `${p.n} ${symbol} ${p.m} &equals;`
            resultDisplay.textContent = p.result
        } else if (p.n  && p.operator ){
            operationDisplay.innerHTML = `${p.n} ${symbol}`
            resultDisplay.textContent = p.result
        } else{
            operationDisplay.innerHTML = `${p.n} ${symbol} ${p.m}`
            resultDisplay.textContent = '0'
        }      
    },
    disableControls:function (enable) {
        // Attivo o disattivo i tasti eccetto il reset
        let buttons = document.querySelectorAll('button')
        for(let button of buttons){
            if ( button.value !== 'reset' ){
                 button.disabled = enable 
            }
        }
    },
    updateOperand: function(key,operand){
        // Eseguo l'aggiornnamento dei valori degli operandi
        let p = this.parameter
        let decimalIsSet = p[operand].includes('.')
        let pos0 = p[operand].charAt(0)
        let pos1 = p[operand].charAt(1)
        if ( key === 'del' ){
            p[operand] = p[operand].slice(0,-1)
            p.result = ''
        } else if ( key === '.' ) {
            if (!decimalIsSet && pos0 !== "" && !p.result ){  p[operand] = p[operand] + key }
        } else if( key === '0' ) {
            if ( ( pos0 !== '0' || pos0 === '' ) ||  ( pos0 === '0' && pos1 === '.' ) ){
                p[operand] = p[operand] + key
            }
        } else { 
            if ( ( pos0 === '0' || pos0 === '' ) && pos1 !== '.' ){
                p[operand] = key
            }else{
                p[operand] = p[operand] + key
            }
        }
    },
    updateparameter: function(n = false, m = false, operator = false, result = false ){
        // aggiornamento parametri della calcolatrice
        // Da correggere, come verifico la stringa vuota?
        if ( n || n === '' ) this.parameter.n = n
        if ( m || m === '' ) this.parameter.m = m
        if ( operator || operator === '' ) this.parameter.operator = operator
        if ( result || result === '' ) this.parameter.result = result
    },
    // unificare le seguenti 2 funzioni
    findSymbol:function(operator){
        for(let o of this.allowedOperator){
            if (o.type === operator){ 
                return o.symbol
            }
        }
        return ''
    },
    findOperator: function(operator){
        for(let o of this.allowedOperator){
            if (o.type === operator){ 
                return true
            }
        }
        return false 
    },
    calculatorSet: function(clickedKey,type){
        // Logica della calcolatrice
        let p = this.parameter
        let operatorIsSet = this.findOperator(p.operator)
        let isAllowed = this.findOperator(clickedKey)

        if ( isAllowed  && type == 'operation'){
            if( p.result.length > 0) {
                this.updateparameter(p.result, '', clickedKey, '')
            }else if( p.n.length > 0 && p.m.length > 0){
                let tmpRes = this.calculate(p.n, p.m, p.operator)
                if ( tmpRes === 'error'){
                    this.updateparameter(p.n, p.m, p.operator, tmpRes)
                }else{
                    this.updateparameter(tmpRes, '', clickedKey, '')
                }
            }else if ( p.n.length > 0 ) {
                this.updateparameter(false, false, clickedKey, false )
            }else{
                this.updateparameter('0', false, clickedKey, false )
            }
            //console.log(`operator=${this.operator}`);
        } else if (clickedKey === 'reset' && type == 'operation'){
            this.updateparameter('','','','')
            this.disableControls(false)
            //console.log(clickedKey);
        } else if (clickedKey === 'calc' && type == 'operation' && p.n.length > 0 && p.m.length > 0) {
            p.result = this.calculate(p.n,p.m,p.operator)
            //console.log(p.result);
        } else if (operatorIsSet && type != 'operation' && p.n.length > 0) { 
            this.updateOperand(clickedKey,'m')
        } else if (type != 'operation') {
            this.updateOperand(clickedKey, 'n')
        }
        this.updateDisplay()
        console.log(`n=${p.n}, m=${p.m}, operator=${p.operator}, result=${p.result}`);
    },
    calculate: function(n,m,operator){
        // Eseguo l' operazione impostata nei parametri, nel caso della divisione restuisco un errore se il secondo operando è 0
        let result = 0
        if ( m === '0' && operator === 'divide' ){
            return 'error'
        }
        if (operator === 'add') {
            result = parseFloat(n) + parseFloat(m)
        } else if (operator === 'subtract') {
            result = parseFloat(n) - parseFloat(m)
        } else if (operator === 'multiply') {
            result = parseFloat(n) * parseFloat(m)
        } else if (operator === 'divide') {
            result = parseFloat(n) / parseFloat(m)
        }
        return Number(result.toFixed(4)).toString()
    }

}


  
  /*
  const calculate = (n1, operator, n2) => {

     else if (operator === 'modulus') {
        return  parseFloat(n) % parseFloat(m)
    } else if (operator === 'exponentiation'){
        return  parseFloat(n) ** parseFloat(m)
    }
  }*/