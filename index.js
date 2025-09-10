const check = document.getElementById("group1");
const check1 = document.getElementById("group2");
const check2 = document.getElementById("group3");
const check3 = document.getElementById("group4");
const check4 = document.getElementById("group5");
const check5 = document.getElementById("group6");
const check6 = document.getElementById("group7");
const check7 = document.getElementById("group8");

const value = document.getElementById("value");
const value1 = document.getElementById("value1");
check.onclick = function () {
   value.textContent = `Your can Take Blood From :
   O+  O-  A+  A-`;
   value1.textContent = `Your can Give Blood To : 
   A+  AB+`;
}
check1.onclick = function () {
   value.textContent = `Your can Take Blood From :
   O+  O-  B+  B-`;
   value1.textContent = `Your can Give Blood To : 
   B+  AB+`;
}
check2.onclick = function () {
   value.textContent = `Your can Take Blood From :
   O+  O-  `;
   value1.textContent = `Your can Give Blood To : 
   O+  A+  B+  AB+`;
}
check3.onclick = function () {
   value.textContent = `Your can Take Blood From :
   O+  O-  A+  A  B+  B-  AB+  AB-`;
   value1.textContent = `Your can Give Blood To : 
    AB+`;
}
check4.onclick = function () {
   value.textContent = `Your can Take Blood From :
     O-   A-`;
   value1.textContent = `Your can Give Blood To : 
   A+  AB+  A-  AB-`;
}
check5.onclick = function () {
   value.textContent = `Your can Take Blood From :
     O- `;
   value1.textContent = `Your can Give Blood To : 
   A+  AB+  A-  AB-  B+  B-  O+  O-`;
}
check6.onclick = function () {
   value.textContent = `Your can Take Blood From :
     O-    B-`;
   value1.textContent = `Your can Give Blood To : 
   B+  AB+  B-  AB-`;
}
check7.onclick = function () {
   value.textContent = `Your can Take Blood From :
   O+  B-  AB+  A-`;
   value1.textContent = `Your can Give Blood To : 
   AB-  AB+`;
}
//const value=document.getElementById("value");const check7=document.getElementById("group8");



const check8 = document.getElementById("but");
const value3 = document.getElementById("but");
check8 = onclick = function () {
   value3.textContent = `sumitted`;
}
