import firebase from "firebase";

export default class DBProvider{
    public static readonly TABLE_COMPANY = "company";
    public static readonly TABLE_FEATURES = "features";
    public static readonly TABLE_SEO = "seo";
    public static readonly TABLE_TEAM = "team";

    constructor() {
        let firebaseConfig = {
            apiKey: "AIzaSyC4w_uz8deOLRoeTPuk-yaap923G7S67S4",
            authDomain: "shm-sl.firebaseapp.com",
            databaseURL: "https://shm-sl.firebaseio.com",
            projectId: "shm-sl",
            storageBucket: "shm-sl.appspot.com",
            messagingSenderId: "968800732280",
            appId: "1:968800732280:web:b7ad6d231767c35950198d",
            measurementId: "G-CVR4D5J5HG"
        };
        firebase.initializeApp(firebaseConfig);
        firebase.analytics();
    }

    getDB(){
        return firebase.database();
    }
}