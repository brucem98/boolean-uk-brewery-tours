let state = {
  selectStateInput: "",
  breweries: [],
  cities: [],
  filters: {
    type: "",
    city: [],  // cities hold and array instead of a single value 
    search: ""
  }
};

//Build Bridge 

const selectStateForm = document.querySelector("#select-state-form");
console.log("Inside selectStateForm", selectStateForm);

const mainEl = document.querySelector("main")
console.log("Inside mainEl: ", mainEl)




function listenToSelectStateForm () {
    selectStateForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const stateInput = selectStateForm.querySelector("#select-state");
      console.log(stateInput.value)
    
    fetch(`https://api.openbrewerydb.org/breweries?by_state=${stateInput.value}`)
    .then((response) => response.json())
    .then((states) => {
      console.log("Inside GET Fetch: ", states);
    
      for (let i = 0; i < states.length; i++) {  
        const breweries = states[i];
        console.log("Inside breweries", breweries);
        renderBreweriesList(breweries);    //breweries is an object, 
      }
    // Do something with states
  });
      
    } )
}
listenToSelectStateForm();
  


// function renderBreweriesList() {


//     const brewerieItem = breweriesList[i];
//     console.log("Inside brewerieItem: ", brewerieItem);


//   }

// renderBreweriesList();

// list-section render (2-part)

function renderSearchSection() {

  const h1El = document.createElement("h1");
  mainEl.append(h1El);

  const headerEl = document.createElement("header");
  headerEl.className = "search-bar";
  mainEl.append(headerEl);

  const formEl = document.createElement("form");
  formEl.id = "search-breweries-form";
  formEl.autocomplete = "off";
  headerEl.append(formEl);

  const labelEl = document.createElement("label");
  labelEl.for = "search-breweries"; // dont work
  formEl.append(labelEl);
  const h2El = document.createElement("h2");
  h2El.innerText = "Search breweries: ";
  labelEl.append(h2El);

  const inputEl = document.createElement("input");
  inputEl.id = "search-breweries";
  inputEl.name = "search-breweries";
  inputEl.type = "text";
  formEl.append(inputEl);

}
renderSearchSection();

function renderBreweriesList() {

  const articleEl = document.createElement("article");
  mainEl.append(articleEl);

  const ulEl = document.createElement("ul");
  ulEl.className = "breweries-list";
  articleEl.append(ulEl);

  const liEl = document.createElement("li");
  ulEl.append(liEl);

  const listh2El = document.createElement("h2");
  listh2El.innerText = "Snow Belt Brew";
  liEl.append(listh2El); 

  const div1El = document.createElement("div");
  div1El.className = "type"
  div1El.innerText = "micro";
  liEl.append(div1El);

  const section1El = document.createElement("section");
  section1El.className = "address";
  liEl.append(section1El);

  const h3El1 = document.createElement("h3");
  h3El1.innerText = "Address:";
  section1El.append(h3El1);

  const p1El = document.createElement("p");
  p1El.innerText = "9511 Kile Rd";
  const p2El = document.createElement("p");
  section1El.append(p1El);
  section1El.append(p2El);
  const strongEl = document.createElement("strong");
  strongEl.innerText = "Chardon, 44024";
  p2El.append(strongEl);
  
  const section2El = document.createElement("section");
  section2El.className = "phone";
  liEl.append(section2El);

  const h3El2 = document.createElement("h3");
  h3El2.innerText = "Phone:";
  section2El.append(h3El2);

  const p3El = document.createElement("p");
  p3El.innerText = "N/A";
  section2El.append(p3El);

  const section3El = document.createElement("section");
  section3El.className = "link"
  liEl.append(section3El);

  const aEl = document.createElement("a");
  aEl.href = "null";
  aEl.target = "blank";
  aEl.innerText = "Visit Website";
  section3El.append(aEl);


  console.log ("inside article El", articleEl);

}
renderBreweriesList();

// filter-section render 

function renderFilterSection() {

  const asideEl = document.createElement("aside");
  asideEl.className = "filters-section";
  mainEl.append(asideEl); 
  
  const h2El = document.createElement("h2");
  h2El.innerText = "Filter By:"
  asideEl.append(h2El);

  const formEl = document.createElement("form");
  formEl.id = "filter-by-type-form"; 
  formEl.autocomplete = "off";
  asideEl.append(formEl);

  const labelEl = document.createElement("label");
  labelEl.for = "filter-by-type";
  formEl.append(labelEl);
  const h3El = document.createElement("h3");
  h3El.innerText = "Type of Brewery";
  labelEl.append(h3El);

  const selectEl = document.createElement("select");
  selectEl.name = "filter-by-type";
  selectEl.id = "filter-by-type"; 
  formEl.append(selectEl);

  const option1 = document.createElement("option");
  option1.value = '""';
  option1.innerText = "Select a type...";
  selectEl.append(option1);
  const option2 = document.createElement("option");
  option2.value = "micro";
  option2.innerText = "Micro";
  selectEl.append(option2);
  const option3 = document.createElement("option");
  option3.value = "regional";
  option3.innerText = "Regional";
  selectEl.append(option3);
  const option4 = document.createElement("option");
  option4.value = "brewpub";
  option4.innerText = "Brewpub";
  selectEl.append(option4);

  const divEl = document.createElement("div");
  divEl.className = "filter-by-city-heading";
  asideEl.append(divEl);

  const h3El2 = document.createElement("h3");
  h3El2.innerText = "Cities";
  divEl.append(h3El2);

  const buttonEl = document.createElement("button");
  buttonEl.className = "clear-all-btn";
  buttonEl.innerText = "clear all";
  divEl.append(buttonEl);

  const formEl2 = document.createElement("form");
  formEl2.id = "filter-by-city-form";
  asideEl.append(formEl2);

  const inputEl = document.createElement("input");
  inputEl.type = "checkbox";
  inputEl.name = "chardon";
  inputEl.value = "chardon";
  formEl2.append (inputEl);
  const labelEl2 = document.createElement("label");
  labelEl2.for = "chardon";
  labelEl2.innerText = "Chardon";
  formEl2.append(labelEl2);

  const inputEl2 = document.createElement("input");
  inputEl2.type = "checkbox";
  inputEl2.name = "cincinnati";
  inputEl2.value = "cincinnati";
  formEl2.append (inputEl2);
  const labelEl3 = document.createElement("label");
  labelEl3.for = "cincinnati";
  labelEl3.innerText = "Cincinnati";
  formEl2.append(labelEl3);

  console.log ("inside asideEl", asideEl);
}
renderFilterSection()
