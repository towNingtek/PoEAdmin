function txn_verify() {
  var dataJSON = {};
  var resultData = {};

  $.ajax({
    url: "https://geo.townway.com.tw/txn/verify",
    type: "POST",
    async: false,
    crossDomain: true,
    contentType: "application/json",
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

      alert("verify!");
      
      /* var tag = document.getElementById("TransactionTag").value;
      var msg = document.getElementById("TransactionMsg").value; */

      var response = txn_verify();
      document.getElementById("verifyResponse").innerHTML = response;
    });
});
