export const SIGNUP = 'SIGNUP';

export const signUp = (email, password) => {
    return async dispatch => {
        const response = await
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyByPWQKcE5cE-q7VAAWt8mB8FShJUvNK-0",
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
        const dataFetched = await response.json();
        if (!response.ok) {
            const errorId = dataFetched.error.message;
            console.log(dataFetched.error.message)
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_EXISTS') {
                message = 'E-mail adress already used';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'Invalid password';
            } else if (errorId === 'USER_DISABLED') {
                message = 'USER_DISABLED';
            }
            throw new Error(message);
        }
        dispatch({type: SIGNUP, token: dataFetched.token, userId: dataFetched.userId});
    };
};

export const LOGIN = 'LOGIN';
export const logIn = (email, password) => {
    return async dispatch => {
        const response = await
            fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyByPWQKcE5cE-q7VAAWt8mB8FShJUvNK-0",
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
        const dataFetched = await response.json();
        if (!response.ok) {
            const errorId = dataFetched.error.message;
            console.log(dataFetched.error.message)
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

        dispatch({type: LOGIN, token: dataFetched.token, userId: dataFetched.userId});
    };
};
