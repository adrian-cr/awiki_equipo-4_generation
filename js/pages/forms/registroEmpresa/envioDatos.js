import * as formatters from "../../../../modules/formatters.js";

/* DOM ELEMENT CONSTANTS */
const formElement = document.getElementsByTagName("form")[0];
const imageButton = document.querySelector('#btn-imagen');
const image = document.querySelector('#user-photo');

/* CLOUDINARY IMAGE LOADER */
let imgUrl = null;
let widget_cloudinary = cloudinary.createUploadWidget(
  {
    cloudName: 'dxqqdk4jv',
    uploadPreset: 'preset_awiki'
  },
  (err, result) => {
      if(!err && result && result.event === 'success'){
          console.log('Imagen subida con exito', result.info);
          image.src = result.info.secure_url;
          imgUrl = result.info.url;
      }
});

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

//lat-lon
 const getLatLonData = data =>{

 }

/* BOOLEAN-RETURNING FUNCTIONS */
const isScheduleField = fieldName => {
  return ["Abierto", "apertura", "cierre"].some(e => fieldName.indexOf(e) != -1);
};
const isCheckInOutField = fieldName => {
  return ["checkIn", "checkOut"].includes(fieldName);
}

/* OUTPUT FORMATTER */

/* MAIN EVENT LISTENERS */
imageButton.addEventListener('click', () => {
  widget_cloudinary.open();
}, false);

formElement.addEventListener("submit", e => {
  const formData = new FormData(formElement);
  e.preventDefault();
  //Format, set street number:
  formData.set("numeroCalle", formatters.streetNumberFormatter(formData.get("numeroCalle")));
  //Format, set schedule data:
  const [days, open, closed] = getScheduleData(formData);
  formData.set("horarios", formatters.scheduleFormatter(days, open, closed));
  //Format, set check-in/out and hotel category data:
  if (formData.get("tipoNegocio")=="hotel"){
    const [checkIn, checkOut] = getCheckInOutData(formData);
    formData.set("horarioCheckInOut", formatters.checkInOutFormatter(checkIn, checkOut));
  }
  else {
    formData.set("horarioCheckInOut", null);
    formData.set("categoriaHotel", null);
  }
  //Set product type data:
  if (formData.get("tipoNegocio")!="tienda"){
    formData.set("tipoProductos", null);
  }
  //Set image url:
  formData.set("imagen", imgUrl);
  //Set municipality (TODO - ADD NEW FORM FIELD):
  formData.set("municipio", "N/A");

  //Remove superfluous fields:
  formData.entries().toArray().forEach(e => {
    if (isScheduleField(e[0]) || isCheckInOutField(e[0])) {
      formData.delete(e[0]);
    } else {
      return;
    }
  })

  //Convert formData to JSON:
  const dataObject = {};
  for (let pair of formData.entries().toArray()){
    dataObject[pair[0]] = pair[1];
  }
  const formattedData = formatters.formatOutput(dataObject);
  formattedData.usuariosId = 6;
  const dataJSON = JSON.stringify(formattedData);

  //Send JSON to remote server:
  const requestOptions = {
    method: "POST",
    body: dataJSON,
    redirect: "follow",
    headers: new Headers({
      'Content-Type': 'application/json',
    })}

  fetch("http://3.141.25.162/api/listings/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
});
