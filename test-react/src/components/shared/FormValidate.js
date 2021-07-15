export const FormValidate = (input) => {

    let errors = {};

    if (!input.username.value) {
        errors.username = 'Username is required';
    }

    if (!input.name.value) {
        errors.name = 'Name is required';
    }

    if (!input.email.value) {
        errors.email = 'Email address is required';
    }
    // else if (!/\S+@\S+\.\S+/.test(input.email.value)) {
    //     errors.email = 'Email address format is invalid (example@domain.com)';
    // }

    if (!input.phone.value) {
        errors.phone = 'Phone is required';
    }
    return errors;
}

