// Provinces
let provinces = null;

let districts = null;
let sectors = null;
let cells = null;
let villages = null;
let provinceOptions = "";
let searchValue = null;
/*
getting provinces;

*/
const provinceHandler = () => {
  fetch("https://rwanda.p.rapidapi.com/provinces", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "rwanda.p.rapidapi.com",
      "x-rapidapi-key": "0793f1c577mshb8d850d30ff48a2p12d00bjsn9e97682b8a23",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      provinces = res.data;
      const transformedProvinces = Object.values(provinces);
      for (var i = 0; i < transformedProvinces.length; i++) {
        provinceOptions += `<option class="province" value='${transformedProvinces[i]}'>${transformedProvinces[i]}</option>`;

        document.getElementById("provinces").innerHTML = provinceOptions;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
provinceHandler();

const districtHandler = () => {
  let selectedprovince = document.querySelector("#provinces").value;
  let districtOptions;

  fetch(`https://rwanda.p.rapidapi.com/districts?p=${selectedprovince}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "rwanda.p.rapidapi.com",
      "x-rapidapi-key": "0793f1c577mshb8d850d30ff48a2p12d00bjsn9e97682b8a23",
    },
  })
    .then((response) => response.json())
    .then((res) => {
      const districts = res.data;
      const transformedDistricts = Object.values(districts);
      for (var i = 0; i < transformedDistricts.length; i++) {
        districtOptions += `<option  value='${transformedDistricts[i]}'>${transformedDistricts[i]}</option>`;
        document.getElementById("districts").innerHTML = districtOptions;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

districtHandler();

// //Sectors
const sectorsHandler = () => {
  let selectedProvince = document.querySelector("#provinces").value;
  let selectedDistrict = document.querySelector("#districts").value;
  if (selectedDistrict) {
    let sectorsOptions;
    fetch(
      `https://rwanda.p.rapidapi.com/sectors?d=${selectedDistrict}&p=${selectedProvince}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rwanda.p.rapidapi.com",
          "x-rapidapi-key":
            "0793f1c577mshb8d850d30ff48a2p12d00bjsn9e97682b8a23",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        const sectors = res.data;
        const transformedSecotors = Object.values(sectors);
        for (var i = 0; i < transformedSecotors.length; i++) {
          sectorsOptions += `<option  value='${transformedSecotors[i]}'>${transformedSecotors[i]}</option>`;

          document.getElementById("sectors").innerHTML = sectorsOptions;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
sectorsHandler();
// //Cells
const cellsHandler = () => {
  let cellsOptions = "";
  let url = `https://rwanda.p.rapidapi.com/cells?d=bugesera&p=east&s=gashora`;
  let selectedProvince = document.querySelector("#provinces").value;
  let selectedDistrict = document.querySelector("#districts").value;
  let selectedSector = document.querySelector("#sectors").value;
  if (selectedSector) {
    url = `https://rwanda.p.rapidapi.com/cells?d=${selectedDistrict}&p=${selectedProvince}&s=${selectedSector}`;
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "rwanda.p.rapidapi.com",
        "x-rapidapi-key": "0793f1c577mshb8d850d30ff48a2p12d00bjsn9e97682b8a23",
      },
    })
      .then((response) => response.json())
      .then((res) => {
        const cells = res.data;
        const transformedCells = Object.values(cells);
        for (var i = 0; i < transformedCells.length; i++) {
          cellsOptions += `<option  value='${transformedCells[i]}'>${transformedCells[i]}</option>`;
          document.getElementById("cells").innerHTML = cellsOptions;
          document.getElementById("cells").innerHTML = cellsOptions;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
cellsHandler();

// //villages
const villagesHandler = () => {
  let villagesOptions;
  let selectedProvince = document.querySelector("#provinces").value;
  let selectedDistrict = document.querySelector("#districts").value;
  let selectedSector = document.querySelector("#sectors").value;
  let selectedCell = document.querySelector("#cells").value;

  if (selectedCell) {
    fetch(
      `https://rwanda.p.rapidapi.com/villages?d=${selectedDistrict}&c=${selectedCell}&p=${selectedProvince}&s=${selectedSector}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rwanda.p.rapidapi.com",
          "x-rapidapi-key":
            "0793f1c577mshb8d850d30ff48a2p12d00bjsn9e97682b8a23",
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        const villages = res.data;
        const transformedVillages = Object.values(villages);
        for (var i = 0; i < transformedVillages.length; i++) {
          villagesOptions += `<option  value='${transformedVillages[i]}'>${transformedVillages[i]}</option>`;
          document.getElementById("villages").innerHTML = villagesOptions;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
villagesHandler();
