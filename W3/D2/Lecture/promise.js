let trashGotTakenOut = true

const takeOutTheTrash = new Promise((resolve, reject) => {
    if(trashGotTakenOut){
        resolve('Thanks for taking out the trash')
        }
    else{
        reject('You Didnt take out the trash')
    }
})

takeOutTheTrash
    .then(message => console.log(message))
    .catch(err => console.log(err))



function getNbaAthletes (request) {
    return new Promise((resolve, reject) => {
        console.log(resolve);
        console.log(reject);
        if (request === 'NBA'){
            resolve([
                {name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
                {name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
                {name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
                {name:'Shaq', league:'NBA',  position: 'Center', active:false },
                {name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
            ])
        }else{
            reject({message: 'Sorry we dont understand that request try again', hint: 'Try "NBA" as your request'})
        }
    })
}
getNbaAthletes('NBA')
    .then((data) => {
        console.log(data)
    })
    .catch(err => console.log(err))

// ! Another way to handle promises using async/await with try catch blocks
// const makeRequest = async () => {
//     try{
//         const data = await(getNbaAthletes('asd'))
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// makeRequest()
