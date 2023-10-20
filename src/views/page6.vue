<template>
<div class="data child">
    <div class="heading2">
        <h1 class="class3">{{ $t('projectTitle') }}</h1>

        <button class="top-button" @click="showModal = true">{{ $t('Add_Association') }}</button>
        <div v-if="showModal" class="modal-overlay">
            <div class="modal">
                <!-- Modal content can be placed here -->
                <div class="modal-close-btn">
                    <button @click="showModal = false">&times;</button>
                </div>
                <!-- Modal content can be placed here -->
                <h2 class="class7">{{ $t('Add_Association_Line_Title') }}</h2>data

                <div class="form-group">

                    <select class="class4" id="taskTypes">
                        <option value="" disabled selected>--Select--</option>
                        <option value="cropCare">Crop Care</option>
                        <option value="landPreparation">Land Preparation</option>
                        <option value="harvesting">Harvesting</option>
                        <option value="pestControl">Pest and Disease Control</option>
                        <option value="sowing">Sowing</option>
                        <option value="fertilization">Fertilization</option>
                        <option value="weeding">Weeding</option>
                        <option value="pruning">Pruning</option>
                        <option value="transplanting">Transplanting</option>
                        <option value="livestockCare">Livestock Care</option>
                        <option value="equipmentMaintenance">Equipment Maintenance</option>
                        <option value="none">None</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="class5" for="AsociaciónName">{{ $t('PRODUCTORA') }}</label>
                    <textarea id="description" class="inputfiled ppo" name="description" v-model="description"></textarea>
                    <p :class="{ 'text-red': charCount < 150, 'text-normal': charCount >= 150 }">
                        Character count: {{ charCount }} / 150
                    </p>

                </div>
                <div class="form-group">
                    <label class="class5" for="AsociaciónName">{{ $t('CARACTERÍSTICAS') }}</label>
                    <input type="date" class="class4" name="availableFromDate">
                </div>

                <div class="form-group">
                    <label class="class5" for="AsociaciónRef">{{ $t('ÁREA') }}</label>
                    <input type="date" class="class4" name="availabltoDate">
                </div>

                <div class="button-wrapper">
                    <button class="add-button">{{ $t('Add_Button_Label') }}</button>
                </div>

            </div>
        </div>

    </div>
    <hr class="class3">
    <div class="table-container">
        <table class="table">
            <tr class="heading">

                <th class="heading">{{ $t('AGRICULTORA') }}</th>
                <th class="heading">{{ $t('PRODUCTORA') }}</th>
                <th class="heading">{{ $t('CARACTERÍSTICAS') }}</th>
                <th class="heading">{{ $t('ÁREA') }}</th>
                <th class="heading">{{ $t('CREADO EN') }}</th>

            </tr>
            <tr>
                <td>
                    <v-divider></v-divider>
                </td>
                <td>
                    <v-divider></v-divider>
                </td>
                <td>
                    <v-divider></v-divider>
                </td>
                <td>
                    <v-divider></v-divider>
                </td>
                <td>
                    <v-divider></v-divider>
                </td>
                <td>
                    <v-divider></v-divider>
                </td>
                <td>
                    <v-divider></v-divider>
                </td>
            </tr>

            <tr class="head" v-for="task in taskTypes" :key="task.name">
                <!-- Sample loop, adjust as per your needs -->
                <td class="head">{{ task.name }}</td>
                <td class="head">{{ task.description }}</td>
                <td class="head ">{{ task.startDate }}</td>
                <td class="head">{{ task.endDate }}</td>
                <td class="head interactive-cell">
                    <v-icon class="update-icon" @click="showModal1 = true">mdi-pencil</v-icon>
                    <div v-if="showModal1" class="modal1-overlay">
                        <div class="modal">
                            <!-- Modal content can be placed here -->
                            <div class="modal-close-btn">
                                <button @click="showModal1 = false">&times;</button>
                            </div>
                            <!-- Modal content can be placed here -->
                            <h2 class="class7">Update task:</h2>

                            <div class="form-group">
                                <select class="class4" id="taskTypes">
                                    <option value="" disabled selected>--Select--</option>
                                    <option value="irrigation">Irrigation</option>
                                    <option value="cropCare">Crop Care</option>
                                    <option value="landPreparation">Land Preparation</option>
                                    <option value="harvesting">Harvesting</option>
                                    <option value="pestControl">Pest and Disease Control</option>
                                    <option value="sowing">Sowing</option>
                                    <option value="fertilization">Fertilization</option>
                                    <option value="weeding">Weeding</option>
                                    <option value="pruning">Pruning</option>
                                    <option value="transplanting">Transplanting</option>
                                    <option value="livestockCare">Livestock Care</option>
                                    <option value="equipmentMaintenance">Equipment Maintenance</option>
                                    <option value="none">None</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label id="id1" class="class5" for="AsociaciónName">{{ $t('PRODUCTORA') }}</label>
                                <textarea id="description" class="inputfiled ppo" name="description" v-model="description"></textarea>
                                <p :class="{ 'text-red': charCount < 150, 'text-normal': charCount >= 150 }">
                                    Character count: {{ charCount }} / 150
                                </p>
                            </div>
                            <div class="form-group">
                                <label id="id1" class="class5" for="AsociaciónName">{{ $t('CARACTERÍSTICAS') }}</label>
                                <input type="date" class="class4" name="availableFromDate">
                            </div>

                            <div class="form-group">
                                <label id="id1" class="class5" for="AsociaciónRef">{{ $t('ÁREA') }}</label>
                                <input type="date" class="class4" name="availabltoDate">
                            </div>

                            <div class="button-wrapper">
                                <button class="add-button">{{ $t('Add_Button_Label') }}</button>
                            </div>

                        </div>
                    </div>

                    <v-icon class="delete-icon" @click="showDeleteModal = true">mdi-delete</v-icon>
                    <div v-if="showDeleteModal" class="delete-modal-overlay">
                        <div class="delete-modal">
                            <div class="modal-close-btn">
                                <button @click="showDeleteModal = false">&times;</button>
                            </div>
                            <h2 class="class8">{{ $t('Confirmation_Message') }}</h2>
                            <div class="button-wrapper">
                                <button class="confirm-button" @click="confirmDelete">{{ $t('Yes_Button_Text')
                                    }}</button>
                                <button class="cancel-button" @click="showDeleteModal = false">{{ $t('No_Button_Text')
                                    }}</button>
                            </div>

                        </div>
                    </div>
                </td>
            </tr>

            <!-- ... (the divider rows) ... -->

        </table>
    </div>
    <div class="pageination">
        <v-pagination :length="6"></v-pagination>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export default {
    name: 'page6',
    data() {
        return {
             taskTypes: [
                {
                    name: 'Irrigation',
                    description: 'Watering crops to ensure optimal growth.',
                    startDate: '01/6/20',
                    endDate: '02/7/20'
                },
                {
                    name: 'Crop Care',
                    description: 'Crop care is the act of protecting crops from weather.',
                    startDate: '25/6/20',
                    endDate: '30/7/22'
                },
                 {
                    name: 'Land Preparation',
                    description: 'Getting the soil ready for planting.',
                    startDate: '05/5/20',
                    endDate: '10/5/20'
                },
                {
                    name: 'Harvesting',
                    description: 'Collecting mature crops from the fields.',
                    startDate: '10/8/20',
                    endDate: '15/8/20'
                },
                {
                    name: 'Pest Control',
                    description: 'Managing pests to prevent crop damage.',
                    startDate: '20/6/20',
                    endDate: '25/6/20'
                },
                {
                    name: 'Sowing',
                    description: 'Planting seeds in the ground.',
                    startDate: '15/4/20',
                    endDate: '20/4/20'
                },
                {
                    name: 'Fertilization',
                    description: 'Supplying crops with essential nutrients.',
                    startDate: '30/4/20',
                    endDate: '05/5/20'
                },
                {
                    name: 'Weeding',
                    description: 'Removing unwanted plants from the fields.',
                    startDate: '25/5/20',
                    endDate: '30/5/20'
                },
                {
                    name: 'Pruning',
                    description: 'Trimming plants to improve their growth.',
                    startDate: '01/7/20',
                    endDate: '05/7/20'
                },
                {
                    name: 'Transplanting',
                    description: 'Moving plants from one location to another.',
                    startDate: '10/7/20',
                    endDate: '15/7/20'
                },
                {
                    name: 'Livestock Care',
                    description: 'Taking care of farm animals and ensuring their well-being.',
                    startDate: '20/7/20',
                    endDate: '30/7/20'
                },
                {
                    name: 'Equipment Maintenance',
                    description: 'Ensuring that farming equipment is in good working condition.',
                    startDate: '01/8/20',
                    endDate: '10/8/20'
                }
                //... more task types
            ],
            description: '',
            showModal: false,

            showMenu: null,
            showDeleteModal: false,
            showModal1: false,
        };
    },
    methods: {
        goToScreen4() {
            this.$router.push({
                name: 'Maptotal'
            });
        },
        navigateToMap() {
            this.$router.push({
                name: 'Screen4'
            });
        },
        graph() {
            this.$router.push({
                name: 'line2'
            });
        },
        toggleMenu(rowNumber) {
            this.showMenu = this.showMenu === rowNumber ? null : rowNumber;
        },
        updateAction() {
            // Your update logic
        },
        deleteAction() {
            // Your delete logic
        },
        confirmDelete() {
            // Implement delete logic here.
            this.showDeleteModal = false;
        }
    },
    computed: {
        charCount() {
            return this.description.length;
        }
    },

};
</script>

<style scoped>
.data {
    font-family: 'Neo', sans-serif;

}

.head {
    font-weight: normal;
}

.class3 {
    margin-top: 1rem;
    color: rgb(91, 87, 87);
}

.head {}

.data child .class3 {
    margin-top: 1rem;
}

#id2 {
    font-weight: bold;
}

.data {
    position: relative;
    width: 100%;
    margin-top: 30px;

}

.heading {
    padding: 20px;
    text-align: center;
    font-size: 18px;
    font-weight: 600
}

.head {
    font-weight: normal;
    padding: 20px;

}

td {
    margin: 0;
    text-align: center;
}

h1 {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 600;
}

.table-container {
    box-shadow: rgba(89, 88, 88, 0.16) 0px 10px 36px 0px, rgba(90, 89, 89, 0.06) 0px 0px 0px 1px;
    overflow-x: auto;
    margin: 1rem;
    background-color: white;
    font-family: 'Neo', sans-serif;
    border-radius: 10px;

}

.table {
    width: 100%;
    padding: 25px 20px;
    border-collapse: collapse;

}

.pageination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
}

#id2 {
    font-weight: bold;
    color: rgb(91, 87, 87);
}

.head {
    font-size: large;
    padding: 20px;
    border-bottom: 1px solid #e3e3e3;

    font-size: 17px;
    font-weight: bold;
    color: rgb(91, 87, 87);
    text-align: start;

}

.heading {
    padding: 20px;
    text-align: center;

    color: #ffffff;
    font-weight: 600;
    background-color: #42a517cf;
    text-align: start;
}

.heading2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    /* Space on the sides of the header */
    margin-bottom: 1rem;
}

.btn {
    margin-left: auto;

    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: #ffffff;

}

.hover-effect:hover {
    color: black;
    /* Change 'blue' to the text color you want */
    text-decoration-color: red;
    /* Change 'red' to the underline color you want */
}

.interactive-cell:hover {
    /* This is a light grey, you can change it to any color you want */
    cursor: pointer;
}

.edit-button {
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.top-button {
    padding: 0.5rem 1rem;
    background: -webkit-linear-gradient(-60deg, #eeee22, #0e9e01);
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, background 0.3s ease;
}

.top-button:hover {
    background: -webkit-linear-gradient(-60deg, #e2e200, #0c8a00);
    /* Slightly darker shades on hover */
    background: linear-gradient(-60deg, #e2e200, #0c8a00);
}

.top-button,
.modal button {
    /* Ensure we're using a standard font for consistency */
    cursor: pointer;
    border: none;
    background-color: transparent;
   

    transition: 0.3s;
}

@media screen and (max-width: 768px) {
    .Asociación-lines-title {
        font-size: 1.2rem;
    }

    .top-button {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
    }
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    /* This gives the blur effect */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    /* Ensure the overlay appears on top */
}

.modal-close-btn {
    position: absolute;

    top: 7px;

    right: 10px;

    text-align: center;
    font-size: 20px;
    width: 23px;
    background-color: red;
    color: #ffffff;

}

.modal button {
    /* Ensure we're using a standard font for consistency */
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 20px;

    transition: 0.3s;
}

.modal-close-btn button {
    /* Ensure we're using a standard font for consistency */
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
    /* Ensure the modal is above the overlay */
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    /* This gives the blur effect */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    /* Ensure the overlay appears on top */
}

.modal1-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    /* This gives the blur effect */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    /* Ensure the overlay appears on top */
}

.class7 {
    color: rgb(91, 87, 87);
    font-size: 20px;
    margin-bottom: 8px;
    text-align: center;

}

.class5 {
    font-weight: bold;
    color: rgb(91, 87, 87);
    font-size: 15px;

}

.class4 {
    border: 2px solid rgb(158, 155, 155);
    border-radius: 5px;
    padding: 10px;
    margin-top: 6px;
    margin-bottom: 10px;
    width: 96%;
    color:gray;
    font-size: 15px;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 1rem;
}

.class8 {
    color: rgb(91, 87, 87);
    font-size: 20px;

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
    /* Darker green on hover */
}

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 1rem;
}

.edit-button {
    background-color: #3498db;
    /* Blue color */
    color: #ffffff;
    /* White text */
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    /* Rounded corners */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    /* Smooth transition for hover effect */
}

.edit-button:hover {
    background-color: #2980b9;
    /* Darker blue on hover */
}

.menu-container {
    position: relative;
}

.menu-icon {
    font-size: 24px;
    cursor: pointer;
}

.dropdown-menu {
    position: absolute;
    right: 0;
    top: 100%;

    z-index: 1;
}

.dropdown-menu button {
    display: block;
    padding: 8px 16px;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
}

.dropdown-menu button:hover {
    background-color: #f5f5f5;
}

.dropdown-menu button {
    display: block;
    padding: 10px 20px;
    /* Increased padding for a more spacious feel */
    border: none;
    background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: #ffffff;
    /* Text color is white for better contrast */
    width: 100%;
    text-align: center;
    /* Center aligned text for a better look */
    cursor: pointer;
    transition: all 0.3s;
    /* Smooth transition for hover effect */
    /* Adding a subtle shadow for depth */
    border-radius: 5px;
    /* Rounded corners */
    margin: 5px 0;
    /* Some margin to separate buttons */
    font-weight: 600;
    /* Making the font slightly bolder */
}

.dropdown-menu button:hover {
    background: linear-gradient(-60deg, #dddd11, #0d8d00);
    /* Slightly darker gradient for hover effect */
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
    /* Deeper shadow on hover for a lifted effect */
    transform: translateY(-2px);
    /* Slight upward movement on hover for a dynamic effect */
}

.menu-icon {
    font-size: 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.menu-icon:hover {
    color: #555;
}

.update-icon,
.delete-icon {
    margin: 0 0.5rem;
    cursor: pointer;
}

.update-icon,
.delete-icon {
    margin: 0 0.75rem;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .class1 {
        font-size: 1.2rem;
    }

    .class1 th,
    .class1 td {
        padding: 0.8rem 1.5rem;
    }

    .update-icon,
    .delete-icon {
        margin: 0 0.5rem;
    }
}

.update-icon {
    transition: transform 0.3s ease;
    /* Smooth transition */
    font-size: 24px;
    /* Initial size, adjust as needed */
}

.update-icon:hover {
    transform: scale(1.1);
}

.delete-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;

}

.delete-modal {
    position: relative;
    width: 80%;
    max-width: 400px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    z-index: 2001;
}

.confirm-button,
.cancel-button {
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 5px;

}

.confirm-button {
    background: -webkit-linear-gradient(-60deg, #eeee22, #0e9e01);
    background: linear-gradient(-60deg, #eeee22, #0e9e01);

    color: white;
}

.expanded-input {
    padding: 2px 2px;
    /* Increased padding for more space */
    margin-bottom: 20px;
    height: 100px;
    /* Optional: Increase bottom margin for spacing below the input */
}

#id1 {
    text-align: left;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}

.inputfiled {
    padding: 10px;
    border: 1px solid rgb(91, 87, 87);
    outline: none;
    border-radius: 5px;
    width: 96%;
    padding-left: 10px;
    color: rgb(91, 87, 87);
    font-size: 17px;
    margin-top: 5px;
}

.ppo {
    height: 100px;
}

.text-red {
    color: red;
    text-align: start;
}

.text-normal {
    color: green;
    /* Or any color you want when character count is 100 or more */
}

/* Reduced font size for the character count */
p {
    font-size: 0.8em;
}
</style>
