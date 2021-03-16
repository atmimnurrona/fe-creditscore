export default function validateInfo(values) {
    let errors = {};

    if (!values.fullname.trim()) {
        errors.fullname = "Please enter full name";
    }

    if (!values.username.trim()) {
        errors.username = "Please enter username";
    }

    if (!values.email) {
        errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more";
    }

    if (!values.confirm_password) {
        errors.confirm_password = "Password is required";
    } else if (values.confirm_password !== values.password) {
        errors.confirm_password = "Password do not match";
    }

    if (!values.role.trim()) {
        errors.role = "Please select the role";
    }

    return errors;
}