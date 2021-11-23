/*
1)Criar um array com valores numéricos:  25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56.
a)Coloque eles em ordem crescente.
b)Exibir no Console.
*/

var array = [25, 23, 11, 55, 30,  6, 4, 21, 34, 89, 56];
array.sort();
console.log(array);

/*
2)Dado um array com os times: Santos, Sport, Santa Cruz, Vasco, Chapecó.
a)Adicionar o time "Flamengo" no final do array.
b)Remover o time que está no início do array.
c)Adicionar o time "Palmeiras" no início do array. 
d)Adicionar o time "Grêmio" no final do array
e)Adicionar os times "São Paulo" e "Santos" do início do array
f)Exibir, no console, a quantidade de elementos no array.///////
g)Remover o time que está no final do array.
h)Exibir, no console, em ordem crescente os times que estão no array.
*/

var times =["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"]
times.push("Flamengo");
times.shift();
times.unshift("Palmeiras");
times.splice(6, 1, "Grêmio");
times.unshift("São paulo", "Santos");
times.pop();
console.log(times.length);
console.log(times.reverse());


/*
3)Criar um array contendo 7 atividades que você faz durante o dia.
a)Exibir no console as atividades na ordem inversa.
b)Selecionar e exibir no console, os elementos nas posições 3 e 6.
c)Exibir no console seu array transformado em string. Substituir a vírgula pelo símbolo " - " (hífen).
d)Criar um array com 2 atividades que você mais gosta e juntar com o array das atividades que você faz durante o dia. E exibir no console o resultado.
*/

var toDo = [" Ler ", " comer ", " Codar ", " Dormir ", " Jogar ", " Assistir One piece ", " Levantar Haltere "]
console.log(toDo.reverse());
console.log(toDo.join().replace(/,/g,"-"))
var top2 = [" JOGAR ", " COMER "];
console.log(toDo.concat(top2));


/**
4)Criar um array com o nome de 5 cidades.
a)Exibir, no console, em ordem crescente os times que estão no array.
b)Remover a cidade que está no início do array.
c)Remover a cidade que está no final do array.
d)Exibir, no console, em ordem crescente os times que estão no array. ?????????
*/

var city = ["Recife", "Jaboatão", "Moreno", "Vitoria", "Boa viagem"];
console.log(city);
city.shift();
console.log(city);
city.pop();
console.log(city);rms