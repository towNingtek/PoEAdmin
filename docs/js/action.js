function txn_read() {
  var dataJSON = {};
  var resultData = {};

  dataJSON.message = msg; 
  $.ajax({
    url: "https://geo.townway.com.tw/txn/list",
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

function txn_send(msg) {
  var dataJSON = {};
  var resultData = {};

  dataJSON.message = msg; 
  $.ajax({
    url: "https://geo.townway.com.tw/txn/send",
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
      
      var tag = document.getElementById("TransactionTag").value;
      var msg = document.getElementById("TransactionMsg").value;

      var response = txn_send(msg);
      document.getElementById("sendResponse").innerHTML = response;
    });
});
