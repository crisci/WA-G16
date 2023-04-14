const APIURL = '/API';


//GET /API/profiles/
function getAllProfiles() {
    return new Promise((resolve, reject) => { 
        fetch(`${APIURL}/profiles/`)
            .then((result) => {
                if (result.ok) {
                    resolve(result.json())
                }  
            }).catch((err) => {
                resolve({error: "Unable to communicate with the server"})
            });
     })
    
}


//GET /API/products/
function getAllProducts() {
    return new Promise((resolve, reject) => { 
        fetch(`${APIURL}/products/`)
            .then(result => {
                if(result.ok)
                    resolve(result.json())
            }).catch(err => {
                resolve({error: "Unable to communicate with the server"})
            })
     })
}


//GET /API/profiles/:email
function getProfile(email) {
    return new Promise((resolve, reject) => { 
        fetch(`${APIURL}/profiles/${email}`)
            .then(result => {
                if(result.ok) 
                    resolve(result.json())
                else 
                    result.json().then(error => reject(error)).catch(() => reject({ error: "Cannot parse server response." }))
                
            }).catch(err => {
                resolve({error: "Unable to communicate with the server"})
            })
     })
}

//GET /API/products/:ean
function getProduct(ean) {
    return new Promise((resolve, reject) => { 
        fetch(`${APIURL}/products/${ean}`)
            .then(result => {
                if(result.ok)
                    resolve(result.json())
                else 
                    result.json().then(error => reject(error)).catch(() => reject({ error: "Cannot parse server response." }))
                
            }).catch(err => {
                resolve({error: "Unable to communicate with the server"})
            })
     })
}

// //POST /API/products/
// export function addProduct(product) {
//     return new Promise((resolve, reject) => { 
//         fetch(`${APIURL}/products/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product)
//         }).then((result) => {
//             if(result.ok)
//                 resolve(result.json())
//             else
//                 result.json().then(error => reject(error)).catch(() => reject({error: "Cannot parse server response."}))
//         }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
//      })
// }

//POST /API/profiles
export function addProfile(profile) {
    return new Promise((resolve, reject) => {
        console.log(profile)
        fetch(`${APIURL}/profiles`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        }).then((response) => {
            console.log("RESPONSE")
            if (response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then((message) => { reject(message); }) // error message in the response body
                    .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
            }
        }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
    });
}

//PUT /API/profiles/:email
function updateProfile(profile) {
    return new Promise((resolve, reject) => {
        fetch(`${APIURL}/profiles/${profile.email}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name: profile.name, surname: profile.surname, email: profile.newEmail}),
        }).then((response) => {
            if (response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then((obj) => { reject(obj); }) // error message in the response body
                    .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
            }
        }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
    });
}


const API = { getAllProfiles, getAllProducts, getProfile, getProduct, addProfile, updateProfile };
export default API;