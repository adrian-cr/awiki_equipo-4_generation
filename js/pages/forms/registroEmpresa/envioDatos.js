import * as formatters from "../../../../modules/formatters.js";

/* DOM ELEMENT CONSTANT */
const formElement = document.getElementsByTagName("form")[0];

/* DATA GETTERS */
const getScheduleData = data => {
  const daysArr = data.keys().filter(e => e.indexOf("Abierto") != -1).toArray();
  const openArr = data.entries().toArray().filter(e => e[0].indexOf("apertura") != -1).map(e => e[1]);
  const closeArr = data.entries().toArray().filter(e => e[0].indexOf("cierre") != -1).map(e => e[1]);
  return [daysArr, openArr, closeArr];
};
const getCheckInOutData = data => {
  const bizType = data.get("tipoNegocio");
  if (bizType == "hotel") {
    const checkIn = data.get("checkIn");
    const checkOut = data.get("checkOut");
    return [checkIn, checkOut];
  }
  return null;
}

/* BOOLEAN-RETURNING FUNCTIONS */
const isScheduleField = fieldName => {
  return ["Abierto", "apertura", "cierre"].some(e => fieldName.indexOf(e) != -1);
};
const isCheckInOutField = fieldName => {
  return ["checkIn", "checkOut"].includes(fieldName);
}

/* MAIN EVENT LISTENER */
formElement.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(formElement);
  //Format, set street number:
  formData.set("numeroCalle", formatters.streetNumberFormatter(formData.get("numeroCalle")));
  //Format, set schedule data:
  const [days, open, closed] = getScheduleData(formData);
  formData.set("horarios", formatters.scheduleFormatter(days, open, closed));
  //Format, set check-in/out data:
  if (formData.get("tipoNegocio")=="hotel"){
    const [checkIn, checkOut] = getCheckInOutData(formData);
    formData.set("horarioCheckInOut", formatters.checkInOutFormatter(checkIn, checkOut));
  }
  else {
    formData.set("horarioCheckInOut", null);
  }
  //Remove superfluous fields:
  formData.entries().toArray().forEach(e => {
    if (isScheduleField(e[0]) || isCheckInOutField(e[0])) {
      formData.delete(e[0]);
    } else {
      return;
    }
  })
  //Send formatted data [NOT YET IMPLEMENTED]:
  console.log(formData.entries().toArray());
})
