Segundo dia de teoria da primeira semana e o assunto é **CSS3**.

Mas, o que é CSS mesmo? CSS significa Cascading Style Sheets, é quem fará o estilo da nossa página web, ele colocará uma "roupinha" no nosso HTML 👕👖.

Bom, vamos recapitular a sintaxe usada na sua folha de estilos:

    seletor {
        propriedade: valor;
    }

Nós podemos dividir os seletores em quatro categorias, que se tivessem um peso (porém é mais elegante chamarmos de ordem de precedência) seriam mais ou menos assim:

1.  Seletor utilizando tags HTML, peso: 1
2.  Seletor descendente, peso: 10
3.  Seletor classe, peso: 100
4.  Seletor id, peso: 1000

**Seletores utilizando tags HTML**

Ou também chamados de seletores de tipo, são o tipo mais genérico de seletores do CSS. Você pode simplesmente usar o nome do elemento no HTML para aplicar um estilo nele. Sintaxe:

    p {
        font-size: 15px;
    }

**Seletor descendente**

Lembra que falamos que o CSS é uma folha de estilos em **cascata**? Pois bem, ao utilizar seletores descentes é possível que você selecione elementos dentro de outros elementos, como se você fosse fazendo uma cascata até o elemento que você deseja. Sintaxe:

    p a {
        font-size: 15px;
    }

Usando esse tipo de seletor você está dizendo que você quer pegar todo o elemento `<a>` que estiver dentro de um elemento `<p>`.

**Seletor classe**

Esse seletor só irá aplicar o estilo que você deseja em elementos que tiverem com uma classe específica aplicada, por exemplo:

HTML:

    <p class="descricao">Use sua imaginação para finjir que aqui tem uma descrição bem legal.</p>
    <p class="descricao">Outro pedacinho de texto aqui.</p>
    <p>E agora cabou.</p>

CSS:

    .descricao{
        font-size: 15px;
        color: orange;
        line-height: 3px;
    }

Os parágrafos que terão o estilo definido no CSS aplicado serão os que tem a classe **descricao**. O class é um excelente seletor para quando você precisa dar o mesmo estilo para vários elementos pois, como visto acima ele pode se repetir.

**Seletor id**

O seletor de peso 1000 hehe, pense ele como se fosse o CFP ou a digital do elemento, ou seja, só pode haver (você pode na real colocar o mesmo id para mais de um elemento, mas ai ele perde o propósito de ser um id e teria sido melhor utilizar class) um elemento com esse id. Esse seletor se sobrepõe a todos os seletores citados anteriormente, é o seletor com a maior ordem de precedência. Sintaxe:

    #nav-color{
        background-color: blue;
    }

Mais sobre seletores (tem uma lista bemm longa sobre eles 😵, vimos aqui os principais e mais utilizados do dia a dia): https://code.tutsplus.com/pt/tutorials/the-30-css-selectors-you-must-memorize--net-16048

**PS:** dica de organização, faça a sua folha de estilhos seguindo a ordem dos elementos do HTML. Futuramente você irá se achar bem mais rápido do seu próprio código pois ele estará organizado. 🖖

## Conceitos topzeira do CSS

**Flexbox** 🥰

> O `Flexbox Layout`módulo (caixa flexível) ( [uma recomendação candidata do W3C](https://www.w3.org/TR/css-flexbox/) em outubro de 2017) visa fornecer uma maneira mais eficiente de dispor, alinhar e distribuir espaço entre os itens em um contêiner, mesmo quando seu tamanho é desconhecido e / ou dinâmico (assim, o palavra “flex”).
> by: CSS trick

O principal objetivo do flexbox é poder manipular a altura, largura e também a ordem dos elementos na página. Lembrando que para estruturas menores e itens o flexbox é um xuxu, já para estruturas maiores é recomendado o uso do grid.

O flexbox tem bastante propriedades, não é esperado que você decore todas, experimente abrir o guia dar uma lida nas propriedades e tente aplicá-las em seus projetos: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Um jeito mais interativo de fixar os conceitos de flexbox é com esse jogo de sapinhos: https://flexboxfroggy.com/#pt-br. Você vai ir mudando o posicionamento dos sapinhos utilizando flexbox, o jogo tem 24 fases.

**Grid Layout** 😍

> CSS Grid Layout é o sistema de layout mais poderoso disponível em CSS. É um sistema bidimensional, o que significa que pode lidar com colunas e linhas, ao contrário do [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) que é basicamente um sistema unidimensional. Você trabalha com o Grid Layout aplicando regras CSS tanto a um elemento pai (que se torna o Grid Container) quanto aos filhos desse elemento (que se tornam Grid Items).

Guia do grid layout: https://css-tricks.com/snippets/css/complete-guide-grid/. Esse guia tem uma parte incrível sobre as propriedades do grid.

E mais um joguinho para aprender de forma mais interativa:
https://codepip.com/games/grid-garden/. Cuide da sua horta de cenourinhas usando o grid \o/

CSS ilude bastante pois parece super simples, mas tenho uma notícia para você **não é**. A medida que o CSS está evoluindo ele está ficando cada vez mais robusto e com mais funcionalidades, além de flexbox, grid, animações, transições, quem sabe uns testes? hehe

Dá uma olhadinha nessa matéria mostrando algumas funcionalidades do CSS:
https://imasters.com.br/css/7-coisas-que-voce-nao-sabia-que-pode-fazer-com-css

O que foi abordado é o básico para que você consiga utilizar os **principais seletores do CSS** da melhor maneira possível e que consiga **organizar seus elementos e itens da tela usando flexbox e layout grid** para poder realizar os desafios da imersão, sem fazer umas gambiarras absurdas utilizando padding ou margin (sim sim, eu já fiz muito para falar a verdade🤭).
