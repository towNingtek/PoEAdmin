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
      var pub = document.getElementById("pub").value;
      var sig = document.getElementById("sig").value;

      var response = txn_verify(data, pub, sig);

      if (response.status == False) {
        document.getElementById("verifyResponse").innerHTML = "verified failed.";
      } else {
        document.getElementById("verifyResponse").innerHTML = "verified successed."
      }
      });
});
