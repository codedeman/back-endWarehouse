
console.log("Hello Developer")
const add = (a,b) =>{

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            resolve(a+b);
        })
    })

}

// add(1,2).then((sum)=>{

//     console.log(sum)

//     add(sum,5).then((sum2) => {

//     }).catch((e)=>{

//         console.log(e)
//     })
// }).catch((e)=>{

//     console.log(e);
// })

add().then((sum)=>{

    console.log(sum)
    return add(sum,4)
}).then((sum2)=>{

    console.log(sum2)
}).catch((e)=>{

    console.log(e)
})