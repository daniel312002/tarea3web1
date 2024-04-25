document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Aquí podrías realizar alguna validación de los datos antes de enviarlos

    // Simulación de envío de datos a través de una solicitud HTTP
    // En este ejemplo, solo mostraremos un mensaje
    setTimeout(function() {
        document.getElementById('message').innerHTML = "Datos enviados correctamente";
    }, 1000);
});

function eliminarCliente(index) {
    const clientesGuardados = JSON.parse(localStorage.getItem('clientesGuardados')) || [];
    clientesGuardados.splice(index, 1);
    localStorage.setItem('clientesGuardados', JSON.stringify(clientesGuardados));
    mostrarClientes();
}

function mostrarClientes() {
    const clientesContainer = document.getElementById("clientesContainer");
    const clientesGuardados = JSON.parse(localStorage.getItem('clientesGuardados')) || [];

    if (clientesGuardados.length === 0) {
        clientesContainer.innerHTML = "<p>No hay clientes guardados.</p>";
    } else {
        clientesContainer.innerHTML = ""; 

        clientesGuardados.forEach(function (cliente, index) {
            const clienteElement = document.createElement("div");
            clienteElement.classList.add("cliente");
            clienteElement.innerHTML = `
                <h3>Cliente ${index + 1}</h3>
                <p><strong>Nombre:</strong> ${cliente.nombre}</p>
                <p><strong>Email:</strong> ${cliente.email}</p>
                <p><strong>Teléfono:</strong> ${cliente.telefono}</p>
                <button onclick="eliminarCliente(${index})">Eliminar</button>
            `;
            clientesContainer.appendChild(clienteElement);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    mostrarClientes();
});

document.getElementById('customerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Aquí podrías realizar alguna validación de los datos antes de enviarlos

    // Simulación de envío de datos a través de una solicitud HTTP
    // En este ejemplo, solo mostraremos un mensaje
    setTimeout(function() {
        document.getElementById('message').innerHTML = "Datos enviados correctamente";
    }, 1000);

    // Guardar el cliente en el almacenamiento local
    const cliente = {
        nombre: name,
        email: email,
        telefono: phone
    };

    const clientesGuardados = JSON.parse(localStorage.getItem('clientesGuardados')) || [];
    clientesGuardados.push(cliente);
    localStorage.setItem('clientesGuardados', JSON.stringify(clientesGuardados));
    mostrarClientes();
});


