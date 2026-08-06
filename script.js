for (let i = 1; i <= 50; i++) {

    if(i % 3 === 0 && i % 5 ===0){
        console.log(`${i} = fizzbozz`)
    } else if(i % 3 === 0 ){
        console.log(`${i} = fizz`)
    } else if(i % 5 === 0){
        console.log(`${i} = bozz`)
    }
    
}



// 3, NO 5 => FIZZ
// 5, no 3 => BOZZ
// 3 , 5 => FIZZBOZZ
