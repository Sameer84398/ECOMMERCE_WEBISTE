
const vehicles = [
  // BIKES
  "Aprilia RSV4 1100", "Suzuki Katana", "Moto Guzzi V85 TT", "Ducati Diavel 1260",
  "Kawasaki Z400", "Honda CB500X", "Yamaha YZF-R3", "YAMAHA S1",
  "BLACK BMW 1300 S", "ROYAL ENFIELD GT", "Harley-Davidson", "DUCATI R1",
  "BMW R 1300 GS", "YAMAHA YZF R1", "RE HUNTER 350",
  // CARS
  "BMW M2 CS Racing", "Alpine A110 R-GT", "Porsche 911 GT3", "McLaren 720S GT3",
  "Porsche 911 GT3 Cup", "Porsche 718 Cayman", "Ferrari 250 GTO", "Fiat 124 Abarth R-GT",
  "VOKS VAGEN H1", "TATA NIXON", "SUSUKI SHIFT", "Honda Accord",
  "Hyundai Elantra GT", "Toyota Corolla Hatchback", "Subaru Impreza", "Mazda 6"
];

// 2. SHOW SUGGESTIONS (Dropdown only)
function showSuggestions(query) {
  const suggestionBox = document.getElementById("suggestion-box");
  const queryLower = query.toLowerCase().trim();

  if (queryLower === "") {
    suggestionBox.innerHTML = "";
    // Show everything again if search is cleared
    const cards = document.getElementsByClassName('bike');
    for (let card of cards) card.style.display = "flex";
    return;
  }

  let matches = vehicles.filter(v => v.toLowerCase().includes(queryLower));
  
  suggestionBox.innerHTML = matches.map(item => 
    `<div class="suggestion-item" onclick="selectItem('${item}')">${item}</div>`
  ).join("");
}

// 3. HANDLE ENTER KEY
function handleEnter(event) {
  if (event.key === "Enter") {
    const query = document.getElementById("vehicleSearch").value;
    selectItem(query);
  }
}

// 4. SELECT ITEM (The search action)
function selectItem(name) {
  const suggestionBox = document.getElementById("suggestion-box");
  const cards = document.getElementsByClassName('bike');
  const searchInput = document.getElementById("vehicleSearch");

  searchInput.value = name;
  suggestionBox.innerHTML = ""; // Hide suggestions

  for (let card of cards) {
    let cardTitle = card.getElementsByTagName('h1')[0].innerText.toLowerCase();
    
    // If the title contains the search word, show it
    if (cardTitle.includes(name.toLowerCase())) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  }
}

// 5. COLOR THEME
function color() {
  const body = document.body;
  const btn = document.getElementById("color");
  const isWhite = body.style.backgroundColor === "white" || body.style.backgroundColor === "";
  
  body.style.backgroundColor = isWhite ? "black" : "white";
  body.style.color = isWhite ? "white" : "black";
  if(btn) btn.style.color = isWhite ? "white" : "black";
}

const clickhere = () => alert("Thank you for your purchase! We will contact you soon.");