import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyB9Xadz9hv6Y9uo2nosU1hNDszRCvLjZF8",
    authDomain: "groceryapp-fc58c.firebaseapp.com",
    databaseURL: "https://groceryapp-fc58c.firebaseio.com",
    projectId: "groceryapp-fc58c",
};

firebase.initializeApp(config);

export const database = firebase.database();
export const auth = firebase.auth();
