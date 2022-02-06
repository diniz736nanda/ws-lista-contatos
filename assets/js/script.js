/* 
Listas de contatos

1º passo: capturar esses valores dos campos da minha página
2º passo: armazenar /salvar valores no meu script
3º passo: criar/adicionar elementos na interface
4º passo: remover elementos da minha interface

*/
const listaContatosLocal = []
let id = 0;

//passar um parametro em css;body;id;class
const listaContatosContanainer = document.querySelector('.secaoListaContatos__lista');

const campoNome = document.getElementById('campoNome');
const campoEmail = document.getElementById('campoEmail');
const campoTelefone = document.getElementById('campoTelefone');

const botaoAdicionar = document.getElementById('btnAdicionar');

function adicionarNovoContato(){
    const valorNome = campoNome.value;
    const valorEmail = campoEmail.value;
    const valorTelefone = campoTelefone.value;

    const novoContato = {
        id: id,
        nome: valorNome,
        email: valorEmail,
        telefone: valorTelefone
    };

    id++;
    listaContatosLocal.push(novoContato);

    renderizarLayout();
}

botaoAdicionar.addEventListener('click', adicionarNovoContato);

function removerContato(evento){
    const botaoClicado     = evento.target;
    const contatoClicado   = botaoClicado.parentElement;
    const idContatoClicado = contatoClicado.dataset.id;

    const contatoRemovido  = listaContatosLocal.find((contato) =>contato.id == idContatoClicado); 
    const posicaoContatoRemovido = listaContatosLocal.indexOf(contatoRemovido);
    listaContatosLocal.splice(posicaoContatoRemovido, 1);

    renderizarLayout();
}

function renderizarLayout(){
    listaContatosContanainer.innerHTML = '';

    if(listaContatosLocal.length !== 0){
        for(let i=0; i <listaContatosLocal.length; i++){
            criarLayout(listaContatosLocal[i]);
        }
    }else{
        const listaContatoVazia = `<li> 
            <p> Não há contatos na sua lista.</p>
        </li>`;

        listaContatosContanainer.innerHTML = listaContatoVazia;
    }    
}
renderizarLayout();
function criarLayout(contato){
    const li =document.createElement('li');
    const button =document.createElement('button');
    const h2 =document.createElement('h2');
    const p =document.createElement('p');
    const span =document.createElement('span');

    button.id = "removerContato";
    button.addEventListener('click', removerContato);
    
    //editar um elemento
    h2.innerText =contato.nome           
    p.innerText = contato.email
    span.innerText = contato.telefone

    //pega um elemento e insere dentro de outro
    li.dataset.id = contato.id;
    li.appendChild(button);       
    li.appendChild(h2); 
    li.appendChild(p); 
    li.appendChild(span); 

    listaContatosContanainer.appendChild(li);
}

localStorage . setItem ( 'nome1' ,  "Maria" ) ;
localStorage . setItem ( 'nome2' ,  "Wallace" ) ;
localStorage . setItem ( 'nome3' ,  "Hudson" ) ;

console.log(localStorage.getItem('nome2'))