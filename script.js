
function encrypt() {
  var plaintext = document.getElementById("plaintext").value;
  var key = document.getElementById("encryptionKey").value;
  var ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString();
  document.getElementById("encryptionResult").innerHTML = ciphertext;
}

function decrypt() {
  var ciphertext = document.getElementById("ciphertext").value;
  var key = document.getElementById("decryptionKey").value;
  var bytes = CryptoJS.AES.decrypt(ciphertext, key);
  var plaintext = bytes.toString(CryptoJS.enc.Utf8);
  document.getElementById("decryptionResult").innerHTML = plaintext;
}