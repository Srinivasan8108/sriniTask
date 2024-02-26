let tableBody = document.querySelector(".tableBody");

employeesDetails.forEach((emp) => {
  let newTableRow = document.createElement("tr");
  newTableRow.innerHTML = ` <td>${emp.empId}</td>
  <td>${emp.empName}</td>
  <td onclick="openEmpDtl(${emp.empId})" class="openBtn"> View Details </td>`;
  tableBody.append(newTableRow);
});

const openEmpDtl = async (empId) => {
  localStorage.setItem("empId", JSON.stringify(empId));
  window.location.href = "employee.html";
};

function logoutUser() {
  window.location.href = "login.html";
}
