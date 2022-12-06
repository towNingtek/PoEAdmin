function checkPermission() {
  var jwt = getLocalStorage("jwt");
  var dataJSON = {};
  dataJSON.jwt = jwt;

  var resultData = {};

  $.ajax({
    url: "https://geo.townway.com.tw/jwt/verify",
    type: "POST",
    async: false,
    crossDomain: true,
    contentType: "application/json",
    data: JSON.stringify(dataJSON),
    success: function(returnData) {
      // const obj = JSON.parse(returnData);
      resultData = JSON.parse(returnData);
    },
      error: function(xhr, ajaxOptions, thrownError){
      console.log(thrownError);
    }
  });
  return resultData;

}

function init() {
  // Get path
  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page == "dashboard.html") {
    var permission = checkPermission()
    if (permission.status == false) {
      window.location.replace("/signin.html");
      // alert("no permission!");
    }

    var list_txns = txn_read();
    var obj_txn_tbody = document.getElementById("txn_tbody");
    for (var index=0; index<list_txns.length; index++) {
      
      var obj_tr = document.createElement("tr");
      var obj_td_id = document.createElement("td");
      var obj_td_timestamp = document.createElement("td");
      var obj_td_txn_hash = document.createElement("td");
      //var obj_td_sig = document.createElement("td");
      //var obj_td_tag = document.createElement("td");
      //var obj_td_none = document.createElement("td");

      obj_td_id.innerHTML = index;
      obj_td_timestamp.innerHTML = list_txns[index].createdAt;
      obj_td_txn_hash.innerHTML = "<a href='https://explorer.iota.org/mainnet/message/"+list_txns[index].hash + "'>" + list_txns[index].hash + "</a>";
      //obj_td_sig.innerHTML = list_txns[index].hash;
      //obj_td_tag.innerHTML = list_txns[index].hash;
      //obj_td_none.innerHTML = "";

      obj_tr.append(obj_td_id);
      obj_tr.append(obj_td_timestamp);
      obj_tr.append(obj_td_txn_hash);
      //obj_tr.append(obj_td_sig);
      //obj_tr.append(obj_td_tag);
      //obj_tr.append(obj_td_none);

      obj_txn_tbody.append(obj_tr);
    }
    /*
    <tr>
        <td>000001</td>
        <td>2022/03/19 00:12</td>
        <td>N7Q4PR...</td>
        <td>1JdZnHiS...</td>
        <td>Model A</td>
        <td></td>
    </tr>
    */
  }
}
