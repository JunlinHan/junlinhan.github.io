  function checkForm(form)
  {
    // validation fails if the input is blank
    if(form.inputfield.value == "") {
      alert("Error: Input is empty!");
      form.inputfield.focus();
      return false;
    }

    // regular expression to match only alphanumeric characters and spaces
    var re = /^[\w ]+$/;

    // validation fails if the input doesn't match  regular expression
    if(!re.test(form.inputfield.value)) {
      alert("Error: Input contains invalid characters!");
      form.inputfield.focus();
      return false;
    }
    if(form.password1.value =="" ){
      alert("Error: password is empty");
      //if password is empty
      form.password1.focus();
      return false;
    }else if(form.password1.value != form.password2.value){
      //if password dont match
      alert("Error: Different password");
      form.password1.focus();
      return false;
  }  if(form.inputfield.value !="JUNLIN" ){
      alert("Error: ID is False");
      //my name JUNLIN
      form.password1.focus();
      return false;
  }
    if(form.password1.value !="123456" ){
      alert("Error: password is wrong");
      //if password is wrong
      form.password1.focus();
      return false;
        }

    // validation was successful

    return true;
  }
