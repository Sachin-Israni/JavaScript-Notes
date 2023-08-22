// let first_API=fetch("")

// async function api_fun() {
//     const response = await fetch("");
//     const res = await response.json();
//     console.log(res);
// }

// api_fun()

// const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
// fetch(`https://api.openweathermap.org/data/2.5`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


function catAPI() {

    for (let i = 0; i < 21; i++) {

        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                let img = document.createElement('img')
                img.src = data[0].url
                let a=document.createElement('a')
                // a.innerText='Kitty'
                a.href=data[0].url
                a.target='blank'
                a.appendChild(img)
                images.appendChild(a)
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

}



function wait(ms) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('hello')
        }, ms)
    }).then(res => console.log(res))
}

async function call() {
    // await wait(2000)
    // await wait(2000)
    // await wait(2000)
    // await wait(2000)                 // 8 second

    await Promise.all([wait(2000), wait(2000), wait(2000), wait(2000)])        // 2 second

    console.log("hi");
}

call()



// const requestData = {
//     username: 'exampleUser',
//     email: 'user@example.com'
// };

// fetch('https://api.example.com/users', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(requestData)
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log('User created:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


// const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
// const city = 'New York';

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Weather data:', data);
//     // Now you can access specific properties in the 'data' object
//     const temperature = data.main.temp;
//     const weatherDescription = data.weather[0].description;
//     console.log(`Current temperature in ${city}: ${temperature}°C`);
//     console.log(`Weather description: ${weatherDescription}`);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
