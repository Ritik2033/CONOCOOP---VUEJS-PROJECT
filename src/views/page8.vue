<template>
<v-main>
    <div class="table-wrapper">
        <div class="header">
            <h1 class="Asociación-lines-title">{{ $t('Association_Lines') }}</h1>

            <!-- Adding a button here -->
            <button class="top-button" @click="showModal = true">{{ $t('Add_Association') }}</button>

            <div v-if="showModal" class="modal-overlay">
                <div class="modal">
                    <!-- Modal content can be placed here -->
                    <div class="modal-close-btn">
                        <button @click="showModal = false">&times;</button>
                    </div>
                    <!-- Modal content can be placed here -->
                    <h2 class="class7">{{ $t('Add_Association_Line_Title') }}</h2>

                    <div class="form-group">
                        <label class="class5" for="AsociaciónName">{{ $t('Association_Line_Name_Label') }}</label>
                        <input class="class4" type="text" id="AsociaciónName" :placeholder=" $t('Association_Line_Name_Placeholder')">
                    </div>

                    <div class="form-group">
                        <label class="class5" for="AsociaciónRef">{{ $t('Association_Line_Reference_Label') }}</label>
                        <input class="class4" type="text" id="AsociaciónRef" :placeholder="$t('Association_Line_Reference_Placeholder') ">
                    </div>

                    <div class="button-wrapper">
                        <button class="add-button">{{ $t('Add_Button_Label') }}</button>
                    </div>

                </div>
            </div>

        </div>
        <hr>
        <div class="table-container">
            <table class="class1">
                <thead>
                    <tr>
                        <th>{{ $t('Association_Line_Label') }}</th>
                        <th>{{ $t('Association_Reference_Label') }}</th>
                        <th>{{ $t('Title_Label') }}</th>

                    </tr>
                </thead>
                <tbody>
                    <tr v-for="Asociación in Asociacións" :key="Asociación">
                        <td class="no-right-border">{{ $t(Asociación) }}</td>
                        <td class="no-borders">{{ $t(Asociación) }}</td>
                        <td>
                            <v-icon class="update-icon" @click="showModal1 = true">mdi-pencil</v-icon>
                            <div v-if="showModal1" class="modal1-overlay">
                                <div class="modal">
                                    <!-- Modal content can be placed here -->
                                    <div class="modal-close-btn">
                                        <button @click="showModal1 = false">&times;</button>
                                    </div>
                                    <!-- Modal content can be placed here -->
                                    <h2 class="class7">Update Line:</h2>

                                    <div class="form-group">
                                        <label class="class5" for="AsociaciónName">{{ $t('Association_Line_Name_Label') }}</label>
                                        <input class="class4" type="text" id="AsociaciónName" :placeholder="$t('Prime_Saving_Placeholder')">
                                    </div>

                                    <div class="form-group">
                                        <label class="class5" for="AsociaciónRef">{{ $t('Association_Line_Reference_Label') }}</label>
                                        <input class="class4" type="text" id="AsociaciónRef" :placeholder="$t('Prime_Saving_Placeholder')">
                                    </div>

                                    <div class="button-wrapper">
                                        <button class="add-button">{{ $t('Update_Button_Text') }}</button>

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
                                        <button class="confirm-button" @click="confirmDelete">{{ $t('Yes_Button_Text') }}</button>
                                        <button class="cancel-button" @click="showDeleteModal = false">{{ $t('No_Button_Text') }}</button>
                                    </div>

                                </div>
                            </div>
                        </td>
                    </tr>
                    <!-- Repeat <tr>...</tr> for additional rows as required -->
                </tbody>
            </table>
        </div>
    </div>
</v-main>
</template>

<script>
export default {
    name: 'page8',
    data() {
        return {
            Asociacións: [
                'Primary Saving',
                'Salary Saving',
                'Standard Saving',
                'Advanced Checking',
                'Preferred Checking'
            ],
            showModal: false,
            showDeleteModal: false,
            showModal1: false,

        };
    },
    methods: {
        confirmDelete() {
            // Implement delete logic here.
            this.showDeleteModal = false;
        }
    }

}
</script>

<style scoped>
.class7 {
    color: rgb(71, 70, 70);
}

.table-wrapper {
    font-family: 'Neo', sans-serif;

}

/* ... (rest of the styles) ... */

/* Styles for the delete confirmation modal */

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

.cancel-button {
    background-color: grey;
    color: white;
}

.class4 {
    border: 2px solid rgb(158, 155, 155);
    border-radius: 5px;
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 96%;
}

.class5 {
    font-weight: bold;
    color: rgb(71, 70, 70);
}

.form-group {
    margin-bottom: 20px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
}

/* ... (previous styles) ... */

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
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

.modal-close-btn {
    position: absolute;
    /* Absolute positioning with respect to the modal */
    top: 7px;
    /* Offset from the top */
    right: 10px;
    /* Offset from the right */

}

.modal-close-btn button {
    /* Ensure we're using a standard font for consistency */
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 20px;
    transition: 0.3s;
}

.top-button,
.modal button {
    /* Ensure we're using a standard font for consistency */
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: 20px;

    transition: 0.3s;
}

/* ... Existing styles ... */

.table-wrapper {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    font-family: 'Neo', sans-serif;

    max-width: 1200px;
    margin: auto;
    /* Center the wrapper */
    padding: 1rem;
    /* Add some space around */
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    /* Space on the sides of the header */
    margin-bottom: 1rem;
    /* Space between header and table */
}

.top-button:hover {
    background-color: #45a049;
    /* Darker green on hover */
}

/* Adjustments for smaller screens to ensure responsiveness */
@media screen and (max-width: 768px) {
    .Asociación-lines-title {
        font-size: 1.2rem;
    }

    .top-button {
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
    }
}

/* ... rest of your existing styles ... */

.class1 {
    width: 100%;
    /* Set the width of the table to fill the container */
    border-collapse: collapse;
    font-size: 1.3rem;
    /* Increase the font size */
    text-align: center;
}

.class1 th,
.class1 td {
    padding: 1rem 2rem;
    /* Increase padding for better spacing */
    border-bottom: 1px solid #ccc;
    /* Horizontal borders */
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

.delete-icon {
    transition: transform 0.3s ease;
    /* Smooth transition */
    font-size: 24px;
    /* Initial size, adjust as needed */
}

.delete-icon:hover {
    transform: scale(1.1);
    /* 10% larger on hover */
}

/* Adjustments for smaller screens to ensure responsiveness */
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

@media screen and (max-width: 480px) {
    .class1 {
        font-size: 1rem;
    }

    .class1 th,
    .class1 td {
        padding: 0.6rem 1rem;
    }
}

.no-right-border {
    border-right: none;
}

.no-borders {
    border-right: none;
}

.class1 {
    box-shadow: 0px 0px 15px rgba(0.2, 0.2, 0.2, 0.3);

}

.table-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    /* Takes full height of its parent */
    padding: 1rem;
    overflow-x: auto;
    width: 100%;

    /* Space around the table */
}

table {
    width: 100%;
    /* Table will take full width of its container */
    max-width: 1200px;
    /* Maximum width of the table */
    border-collapse: collapse;
    font-size: 1rem;
    border-radius: 7px;
}

th,
td {
    padding: 0.5rem 1rem;
    /* Space inside each cell */

    border-bottom: 1px solid #ccc;
    /* A border for cells */
    text-align: left;
}

th {

    /* A light background color for headers */
}

.update-icon,
.delete-icon {
    margin: 0 0.75rem;
    cursor: pointer;
}

/* Adjustments for mobile view */
@media screen and (max-width: 768px) {

    th,
    td {
        padding: 0.25rem 0.5rem;
        font-size: 0.675rem;
        /* Smaller text for mobile view */
    }
}

.update-icon,
.delete-icon {
    margin: 0 0.5rem;
    cursor: pointer;
}

@media screen and (max-width: 768px) {

    th,
    td {
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
    }
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

.class4 {
    border: 2px solid rgb(158, 155, 155);
    border-radius: 5px;
    padding: 7px;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 96%;
    font-size: 15px;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 1rem;
}

.Asociación-lines-title {
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
</style>
