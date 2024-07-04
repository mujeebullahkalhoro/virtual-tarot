document.addEventListener('DOMContentLoaded', function(){
    const bars = document.querySelector('.bars');
    const sidebar = document.querySelector('.sidebar');
    
    bars.addEventListener('click', function(e) {
      e.preventDefault();
      sidebar.classList.add('show');
    });
    
    document.addEventListener('click', function(e) {
      if (!sidebar.contains(e.target) && !bars.contains(e.target)) {
        sidebar.classList.remove('show');
      }
    });
});

//  const petition=document.querySelector('#petition-field');
//  const displayString = "Peter please answer the following question";
//  petition.addEventListener('keydown' ,function(e){

//   if(e.key==='.'){
     

//   }

//  });

document.addEventListener('DOMContentLoaded', function() {
  const petitionField = document.querySelector('#petition-field');
  const displayString = "Peter please answer the following question";
  let actualText = '';

  petitionField.addEventListener('keydown', function(event) {
      // Prevent the actual character from appearing in the input field
      if (event.key !== 'Backspace' && event.key.length === 1) {
          event.preventDefault();

          // Check if the first character is a period
          if (actualText.length === 0 && event.key === '.') {
              actualText += event.key;

              // Replace the input with the displayString immediately
              petitionField.value = displayString.slice(0, actualText.length);
          } else if (actualText.length > 0 && actualText[0] === '.') {
              if (actualText.length < displayString.length) {
                  // Append the typed character to actualText
                  actualText += event.key;

                  // Generate the display text from displayString
                  let displayText = '';
                  for (let i = 0; i < actualText.length; i++) {
                      displayText += displayString[i];
                  }

                  // Update the input field with the display text
                  petitionField.value = displayText;
              } else {
                  // Move cursor one step forward without displaying additional characters
                  actualText += event.key;
                  petitionField.value = displayString;
                  petitionField.setSelectionRange(displayString.length + (actualText.length - displayString.length), displayString.length + (actualText.length - displayString.length));
              }
          } else {
              // If the first character is not a period, append the character to actualText and update the field
              actualText += event.key;
              petitionField.value = actualText;
          }
      } else if (event.key === 'Backspace') {
          // Handle backspace
          actualText = actualText.slice(0, -1);

          // Generate the display text from displayString if the first character is a period
          if (actualText.length > 0 && actualText[0] === '.') {
              let displayText = '';
              for (let i = 0; i < actualText.length; i++) {
                  displayText += displayString[i];
              }

              // Update the input field with the display text
              petitionField.value = displayText;
          } else {
              // If the input does not start with a period, update the input field with the actual text
              petitionField.value = actualText;
          }
      }
  });
});
