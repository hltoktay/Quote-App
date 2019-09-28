import { Google } from 'expo';
import Constants from 'expo-constants'

const loginAsync = async () =>  {
    try {
      const result = await Google.logInAsync({
        androidClientId: Constants.manifest.extra.googleAppId.android,
        iosClientId: Constants.manifest.extra.googleAppId.ios,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success' ) {
        return Promise.resolve(result.accessToken);
    }

    return Promise.reject('No success');
} catch (error) {
    return Promise.reject(error);
}
  }

  export const GoogleApi = {
    loginAsync
  }