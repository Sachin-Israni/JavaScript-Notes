function nasd() {
    return new Promise((resolve, reject) => {
        console.log('Sachin')
        resolve('sasjd')
    })
}

// nasd().then(reso => console.log(reso))

async function write() {
    try {
        let a = await nasd()
        console.log(a);
    }
    catch (err) {
        console.log(err);
    }

}
write()