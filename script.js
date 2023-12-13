
var links = document.querySelectorAll('.group-box a');
Array.from(links).forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.href);
  });
});

function showMessage() {
  var result = confirm("Do you want to download the file?");
  
  if (result) {
    console.log("User clicked Confirm");
    window.location.href = "file:///D:\\тест\\телефонный_справочник.xlsx";
  } else {
    console.log("User clicked Cancel");
    return; 
  }
}