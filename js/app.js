const resultado = document.querySelector('.resultado');
const operacion = document.querySelector('.operacion');
const buttons = document.querySelectorAll('button');
const ac = document.querySelector('#ac')
const c = document.querySelector('#c')


const equal = document.querySelector('#equal')


    c.addEventListener('click',function(e){
        operacion.value = operacion.value.slice(0, -1);
    })
    buttons.forEach(button => {
        button.addEventListener('click',function(e){
            console.log(button.textContent);
            operacion.value+=button.textContent;
        })
    })

    c.addEventListener('click',function(e){
        operacion.value = operacion.value.slice(0, -1);
    })

    ac.addEventListener('click',function(e){
        operacion.value = '';
        resultado.textContent = '';
    })
    



equal.addEventListener('click',function(e){
    resultado.textContent = eval(operacion.value);
})


