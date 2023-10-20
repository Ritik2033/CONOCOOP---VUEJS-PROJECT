<template>
    <v-main>
        <div class="container">
            <div class="application-container">
                <div class="class4">
                    <div class="left-box">
                        <div class="primary-applicant">{{ $t("Primary Applicant Information:") }}</div>
                        <div class="column-wrapper">
                            <div class="column">
                                <u class="header-link">{{ $t("Personal Details:") }}</u>
                                <div class="class1">{{ $t("Full Name:") }}</div>
                                <div class="class1">{{ $t("DOB:") }}</div>
                                <div class="class1">{{ $t("Marital Status:") }}</div>
                                <div class="class1">{{ $t("Gender:") }}</div>
                                <div class="class1">{{ $t("Phone No:") }}</div>
                                <div class="class1">{{ $t("Country:") }}</div>

                                <div class="gap"></div>

                                <u class="header-link">{{ $t("Residential Details:") }}</u>
                                <div class="class1">{{ $t("Address:") }}</div>
                                <div class="class1">{{ $t("Zip Code:") }}</div>
                                <div class="class1">{{ $t("City:") }}</div>
                                <div class="class1">{{ $t("State:") }}</div>
                                <div class="class1">{{ $t("Country:") }}</div>

                                <div class="gap"></div>

                                <u class="header-link">{{ $t("Mailing Details") }}</u>
                                <div class="class1">{{ $t("Address:") }}</div>
                                <div class="class1">{{ $t("Zip Code:") }}</div>
                                <div class="class1">{{ $t("City:") }}</div>
                                <div class="class1">{{ $t("State:") }}</div>
                                <div class="class1">{{ $t("Country:") }}</div>
                            </div>
                            <div class="column">
                                <div class="gap"></div>

                                <u class="header-link"></u> <!-- Empty Space -->
                                <div class="class2">Omkar Panchal</div>
                                <div class="class2">5-02-2000</div>
                                <div class="class2">Single</div>
                                <div class="class2">M</div>
                                <div class="class2">93747493</div>
                                <div class="class2">India</div>

                                <div class="gap"></div>
                                <div class="gap"></div>

                                <u class="header-link"></u> <!-- Empty Space -->
                                <div class="class2">Akurdi Pune</div>
                                <div class="class2">23848</div>
                                <div class="class2">Akurdi</div>
                                <div class="class2">Maharashtra</div>
                                <div class="class2">India</div>

                                <div class="gap"></div>
                                <div class="gap"></div>

                                <u class="header-link"></u> <!-- Empty Space -->
                                <div class="class2">Akurdi Pune</div>
                                <div class="class2">342423</div>
                                <div class="class2">Akurdi</div>
                                <div class="class2">Maharashtra</div>
                                <div class="class2">India</div>
                            </div>
                            <div class="column">
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>

                                <div class="class2">{{ $t("Picture:") }}</div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>

                                <div class="class2">{{ $t("Signature:") }}</div>
                                <div class="gap"></div>
                                <div class="gap"></div>
                                <div class="gap"></div>

                                <div class="class2">{{ $t("Risk Rationate:") }}</div>
                                <div class="row">
                                    <div class="radio-button">&#9745;</div>
                                    <div class="class3">{{ $t("Occupation:") }}</div>
                                </div>
                                <div class="row">
                                    <div class="radio-button">&#9745;</div>
                                    <div class="class3">PEP:</div>
                                </div>
                                <div class="image"><img src="@/assets/meter.jpg" alt="Image"></div>
                            </div>
                        </div>

                    </div>
                    <div class="right-box">
                        <div class="primary-applicant">{{ $t("Timeline Checks") }}</div>
                        <div class="timeline-entry">
                            <div class="icon" color="green">&#x1F514;</div>
                            <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("OTP Verified") }}</div>
                                <div class="entry-timestamp">01/06/2023, 12:44:50</div>
                            </div>
                        </div>

                        <div class="gap"></div> <!-- Space between entries -->
                        <div class="gap"></div>

                        <!-- KYC Completed Entry -->
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("KYC Completed") }}</div>
                                <div class="entry-timestamp">01/05/2023, 14:34:50</div>
                            </div>
                        </div>
                        <div class="gap"></div>
                        <div class="gap"></div>
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("KYC detailed verified by User") }}</div>
                                <div class="entry-timestamp">01/06/2023, 12:44:50</div>
                            </div>
                        </div>

                        <div class="gap"></div> <!-- Space between entries -->
                        <div class="gap"></div>

                        <!-- KYC Completed Entry -->
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("Johana introduced") }}</div>
                                <div class="entry-timestamp">01/05/2023, 14:34:50</div>
                            </div>
                            <div class="gap"></div>

                        </div>
                        <div class="gap"></div>
                        <div class="gap"></div>
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("Alias Added") }}</div>
                                <div class="entry-timestamp">01/06/2023, 12:44:50</div>
                            </div>
                        </div>

                        <div class="gap"></div> <!-- Space between entries -->
                        <div class="gap"></div>

                        <!-- KYC Completed Entry -->
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("Email Collected") }}</div>
                                <div class="entry-timestamp">01/05/2023, 14:34:50</div>
                            </div>
                        </div>
                        <div class="gap"></div> <!-- Space between entries -->
                        <div class="gap"></div>
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("Mothers maiden name collected") }} </div>
                                <div class="entry-timestamp">01/06/2023, 12:44:50</div>
                            </div>
                        </div>

                        <div class="gap"></div> <!-- Space between entries -->
                        <div class="gap"></div>

                        <!-- KYC Completed Entry -->
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("Marital Status Collected") }}</div>
                                <div class="entry-timestamp">01/05/2023, 14:34:50</div>
                            </div>
                        </div>
                        <div class="gap"></div>
                        <div class="gap"></div>
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("OTP Verified") }}</div>
                                <div class="entry-timestamp">01/06/2023, 12:44:50</div>
                            </div>
                        </div>

                        <div class="gap"></div> <!-- Space between entries -->
                        <div class="gap"></div>

                        <!-- KYC Completed Entry -->
                        <div class="timeline-entry">
                            <div class="icon">&#x1F514;</div> <!-- This is just a placeholder Unicode bell icon -->
                            <div class="entry-content">
                                <div class="entry-title">{{ $t("KYC Completed") }}</div>
                                <div class="entry-timestamp">01/05/2023, 14:34:50</div>
                            </div>
                            <div class="gap"></div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    name: 'page4',
}
</script>

<style scoped>
.right-box {
    padding: 10px;
   
}

.timeline-entry {
    display: flex;
    align-items: center;

    margin-bottom: 10px;
    
}

.icon {
    font-size: 20px;
    margin-right: 10px;
    color: greenyellow;
   
}

.entry-content {
    display: flex;
    flex-direction: column;
   
}

.entry-title {
    font-weight: bold;
    color: rgb(91, 87, 87);

}

.entry-timestamp {
    font-size: 14px;
   color: gray;
 
}

.row {
    display: flex;
    align-items: center;
  
}

 .radio-button {
    display: inline-block;
     height: 20px;
    background-color: red;
    color: white;
    text-align: center;
    line-height: 20px;
    border-radius: 4px;
    
}

.image img {
    width: 80%;
    height: auto;
    margin-top: 10px;
}

.column-wrapper {
    display: flex;
}

.class1 {
    padding: 6px;
    font-weight: 500;
    color: faint black;
    font-size: large;
}

.class3 {
    padding: 6px;
    font-weight: 400;
    color: gray;
    font-size: large;
}

.class2 {
    padding: 6px;
    font-weight: 600;
    color: gray;
    font-size: large;
}

.column {
    display: flex;
    flex-direction: column;
    flex: 1;
     padding: 0 15px;
   
}

.header-link {
    font-weight: bold;
    color: rgb(91, 87, 87);
  margin-bottom: 10px;
    font-size: large;
 
}

.gap {
    height: 20px;
   
}

 @media (max-width: 768px) {
    .left-box {
        flex-direction: column;
    }
}

.primary-applicant {
    margin-bottom: 20px;
  left: 10px;
   font-size: 20px;
    font-weight: bold;
    color: rgb(91, 87, 87);
   
}

.container {
    display: flex;
    flex-direction: column;
     justify-content: center;
    align-items: center;
    font-family: 'Neo', sans-serif;

}

.application-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
}

.class4 {
    display: flex;
    width: 80vw;
    
   max-width: 1800px;
    margin: 20px auto;
  
}

.left-box {
    width: 70%;
   height: 80vh;
     border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0.2, 0.2, 0.2, 0.3);
    margin-right: 20px;
    overflow-y: auto;
    padding: 10px;
    position: relative;
    
}

.right-box {
    width: 30%;
   height: 80vh;
   border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0.2, 0.2, 0.2, 0.3);
    overflow-y: auto;
}

@media (max-width: 1024px) {

    .left-box,
    .right-box {
        height: 70vh;
      
    }
}

@media (max-width: 768px) {
    .class4 {
        flex-direction: column;
      align-items: center;
        margin: 10px auto;
       
    }

    .left-box,
    .right-box {
        width: 95vw;
       height: 40vh;
         margin-right: 0;
        margin-bottom: 20px;
      
    }
}
</style>
