const state={
    views:{
        inputNomePersonagem:document.getElementById("inputNomePersonagem"),
        inputXp: document.getElementById("inputXp"),
        btnCadastro:document.getElementById("btn-cadastro"),
        contentBox: document.querySelector(".content-box"),
    },
    values:{
        nomePersonagem:"",
        xp:0,
        ranking:"Ferro",
        herois:[],
    }
}

class Heroi{
    constructor(nome, xp, ranking){
        this.nome = nome;
        this.xp = xp;
        this.ranking = ranking;
    }
}

function definirRanking(xp){
    if(xp<1000){
        return "Ferro";
    }
    else if(xp>=1000 && xp<2000){
        return "Bronze";
    }
    else if(xp>=2000 && xp<5000){
        return "Prata";
    }
    else if(xp>=5000 && xp<7000){
        return "Ouro";
    }
    else if(xp>=7000 && xp<8000){
        return "Platina";
    }
    else if(xp>=8000 && xp<9000){
        return "Ascendente";
    }
    else if(xp>=9000 && xp<10000){
        return "Imortal";
    }
    else if(xp>=10000) {
        return "Radiante";
    }
}

function cadastrar(){
    state.values.xp = state.views.inputXp.value>0 ? state.views.inputXp.value:0;
    state.values.nomePersonagem = state.views.inputNomePersonagem.value;
    state.values.ranking = definirRanking(state.values.xp);
    const heroi = new Heroi(state.values.nomePersonagem, state.values.xp,state.values.ranking);
    state.values.herois.push(heroi);
    state.views.inputXp.value=null;
    state.views.inputNomePersonagem.value=null;
    criarCardPersonagem(heroi)
}

function criarElemento(elemento){
    const div = document.createElement(elemento)
    return div;
}

function criarCardPersonagem(heroi){
    const div = criarElemento("div");
    const h1 = criarElemento("h1");
    const h2 = criarElemento("h2");
    const divBtn = criarElemento("div");
    const btnExcluir = criarElemento("button");
    div.className="personagem-card";
    h1.id="nomePersonagem";
    h1.textContent = heroi.nome;
    h2.id = "ranking";
    h2.textContent = heroi.ranking;
    
    divBtn.className="personagem-btn";
    btnExcluir.id = "excluir";
    btnExcluir.textContent = "Excluir";
    btnExcluir.onclick = ()=>excluir();

    divBtn.append(btnExcluir);
    div.append(h1, h2, divBtn);
    state.views.contentBox.appendChild(div);
}

function excluir(){
    state.views.contentBox.removeChild(document.querySelector(".personagem-card"));
}


state.views.btnCadastro.addEventListener("click", cadastrar);
