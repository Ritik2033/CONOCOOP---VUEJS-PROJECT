<template>
    <div id="app">
        <v-app>
            <v-main>
                <v-container>
                    <v-row class="d-flex justify-center">

                        <v-col cols="12" sm="2">
                            <v-row>
                                <v-col cols="12">
                                    <div class="box">

                                        <span class="box-number">1644</span>
                                        <img src="@/assets/colour.png" alt="Graph Image" class="centered-img">
                                        <div class="box-footer">Total KYC</div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="box">
                                        <div class="dots">

                                            <div></div>
                                        </div>
                                        <img src="@/assets/sid1.png" alt="Dot2 Image" class="dot2-img">
                                        <div class="text-container">
                                            <span class="pending-text">Pending KYC</span>
                                        </div>
                                        <div class="text-container2">
                                            <span class="pending-text">262</span>
                                            <span class="class3">-18%</span>
                                        </div>
                                        <div class="text-container3">
                                            <span class="pending-text2">count</span>
                                        </div>

                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="box">
                                        <span class="box-number">1644</span>
                                        <img src="@/assets/colour.png" alt="Graph Image" class="centered-img">
                                        <div class="box-footer">Total KYC</div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="12" sm="2">
                            <v-row>
                                <v-col cols="12">
                                    <div class="box">
                                        <div class="dots">

                                            <div></div>
                                        </div>
                                        <img src="@/assets/sid1.png" alt="Dot2 Image" class="dot2-img">
                                        <div class="text-container">
                                            <span class="pending-text">completed KYC</span>
                                        </div>
                                        <div class="text-container2">
                                            <span class="pending-text">1298</span>
                                            <span class="class4">+42%</span>
                                        </div>
                                        <div class="text-container3">
                                            <span class="pending-text2">count</span>
                                        </div>

                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="box">
                                        <div class="dots">

                                            <div></div>
                                        </div>
                                        <img src="@/assets/sid1.png" alt="Dot2 Image" class="dot2-img">
                                        <div class="text-container">
                                            <span class="pending-text">Rejected KYC</span>
                                        </div>
                                        <div class="text-container2">
                                            <span class="pending-text">84</span>
                                            <span class="class3">-18%</span>
                                        </div>
                                        <div class="text-container3">
                                            <span class="pending-text2">count</span>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="12">
                                    <div class="box">
                                        <div class="dots">

                                            <div></div>
                                        </div>
                                        <img src="@/assets/sid1.png" alt="Dot2 Image" class="dot2-img">
                                        <div class="text-container">
                                            <span class="pending-text">KYC Apps</span>
                                        </div>
                                        <div class="text-container2">
                                            <span class="pending-text">344</span>
                                            <span class="class4">+60%</span>
                                        </div>
                                        <div class="text-container3">
                                            <span class="pending-text2">count</span>
                                        </div>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-col>

                        <v-col cols="12" sm="6">
                            <div class="tall-rectangle">
                                <div class="classes">
                                    <span class="rectangle-title">KYC Status</span>
                                    <img :src="require('@/assets/logo21.png')" alt="Logo 21" class="logo21">
                                    <span class="rectangle-subtitle">Total KYC</span>
                                    <span class="rectangle-detail">Total Count</span>
                                    <div class="kyc-container">
                                        <img :src="require('@/assets/logo22.png')" alt="Logo 22" class="logo22">
                                        <span class="completed-kyc-text">Comple KYC</span>
                                        <span class="rectangle23">Total Count</span>
                                       
                                    </div>
                                    <img :src="require('@/assets/logo24.png')" alt="Logo 21" class="logo24">
                                    <span class="pending-subtitle">Pending KYC</span>
                                    <span class="rectangle24">Total Count</span>
                                   
                                    <span class="complaint-apps-title">KYC Complaint Apps</span>
                                    <div class="complaint-container">
                                        <img :src="require('@/assets/logo21.png')" alt="Logo 21" class="complaint-logo21">
                                        <span class="complaint-title">Total KYC Complaint Apps</span>


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
.pending-text[data-v-9523afee] {
    font-size: 18px;
    font-weight: 500;
    color: #000000a1;
}
.box[data-v-9523afee] {
    width: 100%;
    height: 200px;
    background-color: #08080800;
    margin-bottom: 17px;
    box-shadow: 0px 4px 8px rgb(0 0 0 / 41%);
    border-radius: 7px;
    position: relative;
}
#app{
    background-image: url('../assets/blur.jpg');
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
    color: #333;
}

.completed-kyc-text {
    position: absolute;
    top: 125px;
    left: 55px;
    font-size: 18px;
    font-weight: 500;
    color: #333;
}

.rectangle-subtitle {
    font-size: 18px;
    padding: 38px 40px;
  

    display: inline-block;
    left: 60px;
    font-size: 2vh;

    font-weight: 500;
    color: #333;
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

    font-size: 1.1vw;

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

.pending-subtitle {
    position: absolute;
    top: 195px;

    left: 60px;
    font-size: 2vh;
    font-weight: 500;
    color: #333;
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

    left: 40%;

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
    top: 53%;

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
    color: #000000;
    padding-left: 3%;
}

.class4 {
    color: #000000;
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

}

.pending-text {
    font-size: 18px;

    font-weight: 500;
    color: #333;

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
    height: 416px;
    background-color:#08080800 ;
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
</style>

<script>

export default {
    name: 'page11',

    components: {

    },

}
</script>
