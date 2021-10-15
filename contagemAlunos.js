"use strict";

/*

A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar a programação de um sistema de controle de alunos de uma escola. O sistema deverá funcionar da seguinte forma:

Considere  a quantidade de alunos presentes na sala, percorra do zero até o número total de alunos e retorne os seguintes resultados:

  Se o número for par, escreva "par" e o número correspondente.

  Se o número for ímpar, escreva "ímpar" e o número correspondente.
  
  Se o número for zero, escreva "zero" e o número 0 na frente.

*/

// let numeroAlunos = 5;

let listaAlunos = ["Marina", "Frederico", "Victor", "Ismael", "Pablo", "Erick"];

//Versão para correção
for (let i = 0; i < listaAlunos.length; i++) {
  if (i === 0) {
    console.log(`${i}: Zero - ${listaAlunos[i]}`);
  } else if (i % 2 === 1) {
    console.log(`${i}: Ímpar - ${listaAlunos[i]}`);
  } else {
    console.log(`${i}: Par - ${listaAlunos[i]}`);
  }
}

//Versão de teste (operador ternário aninhado) - código menor, mas de menor facilidade de leitura
/*
for (let i = 0; i < listaAlunos.length; i++) {
  let indice = i === 0 ? "Zero" : i % 2 === 1 ? "Ímpar" : "Par";
  let nomeAluno = listaAlunos[i];
  console.log(`${i}: ${indice} - ${nomeAluno}`);
}
*/
