demo
<template>
<div id="app">
    <v-app>
        <v-main>
            <v-container>
                <v-row class="d-flex justify-center">

                    <v-col cols="12" sm="2">
                        <v-row>
                            <v-col cols="12">
                                <div class="box" tabindex="0" @click="navigateToFarmtotal" @keyup.enter="navigateToFarmtotal">

                                    <div class="dots">

                                        <div></div>
                                    </div>

                                    <img src="@/assets/dot3.jpg" alt="Dot2 Image" class="dot2-img">

                                    <div class="text-container farmer-link">
                                        <span class="farmer-btn">{{ $t('texts.Farmer') }}</span>
                                    </div>

                                    <div class="text-container2">
                                        <span class="pending-text">262</span>

                                    </div>
                                    <div class="text-container3">
                                        <span class="pending-text2">{{ $t('texts.count') }}</span>
                                    </div>

                                </div>
                            </v-col>
                            <v-col cols="12">
                                <div class="box" tabindex="0" @click="navigateToTotaltable1" @keyup.enter="navigateToTotaltable1">
                                    <div class="dots">

                                        <div></div>
                                    </div>

                                    <img src="@/assets/dot3.jpg" alt="Dot2 Image" class="dot2-img">

                                    <div class="text-container farmer-link">
                                        <span class="farmer-btn">{{ $t('texts.Fincas') }}</span>
                                    </div>

                                    <div class="text-container2">
                                        <span class="pending-text">182</span>

                                    </div>
                                    <div class="text-container3">
                                        <span class="pending-text2">{{ $t('texts.count') }}</span>
                                    </div>

                                </div>
                            </v-col>

                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="2">
                        <v-row>
                            <v-col cols="12">
                                <div class="box" tabindex="0" @click="navigateToFarmertotal" @keyup.enter="navigateToFarmertotal">
                                    <div class="dots">

                                        <div></div>
                                    </div>

                                    <img src="@/assets/dot3.jpg" alt="Dot2 Image" class="dot2-img">

                                    <div class="text-container farmer-link">
                                        <span class="farmer-btn"><u>{{ $t('texts.Proyectos') }}</u></span>
                                    </div>

                                    <div class="text-container2">
                                        <span class="pending-text">1298</span>

                                    </div>
                                    <div class="text-container3">
                                        <span class="pending-text2">{{ $t('texts.count') }}</span>
                                    </div>

                                </div>
                            </v-col>
                            <v-col cols="12">
                                <div class="box" tabindex="0" @click="navigateToFarm2total" @keyup.enter="navigateToFarm2total">
                                    <div class="dots">

                                        <div></div>
                                    </div>

                                    <img src="@/assets/dot3.jpg" alt="Dot2 Image" class="dot2-img">

                                    <div class="text-container farmer-link">
                                        <span class="farmer-btn">{{ $t('texts.Certificación') }}</span>
                                    </div>

                                    <div class="text-container2">
                                        <span class="pending-text">84</span>

                                    </div>
                                    <div class="text-container3">
                                        <span class="pending-text2">{{ $t('texts.count') }}</span>
                                    </div>

                                </div>
                            </v-col>

                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="6">
                        <div class="tall-rectangle">
                            <div class="classes">
                                <span class="rectangle-title">{{ $t('texts.Total_Certificación') }}</span>
                                <img :src="require('@/assets/logo21.png')" alt="Logo 21" class="logo21">
                                <router-link to="/projects">
                                    <span class="rectangle-subtitle" style="color:  rgb(91, 87, 87);">{{
                                            $t('texts.Total_Proyectos') }}</span>
                                </router-link>

                                <span class="rectangle-detail">{{ $t('texts.Total_Count') }}</span>
                                <span class="green-number">1298</span>
                                <div class="kyc-container">
                                    <img :src="require('@/assets/logo22.png')" alt="Logo 22" class="logo22">
                                    <router-link to="/certification">
                                        <span class="completed-kyc-text" style="color:  rgb(91, 87, 87);">{{
                                                $t('texts.Total_Certificación') }}</span>
                                    </router-link>
                                    <span class="rectangle23">{{ $t('texts.Total_Count') }}</span>
                                    <span class="green-num">84  </span>
                                </div>
                                <img :src="require('@/assets/logo24.png')" alt="Logo 21" class="logo24">    
                                <router-link to="/Farms">
                                    <span class="pending-subtitle" style="color:  rgb(91, 87, 87);">{{
                                            $t('texts.Total_Fincas') }}</span>
                                </router-link>
                                <span class="rectangle24">{{ $t('texts.Total_Count') }}</span>
                                <span class="gree">182</span>   
                                <span class="complaint-apps-title">{{ $t('texts.Completados') }}</span>
                                <div class="complaint-container">
                                    <img :src="require('@/assets/logo21.png')" alt="Logo 21" class="complaint-logo21">
                                    <router-link to="/farmers">
                                        <span class="complaint-title" style="color:  rgb(91, 87, 87);">{{
                                                $t('texts.ppt') }}</span>
                                    </router-link>
                                </div>

                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>

    </v-app>
</div>
</template>

<style scoped>
@media (max-width: 960px) {

    .tall-rectangle .logo21,
    .tall-rectangle .logo22,
    .tall-rectangle .logo24 {
        width: 30px;
        /* adjust as necessary */
    }

    .tall-rectangle .rectangle-title,
    .tall-rectangle .rectangle-subtitle,
    .tall-rectangle .completed-kyc-text,
    .tall-rectangle .pending-subtitle,
    .tall-rectangle .complaint-apps-title,
    .tall-rectangle .complaint-title {
        font-size: 14px;
        /* adjust as necessary */
    }

    .tall-rectangle .rectangle-detail,
    .tall-rectangle .rectangle23,
    .tall-rectangle .rectangle24 {
        font-size: 12px;
        /* adjust as necessary */
    }

    .tall-rectangle .green-number,
    .tall-rectangle .green-num,
    .tall-rectangle .gree {
        font-size: 16px;
        /* adjust as necessary */
    }

    /* Adjust any other element styles as needed... */
}

.complaint-number {
    position: absolute;
    top: 10%;
    left: 20rem;
    font-size: 2.2vh;
    font-weight: 500;
    color: yellowgreen;
}

@media (max-width: 992px) {
    .complaint-number {
        font-size: 1.8vw;

    }

}

@media (max-width: 768px) {
    .complaint-number {
        font-size: 2.2vw;

    }
}

@media (max-width: 576px) {
    .complaint-number {
        font-size: 4.5vw;
        left: 34vw;

    }
}

.complaint-container {
    position: absolute;
    left: 52%;
    top: 15%;
}

.complaint-logo21 {
    position: absolute;
    top: 0;
    left: 0;
    width: 35px;
    height: auto;
}

.logo21 {
    position: absolute;
    top: 65px;

    left: 10px;

    width: 40px;
    height: auto;
}

.complaint-title {
    position: absolute;
    left: 50px;
    top: 0;
    font-size: 18px;
    font-weight: 500;

    cursor: pointer;
    /* Makes the mouse cursor change to a hand when hovering */
    text-decoration: underline;
    /* Adds an underline */
    padding: 5px 10px;
    /* Optional: Add some padding to make it look like a button */

    /* Optional: Give it a light gray background */
    border-radius: 4px;
    /* Optional: Rounded corners for the button-like appearance */
    display: inline-block;
}

@media (max-width: 992px) {
    .complaint-title {
        font-size: 1.5vw;
    }

}

@media (max-width: 768px) {
    .complaint-title {
        font-size: 2vw;
        font-weight: 700;
    }

}

@media (max-width: 576px) {
    .complaint-title {
        font-size: 4vw;
        font-weight: 700;
    }

}

.rectangle-title {
    position: absolute;
    top: 8%;

    left: 5%;

    transform: translateY(-50%);

    font-size: 20px;

    font-weight: 400;
    color: #333;
    text-align: center;
}

.complaint-apps-title {
    position: absolute;
    top: 8%;

    left: 54%;

    transform: translateY(-50%);

    font-size: 20px;

    font-weight: 400;
    color: #333;
    text-align: center;
}

@media (max-width: 992px) {
    .complaint-apps-title {
        font-size: 2vw;
    }
}

@media (max-width: 768px) {
    .complaint-apps-title {
        font-size: 2.5vw;
    }
}

@media (max-width: 576px) {
    .complaint-apps-title {
        font-size: 5vw;
    }
}

.classes {
    padding: 20px;
}

.logo22 {
    position: absolute;
    top: 32%;

    left: 10px;

    width: 40px;

    height: auto;
}

.logo24 {
    position: absolute;
    top: 47%;

    left: 10px;

    width: 35px;

    height: auto;
}

.green-number {
    position: absolute;
    color: #7cd639;
    font-size: 2.2vh;
    font-weight: 500;

    top: 20%;

    left: 40%;

    transform: translateY(-50%);

}

.green-num {
    position: absolute;
    color: #7cd639;
    font-size: 2.2vh;
    font-weight: 500;

    top: 35%;

    left: 42%;

    transform: translateY(-50%);
}

.gree {
    position: absolute;
    color: #7cd639;
    font-size: 2.2vh;
    font-weight: 500;

    top: 50%;

    left: 42%;

    transform: translateY(-50%);
}

.logo21 {
    position: absolute;
    top: 65px;

    left: 10px;

    width: 40px;
    height: auto;
}

@media (max-width: 599px) {
    .logo21 {
        width: 30px;

    }

    .logo22 {
        width: 30px;
    }
}

.rectangle-detail {
    position: absolute;
    top: 83px;

    left: 60px;
    font-size: 16px;

    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);

}

.rectangle23 {
    position: absolute;
    top: 154px;

    left: 60px;
    font-size: 16px;

    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
}

.rectangle24 {
    position: absolute;
    top: 52%;

    left: 60px;
    font-size: 16px;

    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
}

.dots {
    position: absolute;
    right: 10px;
    top: 20px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 25px;

}

.dots::before,
.dots::after,
.dots>div {
    content: "";
    width: 5px;
    height: 5px;
    background-color: #333;

    border-radius: 50%;

    display: block;
}

.class3 {
    color: rgb(103, 150, 9);
    padding-left: 3%;
    margin-top: 0px;
}

.class4 {
    color: #7cd639;
    padding-left: 3%;

}

.text-container {
    position: absolute;
    width: 100%;
    bottom: 80px;
    left: 7%;
    font-weight: 700;

}

.text-container3 {
    position: absolute;
    width: 100%;
    bottom: 10px;
    left: 7%;
    font-weight: 700;

}

.text-container2 {
    position: absolute;
    width: 100%;
    bottom: 40px;
    left: 7%;
    font-weight: 700;
    display: flex;

}

.pending-text {
    font-size: 18px;

    font-weight: 500;

}

.pending-text10 {
    font-size: 18px;

    font-weight: 500;
    color: #2280d3;
    padding-top: 20px;

}

.pending-text2 {
    font-size: 17px;

    font-weight: 400;
    color: #333;

}

.dot2-img {
    position: absolute;

    top: 10px;
    left: 17px;
    width: 55px;
    height: auto;
}

.box-footer {
    position: absolute;
    font-weight: 400;
    font-size: larger;
    bottom: 10px;
    left: 50%;
    color: faint black;
    transform: translateX(-50%);
    z-index: 2;
}

.centered-img {
    width: 80%;
    height: auto;
    max-width: 200%;
    max-height: 75%;
    position: absolute;
    top: 60%;
    left: 60%;
    transform: translate(-50%, -50%);
}

.d-flex {
    margin-top: 40px;
}

.box {
    width: 100%;
    height: 200px;
    background-color: #ffffff;
    margin-bottom: 17px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);

    border-radius: 7px;
    position: relative;
    transition: all 0.3s ease-in-out;
}

.box:hover {

    /* light gray background on hover */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    /* shadow effect on hover */
    cursor: pointer;
    /* change cursor to hand on hover */
}

.box-number {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 25px;
    font-weight: 400;
}

.tall-rectangle {
    width: 100%;
    height: 440px;
    background-color: #ffffff;
    margin-bottom: 16px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.3s ease-in-out;
    border-radius: 7px;
    position: relative;
}

.tall-rectangle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    height: 80%;
    width: 1px;
    background-color: rgba(59, 59, 59, 0.2);
}

@media (max-width: 599px) {

    .tall-rectangle {
        height: calc(6 * 60px + 5 * 16px);
    }
}

#app {
    background-color: #f4f5fa;

}

h3 {
    font-weight: 600;
    color: rgb(91, 87, 87);
}

h4 {
    font-size: 18px;
    font-weight: 500;
    color: rgb(91, 87, 87);
}

.dot2-img {
    position: absolute;
    color: rgb(91, 87, 87);
    top: 10px;
    left: 17px;
    width: 55px;
    height: auto;
}

.box-footer {
    position: absolute;
    font-weight: 500;
    font-size: larger;
    bottom: 10px;
    left: 50%;
    color: rgb(91, 87, 87);
    transform: translateX(-50%);
    z-index: 2;
}

.pending-text2 {
    font-size: 17px;

    font-weight: 400;
    color: rgb(91, 87, 87);

}

.black-text {
    color: rgb(91, 87, 87);

}

.rectangle-subtitle {
    cursor: pointer;
    /* Makes the mouse cursor change to a hand when hovering */
    text-decoration: underline;
    /* Adds an underline */
    padding: 5px 10px;
    /* Optional: Add some padding to make it look like a button */
    /* Optional: Give it a light gray background */
    border-radius: 4px;
    /* Optional: Rounded corners for the button-like appearance */
    display: inline-block;
    font-size: 18px;
    padding: 38px 40px;

    display: inline-block;
    left: 70px;

    font-weight: 500;

}

.completed-kyc-text {
    position: absolute;
    cursor: pointer;
    /* Makes the mouse cursor change to a hand when hovering */
    text-decoration: underline;
    /* Adds an underline */
    padding: 5px 10px;
    /* Optional: Add some padding to make it look like a button */

    /* Optional: Give it a light gray background */
    border-radius: 4px;
    /* Optional: Rounded corners for the button-like appearance */
    display: inline-block;

    top: 125px;
    left: 50px;
    font-size: 18px;

    font-weight: 500;

}

.pending-subtitle {
    position: absolute;
    top: 195px;

    left: 50px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    /* Makes the mouse cursor change to a hand when hovering */
    text-decoration: underline;
    /* Adds an underline */
    padding: 5px 10px;
    /* Optional: Add some padding to make it look like a button */

    /* Optional: Give it a light gray background */
    border-radius: 4px;
    /* Optional: Rounded corners for the button-like appearance */
    display: inline-block;

}

.farmer-btn {
    position: relative;

    background: green;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    cursor: pointer;
    transition: color 0.3s;
    /* Add transition for color */
}

.farmer-link::before {

    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    color: bright green;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.3s;
}

.farmer-link:hover::before {
    width: 100%;
}

.farmer-btn {
    text-decoration: underline;
}

.text-container.farmer-link .farmer-btn {
    text-decoration: underline !important;
    text-decoration-color: black;
}
</style>

<script>
export default {
    name: 'Demo',

    components: {

    },
    methods: {
        navigateToFarmtotal() {
            this.$router.push({
                name: 'Farm3total'
            }); // Assuming you've named your route 'Farmtotal'
        },
        navigateToTotaltable1() {
            this.$router.push({
                name: 'Totaltable1'
            });
        },
        navigateToFarmertotal() {
            this.$router.push({
                name: 'Farmertotal'
            });
        },
        navigateToFarm2total() {
            this.$router.push({
                name: 'certificationtotal'
            });
        },

        // ... your other methods ...
    }

}
</script>
