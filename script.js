let records = [];
let recordId = 1;

function createRecord() {
    const firstname = document.getElementById("firstname").value;
    const  middlename = document.getElementById("middlename").value;
    const  lastname = document.getElementById("lastname").value;
    const  age = document.getElementById("age").value;
    const  gender = document.getElementById("gender").value;
    const  course = document.getElementById("course").value;
    const  schoolyear = document.getElementById("schoolyear").value;

    const newRecord = { id: recordId++, firstname, middlename, lastname, age, gender, course, schoolyear, };
    records.push(newRecord);

    displayRecords();
    clearForm("create-form");
}

function displayRecords() {
    const recordList = document.getElementById("record-list");
    recordList.innerHTML = "";

    for (const record of records) {
        const li = document.createElement("li");
        li.innerHTML = `firstname: ${record.firstname}, middleName: ${record.middlename}, lastname: ${record.lastname}, age: ${record.age}, gender: ${record.gender}, course: ${record.course}, schoolyear: ${record.schoolyear}`;
        recordList.appendChild(li);
    }
}

function clearForm(formId) {
    const form = document.getElementById(formId);
    form.reset();
}

function updateRecord() {
    
    const firstname = document.getElementById("update-firstname").value;
    const middlename = document.getElementById("update-middlename").value;
    const lastname = document.getElementById("update-lastname").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const course = document.getElementById("update-course").value;
    const schoolyear = document.getElementById("update-schoolyear").value;

    const recordToUpdate = records.find(record => record.id == id);

    if (recordToUpdate) {
        recordToUpdate.firstname = firstname;
        recordToUpdate.middlename = middlename;
        recordToUpdate.lastname = lastname;
        recordToUpdate.age = age;
        recordToUpdate.gender =  gender;
        recordToUpdate.course = course;
        recordToUpdate.schoolyear = schoolyear;
        
        
        
        
        

        displayRecords();
        clearForm("update-form");
    } else {
        alert("update");
    }
}

function deleteRecord() {
    const id = document.getElementById("delete-id").value;
    const index = records.findIndex(record => record.id == id);

    if (index !== -1) {
        records.splice(index, 1);
        displayRecords();
        clearForm("delete-form");
    } else {
        alert("Record not found");
    }
}

displayRecords();
