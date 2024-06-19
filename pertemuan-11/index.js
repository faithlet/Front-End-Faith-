import helloWorld from './helloWorld.js';
import ambilDataUser from './ambilDataUser.js';
import ambilDataUserAsync from './ambilDataUserAsync.js';

async function messages() {
    let msg = await helloWorld();
    console.log(msg);
    let userData = await ambilDataUser();
    console.log("Data pengguna:", userData);
}

 ambilDataUserAsync()
    .then(data => {

    })
    .catch(error => console.error("Error:", error));

messages();