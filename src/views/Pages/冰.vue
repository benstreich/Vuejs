<template>
   <ul class="people">
     <li v-for="index in 10" :key="index" class="person">
       <div class="person__inner">
         <img class="person__image" src="https://source.unsplash.com/300x300/?portrait">
         <div class="person__content">
           <div class="person__title">
           reli
         </div>
           <div class="person__text">
          hallo süsser
           </div>
           <button class="person__button">Kontaktieren</button>
         </div>
       </div>
     </li>
   </ul>
 </template>
 
 <style lang="scss">
 .people {
   margin-top:50px ;
   list-style-type: none;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   .person {
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-bottom: 40px;
     width: calc(33.33% - 10px);
     .person__inner {
       display: flex;
       flex-direction: column;
       align-items: center;
       .person__image {
         border-radius: 50%;
         width: 100%;
         margin-bottom: 10px;
       }
       .person__content {
         display: flex;
         flex-direction: column;
         align-items: center;
         text-align: center;
         .person__title {
           font-size: 2rem;
           font-weight: bold;
         }
         .person__text {
           margin-top: 5px;
         }
         .person__button {
           background-color: teal;
           border-radius: 5px;
           color: white;
           padding: 10px;
           border: none;
           margin: 10px 0 0;
         }
       }
     }
   }
   @media (max-width: 1023px) {
     .person {
       width: calc(50% - 10px);
       .person__inner {
         flex-direction: row;
         .person__image {
           margin-right: 10px;
           margin-bottom: 0;
         }
         .person__content {
           align-items: flex-start;
           text-align: left;
         }
       }
     }
   }
   @media (max-width: 767px) {
     .person {
       width: 100%;
       .person__inner {
         flex-direction: column;
         .person__image {
           margin-bottom: 10px;
         }
         .person__content {
           align-items: center;
           text-align: center;
         }
       }
     }
   }
 }
 </style>