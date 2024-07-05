const bars = document.querySelector(".bars");
const sidebar = document.querySelector(".sidebar");

bars.addEventListener("click", function (e) {
  e.preventDefault();
  sidebar.classList.add("show");
});

document.addEventListener("click", function (e) {
  if (!sidebar.contains(e.target) && !bars.contains(e.target)) {
    sidebar.classList.remove("show");
  }
});

const petitionField = document.querySelector("#petition-field");
const dummyText = "Peter please answer the following question";
let isDotApplied = false;
let innerText = "";


petitionField.addEventListener("keydown", function (event) {
  if (event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }
  const key = event.key;
  const petitionText = petitionField.value;

  if (petitionText.length === 0) {
    isDotApplied = false;
  }

  // default functionality until dot;
  if (isDotApplied || key === ".") event.preventDefault();
  else return;

  if (event.key === ".") {
    isDotApplied = true;
    const idx = petitionField.value.length;

    if (idx > 41) petitionField.value += " ";
    else petitionField.value += dummyText[idx];
  } else {
    const idx = petitionField.value.length;

    if (key === "Backspace") {
      const start = petitionField.selectionStart;
      const end = petitionField.selectionEnd;

      // If all text is selected
      if (start === 0 && end === petitionText.length) {
        innerText = "";
        petitionField.value = "";
      } else {
        innerText = innerText.slice(0, -1);
        petitionField.value = petitionText.slice(0, -1);
      }
    } else if (idx > 41) {
      petitionField.value += " ";
      innerText += key;
    } else {
      petitionField.value += dummyText[idx];
      innerText += key;
    }
  }

  console.log("Inner Text =", innerText);
});

// set functionality on button
const questionField=document.querySelector('.question-text')
const button=document.querySelector('button');

button.addEventListener('click',function(e){

  const text=document.querySelector('.text');
  if(petitionField.value==="" && questionField.value===""){
    text.innerHTML='You must enter a valid petition and question.'
  }
  else if(petitionField.value===""){
    text.innerHTML='You must enter a valid petition.'
  }
  else if(questionField.value===""){
    text.innerHTML='You must enter a valid question.'
  }
  else{
    if(innerText===""){
      text.innerHTML="It seems you have no idea about how to do the petition."

    }else{
      
      text.id='answer';

      text.innerHTML=`<p>RESPONSE: ${innerText}<p>`;
      
    } 
    
  }

  


});

