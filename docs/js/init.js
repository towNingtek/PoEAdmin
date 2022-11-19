function init() {
  // Get path
  var path = window.location.pathname;
  var page = path.split("/").pop();

  if (page == "dashboard.html") {
    alert("dashboard")

    var list_txns = txn_read();
    alert(JSON.stringify(list_txns));

  }

}