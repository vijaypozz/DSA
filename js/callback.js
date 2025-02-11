function fetchData(callback) {
    console.log("1")
    setTimeout(() => {
        callback("Data received");
    }, 0);
    setImmediate(() =>{
        callback("Data received1");

    })
    console.log("2")

}
fetchData(console.log);  // Output after 2s: Data received



function promis() {

    return new Promise((resolve, reject) => {
        resolve("im in") 

    })
}

async function fetch(params) {
    
    try {
        const data = await promis()
        console.log(data,"==1=");
        
    } catch (error) {
       console.log(error,"=3==") 
    }

}

fetch()