var dersler = ['matematik', 'fizik', 'kimya']
var visibleDersler = ['matematik', 'fizik', 'kimya']
$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  $( ".target" ).on( "change", function() {
    alert( "Handler for `change` called." );
  } );
