<template>
<div class="container">
    <div class="rectangle" v-for="n in 3" :key="n">
        <div v-if="n === 1">
            <i class="fas fa-certificate icon icon-certificate"></i>
            <span class="title">View Certificate</span>
        </div>
        <div v-else-if="n === 2">
            <i class="fas fa-book icon icon-course"></i>
            <span class="title"> Course</span>
        </div>
        <div v-else-if="n === 3">
            <i class="fas fa-upload icon icon-submit"></i>
            <span class="title"> Submit Certificate</span>
        </div>
    </div>
    <div class="boxes-rectangle" v-for="n in 3" :key="n">
         
    </div>

</div>
</template>

<script>
export default {
    name: 'Dashboard3',
}
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.rectangle {
    flex: 1 1 calc(33.33% - 20px);
    margin: 10px;
    border: 1px solid #e1e1e1;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    height: 70px;
    display: flex;
    align-items: start;
    flex-direction: column;
    border-radius: 15px;
    justify-content: start;
    border-radius: 15px;
    color: #333;
    background-color: #e7efef
}

.icon {
    font-size: 1.8rem;
    margin-bottom: 5px;
    /* Adjust icon color as needed */
}

.icon-certificate {
    color: #E57373;
    background-color: #a168d5;
    padding: 5px;
    /* Light red */
    border-radius: 5px;

}

.icon-course {
    color: #81C784;
    background-color: #d34a4a;
    padding: 6px;
    /* Light red */
    border-radius: 5px;
    /* Light green */
}

.icon-submit {
    color: #64B5F6;
    background-color: #d6f664;
    padding: 6px;
    /* Light red */
    border-radius: 5px;
    /* Light blue */
}

@media (max-width: 768px) {
    .rectangle {
        flex: 1 1 100%;
    }
}

.title {
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(91, 87, 87);
    margin-bottom: 5px;
}

.boxes-rectangle {
    width: 150px;
    height: 400px;
    flex: 1 1 calc(33.33% - 20px);
    margin: 10px;
    border: 1px solid #e1e1e1;
    padding: 20px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    position: relative;
    border-radius: 15px;
    color: #333;
    background-color: #f9f9f9;
}

/* The trick for a square box */
.boxes-rectangle::before {
    content: "";
    display: block;
    padding-top: 100%;
    /* This makes the height equal to the width */
}

@media (max-width: 768px) {
    .boxes-rectangle {
        flex: 1 1 100%;
    }
}
</style>
