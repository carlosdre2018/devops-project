function checkName() {
    const nameInput = document.getElementById("nameInput").value;
    
    if (nameInput.trim() === "Carlos") {
        document.getElementById("greetingMessage").innerText = `Hola ${nameInput}`;
        document.getElementById("input-section").style.display = "none";
        document.getElementById("greeting-section").style.display = "block";
    } else {
        alert("Permiso denegado");
    }
}
