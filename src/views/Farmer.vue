<template>
    <div class="data child">
        <div class="heading-container">
    <h1>{{ $t('projects') }}</h1>
                  <div class="search-container">
                  <input type="text" v-model="searchTerm" :placeholder="$t('placeholder_search')" />

                <v-icon v-if="searchTerm" @click="searchTerm = ''" class="icon-clear">mdi-close-circle</v-icon>

                <!-- Change microphone icon based on recording state -->
                <v-icon v-if="!isRecording" @click="handleVoiceSearch" class="icon-mic">mdi-microphone</v-icon>
                <v-icon v-else @click="handleVoiceSearch" class="icon-mic" active>mdi-microphone-off</v-icon>

                <!-- Search Icon -->
                <v-icon class="icon-search">mdi-magnify</v-icon>
            </div>

            
            <div>
             <button class="new-project-btn" @click="createNewProject">{{ $t('newProjectButton') }}</button>

             </div>
              

               <div class="export-container">
              <button @click="exportToPDF">{{ $t('button_print') }}</button>

            </div>
        </div>
        <div class="table-responsive">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th class="class5" @click="sortTable('col1')">{{ $t('tableHeaders.projectType') }}  <v-icon v-if="currentSortColumn === 'col1' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                <v-icon v-if="currentSortColumn === 'col1' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon></th>
                        <th class="class5" @click="sortTable('col2')">{{ $t('tableHeaders.farm') }}<v-icon v-if="currentSortColumn === 'col2' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                <v-icon v-if="currentSortColumn === 'col2' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon></th>
                        <th class="class5" @click="sortTable('col3')">{{ $t('tableHeaders.developmentAgent') }} <v-icon v-if="currentSortColumn === 'col3' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                <v-icon v-if="currentSortColumn === 'col3' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon></th>
                        <th class="class5" @click="sortTable('col4')">{{ $t('tableHeaders.startDate') }} <v-icon v-if="currentSortColumn === 'col4' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                <v-icon v-if="currentSortColumn === 'col4' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon></th>
                        <th class="class5" @click="sortTable('col5')">{{ $t('tableHeaders.endDate') }}  <v-icon v-if="currentSortColumn === 'col5' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                <v-icon v-if="currentSortColumn === 'col5' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon></th>
                        <th class="class5" @click="sortTable('col6')">{{ $t('tableHeaders.status') }}<v-icon v-if="currentSortColumn === 'col6' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                <v-icon v-if="currentSortColumn === 'col6' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon></th>
                        <th class="class5" @click="sortTable('col7')">{{ $t('tableHeaders.budget') }}<v-icon v-if="currentSortColumn === 'col7' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                <v-icon v-if="currentSortColumn === 'col7' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedItems" :key="item.id">
                        <td class="class4"  @click="goToDetailsPage(item)">{{ item.col1 }}</td>
                        <td class="class4">{{ item.col2 }}</td>
                        <td class="class4">{{ item.col3 }}</td>
                        <td class="class4">{{ item.col4 }}</td>
                        <td class="class4">{{ item.col5 }}</td>
                        <td class="class4">{{ item.col6 }}</td>
                        <td class="class4">{{ item.col7 }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination-container">
                  <div class="item-count-container">
            <v-icon>mdi-format-list-bulleted</v-icon>
            <select v-model="itemsPerPage">
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="15">15 per page</option>
                <option value="20">20 per page</option>
            </select>
        </div>
                <v-pagination v-model="page" :length="totalPages" prev-icon="mdi-menu-left"
                    next-icon="mdi-menu-right"></v-pagination>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Document,
    Packer,
    Paragraph,
    TextRun
} from "docx";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
export default {
    name: 'Farmer',
    data() {
        return {
            page: 1,
              isRecording: false,
            itemsPerPage: 5,
            searchTerm: '',
              currentSortColumn: '',
            currentSortDirection: '',
            sortOrder: '',
            items: [
                // Sample data for the table
                   {
                    id: 1,
                    col1: 'Irrigation System',
                    col2: 'Doe Farms',
                    col3: 'Lead Developer - John',
                    col4: '2021-01-01',
                    col5: '2021-06-01',
                    col6: 'Completed',
                     col7: '170$'
                },
                {
                    id: 2,
                    col1: 'Crop Rotation',
                    col2: 'Smith Greens',
                    col3: 'Lead Developer - Jane',
                    col4: '2021-02-01',
                    col5: '2021-07-01',
                    col6: 'Pending',
                    col7: '430$'
                },
                {
                    id: 3,
                    col1: 'Drip Irrigation',
                    col2: 'Brown Lands',
                    col3: 'Lead Developer - Robert',
                    col4: '2021-02-15',
                    col5: '2021-07-15',
                    col6: 'In Progress',
                    col7: '500$'
                },
                {
                    id: 4,
                    col1: 'Greenhouse Cultivation',
                    col2: 'Johnson Meadows',
                    col3: 'Lead Developer - Emily',
                    col4: '2021-03-01',
                    col5: '2021-08-01',
                    col6: 'Completed',
                    col7: '360$'
                },
                {
                    id: 5,
                    col1: 'Organic Fertilizers',
                    col2: 'White Orchards',
                    col3: 'Lead Developer - Michael',
                    col4: '2021-03-15',
                    col5: '2021-09-15',
                    col6: 'Pending',
                    col7: '240$'
                },
                {
                    id: 6,
                    col1: 'Pesticide Management',
                    col2: 'Williams Fields',
                    col3: 'Lead Developer - Sophia',
                    col4: '2021-04-01',
                    col5: '2021-09-01',
                    col6: 'In Progress',
                    col7: '340$'
                },
                {
                    id: 7,
                    col1: 'Soil Testing',
                    col2: 'Wilson Farms',
                    col3: 'Lead Developer - James',
                    col4: '2021-05-01',
                    col5: '2021-10-01',
                    col6: 'Completed',
                    col7: '510$'
                },
                {
                    id: 8,
                    col1: 'Organic Certification',
                    col2: 'Taylor Ranch',
                    col3: 'Lead Developer - Linda',
                    col4: '2021-05-15',
                    col5: '2021-11-15',
                    col6: 'In Progress',
                    col7: '410$'
                },
                {
                    id: 9,
                    col1: 'Composting Techniques',
                    col2: 'Johnson Homestead',
                    col3: 'Lead Developer - Paul',
                    col4: '2021-06-01',
                    col5: '2021-12-01',
                    col6: 'Pending',
                    col7: '310$'
                },
                {
                    id: 10,
                    col1: 'Vertical Farming',
                    col2: 'Davis Greenhouses',
                    col3: 'Lead Developer - Rebecca',
                    col4: '2021-07-01',
                    col5: '2022-01-01',
                    col6: 'In Progress',
                    col7: '210$'
                },
                       {
                    id: 11,
                    col1: 'Seed Germination Techniques',
                    col2: 'Martinez Crop Labs',
                    col3: 'Lead Developer - Brian',
                    col4: '2021-07-15',
                    col5: '2022-01-15',
                    col6: 'Completed',
                    col7: '180$'
                    
                    
                },
                {
                    id: 12,
                    col1: 'Hydroponics',
                    col2: 'Lopez Aquatic Gardens',
                    col3: 'Lead Developer - Grace',
                    col4: '2021-08-01',
                    col5: '2022-02-01',
                    col6: 'In Progress',
                    col7: '170$'
                },
                {
                    id: 13,
                    col1: 'Land Optimization',
                    col2: 'Gonzalez Plantations',
                    col3: 'Lead Developer - Anthony',
                    col4: '2021-09-01',
                    col5: '2022-03-01',
                    col6: 'Pending', 
                    col7: '250$'
                    
                },
                {
                    id: 14,
                    col1: 'Biopesticides',
                    col2: 'Ramirez Organic Farms',
                    col3: 'Lead Developer - Lucy',
                    col4: '2021-10-01',
                    col5: '2022-04-01',
                    col6: 'Completed',
                    col7: '300$'
                },
                {
                    id: 15,
                    col1: 'Soil Nutrition Management',
                    col2: 'Young Fields',
                    col3: 'Lead Developer - Chris',
                    col4: '2021-11-01',
                    col5: '2022-05-01',
                    col6: 'In Progress',
                    col7: '500$'
                },
                {
                    id: 16,
                    col1: 'Integrated Pest Management',
                    col2: 'Hernandez Eco Lands',
                    col3: 'Lead Developer - Oliver',
                    col4: '2021-11-15',
                    col5: '2022-05-15',
                    col6: 'Pending',
                    col7: '450$'
                },
                {
                    id: 17,
                    col1: 'Organic Seed Development',
                    col2: 'King Seed Labs',
                    col3: 'Lead Developer - Hannah',
                    col4: '2021-12-01',
                    col5: '2022-06-01',
                    col6: 'Completed',
                    col7: '200$'
                },
                {
                    id: 18,
                    col1: 'Natural Herbicides',
                    col2: 'Green Eco Plantations',
                    col3: 'Lead Developer - Edward',
                    col4: '2022-01-01',
                    col5: '2022-07-01',
                    col6: 'In Progress',
                    col7: '150$'
                },
                {
                    id: 19,
                    col1: 'Rainwater Harvesting',
                    col2: 'Turner Rain Farms',
                    col3: 'Lead Developer - Ella',
                    col4: '2022-02-01',
                    col5: '2022-08-01',
                    col6: 'Pending',
                    col7: '300$'
                },
                {
                    id: 20,
                    col1: 'Aeroponics',
                    col2: 'Carter Sky Farms',
                    col3: 'Lead Developer - David',
                      col4: '2022-02-01',
                    col5: '2022-08-01',
                    col6: 'Pending',
                    col7: '120$'

                }

                // ... add more data as needed
            ]
        };
    },
    computed: {
        filteredAndSortedItems() {
            let items = [...this.items];

            // Filtering logic
            if (this.searchTerm.trim()) {
                const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
                items = items.filter(item =>
                    Object.values(item).some(val =>
                        val.toString().toLowerCase().includes(lowerCaseSearchTerm)
                    )
                );
            }

            // Sorting logic
             if (this.currentSortColumn) {
                items.sort((a, b) => {
                    const valA = a[this.currentSortColumn].toString().toLowerCase();
                    const valB = b[this.currentSortColumn].toString().toLowerCase();
                    if (valA < valB) {
                        return this.currentSortDirection === 'asc' ? -1 : 1;
                    }
                    if (valA > valB) {
                        return this.currentSortDirection === 'asc' ? 1 : -1;
                    }
                    return 0;
                });
            }

            return items;
        },
        totalPages() {
            return Math.ceil(this.filteredAndSortedItems.length / this.itemsPerPage);
        },
        paginatedItems() {
            const start = (this.page - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredAndSortedItems.slice(start, end);
        }
    },
    watch: {
        searchTerm(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.page = 1;
            }
        },
         itemsPerPage(newVal, oldVal) {
            if (newVal !== oldVal) {
                this.page = 1; // reset to the first page
            }
        }
    },
    methods: {
         handleVoiceSearch() {
            if (this.isRecording) {
                this.recognition.stop();
                return;
            }

            this.recognition = new window.webkitSpeechRecognition();
            this.recognition.interimResults = false;

            this.recognition.onstart = () => {
                console.log("Voice recognition started...");
                this.isRecording = true;
            };

            this.recognition.onresult = (event) => {
                const last = event.results.length - 1;
                const text = event.results[last][0].transcript;
                this.searchTerm = text;
                this.recognition.stop();
            };

            this.recognition.onend = () => {
                this.isRecording = false;
            }

            this.recognition.onerror = (event) => {
                console.log('Error occurred in recognition:', event.error);
                this.isRecording = false;
            };

            this.recognition.start();
        },
          sortTable(column) {
            if (this.currentSortColumn === column) {
                this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.currentSortColumn = column;
                this.currentSortDirection = 'asc';
            }
        },
         goToDetailsPage(item) {
            // Navigating to the Farmtotal route. You can pass params or use query.
            this.$router.push({
                name: 'page14total',
                params: {
                    id: item.id
                }
            });
        },
     
           createNewProject() {
           
              this.$router.push({ name: 'Projecttotal' });
        },
         createNewProject2() {

            this.$router.push({ name: 'ApproveAppli' });
        },
        async exportToPDF() {
            const content = document.querySelector('.table-responsive');
            const canvas = await html2canvas(content);
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save("table.pdf");
        },

           
    }




}
</script>

<style scoped>
.farm-container {
    font-family: 'Arial', sans-serif;
    margin: 20px;
}

.heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

h1 {
    font-size: 2rem;
    color: #333;
    margin: 0;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
}

.styled-table thead {
    background-color: #333;
    color: #fff;
}

.styled-table th,
.styled-table td {
    padding: 30px 25px;

}

.styled-table tbody tr:hover {}

.search-container {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
}

.search-container input {
    border: none;
    outline: none;
    padding: 5px;
}

.search-container v-icon {
    margin-left: 5px;
    cursor: pointer;
}

.class4 {
    padding-top: 10px;
    padding-bottom: 10px;
}

.class5 {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: start;
}

.pagination-container {
    text-align: center;
    margin-top: 30px;
    text-align: start;
}

.v-pagination {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.v-pagination .v-icon {
    font-size: 24px;
    /* Adjust size as desired */
    margin: 0 5px;
    /* Space out the icons a bit */
    transition: transform 0.2s, color 0.2s;
}

.v-pagination .v-icon:hover {
    color: #3498db;
    /* Change color on hover */
    transform: scale(1.1);
    /* Make the icon a bit larger on hover */
}

.v-pagination .v-icon {
    font-size: 24px !important;
    /* ... other styles ... */
}

::v-deep .pagination-container {
    text-align: center;
    margin-top: 30px;
}

::v-deep .v-pagination {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

::v-deep .v-pagination .v-icon {
    font-size: 24px !important;
    margin: 0 5px !important;
    transition: transform 0.2s, color 0.2s !important;
}

::v-deep .v-pagination .v-icon:hover {
    color: #3498db !important;
    transform: scale(1.1) !important;
}

.theme--light.v-pagination .v-pagination__item {
    background: black !important;
}

::v-deep .v-pagination .v-pagination__item.v-pagination__item--active {
    background-color: #0000009e !important;
    color: white !important;
}

.action-container {
    display: flex;
    align-items: center;
    gap: 15px;
    /* Spacing between search and sort containers */
}

.sort-container {
    display: flex;
    align-items: center;
    gap: 5px;
    /* Spacing between the filter icon and the dropdown */
}

.sort-container select {
    padding: 5px 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

/* Existing styles... */

/* Flexible Grid */
.farm-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    /* centers the container when the screen is wider than 1200px */
    padding: 10px;
}

.styled-table {
    width: 100%;
    max-width: 100%;
    /* Make sure the table doesn't overflow its container */
}

/* Media Queries */
/* Adjustments for screens up to 768px wide (Tablets) */
@media only screen and (max-width: 768px) {
    .heading-container {
        flex-direction: column;
        gap: 20px;
    }

    .search-container,
    .sort-container {
        width: 100%;
        margin-top: 15px;
    }

    .styled-table th,
    .styled-table td {
        padding: 15px 10px;
        /* reduce padding for smaller screens */
    }
}

/* Adjustments for screens up to 480px wide (Mobiles) */
@media only screen and (max-width: 480px) {
    h1 {
        font-size: 1.5rem;
        /* reduce font size for smaller screens */
    }

    .search-container input,
    .sort-container select {
        font-size: 0.9rem;
        /* reduce font size for inputs/select on smaller screens */
        width: 100%;
    }

    .styled-table th,
    .styled-table td {
        padding: 10px 5px;
        /* further reduce padding for very small screens */
    }
}

.data {
    position: relative;
    width: 100%;
    background-color: #f4f5fa;

}

.data child .class3 {
    margin-top: 1rem;
}

.data {
    font-family: 'Neo', sans-serif;

}

.data.child {
    background-color: #f7f7f7;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 20px;
}

.heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
    margin-bottom: 20px;
}

h1 {
    font-size: 24px;
    color: #17a2b8;
    margin: 0;
    font-weight: 500;
}

.sort-container {
    position: relative;
    display: inline-block;
}

.sort-container select {
    width: 200px;
    padding: 8px 12px;
    border: none;
    border-radius: 25px;
    outline: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-size: 14px;
}

.sort-container v-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #17a2b8;
    cursor: pointer;
}

.sort-container select {
    appearance: none;
    /* remove default arrow in some browsers */
    padding-right: 30px;
    /* make room for custom arrow */
    background-color: transparent;
    color: #333
}

.sort-container::before {
    content: '\25BC';
    /* downward arrow symbol */
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    /* make it non-clickable */
    color: #17a2b8;
}

.table-responsive {
    overflow-x: auto;
    /* Horizontal scrolling for smaller screens */
}

.styled-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border: 1px solid #e3e3e3;
    border-radius: 10px;
    overflow: hidden;
    /* To respect the border radius for children elements */
}

.styled-table thead {
    background-color: #42a517cf;
    /* Teal color theme */
}

.styled-table th,
.styled-table td {
    padding: 25px 20px;
    border-bottom: 1px solid #e3e3e3;
    font-size: 17px;
    font-weight: bold;
    color: rgb(91, 87, 87);
}

.styled-table th {
    color: #ffffff;

    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
}

.styled-table tbody tr:hover {
    background-color: #f5f5f5;

}

/* Striped rows */
.styled-table tbody tr:nth-of-type(odd) {
    background-color: #f9f9f9;

}

.pagination-container {
    text-align: center;
    margin-top: 30px;
}

.v-pagination {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.v-pagination .v-icon {
    font-size: 24px;
    margin: 0 5px;
    transition: transform 0.2s, color 0.2s;
}

.v-pagination .v-icon:hover {
    color: #17a2b8;
    /* Teal color for hover effect */
    transform: scale(1.1);
}
.new-project-btn {
   background: linear-gradient(-60deg, #eeee22, #0e9e01);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 20px;
    transition: background-color 0.3s ease;
}

.new-project-btn:hover {
     background: linear-gradient(-60deg, #eeee22, #0e9e01);;
}

.v-pagination .v-icon:hover {
    color: #17a2b8;
    /* Teal color for hover effect */
    transform: scale(1.1);
}

.pagination-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    background-color: #f8f9fa;
    border-top: 1px solid #e3e3e3;
    margin-top: 20px;
    
}

.item-count-container {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 5px 15px;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

.item-count-container select {
    border: none;
    padding: 5px 10px;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    font-size: 14px;
    color: #333;
    appearance: none; /* Removes default styling of select element */
    position: relative;
    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQfiCg0WOS82Rv0tAAAAx0lEQVQoz6XTsQ2CMBBF4a7SxNxCWVgZBgZBgZALGVgmBhZAgZEwMXAxmFk4NJCBeMCk6AAFLsGzLN0maZYpaJIkTd8l+e/Aed7aV9G7JAkDwzCXiN4XX8FbJ6x08vU6HGa7x5n3m2PYEwfesdXyt2eDP48l2fNYLA5bBROIdcZHP2Shy+uR+uov14ArO9rLjfQER+GhsPP6HB/8x2C74H4is9lsw/JhBGAozhj34Z2yz2fIkXwA+u6jO7rSTOMAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTE3VDE0OjIzOjQ0KzAwOjAwi6JEKwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0xN1QxNDoyMzo0NCswMDowMJaFL6YAAAAASUVORK5CYII=') no-repeat right center;
}

.v-pagination {
    margin-left: auto;
    background-color: #f8f9fa;
    border-radius: 5px;
    overflow: hidden;
}

.v-pagination .v-icon {
    font-size: 24px;
    margin: 0 5px;
    transition: transform 0.2s, color 0.2s;
}

.v-pagination .v-icon:hover {
    color: #17a2b8; /* Teal color for hover effect */
    transform: scale(1.1);
}
@media (min-width: 480px) { /* Small devices (landscape phones) */
    .pagination-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .item-count-container {
        width: auto;
        margin-bottom: 0;
    }
}

@media (min-width: 768px) { /* Medium devices (tablets) */
    .item-count-container select {
        font-size: 15px;
    }
}

@media (min-width: 992px) { /* Large devices (desktops, less than 1200px) */
    .item-count-container select {
        font-size: 16px;
    }
}

@media (min-width: 1200px) { /* Extra large devices (large desktops) */
    .item-count-container select {
        font-size: 17px;
    }
}
.export-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
}

.export-container button {
    padding: 10px 15px;
    margin-top: 5px;
    background-color: #17a2b8;
    /* Teal color theme */
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
}

.export-container button:hover {
    background-color: #149197;
    /* Darker shade of teal on hover */
}

.export-container>button {
    margin-top: 0;
}

.export-container div[v-if="showExportOptions"] {
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    overflow: hidden;
    z-index: 100;
    /* To make sure the dropdown appears above other elements */
}

.export-container div[v-if="showExportOptions"] button {
    display: block;
    width: 100%;
    text-align: left;
    background-color: #ffffff;
    color: #333;
}

.export-container div[v-if="showExportOptions"] button:hover {
    background-color: #f5f5f5;
    color: #17a2b8;
}

.styled-table tbody tr td:first-child:hover {
    cursor: pointer;

    text-decoration: underline;
    color: #17a2b8;
}
.new-project-btn {
    background-color: #f7f7f7;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.new-project-btn:hover {
    background-color: #e0e0e0;
}
.hover-task-btn {
    position: relative;
}

.hover-task-btn .task-text {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 10px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 5px;
    white-space: nowrap;
}

.hover-task-btn:hover .task-text {
    display: block;
}
.search-container {
    position: relative;

    padding: 8px 15px;
    border-radius: 50px;
}

.search-container {
    position: relative;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 5px;
    display: flex;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-container input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
}

.search-container v-icon {
    margin-left: 5px;
    cursor: pointer;
    transition: color 0.3s;
}

.search-container v-icon:hover {
    color: #007BFF; /* You can choose any color */
}

/* For the microphone icon specifically, add an active state */
.search-container v-icon[active] {
    color: #007BFF; /* Active color when recording */
}
</style>
