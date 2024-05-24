$(document).ready(function() {
  $('#fetch_files_button').click(function() {
    const sharingLink = $('#sharing_link_input').val().trim();

    if (!sharingLink) {
      $('#content').text('Please enter a sharing link.');
      return;
    }

    // Make an AJAX request to fetch files from the shared folder
    $.ajax({
      url: sharingLink,
      method: 'GET', // Corrected from 'type' to 'method'
      success: function(data) {
        // Process the data or display it in the content area
        $('#content').text('Received data:\n' + JSON.stringify(data, null, 2));
      },
      error: function(xhr, status, error) {
        $('#content').text('Error fetching files: ' + error);
      }
    });
  });
});
      
