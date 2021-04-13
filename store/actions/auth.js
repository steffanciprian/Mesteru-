export const SIGNUP = 'SIGNUP';

export const signUp = (email, password) => {
    return async dispatch => {
        const response = await
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBgApBdfHz7A9xBclQNc8JbWVf5KTZY9w",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    })
                })
        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            console.log(errorResData.error.message)
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'Email could not be found';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'Invalid password';
            } else if (errorId === 'USER_DISABLED') {
                message = 'USER_DISABLED';
            }
            throw new Error(message);
        }
        dispatch({type: SIGNUP});
    };
};

export const LOGIN = 'LOGIN';
export const logIn = (email, password) => {
    return async dispatch => {
        const response = await
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBgApBdfHz7A9xBclQNc8JbWVf5KTZY9w",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true
                    })
                })
                    if (!response.ok) {
                        const errorResData = await response.json();
                        const errorId = errorResData.error.message;
                        console.log(errorResData.error.message)
                        let message = 'Something went wrong!';
                        if (errorId === 'EMAIL_NOT_FOUND') {
                            message = 'Email could not be found';
                        } else if (errorId === 'EMAIL_EXISTS') {
                            message = 'Account already exists';
                        } else if (errorId === 'INVALID_PASSWORD') {
                            message = 'Invalid password';
                        }
                        throw new Error(message);
                    }
        //     .then(response => {
        //     if (!response.ok) {
        //         const errorResData = await response.json();
        //         const errorId = response.error.message;
        //         console.log(response.error.message)
        //         let message = 'Something went wrong!';
        //         if (errorId === 'EMAIL_NOT_FOUND') {
        //             message = 'Email could not be found';
        //         } else if (errorId === 'EMAIL_EXISTS') {
        //             message = 'Account already exists';
        //         } else if (errorId === 'INVALID_PASSWORD') {
        //             message = 'Invalid password';
        //         }
        //     }
        // })

        dispatch({type: LOGIN});
    };
};
