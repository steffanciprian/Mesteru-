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
            }).then(response =>
            response.json()
        ).then(response => {
            console.log(response)
        })

        dispatch({type: SIGNUP});
    };
};
