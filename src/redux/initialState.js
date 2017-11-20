const auth = {
    loading: false,
    success: false,
    authError : {
        error: false,
        message: "",
        code: ""
    }
};

const user = {
    username: "",
    users: [],
    userDeleteLoading: false
};

export {
    auth,
    user
}