const userId = getIdQueryParam();
const DOMAIN = 'http://localhost:3000'
const API_ROOT = DOMAIN + '/users'

$(function () {
  getUsers();
})

function getUsers(){
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/users",
  }).done(function(users) {
    renderContent(users)
  });
}

function createUsers(user){
  $.ajax({
    method: "POST",
    url: "http://localhost:3000/users",
    data: user = { 
      name : $('#createName').val(),
      gender : $('#createGender').val(),
      email : $('#createEmail').val(),
      phone : $('#createPhone').val()
    }
  }).done(function(users) {
    getUsers()
  });
}
function deleteUser(id){
  $.ajax({
    method: "DELETE",
    url: "http://localhost:3000/users/" + id,
  }).done(function(users) {
    getUsers()
  });
}
/*function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  user = {
    id : getParameterByName('id')
  }
  */
  function getIdQueryParam() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }
  function updateUserAPI(userId, userInfo, redirectLink) {
    $.ajax({
      method: 'PUT',
      url: API_ROOT + '/' + userId,
      data: userInfo = {
        name : $('#createName').val(),
        gender : $('#createGender').val(),
        email : $('#createEmail').val(),
        phone : $('#createPhone').val()
      }
    }).done(function () {
      if (redirectLink) window.location.href = redirectLink
    })
  }
  userInfo = {
    name : $('#createName').val(),
    gender : $('#createGender').val(),
    email : $('#createEmail').val(),
    phone : $('#createPhone').val()
  }
  function updateUser() {

    updateUserAPI(userId, userInfo, 'http://localhost:3000');
  }
  
/*function updateUsers(id, user){
    $.ajax({
      method: "PUT",
      url: "http://localhost:3000/users/" + id,
      data: user = { 
        id : getParameterByName('id'),
        name : $('#createName').val(),
        gender : $('#createGender').val(),
        email : $('#createEmail').val(),
        phone : $('#createPhone').val()
    }
  }).done(function(users) {
      getUsers()
  });
}
*/

function renderContent(users) {
  var htmlContent = '';

  for (let i = 0; i < users.length; i++) {
    htmlContent += '<tr>';

    htmlContent += '<td>' + users[i].name + '</td>';
    htmlContent += '<td>' + users[i].gender + '</td>';
    htmlContent += '<td>' + users[i].email + '</td>';
    htmlContent += '<td>' + users[i].phone + '</td>';
    htmlContent += '<td>' + '<a style="color : #349feb" href="http://localhost:3000/editUsers.html?id='+users[i].id+'"><i class="fas fa-edit"><p style="font-family:roboto; display: inline; font-weight: normal"> Sửa</p></i></a>&nbsp;&nbsp;|&nbsp;&nbsp;'
    +'<a style="color : #f05050" href=""><i onclick="deleteUser(' + users[i].id + ')" class="fas fa-trash-alt"><p style="font-family:roboto; display: inline; font-weight: normal"> Xóa</p></i></a>' + '</td>'
    htmlContent += '</tr>';
  }

  $('#myTable tbody').html(htmlContent);
}