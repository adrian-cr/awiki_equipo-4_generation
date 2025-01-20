import * as validators from "../modules/validators.js";

const formElement = document.getElementsByClassName("bsu-form")[0];
const fieldElements = document.getElementsByClassName("bsu-form-field");

//TESTING
const sampleElement = document.getElementsByClassName("bsu-form-field")[0];
const textAreaElement = document.getElementsByTagName("textarea")[0]
const stateFieldElement = document.getElementById("state-field");
const bizTypeElement = document.getElementById("business-type-selection");

const isFieldValid = fieldElement => {
  const FieldType = fieldElement.type;
  const fieldValue = fieldElement.value;
  const fieldID = fieldElement.id;
  if (validators.isFieldEmpty(fieldID)) {
    return [false, "empty"];
  }
  switch (FieldType) {
    case "text":
      if (fieldElement.list != null) {
        if (!validators.isStateValid) {
          return [false, "wrong"];
        }
      }
      if (!validators.isNameValid(fieldID)) {
        return [false, "wrong"];
      }
      break;
    case "textarea":
      if (!validators.isBusinessDescriptionValid(fieldID)) {
        return [false, "wrong"];
      }
      break;
    case "number":
      if (fieldID.indexOf("zip") != -1) {
        if (!validators.isZipcodeValid(fieldID)){
          return [false, "wrong"];
        }
      }
      break;
    case "phone":
      if (!validators.isPhoneValid(fieldID)){
        return [false, "wrong"];
      }
      break;
    case "email":
      if (!validators.isEmailValid(fieldID)){
        return [false, "wrong"];
      }
      break;
    case "url":
      if (!validators.isUrlValid(fieldID)){
        return [false, "wrong"];
      }
    case "select-one":
      if (fieldID.indexOf("business-type") != -1) {
        if (!validators.isBusinessTypeValid(fieldID)){
          return [false, "wrong"];
        }
      }
      if (fieldID.indexOf("product-type") != -1) {
        if (!validators.isProductTypeValid(fieldID)){
          return [false, "wrong"];
        }
      }
      if (fieldID.indexOf("cuisine-type") != -1) {
        if (!validators.isCuisineTypeValid(fieldID)){
          return [false, "wrong"];
        }
      }
      break;
    default:
      break;
  }//switch
  return [true, "OK"];
};//isFieldValid()


console.log(bizTypeElement);

Array.from(fieldElements).forEach(
  elem => {
    elem.addEventListener("blur",
      e => {
        e.preventDefault();
        console.log(isFieldValid(elem)[0]);
      }
    );
  }
);
