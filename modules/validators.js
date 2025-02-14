
/*
  Todas las funciones...
  * toman el ID o clase del campo a validar.
  * retornan 'true' (booleano) si el valor del campo es válido;
    de lo contrario, retornan 'false'.
*/

//VALIDACIÓN GENERAL: número, campo vacío, lista de campos vacía, campo oculto, sección oculta, campo inexistente
export const isNumber = fieldID=> {
  let fieldValue = document.getElementById(fieldID).value;
  let numValRegex = new RegExp(/^[0-9]{1,}$/);
  return numValRegex.test(fieldValue);
}
export const isFieldEmpty = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  return fieldValue.length == 0;
}
export const isFieldSetEmpty = fieldSetID => {
  let fieldSet = document.getElementById(fieldSetID);
  let checkboxes = fieldSet.querySelectorAll("input[type=checkbox]");
  return Array.from(checkboxes).some(e => e.checked);
}
export const isSectionHidden = sectionID => {
  let sectionElement = document.getElementById(sectionID);
  return sectionElement.hidden;
}
export const isParentSectionHidden = fieldID => {
  let parent = document.getElementById(fieldID);
  while (parent) {
    if (parent.tagName === 'SECTION') {
      break;
    }
    parent = parent.parentElement;
  }
  return parent.hidden;
}
export const fieldExists = fieldID => {
  let fieldValue = document.getElementById(fieldID);
  return fieldValue != null;
}


// VALIDACIÓN DE INFORMACIÓN PERSONAL: nombre/apellido, edad
export const isNameValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  return fieldValue.length >= 2;
}
export const isAgeValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  return fieldValue > 16 && fieldValue < 100;
}

//VALIDACIÓN DE DATOS DE DIRECCIÓN: número de calle nombre de calle/colonia, estado, código postal

export const isStreetNumberValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  return isNumber(fieldID) && fieldValue != "0";
}

export const isStateValid = fieldID => {
  const STATE_LIST = [
    "Aguascalientes",
    "Baja California Norte",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas"
  ]
  let fieldValue = document.getElementById(fieldID).value;
  return STATE_LIST.includes(fieldValue);
}
export const isZipcodeValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  let zipValRegex = new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/);
  return zipValRegex.test(fieldValue);
}

// VALIDACIÓN DE DATOS DE CONTACTO: teléfono, correo electrónico, sitio web, contraseña
export const isPhoneValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  let phoneValRegex = new RegExp(/^[1-9]{1}[0-9]{9}$/);
  return phoneValRegex.test(fieldValue);
}
export const isEmailValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  let emailValRegex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);
  return emailValRegex.test(fieldValue);
}
export const isUrlValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  let websiteValRegex = new RegExp(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/);
  return websiteValRegex.test(fieldValue);
}
export const isPasswordValid = fieldID =>{
  let fieldValue= document.getElementById(fieldID).value;
  let passwordValRegex= new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
  return passwordValRegex.test(fieldValue);
}

//VALIDACIÓN DE INFORMACIÓN DE NEGOCIO: descripción, tipo de negocio, tipo de comida, tipo de producto, categoría de hotel
export const isBusinessDescriptionValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  return fieldValue.length >= 30  && fieldValue.length <= 255;
}
export const isBusinessTypeValid = fieldID => {
  const BIZ_TYPE_LIST = [
    "bar",
    "biblioteca",
    "cafe",
    "centro comercial",
    "cine",
    "hotel",
    "museo",
    "parque",
    "restaurante",
    "servicio",
    "tienda"
  ]
  let fieldValue = document.getElementById(fieldID).value;
  return BIZ_TYPE_LIST.includes(fieldValue);
}
export const isCuisineTypeValid = fieldID => {
  const CUISINE_TYPE_LIST = [
    "arabe",
    "china",
    "ensaladas",
    "francesa",
    "griega",
    "helados",
    "hamburguesas",
    "india",
    "italiana",
    "japonesa",
    "libanesa",
    "mariscos",
    "mexicana",
    "pizza",
    "postres",
    "sandwiches",
    "tacos",
    "varios",
    "otro",
  ]
  let fieldValue = document.getElementById(fieldID).value;
  return CUISINE_TYPE_LIST.includes(fieldValue);
}
export const isProductTypeValid = fieldID => {
  const PRODUCT_TYPE_LIST = [
    "deportivo",
    "especializado",
    "juegos & jueguetes",
    "libros & revistas",
    "ropa & calzado",
    "souvenirs",
    "varios",
  ]
  let fieldValue = document.getElementById(fieldID).value;
  return PRODUCT_TYPE_LIST.includes(fieldValue);
}
export const isTimeValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  let timeValRegex = new RegExp("^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$");
  return timeValRegex.test(fieldValue);
}
export const isHotelCategoryValid = fieldClass => {
  // Usar la clase de las opciones, no el ID.
  let fieldValues = Array.from(document.getElementsByClassName(fieldClass));
  let checkedFieldValue = fieldValues.filter(i => i.checked)[0].value;
  return [1, 2, 3, 4, 5].includes(parseInt(checkedFieldValue));
}

//VALIDACION DE PUBLICACIONES
export const isPostValid = fieldID => {
  let fieldValue = document.getElementById(fieldID).value;
  return fieldValue.length >= 1;
}
