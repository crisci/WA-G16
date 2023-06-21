const APIURL = '/API';


//POST /API/login
async function logIn(credentials) {
    return fetch(`${APIURL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials)
  }).then(async res => {
      try {
        if (res.ok)
           res.json();
        throw await res.json();
      } catch (error) {
        console.log(error)
        throw  Error("Please, retry!")
      }
  });
  }

//GET /API/profiles/
function getAllProfiles() {
    return new Promise((resolve, reject) => { 
        fetch(`${APIURL}/customers/`)
            .then((result) => {
                if (result.ok) {
                    resolve(result.json())
                }  
            }).catch((err) => {
                resolve({detail: "Unable to communicate with the server"})
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
                resolve({detail: "Unable to communicate with the server"})
            })
     })
}


//GET /API/profiles/:email
function getProfile(email) {
    return new Promise((resolve, reject) => { 
        fetch(`${APIURL}/customers/email=${email}`)
            .then(result => {
                if(result.ok) 
                    resolve(result.json())
                else 
                    result.json().then(error => reject(error)).catch(() => reject({ detail: "Cannot parse server response." }))
                
            }).catch(err => {
                resolve({detail: "Unable to communicate with the server"})
            })
     })
}

//GET /API/products/:ean
function getProduct(ean) {
    return new Promise((resolve, reject) => { 
        fetch(`${APIURL}/products/id=${ean}`)
            .then(result => {
                if(result.ok)
                    resolve(result.json())
                else 
                    result.json().then(error => reject(error)).catch(() => reject({ detail: "Cannot parse server response." }))
                
            }).catch(err => {
                resolve({detail: "Unable to communicate with the server"})
            })
     })
}
//POST /API/profiles
export function addProfile(profile) {
    return new Promise((resolve, reject) => {
        fetch(`${APIURL}/customers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                customer: {
                    first_name: profile.first_name, 
                    last_name: profile.last_name, 
                    email: profile.email, 
                    dob: profile.dob, 
                    address: profile.address,
                    phone_number: profile.phone_number,
                },
                password: profile.password}),
        }).then((response) => {
            if (response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then((message) => { reject(message); }) // error message in the response body
                    .catch(() => { reject({ detail: "Cannot parse server response." }) }); // something else
            }
        }).catch(() => { reject({ detail: "Cannot communicate with the server." }) }); // connection errors
    });
}

//PUT /API/profiles/:email
function updateProfile(profile) {
    return new Promise((resolve, reject) => {
        fetch(`${APIURL}/customers/${profile.email}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({customer: {
                first_name: profile.first_name, 
                last_name: profile.last_name, 
                email: profile.newEmail, 
                dob: profile.dob, 
                address: profile.address,
                phone_number: profile.phone_number,
            },
            password: profile.password }),
        }).then((response) => {
            if (response.ok) {
                resolve(null);
            } else {
                // analyze the cause of error
                response.json()
                    .then((obj) => { reject(obj); }) // error message in the response body
                    .catch(() => { reject({ detail: "Cannot parse server response." }) }); // something else
            }
        }).catch(() => { reject({ detail: "Cannot communicate with the server." }) }); // connection errors
    });
}


const API = { getAllProfiles, getAllProducts, getProfile, getProduct, addProfile, updateProfile, logIn };
export default API;