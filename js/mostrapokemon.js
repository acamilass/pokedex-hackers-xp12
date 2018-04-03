function mostraPokemon(url) {
  //TO-DO:
  //  1. FAZER CONSUMO DA URL RECEBIDA COMO PARAMETRO
  //  2. TRATAR DADOS RECEBIDOS PELA URL
  //  3. CHAMAR FUNÇÃO POPULA MODAL PARA ELA ADICIONAR
  //     OS COMPONENTES HTML NO MODAL
  //  4. ABRIR MODAL (.modal) COM JAVASCRIPT
  //     (http://getbootstrap.com/docs/4.0/components/modal/#via-javascript)
  
  const URL = url;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL, true);
  xhr.send();
  xhr.onload = function(e) {
    const res = JSON.parse(xhr.response);
    populaModal(res);
  }
}

fetch(url, init)
.then(res => {
  return res.json();  
})
.then(resp => {
  console.log(resp);
  const pokemon = {
    nome: resp.name,
    image: resp.sprites.back_default,
    tipo: resp.types.map(t => t.type.name), 
    peso: resp.weight,
    altura: resp.height,
    id: resp.id         
  }

  populaModal(pokemon)

})
//teste 

// Mostrar o nome, imagem do pokemon, tipo (todos os tipos), peso, altura e id
function populaModal(pokemon) {
  //TO-DO:
  //  1. CRIAR COMPONENTES PARA MOSTRAR NO MODAL 
  //     SEGUINDO O PADRÃO DO BOOTSTRAP
  //     (http://getbootstrap.com/docs/4.0/components/modal/#modal-components)
  //  2. LINKAR TODOS OS COMPONENTES COM O MODAL .modal
  //  3. SEMPRE QUE FECHAR O MODAL LIMPAR O CONTEUDO ADICIONADO
  document.querySelector('.modal').innerHTML = modal(pokemon);
  $('.modal').modal('show')

}

