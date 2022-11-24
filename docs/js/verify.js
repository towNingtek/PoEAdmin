function txn_verify(data, pub, sig) {
  var dataJSON = {};
  var resultData = "";

  dataJSON.data = data;
  dataJSON.pub = pub;
  dataJSON.sig = sig;

  $.ajax({
    url: "https://poe.townway.com.tw/credentials/verify",
    type: "POST",
    async: false,
    crossDomain: true,
    contentType: "application/json",
    headers : {"Authorization":"Basic Z2VvOjJ1bGlkZ29v"},
    data: JSON.stringify(dataJSON),
    success: function(returnData) {
      // const obj = JSON.parse(returnData);
      resultData = returnData;
    },
      error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  });
  return resultData;
}

$(function () {
    $("form").on("submit", function(e){
      e.preventDefault();
      
      var data = document.getElementById("data").value;
      var pub = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC7uxA9x5o41by9bAE3bBV/VB8i\nhTIPnusY7dy7ZnuY6oDWUa8SZDpoJ/WZPqTiunScrsRmm3hADQ6kuv9zQAyaTO0+\nzpqE0KCP5DSxmrbd9c+uRd7K0W1i0qbNwmmrSViB9pVSnuLC+F8Fdzh12Kyctwro\n+7jtenUcPfeiQ28+twIDAQAB\n-----END PUBLIC KEY-----";
      // document.getElementById("pub").value;
      var sig = document.getElementById("sig").value;

      var response = txn_verify(data, pub, sig);

      if (response.status == false) {
        document.getElementById("verifyResponse").innerHTML = "verified failed.";
      } else {
        document.getElementById("verifyResponse").innerHTML = "verified successed."
      }
      });
});
