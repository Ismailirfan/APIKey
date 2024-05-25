$(document).ready(function() {
  const API_KEY = 'AIzaSyAAVEyh_nSUsyhpZq-N1oeb1qGNanbz_Kc';
  const FOLDER_ID = '1_iCnZEDJpQEK524YzL3v8RWUtM9sDqge'; // Replace with your public Google Drive folder ID

  $('#listFiles').on('click', function() {
    listFiles();
  });

  function listFiles() {
    $.ajax({
      url: `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}`,
      method: 'GET',
      success: function(data) {
        $('#fileList').empty();
        data.files.forEach(file => {
          $('#fileList').append(`<li>${file.name} - <a href="https://drive.google.com/file/d/${file.id}/view" target="_blank">View</a></li>`);
          
        });
      },
      error: function(error) {
        console.error('Error:', error);
      }
    });
  }
     window.fetchFileContent = function(fileId) {
        $.ajax({
          url: `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${API_KEY}`,
          method: 'GET',
          success: function(data) {
            $('#fileContent').html(data);
          },
          error: function(error) {
            console.error('Error:', error);
          }
        });
      }
});
        
