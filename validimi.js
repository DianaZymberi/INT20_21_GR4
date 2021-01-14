function validate(form){
  var re = /^[\w ]+$/;
  if (form.name.value == "") {
    alert("Error: You haven't written your name!");
    form.name.focus();
    return false;
}
if (!re.test(form.name.value)) {
  alert("Error: Your name contains invalid characters!");
  form.name.focus();
  return false;
}

if (isNaN(form.name.value) == false) {
  alert("Error: Your name is number!");
  form.name.focus();
  return false;
}
if (form.email.value == "") {
  alert("Error: You haven't written your email!");
  form.email.focus();
  return false;
}

if (form.phone.value == "") {
  alert("Error: Your haven't written your phone number!");
  form.mobile.focus();
  return false;
}

if (isNaN(form.phone.value)) {
  alert("Error: Your phone number is not a number!");
  form.phone.focus();
  return false;
}
if (form.country.value == "") {
  alert("Error: You haven't written your country!");
  form.country.focus();
  return false;
}

if (!re.test(form.country.value)) {
  alert("Error: Your country contains invalid characters!");
  form.country.focus();
  return false;
}
if (isNaN(form.country.value) == false) {
  alert("Error: Your country is number!");
  form.country.focus();
  return false;
}
if (form.city.value == "") {
  alert("Error: Input in city is empty!");
  form.city.focus();
  return false;
}

if (!re.test(form.city.value)) {
  alert("Error: Input in city contains invalid characters!");
  form.city.focus();
  return false;
}
if (isNaN(form.city.value) == false) {
  alert("Error: Your city is number!");
  form.city.focus();
  return false;
}
if (form.address.value == "") {
  alert("Error: You haven't written your address!");
  form.address.focus();
  return false;
}

if (!re.test(form.address.value)) {
  alert("Error: Your contains invalid characters!");
  form.address.focus();
  return false;
}

if (isNaN(form.address.value) == false) {
  alert("Error: Your ddress is number!");
  form.address.focus();
  return false;
}

}