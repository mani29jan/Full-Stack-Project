const logoutMeOut = async () => {

  console.log('is this working?');
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'}
  });

  if (response.ok) {
    document.location.replace('/login');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logoutMeOut);