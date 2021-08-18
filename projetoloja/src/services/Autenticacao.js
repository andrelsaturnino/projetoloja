function loginApiCall(data) {
    console.log("googleUserProfile", data);
    this.$router.push("/profile");
  }


export const googleAuth = () => {
    
        let gapi = window.gapi;
        let clientId =
          "105340661796-ps3rp608occhrpkrjonncrkk84dkq8hr.apps.googleusercontent.com";
        let apiKey = "AIzaSyCUdv8qAgV3QbzuzMOHdUjMawQFDnq_JrU";
        let discoveryDocs = [
          "https://www.googleapis.com/discovery/v1/apis/oauth2/v2/rest",
        ];
        let scope = "https://www.googleapis.com/auth/userinfo.profile";
        gapi.load("client:auth2", () => {
          gapi.client
            .init({
              apiKey,
              clientId,
              discoveryDocs,
              scope,
            })
            .then(() => {
              if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                googleUserProfile = gapi.auth2
                  .getAuthInstance()
                  .currentUser.get();
                loginApiCall(this.googleUserProfile);
              } else {
                gapi.auth2
                  .getAuthInstance()
                  .signIn()
                  .then(() => {
                    googleUserProfile = gapi.auth2
                      .getAuthInstance()
                      .currentUser.get();
                    loginApiCall(googleUserProfile);
                  })
                  .catch((err) => {
                    alert(`Google auth error: ${err}`);
                  });
              }
            })
            .catch((err) => {
              alert(err);
            });
        });
    
} ,



