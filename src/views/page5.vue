<template>
    <v-main>
        <div class="container">

            <div class="application-container">
                <div class="title-container">
                    <div class="title">{{ $t("Application Details") }}:</div>
                    <button class="add-document-btn" @click="showModal = true">{{ $t("ADD DOCUMENT") }}</button>
                    <div v-if="showModal" class="modal-overlay">
                        <div class="modal">

                            <div class="modal-close-btn">
                                <button @click="showModal = false">&times;</button>
                            </div>

                            <h2 class="class7">{{ $t("ADD DOCUMENT") }}:</h2>

                            <div class="form-group">
                                <label class="class5" for="productName">{{ $t("File Name:") }}</label>
                                <input class="class4" type="text" id="productName" :placeholder="$t('Document Name:')">
                            </div>

                            <div class="form-group">
                                <label class="class5" for="productRef">{{ $t("Document Name:") }}</label>
                                <input class="class4" type="text" id="productRef" :placeholder="$t('Document Reference')">
                            </div>

                            <div class="form-group">
                                <label class="class5" for="productRef">{{ $t("Document No:") }}</label>
                                <input class="class4" type="text" id="productRef" :placeholder="$t('Document Reference')">
                            </div>

                            <div class="form-group">
                                <label class="class5" for="productRef">{{ $t("Document Image:") }}</label>
                                <input class="class4" type="file" id="productRef" :placeholder="$t('Document Reference')">
                            </div>

                            <div class="button-wrapper">
                                <button class="add-button">{{ $t("Add") }}</button>
                            </div>
                        </div>
                    </div>

                </div>

                <hr>
                <div class="box-wrapper">
                    <div v-for="i in 3" :key="i" class="square-box">
                        <div v-if="i === 1" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdj4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                        <div v-if="i === 2" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdj4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                        <div v-if="i === 3" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdj34h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                    </div>
                </div>
                <div class="box-wrapper">
                    <div v-for="i in 3" :key="i" class="square-box">
                        <div v-if="i === 1" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdj4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                        <div v-if="i === 2" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdj4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                        <div v-if="i === 3" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdj4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                    </div>
                </div>
                <div class="box-wrapper">
                    <div v-for="i in 3" :key="i" class="square-box">
                        <div v-if="i === 1" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }} hsdj4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                        <div v-if="i === 2" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdj4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                        <div v-if="i === 3" class="box-content">
                            <div class="ekyc-header">OMKAR_PANCHAL_EKYC_REPORT</div>
                            <div class="ref-number">{{ $t("Reference no.") }}: hsdjf4h_hs,bfsbfdfndf</div>
                            <div class="issuer-country">{{ $t("Issuer Country:") }}</div>
                            <div class="renewal-date">{{ $t("Renewal Date:") }}</div>
                            <div class="view-doc">{{ $t("VIEW DOCUMENT") }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    name: 'page5',
    data() {
        return {

            showModal: false,


        };
    },
}
</script>

<style scoped>
.form-group[data-v-6df26754] {
    margin-bottom: 50px;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    padding: 10px;

}

.add-button {
    padding: 8px 35px;
    background: -webkit-linear-gradient(-60deg, #eeee22, #0e9e01);
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-button:hover {
    background-color: #45a049;

}

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.class4 {
    border: 2px solid rgb(158, 155, 155);
    border-radius: 5px;
    padding: 7px;
    width: 96%;
    margin-top: 10px;
    margin-bottom: 10px;
}

.class5 {
    font-weight: bold;
    margin-bottom: 10px;
    color: rgb(71, 70, 70);
}

.class7 {
    margin-top: 20px;
    color: rgb(71, 70, 70);
    padding-bottom: 20px;
    font-size: 20px;
}

.modal-close-btn {
    position: absolute;

    top: 7px;

    right: 10px;


}

.modal-close-btn button {


    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 20px;
    transition: 0.3s;
}

.modal {
    position: relative;
    width: 80%;
    max-width: 500px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    z-index: 1001;

}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

}


.title-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}

.add-document-btn {
    background: -webkit-linear-gradient(-60deg, #eeee22, #0e9e01);
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: white;
    border: none;
    padding: 0.7vw 0.7vw;
    font-size: 0.9vw;
    border-radius: 0.3vw;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-document-btn:hover {
    background: -webkit-linear-gradient(-60deg, #e2e200, #0c8a00);

    background: linear-gradient(-60deg, #e2e200, #0c8a00);
}

@media (max-width: 480px) {
    .add-document-btn {
        padding: 2vw 2vw;
        font-size: 2.5vw;
    }
}


@media (min-width: 481px) and (max-width: 768px) {
    .add-document-btn {
        padding: 1.5vw 1.5vw;
        font-size: 1.7vw;
    }
}


@media (min-width: 769px) and (max-width: 1024px) {
    .add-document-btn {
        padding: 1vw 1vw;
        font-size: 1.3vw;
    }
}


@media (min-width: 1025px) {
    .add-document-btn {
        padding: 0.5vw 0.5vw;
        font-size: 0.9vw;
    }
}

.add-document-btn:hover {
    background-color: darkred;

}

.title {
    font-weight: bold;
    color: rgb(91, 87, 87);
    margin-right: 10px;
}



.box-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
}

.ekyc-header {
    font-weight: bold;
    color: rgb(91, 87, 87);


    font-size: 1.0vw;
}

.ref-number,
.issuer-country,
.renewal-date {
    color: gray;
    font-size: 1vw;
    margin-top: 1vw;
}

.view-doc {
    color: rgb(136 201 39);
    font-weight: bold;
    font-size: 0.9vw;
    margin-top: 2vw;
}

@media (max-width: 768px) {

    .ekyc-header,
    .view-doc {
        font-size: 3vw;
    }

    .ref-number,
    .issuer-country,
    .renewal-date {
        font-size: 2vw;
    }
}

@media (min-width: 1024px) {
    .square-box {
        height: calc(80vw / 6 - 48px);

    }
}

hr {
    border: none;

    border-top: 1px solid #333;

    width: 100%;

    margin-top: 0.2rem;

    margin-bottom: 1rem;

}

.title {
    font-size: 20px;
    margin-bottom: 0.3rem;
    font-size: larger;
    font-weight: 600;

}

.container {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    font-family: 'Neo', sans-serif;
    width: 100%;

}

.application-container {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: flex-start;
    width: 80vw;
    margin-top: 1rem;
}

.box-wrapper {
    display: flex;
    width: 80vw;

    justify-content: space-between;
    margin-top: 2px;

}

.square-box {
    flex: 1;

    height: calc(20vw - 12px);

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    margin: 30px;
    border-radius: 5px;

}

@media (min-width: 768px) and (max-width: 991px) {
    .square-box {
        height: 30vw;
    }
}


@media (min-width: 992px) and (max-width: 1199px) {
    .square-box {
        height: 20vw;
    }
}


@media (min-width: 1200px) {
    .square-box {
        height: calc(80vw / 6);
    }
}

@media (max-width: 480px) {


    .square-box {
        height: 50vw;
        margin: 15px;
    }


    .box-content {
        padding: 5px;
    }

    .ekyc-header {
        font-size: 2.5vw;
    }

    .ref-number,
    .issuer-country,
    .renewal-date {
        font-size: 2vw;
        margin-top: 2vw;
    }

    .view-doc {
        font-size: 2.5vw;
        margin-top: 2.5vw;
    }

    .box-wrapper {
        display: block;
    }
}

@media (max-width: 480px) {
    .add-document-btn {
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 5px;
    }
}

.ref-number,
.issuer-country,
.renewal-date {
    white-space: normal;

    overflow: hidden;

    text-overflow: ellipsis;

}

.product-lines-title {
    font-size: 1.5rem;
    margin: 0;
    color: rgb(91, 87, 87);
}

th {
    color: rgb(91, 87, 87);

}

.class7 {
    color: rgb(91, 87, 87);
    font-size: 20px;

}

.class5 {
    font-weight: bold;
    color: rgb(91, 87, 87);
    font-size: 15px;
}

.no-borders {
    border-right: none;
    font-size: 18px;

    color: rgb(91, 87, 87);

}

.no-right-border {
    border-right: none;
    font-size: 18px;

    color: rgb(91, 87, 87);

}

.class8 {
    color: rgb(91, 87, 87);
    font-size: 20px;

}

.v-application {
    line-height: none !important;
}</style>
