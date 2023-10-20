<template>
    <div class="page">

        <div class="amd">
            <img src="../assets/con2.jpg" alt="Image">

        </div>

        <h1 class="class1"><span id="id2">Wel</span>come!</h1>

        <h3 class="class5">Please Sign in to your account</h3>
        <div class="login">
            <input id="name" type="text" v-model="Username" placeholder="Username" name="username" />
            <span class="error">{{ validationErrors.username }}</span>

            <div class="password-field">
                <input id="pass" :type="passwordFieldType" class="form-control" v-model="password" placeholder="Password" />
                <i @click="togglePasswordVisibility" class="fa"
                    :class="{ 'fa-eye': passwordFieldType === 'password', 'fa-eye-slash': passwordFieldType !== 'password' }"></i>
            </div>
            <span class="error">{{ validationErrors.password }}</span>

            <form action="" @click="login">
                <label class="container">
                    <input type="checkbox" checked="checked">Remember me
                    <span class="checkmark"></span>
                    <a class="class5" href="#">Forgot password?</a>
                </label><br>
            </form>
            <div class="button">
                <button @click="login" type="submit" class="btn">
                    <div v-if="loading" class="spinner"></div>
                    <span v-else>LOGIN</span>
                </button>
            </div>

        </div>

    </div>
</template>

<script scoped>
export default {
    name: 'Login',
    data() {
        return {
            passwordFieldType: 'password',
            Username: '',
            password: '',
            validationErrors: {
                username: '',
                password: '',
            },
            loggedIn: false,
            loading: false // to handle the spinner's visibility
        };
    },

    methods: {
        login() {
            // Clear previous validation errors
            this.validationErrors.username = '';
            this.validationErrors.password = '';

            // Validate input
            if (!this.Username.trim()) {
                this.validationErrors.username = 'Username is required.';
            }

            if (!this.password.trim()) {
                this.validationErrors.password = 'Password is required.';
            }

            // If no validation errors
            if (!this.validationErrors.username && !this.validationErrors.password) {
                this.loading = true; // Start loading/spinner

                // Simulate a delay of 1 second before checking the credentials
                setTimeout(() => {
                    if (this.Username.trim() === 'admin' && this.password.trim() === 'admin') {
                        console.log('Login successful!');
                        this.loggedIn = true;
                        localStorage.setItem('loggedIn', 'true');
                        this.$router.push({
                            name: 'Dashboard'
                        });
                    } else {
                        if (this.Username.trim() !== 'admin') {
                            this.validationErrors.username = 'Incorrect username.';
                        }

                        if (this.password.trim() !== 'admin') {
                            this.validationErrors.password = 'Incorrect password.';
                        }

                        console.log('Login failed. Invalid credentials.');
                        this.loggedIn = false;
                        localStorage.setItem('loggedIn', 'false');
                    }
                    this.loading = false; // Stop loading/spinner
                }, 1000);
            } else {
                console.log('Login failed. Please fix the errors.');
            }
        },

        logout() {
            this.loggedIn = false;
            localStorage.setItem('loggedIn', 'false');
        },

        togglePasswordVisibility() {
            this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
        }
    },

    created() {
        this.loggedIn = localStorage.getItem('loggedIn') === 'true';
    }
};
</script>

<style scoped>
#app {
    font-family: 'Neo', sans-serif;
}

body {
    background-color: #868508;
    /* Replace #YOUR_COLOR with your desired color */
}

.class1 span {
    color: faint green;
}

#id {
    color: yellowgreen
}

.class1 {
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 15px;
    color: darkgreen;
}

.login {
    font-family: 'Neo', sans-serif;
}

.class5 {
    color: rgb(153, 153, 81);
}

.password-field {
    position: relative;

}

.password-field i {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
}

.button {
    width: 80px
}

.page {
    margin-left: 0px;
    padding: 90px;
}

a {
    margin-left: 70px;
    color: red;

}

.container {
    display: flex;
}

.amd {

    display: flex;
    justify-content: space-evenly;
    align-items: center;

}

.amd img {
    width: 60ox;
    height: 100px;

}

#h1 {

    font-weight: 500;
    margin-top: 8px;
    margin-right: 80px;
    padding-left: 20px;

}

.container {
    display: block;
    position: relative;
    padding-left: 35px;

    cursor: pointer;
    font-size: medium;
    justify-content: space-around;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    padding-left: 0px;
    height: 0;
    width: 0;
    font-size: x-large;
}

#pass {
    margin-bottom: 13px;
    margin-left: 0px;
    height: 50px;
    font-size: large;
    padding-left: 9px;
}

#name {
    margin-left: 0px;
    height: 50px;
    font-size: large;
    padding-left: 9px;
}

.checkmark {
    position: absolute;
    top: 12px;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-color: gray;
}

.container:hover input~.checkmark {
    background-color: #ccc;
}

.container input:checked~.checkmark {
    background-color: #2196F3;
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container input:checked~.checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
}

.page {

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    padding: 30px;
    border-radius: 10px;
    margin: 60px;

    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    align-items: center;
    background-size: cover;
    box-shadow: 0 0 20px #00000042;

}

.login input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;

    border-radius: 6px;
    border: 1px solid grey;

    font-size: medium;

}

.class5 {
    margin-top: 0%;
    font-weight: lighter;
    margin-bottom: 10px
}

.error {
    color: red;
    font-size: large;
    margin-bottom: 5px;
}

.login button {
    width: 110px;
    height: 37px;
    background-color: green;
    border-radius: 6px;

    border-color: transparent;
    margin-top: 0px;
    color: white;
    cursor: pointer;
}

.login button:hover {
    background-color: darkgreen;

}

.spinner {
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top: 2px solid white;
    width: 19px;
    height: 19px;
    animation: spin 1s linear infinite;
    margin-right: 5px;
    display: inline-block;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.login input {
    border: 1px solid #e0e0e0;
    /* lighter border */
    transition: border 0.3s ease-in-out;
    /* smooth transition */
}

.login input:focus {
    border-color: #9e9e9e;
    /* slightly darker border on focus */
    outline: none;
    /* remove browser's default outline */
}

.login button {
    font-weight: 500;
    /* semi-bold weight */
}

.container input:checked~.checkmark {
    background-color: #4caf50;
    /* Use a green color to indicate checked status */
}</style>
