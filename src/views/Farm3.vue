<template>
<div class="data child">
    <div class="heading-container">
        <h1>{{ $t('heading_farmers') }}</h1>

        <div class="search-container">
         <input type="text" v-model="searchTerm" :placeholder="$t('placeholder_search')" />

            <v-icon v-if="searchTerm" @click="searchTerm = ''" class="icon-clear">mdi-close-circle</v-icon>

            <!-- Change microphone icon based on recording state -->
            <v-icon v-if="!isRecording" @click="handleVoiceSearch" class="icon-mic">mdi-microphone</v-icon>
            <v-icon v-else @click="handleVoiceSearch" class="icon-mic" active>mdi-microphone-off</v-icon>

            <!-- Search Icon -->
            <v-icon class="icon-search">mdi-magnify</v-icon>
        </div>

        <div class="export-container">
          <button @click="exportToPDF">{{ $t('button_print') }}</button>

        </div>
    </div>

    <div class="table-responsive">
        <table class="styled-table">
            <thead>
                <tr>
    <th class="class5" @click="sortTable('col1')">{{ $t('farmer_name') }} <v-icon v-if="currentSortColumn === 'col1' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                                <v-icon v-if="currentSortColumn === 'col1' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon>
                    </th>
                   <th class="class5" @click="sortTable('col2')">{{ $t('types_of_farming') }}
                        <v-icon v-if="currentSortColumn === 'col2' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                        <v-icon v-if="currentSortColumn === 'col2' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon>
                    </th>
                    <th class="class5" @click="sortTable('col3')">{{ $t('no_of_members') }}
                        <v-icon v-if="currentSortColumn === 'col3' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                        <v-icon v-if="currentSortColumn === 'col3' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon>
                    </th>
                    <th class="class5" @click="sortTable('col4')">{{ $t('city') }}
                        <v-icon v-if="currentSortColumn === 'col4' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                        <v-icon v-if="currentSortColumn === 'col4' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon>
                    </th>
                    <th class="class5" @click="sortTable('col5')">{{ $t('age') }}
                        <v-icon v-if="currentSortColumn === 'col5' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                        <v-icon v-if="currentSortColumn === 'col5' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon>
                    </th>
                    <th class="class5" @click="sortTable('col6')">{{ $t('area') }}
                        <v-icon v-if="currentSortColumn === 'col6' && currentSortDirection === 'asc'">mdi-arrow-up</v-icon>
                        <v-icon v-if="currentSortColumn === 'col6' && currentSortDirection === 'desc'">mdi-arrow-down</v-icon>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in paginatedItems" :key="item.id">
                    <td class="class4" @click="goToDetailsPage(item)">{{ item.col1 }}</td>
                    <td class="class4">{{ item.col2 }}</td>
                    <td class="class4">{{ item.col3 }}</td>
                    <td class="class4">{{ item.col4 }}</td>
                    <td class="class4">{{ item.col5 }}</td>
                    <td class="class4">{{ item.col6 }}</td>
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
            <v-pagination v-model="page" :length="totalPages" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
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
    name: 'Farm3',
    data() {
        return {
            isRecording: false,
            page: 1,
            itemsPerPage: 5,
            searchTerm: '',
            currentSortColumn: '',
            showExportOptions: false,
            currentSortDirection: '',
            sortOrder: '',
            items: [
                // Sample data for the table
                {
                    id: 1,
                    col1: 'John Doe',
                    col2: 'Organic Farming',
                    col3: '5',
                    col4: 'New York',
                    col5: '45',
                    col6: '3 Acres'
                },
                {
                    id: 2,
                    col1: 'Jane Smith',
                    col2: 'Conventional Farming',
                    col3: '8',
                    col4: 'Los Angeles',
                    col5: '30',
                    col6: '5 Acres'
                },
                {
                    id: 3,
                    col1: 'Robert Brown',
                    col2: 'Regenerative Agriculture',
                    col3: '7',
                    col4: 'Chicago',
                    col5: '52',
                    col6: '2 Acres'
                },
                {
                    id: 4,
                    col1: 'Emily Johnson',
                    col2: 'Hydroponic Farming',
                    col3: '10',
                    col4: 'Houston',
                    col5: '29',
                    col6: '4 Acres'
                },
                {
                    id: 5,
                    col1: 'Michael White',
                    col2: 'Vertical Farming',
                    col3: '6',
                    col4: 'Dallas',
                    col5: '35',
                    col6: '3.5 Acres'
                },
                {
                    id: 6,
                    col1: 'Sophia Williams',
                    col2: 'Agroforestry',
                    col3: '4',
                    col4: 'San Francisco',
                    col5: '40',
                    col6: '2.5 Acres'
                },
                {
                    id: 7,
                    col1: 'James Wilson',
                    col2: 'Organic Farming',
                    col3: '9',
                    col4: 'Miami',
                    col5: '28',
                    col6: '4.5 Acres'
                },
                {
                    id: 8,
                    col1: 'Linda Taylor',
                    col2: 'Regenerative Agriculture',
                    col3: '7',
                    col4: 'Atlanta',
                    col5: '47',
                    col6: '3.2 Acres'
                },
                {
                    id: 9,
                    col1: 'Paul Johnson',
                    col2: 'Aquaponic Farming',
                    col3: '8',
                    col4: 'Denver',
                    col5: '50',
                    col6: '3 Acres'
                },
                {
                    id: 10,
                    col1: 'Rebecca Davis',
                    col2: 'Organic Farming',
                    col3: '6',
                    col4: 'Seattle',
                    col5: '31',
                    col6: '4.7 Acres'
                },
                {
                    id: 11,
                    col1: 'Brian Martinez',
                    col2: 'Conventional Farming',
                    col3: '9',
                    col4: 'Phoenix',
                    col5: '29',
                    col6: '3.5 Acres'
                },
                {
                    id: 12,
                    col1: 'Grace Lopez',
                    col2: 'Hydroponic Farming',
                    col3: '7',
                    col4: 'San Diego',
                    col5: '48',
                    col6: '3 Acres'
                },
                {
                    id: 13,
                    col1: 'Anthony Gonzalez',
                    col2: 'Organic Farming',
                    col3: '8',
                    col4: 'Las Vegas',
                    col5: '36',
                    col6: '4 Acres'
                },
                {
                    id: 14,
                    col1: 'Lucy Ramirez',
                    col2: 'Vertical Farming',
                    col3: '10',
                    col4: 'San Antonio',
                    col5: '27',
                    col6: '5 Acres'
                },
                {
                    id: 15,
                    col1: 'Chris Young',
                    col2: 'Regenerative Agriculture',
                    col3: '9',
                    col4: 'Nashville',
                    col5: '42',
                    col6: '3.8 Acres'
                },
                {
                    id: 16,
                    col1: 'Oliver Hernandez',
                    col2: 'Agroforestry',
                    col3: '7',
                    col4: 'Orlando',
                    col5: '33',
                    col6: '4.2 Acres'
                },
                {
                    id: 17,
                    col1: 'Hannah King',
                    col2: 'Organic Farming',
                    col3: '6',
                    col4: 'Portland',
                    col5: '38',
                    col6: '2.9 Acres'
                },
                {
                    id: 18,
                    col1: 'Edward Green',
                    col2: 'Conventional Farming',
                    col3: '8',
                    col4: 'Salt Lake City',
                    col5: '49',
                    col6: '5 Acres'
                },
                {
                    id: 19,
                    col1: 'Ella Turner',
                    col2: 'Hydroponic Farming',
                    col3: '7',
                    col4: 'Austin',
                    col5: '28',
                    col6: '3.4 Acres'
                },
                {
                    id: 20,
                    col1: 'David Carter',
                    col2: 'Organic Farming',
                    col3: '10',
                    col4: 'Boston',
                    col5: '54',
                    col6: '4.1 Acres'
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
        goToDetailsPage(item) {
            // Navigating to the Farmtotal route. You can pass params or use query.
            this.$router.push({
                name: 'Farmtotal',
                params: {
                    id: item.id
                }
            });
        },
        sortTable(column) {
            if (this.currentSortColumn === column) {
                this.currentSortDirection = this.currentSortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                this.currentSortColumn = column;
                this.currentSortDirection = 'asc';
            }
        },
        async exportToWord() {
            const doc = new Document();
            doc.addSection({
                children: [
                    new Paragraph({
                        children: [
                            new TextRun("Your table data here..."), // Modify this to structure your table data accordingly
                        ],
                    }),
                ],
            });

            const blob = await Packer.toBlob(doc);
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'table.docx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
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

::v-deep .v-pagination .v-pagination__item.v-pagination__item--active {
    background-color: #17a2b8;
    /* Teal background for active pagination item */
    color: white;
    border-radius: 50%;
}

.styled-table tbody tr td:first-child:hover {
    cursor: pointer;

    text-decoration: underline;
    color: #17a2b8;
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
    appearance: none;
    /* Removes default styling of select element */
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
    color: #17a2b8;
    /* Teal color for hover effect */
    transform: scale(1.1);
}

@media (min-width: 480px) {

    /* Small devices (landscape phones) */
    .pagination-container {
        flex-direction: row;
        justify-content: space-between;
    }

    .item-count-container {
        width: auto;
        margin-bottom: 0;
    }
}

@media (min-width: 768px) {

    /* Medium devices (tablets) */
    .item-count-container select {
        font-size: 15px;
    }
}

@media (min-width: 992px) {

    /* Large devices (desktops, less than 1200px) */
    .item-count-container select {
        font-size: 16px;
    }
}

@media (min-width: 1200px) {

    /* Extra large devices (large desktops) */
    .item-count-container select {
        font-size: 17px;
    }
}

.export-options {
    display: flex;
    align-items: center;
    gap: 10px;
    /* Space between items */
}

.export-options button {
    background: none;
    border: none;
    cursor: pointer;
}

.export-options v-icon {
    /* If you are using custom colorful icons, you'd style them here */
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
    color: #007BFF;
    /* You can choose any color */
}

/* For the microphone icon specifically, add an active state */
.search-container v-icon[active] {
    color: #007BFF;
    /* Active color when recording */
}
</style>
