import * as firebase from 'firebase'; 
export class AuthService{

    token : string;
    validated : boolean = false; 
    attempted : boolean = false; 
    signUpUser(email: string, password: string){

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => console.log(error))
    }

    signInUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            
            (response) => {

                firebase.auth().currentUser.getToken().then((token)=>{

                    this.token = token;
                    this.validated = true; 
                    
                })
            }
            
            ).catch(error => {
            this.attempted = true;
            console.log(error)});
    }

    getToken(){
       firebase.auth().currentUser.getToken().then((token: string) => 
       {
           this.token = token;
       })
       return this.token;
    }

    getValidationStatus() {
        return this.validated;
    }

    logOut(){
        firebase.auth().signOut();
        this.token = null; 
        this.validated = false; 
        console.log(this.getValidationStatus());
    }
}
