import * as validators from "../../../../modules/validators.js";

const formElement = document.getElementsByClassName("bsu-form")[0];
const formButtonElement = document.getElementsByClassName("bsu-form-submit-button")[0];
const formFieldElements = Array.from(document.getElementsByClassName("bsu-form-field"));
const errorFreeFields = ["bsu-time-field", "bsu-radio", "bsu-checkbox"];
const errorFreeFieldSets = ["hotel-category"];
const errorProneFieldElements = formFieldElements.filter(field => {
  return !(
    errorFreeFields.some(errClass => Array.from(field.classList).includes(errClass))
    ||
    errorFreeFieldSets.some(errId => field.id == errId)
  )});


const isFieldValid = formField => {
  const fieldType = formField.type;
  const fieldId = formField.id;
  if (!validators.isParentSectionHidden(fieldId)){
    if (fieldType != "fieldset"){
      if (fieldId.indexOf("street") == -1 && validators.isFieldEmpty(fieldId)) {
        return [false, "empty"];
      }//if
    }//if
    /* #####Failed to evaluate updated DOM values; should be checked into later.#####
    else {
      if (validators.isFieldSetEmpty(fieldId)){
        // return [false, "empty"];
      }
    }*/
    switch (fieldType) {
      case "text":
        if (formField.list != null) {
          if (!validators.isStateValid(fieldId)) {
            return [false, "wrong"];

          }//if
        }//if
        if (!validators.isNameValid(fieldId)) {
          return [false, "wrong"];
        }//if
        break;
      case "textarea":
        if (!validators.isBusinessDescriptionValid(fieldId)) {
          return [false, "wrong"];
        }//if
        break;
      case "number":
        if (fieldId.indexOf("zip") != -1) {
          if (!validators.isZipcodeValid(fieldId)) {
            return [false, "wrong"];
          }
        }
        if (fieldId.indexOf("street") != -1 && !validators.isFieldEmpty(fieldId)) {
          if (!validators.isStreetNumberValid(fieldId)) {
            return [false, "wrong"];
          }//if
        }//if
        break;
      case "tel":
        if (!validators.isPhoneValid(fieldId)) {
          return [false, "wrong"];
        }//if
        break;
      case "email":
        if (!validators.isEmailValid(fieldId)) {
          return [false, "wrong"];
        }//if
        break;
      case "url":
        if (!validators.isUrlValid(fieldId)) {
          return [false, "wrong"];
        }//if
      case "select-one":
        if (fieldId.indexOf("business-type") != -1) {
          if (!validators.isBusinessTypeValid(fieldId)) {
            return [false, "wrong"];
          }//if
        }//if
        if (fieldId.indexOf("product-type") != -1) {
          if (!validators.isProductTypeValid(fieldId)) {
            return [false, "wrong"];
          }//if
        }//if
        if (fieldId.indexOf("cuisine-type") != -1) {
          if (!validators.isCuisineTypeValid(fieldId)) {
            return [false, "wrong"];
          }//if
        }//if
        break;
      default:
        break;
    } //switch
  }//if
  return [true, "OK"];
} //isFieldValid()
const areFieldsValid = formFieldArr => {
  for (let elem of Array.from(formFieldArr)) {
    if (!isFieldValid(elem)[0]){
      return false;
    }
  };
  return true;
}//areFieldsValid()
const injectErrorMessages = formField => {
  const wrongFormatMessage = `<div class="invalid-feedback" id="wm-${formField.id}">Valor incorrrecto.</div>`;
  if (!isFieldValid(formField)[0]) {
    formField.classList.add("is-invalid");
    if(isFieldValid(formField)[1] == "wrong") {
      document.querySelector(`#${formField.id} + .invalid-feedback`).hidden = true;
      formField.insertAdjacentHTML("afterend", wrongFormatMessage);
    }//if
    else {
      if (validators.fieldExists(`wm-${formField.id}`)) {
        formField.parentElement.removeChild(document.getElementById(`wm-${formField.id}`));
      }//if
      document.querySelector(`#${formField.id} + .invalid-feedback`).hidden = false;
    }//else
  }//if
  else {
    formField.classList.remove("is-invalid");
    if (validators.fieldExists(`wm-${formField.id}`)) {
      formField.parentElement.removeChild(document.getElementById(`wm-${formField.id}`));
    }//if
    if (formField.id != "hotel-category") {
      document.querySelector(`#${formField.id} + .invalid-feedback`).hidden = false;
    }//if
  }//else
}//injectErrorMessages()

// VALIDACIÓN DE FORMULARIO:
formElement.addEventListener("click", e => {
    if (!areFieldsValid(errorProneFieldElements)) {
      formButtonElement.disabled = true;
    }
    else {
      formButtonElement.disabled = false;
    }
});//form.addEventListener("click")
errorProneFieldElements.forEach(elem => elem.addEventListener("blur", e => {
    injectErrorMessages(elem);
}));//forEach()



// VALIDACIÓN DE CAMPOS
