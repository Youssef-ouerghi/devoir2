function verif() {
  var pseudo = document.f.t1.value;
  var email = document.f.t2.value;
  var mpass1 = document.f.t3.value;
  var mpass2 = document.f.t4.value;
  var vetes = document.f.type[0].checked || document.f.type[1].checked;

  if (pseudo == "" || email == "" || mpass1 == "" || mpass2 == "" || !vetes) {
    alert("vous devez remplir tous les cham!!!");
    return false;
  }
  if (alpha(pseudo)) {
    alert("choisir un pseudo alphabetique");
    return false;
  }
  var l = email.length;
  if (email.substr(l - 3).toUpperCase() != ".TN") {
    alert("email non valide");
    return false;
  }
  var l = email.length;
  var suffixe = email.charat(l - 3) + email.charAt(l - 2) + email.charat(l - 1);
  if (suffixe.toUpperCase() != ".TN") {
    alert("email non valide!!!");
    return false;
  }
  if (mpass1 != mpass2) {
    alert("mots de passe non identiques!!!!");
    return false;
  }
}

function alpha(pseudo) {
  var ok = true;
  for (var i = 0; i < ch.length; i++) {
    if (ch.charAt(i).toUpperCase() < "A" || ch.charAt(i).toUpperCase() > "Z") {
      ok = false;
    }
  }
  return ok;
}
