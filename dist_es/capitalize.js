function capitalize(s) {
  return ("" + s).substr(0, 1).toUpperCase() + ("" + s).substr(1).toLowerCase();
}

export default capitalize;
