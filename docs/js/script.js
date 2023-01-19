"use strict";
//Ejercicio1
let lis = document.getElementById("listo");
lis.addEventListener("click", hola);

function hola(e) {
  e.preventDefault();
  let nom = document.getElementById("nom").value;
  let ape = document.getElementById("ape").value;
  let ed = document.getElementById("ed").value;
  if (ed >= 18) {
    alert(`Bienvenido ${nom} ${ape}, su edad es ${ed} por lo tanto es mayor`);
  } else {
    alert(`Bienvenido ${nom} ${ape}, su edad es ${ed} por lo tanto es menor`);
  }
}

//Ejercicio2
//para opb
let btn1 = Array.from(document.getElementsByClassName("vm1"));
for (let i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", () => {
    let dis1 = document.querySelector(".opb--srmd");
    let mos1 = dis1.style.display;
    if (mos1 === "none") {
      dis1.style.display = "block";
    } else {
      dis1.style.display = "block";
    }
  });
}

function mostrar() {
  let opbas = document.querySelector(".opb--srmd");
  opbas.addEventListener("click", () => {
    let oper = document.querySelector(".opb--hacer");
    let op = oper.style.display;

    if (op === "") {
      oper.style.display = "block";
    } else {
      oper.style.display = "";
    }
  });
}
mostrar();

//Num para operaciones básicas
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");

//Variable general para los resultados
let resultado;

//Botones
const mas = document.getElementById("mas");
mas.addEventListener("click", (eS) => {
  eS.preventDefault();

  resultado = Number(num1.value) + Number(num2.value);

  resOb.innerHTML = resultado;
});

const res = document.getElementById("res");
res.addEventListener("click", (eR) => {
  eR.preventDefault();

  resultado = Number(num1.value) - Number(num2.value);

  resOb.innerHTML = resultado;
});

const mul = document.getElementById("mul");
mul.addEventListener("click", (eM) => {
  eM.preventDefault();

  resOb.innerHTML = resultado;

  resultado = Number(num1.value) * Number(num2.value);

  resOb.innerHTML = resultado;
});

const vid = document.getElementById("vid");
vid.addEventListener("click", (eV) => {
  eV.preventDefault();

  resultado = Number(num1.value) / Number(num2.value);

  resOb.innerHTML = resultado;
});

const mod = document.getElementById("mod");
mod.addEventListener("click", (em) => {
  em.preventDefault();

  resultado = Number(num1.value) % Number(num2.value);

  resOb.innerHTML = resultado;
});

//Mostrar los resultados
let resu = document.getElementById("resu");
resu.addEventListener("click", alerta);
function alerta(eRu) {
  eRu.preventDefault();
  alert(`El resultado de la operación es: ${resultado}`);
}

/*let resu = document.getElementById("resu");
resu.addEventListener("click", (eRu) => {
  eRu.preventDefault();
  let imp = document.querySelector("resOb");
  imp = resultado;
}); */

//Para ing num 3 a 17
const btn = Array.from(document.getElementsByClassName("vmp"));
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    let dis = document.querySelector(".article--cajaR");
    let mos = dis.style.display;
    if (mos === "") {
      dis.style.display = "block";
    } else {
      dis.style.display = "";
    }
  });
}

//variable global para ejercicios del 3 al 17
let numP = document.getElementById("numO");

//Para ver resultados
let btn3 = Array.from(document.querySelectorAll(".vm3"));
for (let i = 0; i < btn3.length; i++) {
  btn3[i].addEventListener("click", () => {
    let dis3 = document.querySelector(".res--3");
    let mos3 = dis3.style.display;
    if (mos3 === "") {
      dis3.style.display = "block";
      //operación
      resultado = Number(numP.value) * 3;
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje3 = document.getElementById("eje3");
      eje3.innerHTML = resultado;
    } else {
      dis3.style.display = "";
    }
  });
}

let btn4 = Array.from(document.querySelectorAll(".vm4"));
for (let i = 0; i < btn4.length; i++) {
  btn4[i].addEventListener("click", () => {
    let dis4 = document.querySelector(".res--4");
    let mos4 = dis4.style.display;
    if (mos4 === "none") {
      dis4.style.display = "block";
      //operación
      resultado = Number(numP.value) / 2;
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje4 = document.getElementById("eje4");
      eje4.innerHTML = resultado;
    } else {
      dis4.style.display = "none";
    }
  });
}

let btn5 = Array.from(document.querySelectorAll(".vm5"));
for (let i = 0; i < btn5.length; i++) {
  btn5[i].addEventListener("click", () => {
    let dis5 = document.querySelector(".res--5");
    let mos5 = dis5.style.display;
    if (mos5 === "none") {
      dis5.style.display = "block";
      //operación
      resultado = Number(numP.value) / 3;
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje5 = document.getElementById("eje5");
      eje5.innerHTML = resultado;
    } else {
      dis5.style.display = "none";
    }
  });
}

let btn6 = Array.from(document.querySelectorAll(".vm6"));
for (let i = 0; i < btn6.length; i++) {
  btn6[i].addEventListener("click", () => {
    let dis6 = document.querySelector(".res--6");
    let mos6 = dis6.style.display;
    if (mos6 === "none") {
      dis6.style.display = "block";
      //operación
      resultado = Number(numP.value) - 5;
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje6 = document.getElementById("eje6");
      eje6.innerHTML = resultado;
    } else {
      dis6.style.display = "none";
    }
  });
}

let btn7 = Array.from(document.querySelectorAll(".vm7"));
for (let i = 0; i < btn7.length; i++) {
  btn7[i].addEventListener("click", () => {
    let dis7 = document.querySelector(".res--7");
    let mos7 = dis7.style.display;
    if (mos7 === "none") {
      dis7.style.display = "block";
      //operación
      resultado = Number(numP.value) * Number(numP.value);
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje7 = document.getElementById("eje7");
      eje7.innerHTML = resultado;
    } else {
      dis7.style.display = "none";
    }
  });
}

let btn8 = Array.from(document.querySelectorAll(".vm8"));
for (let i = 0; i < btn8.length; i++) {
  btn8[i].addEventListener("click", () => {
    let dis8 = document.querySelector(".res--8");
    let mos8 = dis8.style.display;
    if (mos8 === "none") {
      dis8.style.display = "block";
      //operación
      function multiplos() {
        for (let i = 0; i <= numP.value; i++) {
          if (i % 2 === 0) {
            resultado += i + ", ";
            //resultado
            alert(`el resultado es ${resultado}`);
            //impresión en html
            let eje8 = document.getElementById("eje8");
            eje8.innerHTML = resultado;
          }
        }
      }
      multiplos();
    } else {
      dis8.style.display = "none";
    }
  });
}

let btn9 = Array.from(document.querySelectorAll(".vm9"));
for (let i = 0; i < btn9.length; i++) {
  btn9[i].addEventListener("click", () => {
    let dis9 = document.querySelector(".res--9");
    let mos9 = dis9.style.display;
    if (mos9 === "none") {
      dis9.style.display = "block";
      //usando operador ternario
      Number(numP.value % 2 == 0)
        ? //SI ES TRUE
          (alert(`el número ${Number(numP.value)} es PAR`),
          (eje9.innerHTML = `el número ${Number(numP.value)} es PAR`))
        : // SI ES FALSE
          (alert(`el número ${Number(numP.value)} es IMPAR`),
          (eje9.innerHTML = `el número ${Number(numP.value)} es IMPAR`));
      /* op(); */
    } else {
      dis9.style.display = "none";
    }
  });
}
//otra opcion para ejercicio9
/* function op() {
  resultado = Number(numP.value) % 2;
  if (resultado === 0) {
    alert(`el número ${Number(numP.value)} es PAR`);
    //impresión en html
    let eje9 = document.getElementById("eje9");
    eje9.innerHTML = `el número ${Number(numP.value)} es PAR`;
  } else if (resultado >= 1) {
    alert(`el número ${Number(numP.value)} es IMPAR`);
    //impresión en html
    eje9.innerHTML = `el número ${Number(numP.value)} es IMPAR`;
  }else{
    alert(`el número ${Number(numP.value)} es CERO`);
    //impresión en html
    let eje9 = document.getElementById("eje9");
    eje9.innerHTML = `el número ${Number(numP.value)} es CERO`;
  }
} */

let btn10 = Array.from(document.querySelectorAll(".vm10"));
for (let i = 0; i < btn10.length; i++) {
  btn10[i].addEventListener("click", () => {
    let dis10 = document.querySelector(".res--10");
    let mos10 = dis10.style.display;
    if (mos10 === "none") {
      dis10.style.display = "block";
      //operación
      Number(numP.value < 0)
        ? (alert(`El número ${Number(numP.value)} es NEGATIVO`),
          (eje10 = document.getElementById("eje10")),
          (eje10.innerHTML = `El número ${Number(numP.value)} es NEGATIVO`))
        : (alert(`El número ${Number(numP.value)} es POSITIVO`),
          (eje10.innerHTML = `El número ${Number(numP.value)} es POSITIVO`));
    } else {
      dis10.style.display = "none";
    }
  });
}

let btn11 = Array.from(document.querySelectorAll(".vm11"));
for (let i = 0; i < btn11.length; i++) {
  btn11[i].addEventListener("click", () => {
    let dis11 = document.querySelector(".res--11");
    let mos11 = dis11.style.display;
    if (mos11 === "none") {
      dis11.style.display = "block";

      //operación d
      let btnDb = document.getElementById("db");
      btnDb.addEventListener("mouseover", () => {
        resultado = Number(numP.value) * 2;
        alert(`el resultado es ${resultado}`);
        let eje11 = document.getElementById("eje11");
        eje11.innerHTML = `el resultado es ${resultado}`;

        let btnCd = document.getElementById("cd");
        btnCd.addEventListener("mousedown", () => {
          resultado = Number(numP.value) * 4;
          alert(`el resultado es ${resultado}`);
          let eje111 = document.getElementById("eje11--1");
          eje111.innerHTML = `el resultado es ${resultado}`;
        });
      });
    } else {
      dis11.style.display = "none";
    }
  });
}

let btn12 = Array.from(document.querySelectorAll(".vm12"));
for (let i = 0; i < btn12.length; i++) {
  btn12[i].addEventListener("click", () => {
    let dis12 = document.querySelector(".res--12");
    let mos12 = dis12.style.display;
    if (mos12 === "none") {
      dis12.style.display = "block";
      //operación
      resultado = "pte";
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje12 = document.getElementById("eje12");
      eje12.innerHTML = resultado;
    } else {
      dis12.style.display = "none";
    }
  });
}

let btn13 = Array.from(document.querySelectorAll(".vm13"));
for (let i = 0; i < btn13.length; i++) {
  btn13[i].addEventListener("click", () => {
    let dis13 = document.querySelector(".res--13");
    let mos13 = dis13.style.display;
    if (mos13 === "none") {
      dis13.style.display = "block";
      //operación
      resultado = "pte";
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje13 = document.getElementById("eje13");
      eje13.innerHTML = resultado;
    } else {
      dis13.style.display = "none";
    }
  });
}

let btn14 = Array.from(document.querySelectorAll(".vm14"));
for (let i = 0; i < btn14.length; i++) {
  btn14[i].addEventListener("click", () => {
    let dis14 = document.querySelector(".res--14");
    let mos14 = dis14.style.display;
    if (mos14 === "none") {
      dis14.style.display = "block";
      //operación
      for (let i = 1; i < Number(numP.value); i++) {
        if (i % 2 !== 0) {
          Number((resultado = resultado + i));
          console.log(resultado);
        }
      }
      //resultado
      console.log(Number(numP.value));
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje14 = document.getElementById("eje14");
      eje14.innerHTML = resultado;
    } else {
      dis14.style.display = "none";
    }
  });
}

let btn15 = Array.from(document.querySelectorAll(".vm15"));
for (let i = 0; i < btn15.length; i++) {
  btn15[i].addEventListener("click", () => {
    let dis15 = document.querySelector(".res--15");
    let mos15 = dis15.style.display;
    if (mos15 === "none") {
      dis15.style.display = "block";
      //operación
      resultado = "pte";
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje15 = document.getElementById("eje15");
      eje15.innerHTML = resultado;
    } else {
      dis15.style.display = "none";
    }
  });
}

let btn16 = Array.from(document.querySelectorAll(".vm16"));
for (let i = 0; i < btn16.length; i++) {
  btn16[i].addEventListener("click", () => {
    let dis16 = document.querySelector(".res--16");
    let mos16 = dis16.style.display;
    if (mos16 === "none") {
      dis16.style.display = "block";
      //operación
      resultado = "pte";
      //resultado
      alert(`el resultado es ${resultado}`);
      //impresión en html
      let eje16 = document.getElementById("eje16");
      eje16.innerHTML = resultado;
    } else {
      dis16.style.display = "none";
    }
  });
}

//Mostrar campos de eje17
let btn17 = Array.from(document.querySelectorAll(".mm"));
for (let i = 0; i < btn17.length; i++) {
  btn17[i].addEventListener("click", () => {
    let dis17 = document.querySelector(".res--17");
    let mos17 = dis17.style.display;
    if (mos17 === "none") {
      dis17.style.display = "block";
    } else {
      dis17.style.display = "none";
    }
  });
}
//operación eje17
let btn17_1 = Array.from(document.querySelectorAll(".vm17"));
for (let i = 0; i < btn17_1.length; i++) {
  btn17_1[i].addEventListener("click", () => {
    let numd = document.getElementById("numD");
    if (Number(numP.value) % Number(numd.value) !== 0) {
      alert(
        `El número ${Number(numP.value)} no es divisible por ${Number(
          numD.value
        )}`
      );
      let eje17 = document.getElementById("eje17");
      eje17.innerHTML = `El número ${Number(
        numP.value
      )} no es divisible por ${Number(numD.value)}`;
    }else  if (Number(numP.value) % Number(numd.value) === 0){
      alert(
        `El número ${Number(numP.value)} si es divisible por ${Number(
          numD.value
        )}`
      );
      eje17.innerHTML = `El número ${Number(
        numP.value)} si es divisible por ${Number(numD.value)}`;
    }
  });
}
