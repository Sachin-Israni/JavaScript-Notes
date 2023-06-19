// this is the valid method

{
    let name = 'sachin';
    {
        console.log(name);
    }
}

var age=309; // this will also run
{
    let age=10;
    {
        const age=30; // this is right
        {
            // var age=22; // but this will not run
            console.log(age);
        }
    }
}