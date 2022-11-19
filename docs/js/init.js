function init() {
  // Get path
  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page == "dashboard.html") {
    alert("dashboard")

    var list_txns = txn_read();
    alert(JSON.stringify(list_txns));

    var obj_txn_tbody = document.getElementById("txn_tbody");
    for (var index=0; index<list_txns.length; index++) {
      console.log(list_txns[index]);
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