<template>
    <div class="page">
        <div class="amd">
            <img src="./assets/sidd.jpg" alt="Image">
            <h1 id="h1">Kaas</h1>
        </div>
    
        <h1 class="class1">Welcome!</h1>
        <h3 class="class5">Please Sign in to your account</h3>
        <div class="login">
            <input type="text" v-model="Username" placeholder="Username" name="username" />
            <span class="error">{{ validationErrors.username }}</span>
    
            <input id="pass" type="inputTypeIcon" class="form-control" v-model="password" placeholder="Password" />
            <span class="error">{{ validationErrors.password }}</span>
    
            <form action="">
                <label class="container">
                    <input type="checkbox" checked="checked">Remember me
                    <span class="checkmark"></span>
                    <a href="#">Forgot password ?</a>
                </label><br>
            </form>
            <div class="button">
                <button @click="login" type="submit" class="btn">LOGIN</button>
            </div>
    
        </div>
    </div>
    </template>
    
    <script>
    export default {
        name: 'App',
        data() {
            return {
    
                Username: '',
                password: '',
                validationErrors: {
                    username: '',
                    password: '',
                },
            };
        },
    
        methods: {
            login() {
    
                this.validationErrors.username = '';
                this.validationErrors.password = '';
    
                if (!this.Username.trim()) {
                    this.validationErrors.username = 'Username is required.';
                }
    
                if (!this.password.trim()) {
                    this.validationErrors.password = 'Password is required.';
                }
    
                if (!this.validationErrors.username && !this.validationErrors.password) {
                    if (this.Username.trim() === 'admin' && this.password.trim() === 'admin') {
                        console.log('Login successful!');
                        this.$router.replace('/hello-world');
    
    
                    } else {
                        console.log('Login failed. Invalid credentials.');
    
                    }
                } else {
                    console.log('Login failed. Please fix the errors.');
    
                }
            },
        },
    };
    </script>
    
    <style scoped>
    a {
        margin-left: 70px;
        color: red;
    }
    
    .amd {
    
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    
    }
    
    .amd img {
        width: 50ox;
        height: 60px;
        margin-left: 100px;
    
    }
    
    #h1 {
    
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 500;
        margin-top: 8px;
        margin-right: 80px;
    
    }
    
    .container {
        display: block;
        position: relative;
        padding-left: 35px;
    
        cursor: pointer;
        font-size: medium;
    
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    
    #pass {
        margin-bottom: 13px;
    }
    
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 18px;
        width: 18px;
        background-color: #eee;
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
        width: 3px;
        height: 9px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    
    .page {
        width: fit-content;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    
        padding: 40px;
        border-radius: 10px;
        margin: 60px;
    
        margin-top: auto;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        align-items: center;
        background-color: rgb(255, 255, 255);
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
        font-size: medium;
        margin-bottom: 5px;
    }
    
    .class1 {
        margin: 0px;
        margin-bottom: 10px;
    }
    
    .login button {
        width: 90px;
        height: 35px;
        background-color: red;
        border-radius: 6px;
    
        border-color: transparent;
        margin-top: 0px;
        color: white;
        cursor: pointer;
    }
    
    .login button:hover {
        background-color: darkred;
    
    }
    </style>
    