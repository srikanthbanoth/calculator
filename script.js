const MainElement=document.querySelector('.calculator')
const ResultDiv=document.querySelector('.result')
let Expression=''

MainElement.addEventListener('click',callFunction)

function callFunction(e){
    let textcontent=e.target.textContent
    if(textcontent === '=' || textcontent === 'AC' || textcontent === 'Clear'){
        switch(textcontent){
            case '=':evaluate(Expression)
            break
            case 'AC':clear()
            break
            case 'Clear': clear()
            break
        }
    }
    else{
        Expression+=textcontent
        //ExpressionD.textContent=Expression
    }
    
}


function clear(){
    /* Make the paragraph result Zero and Sum/Solved=0 */
    ResultDiv.textContent='0'
    Expression=''
}
function evaluate(Expression){
    if(Expression[0]==='+' || Expression[0]==='-' || Expression[0]==='%' || Expression[0]==='/'||Expression[0]==='*'){
        ResultDiv.textContent='Syntax Error'
    }
    else{
        Expression=eval(Expression)
        ResultDiv.textContent=''+Expression
    }
}