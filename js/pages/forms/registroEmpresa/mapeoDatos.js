import * as formatters from "../../../../modules/formatters.js";

/* DOM ELEMENT CONSTANT */
const formElement = document.getElementsByTagName("form")[0];

/* BOOLEAN-RETURNING FUNCTIONS */
const isScheduleField = fieldName => {
  return ["Abierto", "apertura", "cierre"].some(e => fieldName.indexOf(e) != -1);
};
const isSelectionField = fieldName => {
  return formElement.querySelector(`select[name=${fieldName}]`) != null;
}
const isStreetNumberField = fieldName => {
  return fieldName == "numeroCalle";
}
const isCategoryField = fieldName => {
  return fieldName == "categoriaHotel";
}
const isCheckInOutField = fieldName => {
  return ["checkIn", "checkOut"].includes(fieldName);
}
const isSpecialField = fieldName => {
  return isScheduleField(fieldName) || isSelectionField(fieldName) || isStreetNumberField(fieldName) || isCategoryField(fieldName) || isCheckInOutField(fieldName);
}

/* MAPPING FUNCTIONS */
const mapSelectionData = (fieldName, fieldVal) => {
  const selectElement = formElement.querySelector(`select[name=${fieldName}]`);
  const optionElement = formElement.querySelector(`select[name=${fieldName}] option[value=${fieldVal}]`);
  if (optionElement != null) {
    optionElement.selected = true;
    selectElement.dispatchEvent(new CustomEvent("change"));
  }
};
const mapHotelCategoryData = (fieldName, fieldVal) => {
  const optionElement = formElement.querySelector(`input[name="${fieldName}"][value="${fieldVal}"]`);
    optionElement.checked = true;
}
const mapScheduleData = fields => {
  for (let field in fields){
    let fieldVal = fields[field];
    let fieldBody = formElement.querySelector(`*[name=${field}]`);
    if (field.indexOf("Abierto") == -1){
      fieldBody.setAttribute("value", fieldVal);
    }
    else {
      fieldBody.setAttribute("checked", fieldVal=="on" ? true : false);
    }
    fieldBody.dispatchEvent(new CustomEvent("change"));
  }
}
const mapCheckInOutData = fields => {
  for (let field in fields) {
    let fieldBody = formElement.querySelector(`*[name=${field}]`);
    fieldBody.value = fields[field];
  }
}

/* MAIN FUNCTION */
const insertValues = (form, formValues) => {
  const formBody = new FormData(form);
  const formEntries = formBody.entries().toArray();
  // Map schedule data:
  if (formValues.horarios != null) {
    const decodedSchedule = formatters.reverseScheduleFormatter(formValues.horarios);
    mapScheduleData(decodedSchedule);
  }
  // Map check-in/out data:
  if(formValues.horarioCheckInOut != null) {
    const decodedCheckInOut = formatters.reverseCheckInOutFormatter(formValues.horarioCheckInOut);
    mapCheckInOutData(decodedCheckInOut);
  }
  // Map all other data:
  for (let entry of formEntries) {
    let fieldName = entry[0];
    let fieldValue = formValues[fieldName];
    let fieldBody = formElement.querySelector(`*[name=${fieldName}]`);
    // Map regular-field data:
    if(!isSpecialField(fieldName)) {
      fieldBody.value = fieldValue;
    }
    // Map special-field data:
    else {
      // Map selection data:
      if (isSelectionField(fieldName)) {
        mapSelectionData(fieldName, fieldValue);
      }
      // Map street number:
      if (isStreetNumberField(fieldName)) {
        fieldBody.value = formatters.reverseStreetNumberFormatter(fieldValue);
      }
      // Map hotel category:
      if (isCategoryField(fieldName)) {
        if (fieldValue != null) {
          mapHotelCategoryData(fieldName, fieldValue);
        }
      }
    }
    fieldBody.dispatchEvent(new CustomEvent("blur"));
  }

};

/* RUNNABLE CODE */
fetch("../../data/newListings.json")
  .then(
    res => res.json())
  .then( res => {
    //Import data [NOT YET IMPLEMENTED]:
    let listing = res.data[2];
    insertValues(formElement, listing);
    });
