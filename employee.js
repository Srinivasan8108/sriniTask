let empId = JSON.parse(localStorage.getItem("empId"));
let empDtils = employeesDetails.filter((emp) => emp.empId === empId);
aboutEmp(empDtils);

function aboutEmp(empDtils) {
  let profileCon = document.querySelector(".profileImgCon");
  let empProDtl = document.createElement("div");
  empProDtl.innerHTML = `<h1 style="margin: 8px 0px">${empDtils[0].empName}</h1>
  <h2 style="margin:0px;"><i class="fa-regular fa-id-badge" ></i> <small>0${empDtils[0].empId}</small></h2>`;

  empProDtl.classList.add("empProDtl");
  profileCon.append(empProDtl);

  /////

  let empCard = document.querySelector(".empCard");
  let aboutEmp = document.createElement("div");

  aboutEmp.innerHTML = ` 
  <p style="margin: 6px 0"><i class="fa-solid fa-mobile-screen-button"></i> ${empDtils[0].phoneNumber}</p>
  <p style="margin: 6px 0"><i class="fa-solid fa-envelope"></i> ${empDtils[0].mailId}</p>
  <p style="margin: 6px 0"><i class="fa-solid fa-cake-candles"></i> ${empDtils[0].dob}</p>
  <p style="margin: 6px 0"> <i class="fa-solid fa-location-dot"></i> ${empDtils[0].address.doorNo},
  ${empDtils[0].address.road},
  ${empDtils[0].address.city}-${empDtils[0].address.pincode}</p>
  <p style="margin: 6px 0"><i class="fa-solid fa-user-tie"></i> ${empDtils[0].experience} Years Of Experience</p>`;

  aboutEmp.classList.add("aboutEmp");
  empCard.append(aboutEmp);
}
