
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", submitForm);
  });
function submitForm() {
    const form = document.getElementById("form");
        const dataTable = document.getElementById("dataTable");

  if (form.checkValidity() && ((form.gender.value == 'male' || form.gender.value=='female'))) {
  const newRow = dataTable.insertRow(-1);
  newRow.insertCell(0).innerHTML = form.firstname.value;
  newRow.insertCell(1).innerHTML = form.lastname.value;
  newRow.insertCell(2).innerHTML = form.address.value;
  newRow.insertCell(3).innerHTML = form.pincode.value;
    newRow.insertCell(4).innerHTML = form.gender.value;
  
  
  const selectedFood = [];
  const foodCheckboxes = form.querySelectorAll("input[name='food']:checked");
  if (foodCheckboxes.length >= 2) {
    for (const checkbox of foodCheckboxes) {
      selectedFood.push(checkbox.value);
    }
    newRow.insertCell(5).textContent = selectedFood.join(", ");
  } else {
    alert("Please select exactly 2 food options.");
    return;
  }
  
  newRow.insertCell(6).innerHTML = form.state.value;
  newRow.insertCell(7).innerHTML = form.country.value;
  
  form.reset();
}else{
    form.reportValidity();
    alert('Please fill the all field')
}
}