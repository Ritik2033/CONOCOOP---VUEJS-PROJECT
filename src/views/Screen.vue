<template>
<div class="page">

    <div>
        <form class="form">
            <div class="class7">
                <h2>{{ $t('Asociacion') }}</h2>

                <hr>
            </div>
            <div class="input-group">

                <div class="input-field">
                    <label for="productLine" class="label">{{ $t('Product_Line') }}</label><br><br>
                    <input type="text" class="input_area" :placeholder="$t('Product_Line')" name="productLine">
                </div>
                <div class="input-field">
                    <label for="productGroup" class="label">{{ $t('Product_Group') }}</label><br><br>
                    <input type="text" class="input_area" :placeholder="$t('Product_Group')" name="productGroup">
                </div>
                <div class="input-field">
                    <label for="productName" class="label">{{ $t('Product_Name')}}</label><br><br>
                    <input type="text" class="input_area" :placeholder="$t('Product_Name')" name="productName">
                </div>
            </div>
            <div class="input-group">

                <div class="input-field">
                    <label for="productReference" class="label">{{ $t('Product_Reference') }}</label><br><br>
                    <input type="text" class="input_area" :placeholder="$t('Product_Reference')" name="productReference">
                </div>
                <div class="input-field">
                    <label for="availableFromDate" class="label">{{ $t('Available_From_Date') }}</label><br><br>
                    <input type="date" class="input_area" name="availableFromDate">
                </div>
                <div class="input-field">
                    <label for="availableToDate" class="label">{{ $t('Available_To_Date') }}</label><br><br>
                    <input type="date" class="input_area" name="availableToDate">
                </div>
            </div>
            <div class="input-group">
                <div class="input-field">
                    <label for="purpose" class="label">{{ $t('Purpose') }}</label><br><br>
                    <input type="text" class="input_area" :placeholder="$t('Purpose')" name="purpose"><br><br>
                </div>
            </div>
            <div class="btn">
                <div class="button">
                    <button type="button" class="btn1" id="cancelButton">{{ $t('Cancel') }}</button>
                </div>
                <div class="button">
                    <button type="button" class="btn2" id="saveButton">{{ $t('Save') }}</button>
                </div>
            </div>
        </form>
    </div>
</div>
</template>

<script>
export default {
    name: 'Screen'
}
</script>

<style scoped>
.page {
    width: 100%;

    font-family: 'Neo', sans-serif;

}

.form {
    margin-top: 2rem;
    margin-left: 2rem;
}

.label {
    font-size: 20px;
}

.input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 50px;
}

.input-field {
    flex: 1;
    font-size: 16px;
    width: calc(33.33% - 10px);
    height: 45px;
    border-radius: 5px;
    outline: none;
    margin-bottom: 10px;
    padding: 10px;
}

.input_area {
    font-size: 20px;
    border: 1px solid gray;
    color: rgb(91, 87, 87);

    width: 80%;
    height: 45px;
    border-radius: 6px;
    outline: none;
    padding: 10px;
}

.btn {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    justify-content: row;

}

.button .btn1 {
    font-size: 16px;
    color: white;
    text-align: center;
    width: 10rem;
    background-color: #808080;
    height: 2.5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
}

.button .btn2 {
    margin-left: 1rem;
    font-size: 16px;
    color: white;
    text-align: center;
    width: 10rem;
    background: -webkit-linear-gradient(-60deg, #eeee22, #0e9e01);
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    height: 2.5rem;
    border-radius: 5px;
    outline: none;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 1;

}

.button .btn2::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at center, black 0%, transparent 100%);
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.3s;
    pointer-events: none;
    z-index: -1;
}

.button .btn2:hover::before {
    transform: translate(-50%, -50%) scale(1);
}

@media screen and (max-width: 768px) {

    .form {
        margin-left: 5px;
    }

    .input-field {
        width: 100%;
    }

    .input-group {
        flex-direction: column;
    }

    .btn {
        margin-top: 10px;
        width: 100%;
    }

    .button {
        flex-direction: column;
        align-items: center;
    }

    .button .btn1,
    .button .btn2 {
        width: 100%;
        margin-bottom: 10px;
    }

}

@media screen and (max-width: 768px) {
    .btn1 {
        padding-left: 4px;
        padding-right: 4px;
    }

}

h2 {
    color: rgb(91, 87, 87);

}

.label {

    color: rgb(91, 87, 87);

}

.class7 {
    padding-bottom: 40px;
}
</style>
