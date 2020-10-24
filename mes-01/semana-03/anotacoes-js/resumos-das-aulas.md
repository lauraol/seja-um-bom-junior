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

[1]: https://github.com/lauraol/seja-um-bom-junior/blob/master/mes-01/semana-03/anotacoes-js/resumos-das-aulas.md#módulo-01-conhecendo-o-javaScript  "Módulo 01: Conhecendo o JavaScript"
[2]: https://github.com/lauraol/seja-um-bom-junior/blob/master/mes-01/semana-03/anotacoes-js/resumos-das-aulas.md#módulo-02-comandos-básicos-do-javaScript  "Módulo 02: Comandos básicos do JavaScript"