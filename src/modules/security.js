var OAuth = require('@zalando/oauth2-client-js')

export const initSecurity = () => {

  console.log('Init security')
  const github = new OAuth.Provider({
    id: 'github',   // required
    authorization_url: 'https://github.com/login/oauth/authorize'
  })

  let response
    var request = new OAuth.Request({
      client_id: '40b8bbcbd569eb863c18',  // required
      redirect_uri: 'http://localhost:3000'
    });

// Give it to the provider
    var uri = github.requestToken(request);

    // Later we need to check if the response was expected
    // so save the request
    github.remember(request);

    window.location.href = uri

}
