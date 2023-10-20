<template>
<div class="app">
    <div class="header">
        <h2>{{ $t('ppt1') }}</h2>
        <hr>
    </div>
    <div class="container-fluid">
        <form class="form">
            <div class="field-row">
                <div class="custom-select">
                    <label for="selectOption">{{ $t('Project Type') }}</label><br />
                    <select id="selectOption" class="selectOption" v-model="selectedType">

                        <option value="" disabled selected>--Select--</option>
                        <option value="Training">{{ $t('Training') }}</option>
                        <option value="Diagnostic">{{ $t('Diagnostic') }}</option>
                        <option value="Coltivation Project">{{ $t('Coltivation Project') }}</option>
                        <option value="Problem Solving">{{ $t('Problem Solving') }}</option>
                    </select>
                </div>
                <div class="project_name">
                    <label for="projectname">{{ $t('Project Name') }}</label><br />
                    <input type="text" class="inputfiled" :placeholder="$t('Project Name')" :disabled="selectedType === 'Training'">
                </div>
            </div>

            <div class="field-row A">
                <div class="farm">
                    <label for="projectname">{{ $t('Farm') }}</label><br />
                    <input type="text" class="inputfiled" :placeholder="$t('Farm')" :disabled="selectedType === 'Training'">
                </div>
                <div class="farmer">
                    <label for="projectname">{{ $t('Farmer') }}</label><br />
                    <input type="text" class="inputfiled" :placeholder="$t('Farmer')" :disabled="selectedType === 'Training'">
                </div>
            </div>

            <div class="field-row A">
                <div class="farm">
                    <label for="description">{{ $t('Description:') }}</label><br />
                    <textarea id="description" class="inputfiled ppo" name="description" v-model="description" maxlength="500"></textarea>
                    <p :class="{ 'text-red': charCount < 150, 'text-normal': charCount >= 150 && charCount <= 500 }">
                        Character count should more than 150 and less than 500; Character count: {{ charCount }} / 500
                    </p>
                </div>

                <div class="farmer">
                    <div class="C">
                        <label for="budget" class="value">{{ $t('Budget') }}</label><br />
                        <input type="number" v-model="enteredValue" class="inputfiled" :placeholder="$t('Value')">
                        <select v-model="selectedCurrency" @change="convertToDOP">
                            <option value="DOP" selected>RD$ DOP</option>
                            <option value="USD">$ USD</option>
                            <option value="EUR">€ EUR</option>
                            <option value="GBP">£ GBP</option>
                            <option value="JPY">¥ JPY</option>
                        </select> <!-- Added currency symbol and name -->
                        <div class="converted-value">{{ convertedValue }} DOP</div>
                    </div>

                </div>
            </div>

            <div class="btn">
                <button class="btn1">{{ $t('Cancel') }}</button>
                <button class="btn2">{{ $t('Save') }}</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'Project',

    data() {
        return {
            description: '',
            selectedOption: 'Select',
            enteredValue: null,
            selectedCurrency: 'DOP',
            selectedType: '',
            convertedValue: 0,
            conversionRates: {
                'DOP': 1,
                'USD': 56.11,
                'EUR': 65.91,
                'GBP': 73.23,
                'JPY': 0.51,
            }
        };
    },
    methods: {
        convertToDOP() {
            if (this.selectedCurrency in this.conversionRates) {
                this.convertedValue = this.enteredValue * this.conversionRates[this.selectedCurrency];
            } else {
                this.convertedValue = 0;
            }
        }
    },
    watch: {
        enteredValue: function (newVal, oldVal) {
            this.convertToDOP();
        },
        selectedCurrency: function (newVal, oldVal) {
            this.convertToDOP();
        }
    },
    computed: {
        isDescriptionValid() {
            const wordCount = this.description.split(/\s+/).filter(Boolean).length; // split by whitespace and filter out any empty strings
            return wordCount >= 10;
        },
        wordCount() {
            return this.description.split(/\s+/).filter(Boolean).length; // split by whitespace and filter out any empty strings
        },
        charCount() {
            return this.description.length;
        }
    },
}
</script>

<style scoped>
.ppo {
    height: 200px;
}

.description {
    width: 90%;
}

.C {
    width: 50%;
    margin-left: 5px;
}

.app {
    font-family: 'Neo', sans-serif;
    color: rgb(91, 87, 87);
    font-size: 20px;
}

.farm {
    width: 90%;
    color: rgb(91, 87, 87);
    font-size: 20px;
}

.farmer {
    width: 90%;
    margin-left: 50px;
    color: rgb(91, 87, 87);
    font-size: 20px;

}

.project_name {
    width: 90%;
    margin-left: 50px;
    color: rgb(91, 87, 87);
    font-size: 19px;
}

.custom-select {
    width: 90%;
    color: rgb(91, 87, 87);
    font-size: 19px;
}

.container-fluid {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    color: rgb(91, 87, 87);
    font-size: 20px;

}

@media (max-width: 950px) {
    .container-fluid {
        flex-direction: column;

    }
}

.selectOption {
    width: 100%;
    border: 1px solid;
    height: 45px;
    outline: none;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid rgb(91, 87, 87);
    color: rgb(91, 87, 87);
    font-size: 18px;
}

.inputfiled {
    padding: 10px;
    border: 1px solid rgb(91, 87, 87);
    outline: none;
    border-radius: 5px;
    width: 100%;
    padding-left: 10px;
    color: rgb(91, 87, 87);
    font-size: 17px;
    margin-top: 5px;
}

.field-row {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    color: rgb(91, 87, 87);
    font-size: 20px;
}

.btn1 {
    width: 45%;
    background-color: yellow;
    height: 45px;
    border: 1px solid yellow;
    border-radius: 15px;
    font-size: 16px;
    text-align: center;
    width: 10rem;
    height: 2.5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    background: #808080;
    color: #ffffff;
}

.btn2 {
    margin-left: 10px;
    width: 45%;
    background-color: yellowgreen;
    height: 45px;
    border: 1px solid yellow;
    border-radius: 15px;
    margin-left: 1rem;
    font-size: 16px;
    text-align: center;
    width: 10rem;
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    height: 2.5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #ffffff;
}

.description {
    border: 1px solid;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(91, 87, 87);
    color: rgb(91, 87, 87);
}

.container-fluid {
    width: 100%;
    color: rgb(91, 87, 87);
}

.form {
    width: 100%;
    font-size: 18px;
    color: rgb(91, 87, 87);
}

.A {
    margin-top: 50px;
    color: rgb(91, 87, 87);
}

.description {}

.budget {
    display: flex;
    width: 90%;
    color: rgb(91, 87, 87);
}

.budget p {

    top: 50%;
    color: rgb(91, 87, 87);
}

.value {

    color: rgb(91, 87, 87);

}

.unit {
    color: rgb(91, 87, 87);

}

.selectoption {
    height: 45px;
    border: 1px solid;
    border-radius: 5px;
    padding-left: 10px;
    border: 1px solid rgb(91, 87, 87);
    color: rgb(91, 87, 87);
    outline: none;
}

.btn {
    margin-top: 50px;
}

.header h2 {
    color: rgb(91, 87, 87);
    font-size: 20px;
    margin-bottom: 5PX;
}

.selectOption .gap-option {
    margin-top: 10px;
}

.selectOption option {}

@media (max-width: 950px) {
    .container-fluid {
        flex-direction: column;
    }

    .field-row {
        flex-direction: column;
    }

    .custom-select,
    .project_name,
    .farm,
    .farmer,
    .description,
    .budget,
    .unit {
        width: 100%;
    }

    .budget p {
        top: 0;
    }

    .btn {
        flex-direction: row;
    }

    .farmer,
    .project_name,
    .budget,
    .C {
        margin-left: 0px;
        margin-top: 50px;
    }

    .description {
        width: 100%;
    }
}

select {
    -moz-appearance: none;
    -webkit-appearance: auto;
}

.class5 {
    width: 1400px;
}

.currency-symbol {
    font-weight: bold;
    /* Making the text bold */
    margin-left: 10px;
    /* Some spacing from the input field */
    vertical-align: middle;
    /* Aligns the text with the input field */
    font-size: 1.2em;
    /* Making the font size slightly bigger */
}

.converted-value {
    margin-top: 10px;
    font-weight: bold;
    color: green;
    /* or any desired color */
}

.text-red {
    color: red;
}

.text-normal {
    color: green;
    /* Or any color you want when word count is 100 or more */
}

p {
    font-size: 0.6em;
}
.text-red {
    color: red;
}
.text-normal {
    color: GREEN;  /* or any other normal color you'd like */
}

</style>
