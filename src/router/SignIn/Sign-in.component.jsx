import { Fragment } from "react"
import {signInWithGooglePopup} from '../../utlis/Firebase/Firebase.utils'
const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }
    return (
        <Fragment>
            <div>Sign In</div>
            <button onClick={logGoogleUser}>Sign in with google</button>
        </Fragment>
    )
}

export default SignIn;