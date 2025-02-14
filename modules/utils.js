export const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

export const fillStar = (position, rating) => {
  //rating=4.5, starPosition=3 --> STAR FILLED
  rating = parseFloat(rating);
  position = parseFloat(position);
  if (rating >= position) {
    return "-fill";
  }
  //rating=1.5, starPosition=3 --> STAR EMPTY
  if (rating > position - 1) {
    return "-half"
  }
  return "";

}
