 const firebaseConfig = {
            apiKey: "AIzaSyAanptKy-ZcjJp4_u2LG4_b-ceQCPE5cO4",
            authDomain: "llanoland.firebaseapp.com",
            projectId: "llanoland",
            storageBucket: "llanoland.appspot.com",
            messagingSenderId: "556711848551",
            appId: "1:556711848551:web:ee306e2747198167d682c2",
            measurementId: "G-QW53RQ72KB"
          };
       
        
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        
        
        
        

        const userList = document.getElementById('user-list');

        db.collection('toyota').get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                const userId = doc.id;

                const tr = document.createElement('tr')
                tr.innerHTML = `<td>${userId}</td>  <td>${userData.carro}</td>  <td>${userData.Precio}</td> <td>${userData.age}</td>`

                userList.appendChild(tr);
            });
        })
        .catch((error) => {
            console.error("Error getting toyota: ", error);
        });
        
        

/*
const form = document.getElementById('crud-form');

// Evento de envío del formulario
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const carro = form.carro.value;
    const Precio = form.Precio.value;
    const age = form.age.value;
    const docId = form['doc-id'].value;

    if (docId) {
        // Actualizar documento existente
        db.collection('toyota').doc(docId).update({
            carro: carro,
            Precio: parseInt(Precio),
            age: parseInt(age)
        })
        .then(() => {
            console.log("Document updated successfully");
            form.reset();
            form['doc-id'].value = '';
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    } else {
        // Crear nuevo documento
        db.collection('toyota').add({
            carro: carro,
            Precio: parseInt(Precio),
            age: parseInt(age)
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            form.reset();
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
});

// Función para cargar datos de un documento a editar
function loadDocument(docId, carro, Precio, age) {
    form['doc-id'].value = docId;
    form.carro.value = carro;
    form.Precio.value = Precio;
    form.age.value = age;
}



const updateForm = document.getElementById('update-form');

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const docId = updateForm.querySelector('#update-id').value;
    const newcarro = updateForm.querySelector('#update-carro').value;
    const newPrecio = parseInt(updateForm.querySelector('#update-Precio').value);
    const newage = parseInt(updateForm.querySelector('#update-age').value);

    // Actualizar el documento en Firestore
    db.collection('toyota').doc(docId).update({
        carro: newcarro,
        Precio: newPrecio,
        age: newage
    })
    .then(() => {
        console.log("Document successfully updated!");
        updateForm.reset();
    })
    .catch((error) => {
        console.error("Error updating document: ", error);
    });
});

*/


