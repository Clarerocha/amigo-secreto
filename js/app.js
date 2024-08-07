let amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let amigosAdicionados = document.getElementById('lista-amigos');
    amigos.push(nome);

    if(amigosAdicionados.textContent == '') {

        amigosAdicionados.textContent = nome;

    }else {

        amigosAdicionados.textContent = amigosAdicionados.textContent + ', ' + nome;        
    } 
    document.getElementById('nome-amigo').value = '';
}

    function sortear() {
        embaralhar(amigos);
        let sorteio = document.getElementById('lista-sorteio');

        for(let i = 0; i < amigos.length; i++){
            if ( i == amigos.length -1) { 
                sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br> ';

       } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[i + 1] + '<br> ';

        }
    }
    
    
    function embaralhar (amigosAdicionados) {

        for (let indice = amigosAdicionados.length; indice; indice--) {
            const indiceAleatorio = Math.floor(Math.random() * indice);
            [amigosAdicionados[indice -1], amigosAdicionados[indiceAleatorio]] = [amigosAdicionados[indiceAleatorio], amigosAdicionados[indice - 1]];
        }
        return amigosAdicionados;
    }

    
    

}