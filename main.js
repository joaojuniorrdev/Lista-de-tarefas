
//$(document).ready(function(){
    
    let btnForm = $('#btnForm')
    

    //botao de adicionar
    $(btnForm).click(function(e){
        e.preventDefault()

        const tarefaForm = $('#tarefaForm').val()
        const novoItemLista = $('<li class="opa"></li>')

        $(`<span>${tarefaForm}</span>`).appendTo(novoItemLista)
        $(novoItemLista).appendTo('ul')
        
    })

    $('ul').click(function(){
        let li = $('li')

        $('li').click(function(){
            $(this).addClass('li-ok')
        })

    })

    
   
//})

    
   
  

