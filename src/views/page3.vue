<template>
    <v-main>
        <div class="container">
            <div class="application-container">
                <div class="title">{{ $t("Application Details") }}:</div>
                <hr>
                <div class="box">
                    <div class="column">
                        <div class="name"><i class="fa fa-id-card"></i>{{ $t("Application ID") }}</div>
                        <div class="name"><i class="fa fa-calendar-alt"></i> {{ $t("Application start Date") }}</div>
                        <div class="name"><i class="fa fa-info-circle"></i> {{ $t("Application Status") }}</div>
                        <div class="name"><i class="fa fa-sticky-note"></i>{{ $t("Notes") }}</div>
                    </div>
                    <div class="column">
                        <div class="name"><i class="fa fa-globe"></i>{{ $t("Application Country") }}</div>
                        <div class="name"><i class="fa fa-user-tie"></i>{{ $t("Assigned to") }}</div>
                        <div class="name"><i class="fa fa-users"></i>{{ $t(" No. of Applicant") }}</div>
                        <div class="name"><i class="fa fa-signature"></i>{{ $t("Signing Instruction") }}</div>
                    </div>
                    <div class="column">
                        <div class="name"><i class="fa fa-bullseye"></i>{{ $t("Goal Selected") }}</div>
                        <div class="name"><i class="fa fa-user-check"></i> {{ $t("Primary Applicant") }}</div>
                        <div class="name"><i class="fa fa-user-plus"></i> {{ $t("Secondary Applicant") }}</div>
                    </div>
                    <div class="column">
                        <div class="name"><i class="fa fa-cogs"></i> {{ $t("Solution Type") }}</div>
                        <div class="name"><i class="fa fa-check-circle"></i> {{ $t("Solution Selected") }}</div>
                        <div class="name"><i class="fa fa-exclamation-triangle"></i> {{ $t("Application Risk Rating") }}
                        </div>
                    </div>
                    <img src="@/assets/meter.jpg" alt="Meter Image" class="box-image">

                </div>
                <div class="sub-box">
                    <div class="sub-name">{{ $t("Primary Applicant") }}</div>
                    <div class="sub-name">{{ $t("Joint Holder-1") }}</div>
                    <div class="sub-name">{{ $t("Joint Holder-2") }}</div>
                    <div class="sub-name">{{ $t("Joint Holder-3") }}</div>
                </div>

            </div>
        </div>
    </v-main>
</template>

<script>
export default {
    name: 'page3',
}
</script>

<style scoped>
 @media (max-width: 540px) {
    .title {
        font-size: 18px;text-align: center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: 90%;margin: 0 auto 1rem;
    }

    .box {
        flex-direction: column; overflow-y: auto; padding-top: 10px; padding-bottom: 10px;
    }

    .column {
        width: 100%; margin-bottom: 10px;
    }

    .box-image {
        position: absolute; bottom: 15px; right: 10px;
        width: 20%;
        z-index: 10;
    }
}

@media (max-width: 430px) {
    .title {
        font-size: 18px; text-align: center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; width: 90%; margin: 0 auto 1rem;
    }

    .box {
        flex-direction: column; overflow-y: auto; padding-top: 10px;padding-bottom: 10px;
    }

    .column {
        width: 100%; margin-bottom: 10px;
    }

    .box-image {
        width: 80%; margin: 10px auto; position: relative; bottom: unset;
        right: unset;
    }
}


 @media (max-width: 480px) {
    .name {
        font-size: medium; margin-bottom: 20px;
    }

    .name i {
        margin-right: 5px;
    }

    .box-image {
        width: 50%; bottom: 5px;
    }
}

 @media (max-width: 375px) {

    .box {
        flex-direction: column; overflow-y: auto;height: 80vh; max-height: 90vh;
    }

    .column {
        width: 100%; max-width: 100%; margin-bottom: 10px;
    }

    .box-image {
        width: 80%;margin: 10px auto; position: absolute; bottom: unset;
        right: unset;
    }


}

.class4 {
    display: flex;
    width: 80vw;
  
   max-width: 1800px;
    margin: 20px auto;
    
}



 .sub-box {
    display: flex;
    justify-content: start;
    width: 80vw;
    max-width: 1800px;
    height: 5dvh;
    margin-top: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0.2, 0.2, 0.2, 0.3);
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

}

.sub-name {
    display: flex;
    align-items: center;
    font-size: larger;
    font-weight: lighter;
    color: gray;
    overflow: hidden;
    padding-right: 80px;
}

.name i {
    margin-right: 10px;
    color: gray;
}

hr {
    border: none;
     border-top: 1px solid #333;
    width: 100%;
    
    margin-top: 0.5rem;
  margin-bottom: 1rem;
  
}

.column {
    flex: 1;
    margin: 0 10px;
}

.name {
    display: flex;
    align-items: center;
    font-size: larger;
    font-weight: bold;
    color: rgb(91, 87, 87);
    margin-bottom: 60px;

    overflow: hidden;
}

@media (max-width: 1024px) {
    .name i {
        margin-right: 8px;
       
    }

    .name {
        margin-bottom: 30px;
       
    }
}

@media (max-width: 768px) {
    .box {
        flex-direction: column;
        align-items: flex-start;
      
    }

    .name i {
        margin-right: 6px;
       
    }

    .column {
        width: 95vw;
    }

    .name {
        margin-bottom: 20px;
      
    }

    .sub-box {
        flex-direction: column;
        align-items: flex-start;
        height: auto;
    }

    .sub-name {
        margin-bottom: 10px;
    }
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

.box {
    position: relative;
    justify-content: space-between;
   display: flex;
    width: 80vw;
    max-width: 1800px;
    height: 80vh;
   max-height: 1000px;
    border-radius: 5px;
    box-shadow: 0px 0px 15px rgba(0.2, 0.2, 0.2, 0.3);
    padding: 20px;
}

@media (max-width: 465px) {
    ox {
        width: 95vw;
    }


}

.box-image {
    position: absolute;
     bottom: 12px;
     right: 10px;
   width: 20%;
  height: auto;
   z-index: 10;


   
}

.title {
    font-size: 20px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: larger;
    font-weight: 600;

    color: rgb(91, 87, 87);

}


</style>
