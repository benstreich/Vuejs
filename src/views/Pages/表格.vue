<template>
   <div>
      <div class="flexbox">
     <button class="open-dialog-btn" @click="openDialog">启动按钮 </button> </div>
     <dialog ref="myDialog" class="dialog">
       <form>
         <label for="username">用户名：</label>
         <input type="text" id="username" name="username">
  
         <label for="vorname">姓氏：</label>
         <input type="text" id="vorname" name="vorname">
  
         <label for="nachname">姓氏：</label>
         <input type="text" id="nachname" name="nachname">
  
         <label for="email">电子邮件：</label>
         <input type="email" id="email" name="email">
  
         <label for="strasse">地址</label>
         <input type="text" id="strasse" name="strasse">
  
         <label for="plz">邮政编码:</label>
         <input type="text" id="plz" name="plz">
  
         <label for="ort">或:</label>
         <input type="text" id="ort" name="ort">
  
         <label for="password">密码:</label>
         <input type="password" id="password" name="password">
  
         <label for="lehrjahr">学徒年 一至三:</label>
         <input type="number" id="lehrjahr" name="lehrjahr" min="1" max="3">
  
         <div class="form-actions">
           <button type="submit" class="submit-btn">投放原子弹</button>
         </div>
       </form>
     </dialog>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       theme: "#add8e6"
     };
   },
   methods: {
     openDialog() {
       this.$refs.myDialog.showModal();
     }
   }
 };
 </script>
 
 <style lang="scss">
 $form-background-color: #f0f0f0;
$form-max-width: 500px;
$form-padding: 20px;
$form-border-radius: 10px;
$form-box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
$form-font-family: sans-serif;
$form-font-size: 16px;
$form-text-align: center;

$input-margin-bottom: 10px;
$input-border-radius: 5px;
$input-padding: 10px;
$input-width: 100%;
$input-background-color: #fff;
$input-color: #333;
$input-font-size: 14px;

$label-margin-bottom: 5px;
$label-color: #555;
$label-font-weight: bold;

$button-bg-color: #EF1620;
$button-color: #F7D800;
$button-padding: 10px 20px;
$button-border-radius: 5px;
$button-font-weight: bold;
$button-transition: background-color 0.3s;
$button-hover-bg-color: #c8161f;

.open-dialog-btn {
  background-color: $button-bg-color;
  border: none;
  color: $button-color;
  padding: $button-padding;
  border-radius: $button-border-radius;
  font-weight: $button-font-weight;
  cursor: pointer;
  transition: $button-transition;
  margin-top: 50px;
  justify-content: center;

  &:hover {
    background-color: $button-hover-bg-color;
  }
}

.flexbox{
   display: flex;
   justify-content: center;
}

.dialog {
  border: none;
  padding: $form-padding;
  border-radius: $form-border-radius;
  width: $form-max-width;
  box-shadow: $form-box-shadow;
  font-family: $form-font-family;
  font-size: $form-font-size;
  text-align: $form-text-align;
  background-color: $form-background-color;

  form {
    label {
      display: block;
      margin-bottom: $label-margin-bottom;
      color: $label-color;
      font-weight: $label-font-weight;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="password"],
    input[type="number"] {
      margin-bottom: $input-margin-bottom;
      border: none;
      border-radius: $input-border-radius;
      padding: $input-padding;
      width: $input-width;
      background-color: $input-background-color;
      color: $input-color;
      font-size: $input-font-size;

      &:focus {
        outline: none;
      }
    }

    .form-actions {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 20px;

      .submit-btn {
        background-color: $button-bg-color;
        border: none;
        color: $button-color;
        padding: $button-padding;
        border-radius: $button-border-radius;
        cursor: pointer;
        font-weight: $button-font-weight;
        transition: $button-transition;

        &:hover {
          background-color: $button-hover-bg-color;
        }
      }
    }
  }
}
</style>