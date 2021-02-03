# Fundamentos da linguagem JavaScript

Antes de tudo, o que diabos é JavaScript?

Bom, JavaScript ou javascripito para os íntimos é uma linguagem de programação interpretada (uma das mais populares do mundo hihihi).
Primeiramente, linguagem de programação interpretada quer dizer que no final aqueles códigos não virarão um amontoado gigantesco de 0 e 1, consequentemente, o computador não entende aquilo pois, a linguagem do computador baseia-se em zeros e uns. Então, essa linguagem é executada por um motor e um ambiente de execução.

Como nessa imersão estou mais focado no ECMAScript nada mais justo do que dizer o que é isso: É uma especificação de linguagem de programação baseada em scripts, padronizada e mantida pela [Ecma International](https://pt.wikipedia.org/wiki/Ecma_International). Essa "convenção" foi criada com o objetivo de padronizar os códigos escritos nessa linguagem e organizar suas várias implementações (sabe aquela piada de sai um framework de js todo dia? Então... hahaha).

Ótimo artigo sobre JavaScript: https://marquesfernandes.com/desenvolvimento/javascript-o-que-e-como-funciona-e-para-que-serve/

Documentação que você também pode dar uma lida: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide

## Curso de JavaScript do Guanabara

Anotações feitas a partir do curso de JavaScript ministrado pelo Guanabara, o curso será dividido em seis módulos:

- [Módulo 01: Conhecendo o JavaScript][1]
- [Módulo 02: Comandos básicos do JavaScript][2]
- [Módulo 03: Document Object Model][3]
- [LMódulo 04: Condições em JavaScript][4]
- [Módulo 05: Repetições (laços) em JavaScript][5]
- [Módulo 06: Avançando nos estudos em JavaScript][6]

## Módulo 02: Comandos básicos do JavaScript

**Variáveis e tipos primitivos**

 - Number
	 - Infinity
	 - NaN
 - String
 - Boolean
 - Null
 - Undefined
 - Object
	 - Array
 - Function

**Tratamento de dados**

Number.parseInt(n) = irá transformar um número em um número inteiro

Number.parseFloat(n) = irá transformar um número em um número real

Number(n) = o JS se vira para saber se é do tipo inteiro ou do tipo real ( vale para as versões mais novas do JS)

**Para converter para string:**

String(n)
n.toString()

**Algumas funcionalidades para a formatação de strings**

palavra.length = co9nta quantos caracteres tem na string

palavra.toUpperCase() = tudo para maiúsculo

palavra.toLowerCase() = tudo para minúsculo

**Formatação de números**

n.toFixed(num) = Serve para formatar o número de casas decimais que serão mostradas

n.toFixed(num).replace(".", ",") = Serve para além de formatar as casas decimais também substituir o ponto por virgula 

n.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}) = irá colocar no símbolo de real (ou de qualquer outra moeda) na frente do valor

**Outra forma de concatenar**

Usando template string = `Olá, ${var/valor vai aqui}, bla bla bla.`

**Escrevendo no documento pelo JS**

document.write("Escreve aqui alguma coisa hihi");

# Anotações dos módulos B e C

## Operadores

Temos os seguintes tipos de operadores: 

 - Aritméticos
 - Atribuição
 - Relacionais
 - Lógicos 
 - Ternário

## **Operadores aritméticos**

 - Soma
 -  Subtração  
 - Multiplicação 
 - Divisão, essa aqui serve para divisão
   de números reais. Use esse símbolo **/**
 - Divisão de inteiros, usamos para pegar o resto de uma divisão entre números inteiros. Use o símbolo **%**
 - Potência. Use o símbolo **

**Ordem de precedência dos operadores**

<div align="center">
	<img src="./assets-sem-03/precedencia-operadores-aritmeticos.png">
</div>

**Sintaxe simplificada para auto atribuições**

<div align="center">
	<img src="./assets-sem-03/simplificando-auto-atricuicoes.png">
</div>

**Tipos de decremento e incremento**
Existem os:

 - pré incremento
 - pós incremento
 - pré decremento
 - pós decremento

## **Operadores de atribuição**

Exemplo: var num = 10;

Estou **atribuindo diretamente** a variável num o valor 10.

## **Operadores relacionais**

<div align="center">
	<img src="./assets-sem-03/operadores-relacionais.png">
</div>

**Operador de identidade** ➡️ ===
Além de comparar o valor, também irá comparar o tipo. 

## **Operadores lógicos**

<div align="center">
	<img src="./assets-sem-03/operadores-logicos.png">
</div>

**Precedência de operadores relacionais**
primeiro o **negação**, depois o **e**, por último o **ou**

**Precedência de operadores**
aritméticos > relacionais > lógicos > ternário

## **Operadores ternários**

Ele tem a função de juntar operadores. Exemplo:

<div align="center">
	<img src="./assets-sem-03/operadores-ternarios.png">
</div>

O **?** representa **E**
O **:** representa **OU**

## **DOM**

**Document object model** =  é um modelo de documento para objetos dentro do seu navegador. Ele irá dar acesso aos componentes do seu website.

**Árvore DOM**

<div align="center">
	<img src="./assets-sem-03/arvore-dom.png">
</div>

**window** =  engloba tudo que está dentro do site. Dentro do window tenho vários outros objetos.

**Formas de acessar o DOM**

<div align="center">
	<img src="./assets-sem-03/seletores-dom.png">
</div>

**Eventos DOM** =  tudo o que pode acontecer com o componente selecionado. Exemplo, uma div.

[1]: https://github.com/lauraol/seja-um-bom-junior/blob/master/mes-01/semana-03/anotacoes-js/resumos-das-aulas.md#módulo-01-conhecendo-o-javaScript  "Módulo 01: Conhecendo o JavaScript"
[2]: https://github.com/lauraol/seja-um-bom-junior/blob/master/mes-01/semana-03/anotacoes-js/resumos-das-aulas.md#módulo-02-comandos-básicos-do-javaScript  "Módulo 02: Comandos básicos do JavaScript"