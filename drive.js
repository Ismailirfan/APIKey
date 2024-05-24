const API_KEY = 'AIzaSyAAVEyh_nSUsyhpZq-N1oeb1qGNanbz_Kc';  // Replace with your API key

$(document).ready(function() {
  $('#list_files_button').click(getFolderIdAndListFiles);
});

function getFolderIdAndListFiles() {
  const folderName = $('#folder_name').val();

  if (!folderName) {
    $('#content').text('Please enter a folder name.');
    return;
  }

  $.ajax({
    url: 'https://www.googleapis.com/drive/v3/files',
    data: {
      key: API_KEY,
      q: "mimeType='application/vnd.google-apps.folder' and name='" + folderName + "'",
      fields: 'files(id, name)',
      pageSize: 10  // You can adjust the page size as needed
    },
    success: function(data) {
      if (data.files && data.files.length > 0) {
        const folderId = data.files[0].id;  // Assuming the first matching folder is the one you want
        $('#content').append(`Folder ID: ${folderId}\n\n`);
        listFilesInFolder(folderId);
      } else {
        $('#content').text('Folder not found.');
      }
    },
    error: function(error) {
      console.error(error);
      $('#content').text('An error occurred while searching for the folder.');
    }
  });
}
