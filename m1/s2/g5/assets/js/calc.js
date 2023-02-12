document.addEventListener('DOMContentLoaded', (event) => {

        calculator.buttons = document.querySelectorAll('button')
        calculator.operationDisplay = document.getElementById('operation')
        calculator.resultDisplay = document.getElementById('result')

        calculator.buttonsEvent('click')
  });

const calculator = {
    // Parametri della calcolatrice operandi, operatore e risultato
    parameter: { 
        n: '',
        m: '',
        operator: '',
        result: '',
        error: ''
    },
    buttons: '',
    operationDisplay: '',
    resultDisplay: '',
    errorMsgs:  [
        'Risultato indefinito', // 0/0
        'Impossibile dividere per zero', // n/0
        'Input non valido' // n < 0, sqrt, log, log10, log2
    ],
    // Operazioni consentite e simbolo corrispondente
    allowedOperator: [
        {
            type:'add',
            symbol: (n,m) =>{ return `<math><mrow><mn>${n}</mn><mo>&plus;</mo><mn>${m}</mn></mrow></math>`},
            singleOperand: false,
            operation: (n,m) => { return n + m }
        },
        {
            type:'subtract', 
            symbol: (n,m)  =>{ return `<math><mrow><mn>${n}</mn><mo>&minus;</mo><mn>${m}</mn></mrow></math>`},
            singleOperand: false,
            operation: (n,m) => { return n - m }
        },
        {
            type:'multiply', 
            symbol: (n,m)  =>{ return `<math><mrow><mn>${n}</mn><mo>&times;</mo><mn>${m}</mn></mrow></math>`},
            singleOperand: false,
            operation: (n,m) => { return n * m }
        },
        {
            type:'divide', 
            symbol: (n,m)  =>{ return `<math><mrow><mn>${n}</mn><mo>&divide;</mo><mn>${m}</mn></mrow></math>`},
            singleOperand: false,
            operation: (n,m) => { return n / m }
        },
        {
            type:'sqrt', 
            symbol: (n) => { return`<math><mroot><mi>${ n ? n : 'x' }</mi><mn>2</mn></mroot></math>`},
            singleOperand: true,
            operation: (n) => { return Math.sqrt(n) }
        },
        {
            type:'cbrt', 
            symbol: (n) => { return`<math><mroot><mi>${ n ? n : 'x' }</mi><mn>3</mn></mroot></math>`},
            singleOperand: true,
            operation: (n) => { return Math.cbrt(n) }
        },
        {
            type:'pow', 
            symbol: (n,m) => {return `<math><msup><mi>${n}</mi><mn>${ m ? m : 'y' }</mn></msup></math>`},
            singleOperand: false,
            operation: (n,m) => { return Math.pow(n,m) }
        },
        {
            type:'log', 
            symbol: (n) => {return `<math><msup><mi>log</mi><mn>e</mn></msup><mn>${n}</mn></math>`},
            singleOperand: true,
            operation: (n) => { return Math.log(n) }
        },        
        
    ],
    buttonsEvent: function (event) {
        for(let button of this.buttons){
                button.addEventListener(event,(e) => {
                    this.calculatorSet(e.target.value,e.target.dataset.type)
                })
        }
    },
    renderDisplay: function(p){
        // Eseguo l'aggiornamento delle informazioni presenti sul display
        let so = this.findOperator(p.operator,'singleOperand')
        let symbol = this.findOperator(p.operator,'symbol')
            symbol = symbol ? symbol : ''

        if ( p.error.length > 0 ){
            this.disableControls(true)
            this.resultDisplay.classList.add("error");
            this.resultDisplay.textContent = p.error
        }else{
            this.resultDisplay.classList.remove("error");
            this.resultDisplay.textContent =  ( p.result ) ? p.result : '--'
        }
        if ( p.n && p.operator && so ){  
            this.operationDisplay.innerHTML =  `${symbol(p.n)} &equals;`
        } else if ( p.operator && so ){
            this.operationDisplay.innerHTML =  `${symbol(p.n)}`
        } else if ( p.n  && p.m && p.operator ){
            this.operationDisplay.innerHTML = `${symbol(p.n,p.m)} &equals;`
        } else if ( p.n  && p.operator ){
            this.operationDisplay.innerHTML = symbol(p.n,p.m)
        } else{
            this.operationDisplay.innerHTML = p.n
        }
    },
    disableControls:function (enable) {
        // Attivo o disattivo i tasti eccetto il reset
        for(let button of this.buttons){
            if ( button.value !== 'reset' ){
                 button.disabled = enable 
            }
        }
    },
    updateOperand: function(p, key){
        // Eseguo l'aggiornnamento dei valori degli operandi
        let operand = 'n'
        let so = this.findOperator(p.operator,'singleOperand')
  
        let pos0 = p[operand].charAt(0)
        let pos1 = p[operand].charAt(1)

        if ( p.result.length > 0 && key !== 'del' && key !== '.' ){
            p.n = ''; p.m = ''; p.operator = ''; p.result = '';
        }

        if ( p.operator.length > 0 && p.n.length > 0 && !so ) { operand = 'm' }

        switch (key) {
            case 'del':
                p[operand] = p[operand].slice(0,-1)
                p.result = ''
                break;
            case '.':
                if (!p[operand].includes('.') && !pos0 && !p.result ){  
                    p[operand] = '0' + key 
                }else if (!p[operand].includes('.') && pos0 && !p.result ){
                    p[operand] = p[operand] + key
                }
                break;
            case '0':
                if ( ( pos0 !== '0' || !pos0 ) ||  ( pos0 === '0' && pos1 === '.' ) ){
                    p[operand] = p[operand] + key
                }
                break;
            default:
                if ( ( pos0 === '0' || !pos0 ) && pos1 !== '.' ){
                    p[operand] = key
                }else{
                    p[operand] = p[operand] + key
                }
        }
    },
    findOperator: function (operator, get = 'type') {
        let searchOperator = this.allowedOperator.find((o) => o.type === operator);
        return searchOperator ? searchOperator[get] : false;
    },
    updateOperator: function (p, key) {
        let so = this.findOperator(key,'singleOperand')
        if ( this.findOperator(key) ){
            if ( !so ){
                    if( p.result.length > 0) {
                        p.n = p.result; p.m=''; p.operator = key; p.result = '';
                    }else if( p.n.length > 0 && p.m.length > 0){
                        let tmpRes = this.calculate(p.n, p.m, p.operator)
                        p.n = tmpRes; p.m = ''; p.operator = key; p.result = '';
                    }else if ( p.n.length > 0 ) {
                        p.operator = key;
                    }else{
                        p.n = '0'; p.operator = key;
                    }
            }else{
                if ( p.result.length > 0 ){
                    p.n = p.result; p.m=''; p.operator = key; p.result = '';
                    p.result = this.calculate(p.n, p.m, p.operator, so)
                }else if( p.n.length > 0 && p.m.length > 0 ){
                    p.n = this.calculate(p.n, p.m, p.operator)
                    p.m = ''
                    p.operator = key;
                    p.result = this.calculate(p.n, p.m, p.operator,so )
                }else if( p.n.length > 0  ){
                    p.operator = key;
                    p.result = this.calculate(p.n, p.m, p.operator, so)
                }else{
                    p.n = '0'; p.operator = key;
                }
            }
        }
    },
    doAction: function (p,key) {
        let so = this.findOperator(p.operator,'singleOperand')

        if (key === 'reset' ){
            p.n = ''; p.m = ''; p.operator = ''; p.result = ''; p.error = '';
            this.resultDisplay.classList.remove("error");
            this.disableControls(false)
        } else if (key === 'calc' && p.n.length > 0 && p.operator.length > 0 ) {
            p.result = this.calculate(p.n,p.m,p.operator, so)
        }
    },
    calculatorSet: function(key,type){
        // Logica della calcolatrice
        let p = this.parameter
        
        switch (type) {
            case 'operator':
                this.updateOperator(p, key)
                break;
            case 'action':
                this.doAction(p, key)
                break;
            case 'edit':
                    this.updateOperand(p, key)
                break;
            default:
                console.log('Not valid key')
        }

        this.renderDisplay(p)
        //console.log(p);
    },
    calculate: function(n, m, operator, so = false ){
        // Eseguo l' operazione impostata nei parametri, nel caso della divisione restuisco un errore se il secondo operando è 0
        let result = 0 //
        let operation = this.findOperator(operator, 'operation')
            n = parseFloat(n)
            m = parseFloat(m)

            if ( !Number.isNaN(n) && !Number.isNaN(m)){
                if ( operator === 'divide' ){
                    if ( n === 0 && m === 0 ) { 
                        this.parameter.error = this.errorMsgs[0] 
                    }else if (  m === 0 ){
                        this.parameter.error = this.errorMsgs[1] 
                    }else{
                        result = Number(operation(n,m).toFixed(4)).toString()
                    }
                } else {
                    result = Number(operation(n,m).toFixed(4)).toString()
                }
            }else if ( n > 0 && so ){
                result = Number(operation(n).toFixed(4)).toString()
            }else{
                this.parameter.error = this.errorMsgs[2]
            }

        return result

    }
}