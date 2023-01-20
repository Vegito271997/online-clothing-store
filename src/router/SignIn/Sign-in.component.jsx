import { Fragment } from "react"
import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utlis/Firebase/Firebase.utils'
const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <Fragment>
            <div>Sign In</div>
            <button onClick={logGoogleUser}>Sign in with google</button>
        </Fragment>
    )
}

export default SignIn;