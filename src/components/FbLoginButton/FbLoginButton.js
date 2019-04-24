import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken, AppEventsLogger } from 'react-native-fbsdk';
('');

export default class FbLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AppEventsLogger.logEvent('loggedIn');
              AccessToken.getCurrentAccessToken().then(data => {
                console.log(data.accessToken.toString());
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View>
    );
  }
}
