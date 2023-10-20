<template>
    <div class="page">
        <div class="heading">
            <h2 id="id2">{{ $t("Configuration Settings") }}:</h2>
            <hr class="class3">
        </div>
        <div class="page-background">
            <h4>
                <p>
                    <v-icon size="24" color=#69666f>mdi-map-marker</v-icon>
                    <span class="icon-text">{{ $t("Countries Available") }}</span>
                </p>
                <span class="text-right"><v-icon style="color: darkgreen;">mdi-pencil</v-icon></span>
            </h4>
            <h4>
                <p>
                    <v-icon size="24" color="primary" class="class4">mdi-message-text</v-icon>
                    <span class="icon-text">{{ $t("Chat Bot Status") }}</span>
                </p>
                <span class="text-right"><v-switch v-model="isOn" class="small-switch"></v-switch></span>
            </h4>
            <h4>
                <p>
                    <v-icon size="24" color="primary">mdi-check</v-icon>
                    <span class="icon-text">{{ $t("Application Status") }}</span>
                </p>
                <span class="text-right"><v-switch v-model="isOn" class="small-switch"></v-switch></span>
            </h4>
            <h4>
                <p>
                    <v-icon size="24" color="primary">mdi-clock</v-icon>
                    <span class="icon-text">{{ $t("Application Lifetime") }}</span>
                </p>
                <span class="text-right"><v-icon style="color: darkgreen;">mdi-plus</v-icon></span>
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'page1',
    data() {
        return {
            isOn: false,
        };
    },
};
</script>

<style scoped>
#id2 {
    font-weight: lighter;
    font-family: 'Neo', sans-serif;
    font-weight: bold;
    color: rgb(91, 87, 87)
}

.class4 {}

.class3 {
    margin-top: 1rem;
}

.product_details[data-v-ee34de08] {
    flex: 10;

}

.page {
    background-color: #f4f5fa;
    display: flex;
    flex-direction: column;
    margin-top: 20%;


}

.heading {
    margin-left: 1rem;

}

.page-background {
    margin: 1rem;
    padding: 1rem;
    font-family: 'Neo', sans-serif;
    font-weight: 100;
    font-size: large;
    background-color: white;
    border-radius: 5px;
    box-shadow: rgba(79, 77, 77, 0.16) 0px 10px 36px 0px, rgba(30, 29, 29, 0.06) 0px 0px 0px 1px;


}

h4 {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.icon-text {
    margin-left: 15px;
    font-size: 18px;

    font-weight: 500;
    color: rgb(91, 87, 87);

    font-family: 'Neo', sans-serif;

    color: rgb(91, 87, 87)
}

.text-right {
    margin-left: auto;
    margin-right: 20px;
}

.small-switch {
    width: 32px;
    height: 16px;
}

@media (max-width: 768px) {
    .page-background {
        margin: 0.3rem;
        width: 100%;

    }
}
</style>
