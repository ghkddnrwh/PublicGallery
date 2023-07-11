import auth from '@react-native-firebase/auth';

export async function signIn({email, password}) {
  return auth().signInWithEmailAndPassword(email, password);
}

export async function signUp({email, password}) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export async function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export async function signOut() {
  return auth().signOut();
}
