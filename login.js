function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName());
   $("#email").text(profile.getEmail());
   $("#image").attr('src',profile.getImage());
   $(".data").css("display","block");
   $(".g-signIn2").css("display","block");
//    $("#password").text(profile.getPassword());
  }
  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      alert("You Have Been signed Out successfullly");
      $(".g-signedIn2".css("display","block"));
      $(".data").css("display","none")
    });
  }