import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

//Init select
const select = document.querySelector("select");
M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

//Init Autocomplite
const autocomplete = document.querySelectorAll(".autocomplete");
M.Autocomplete.init(autocomplete, {
  data: {
    Apple: null,
    Microsoft: null,
  },
});

export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}

//Init Datepickers

const datePickers = document.querySelectorAll(".datepicker");
M.Datepicker.init(datePickers, {
  showClearBtn: true,
  format: "yyyy-mm",
});

export function getDatepickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}
