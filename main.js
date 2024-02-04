//שאלה אחד 1

let arr1 = [4,3,2,1]

function question1(arr1){
    let result = []
    arr1.forEach(n => { 
        result.push(n*5)
    })
        return result
}

console.log(question1(arr1))

//שאלה שתים 2

let arr2 = [9,11,17,31]

function question2(arr2){
   let result 
   for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] > 12) {
            result = i
            break;
        }
   } 
   return result;
}

console.log(question2(arr2))

//שאלה שלוש 3 

let arr3 = [8,6,4,2]

function question3(arr3){
    let result
    arr3.forEach(n => {
        if(n%6 !== 0){
            result = false
        }else{
            result = true
        }
    })
    return result
}

console.log(question3(arr3))

//שאלה ארבע 4
        
let arr4 = [12,5,3,1]

function question4(arr4){
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i] > 20) {
           return true
    } 
     }
    return false
};

console.log(question4(arr4))

//שאלה חמש 5

let arr5 = ['a',2,'b',1]

function question5(arr5){
    let result = []
    arr5.forEach(n => {
        if (typeof n === 'string' && n.length == 1) {
            result.push(n)
        }
    })
    return result
}

console.log(question5(arr5))

//שאלה שיש 6

let arr6 = [8,'6',4,'3']

function question6(arr6) {
    let result 
    for (let i = 0; i < arr6.length; i++) {
          if(arr6[i] > 5){
            result = arr6[i] 
            break
        }
    }
     return result 
}

console.log(question6(arr6))

//שאלה שבע 7 

let arr7 = [4,3,2,1]

function question7(arr7){
    let result = []
    arr7.forEach(n => {
        result.push(n*2)
    })
    return result
}

console.log(question7(arr7))

//שאלה שמונה 8 

let arr8 = [7,5,3,1]

function question8(arr8){
    for (let i = 0; i < arr8.length; i++) {
         if(typeof arr8[i] === 'number' && arr8[i] > 9){
            return false
        }     
    }   
    return true
}

console.log(question8(arr8))

//שאלה תשע 9

let arr9 = [6,5,4,3,2,1]

function question9(arr9){
    let result = []
    arr9.forEach(n => {
        if (n%2 !== 0) {
            result.push(n)
        }
    })
    return result
}

console.log(question9(arr9))

//שאלה 10

let arr10 = ["apple","mango","banana"]

function question10(arr10){
    let result = []
    arr10.forEach(n => {
        result.push(n + "-java")
    })
    return result
}

console.log(question10(arr10))

//שאלה 11

let arr11 = ["hello","world","programming","computer"]

function question11(arr11){
    let result
    for (let i = 0; i < arr11.length; i++) {
        if( arr11[i].length > 2){
            result = i
            break
        }
        
    }
    return result
}

console.log(question11(arr11))


//שאלה 12

let arr12 = ["cat","dog","elphant","fox"]

function question12(arr12){
    for (let i = 0; i < arr12.length; i++) {
        if( arr12[i].length < 4){
            return false
        }
    }
    return true
}


console.log(question12(arr12))

//שאלה 13

let arr13 = ["apple","banana","cherry","date"]

function question13(arr13){
    for (let i = 0; i < arr13.length; i++) {
       if(arr13[i].charAt(0).toLowerCase() === 'b'){
            return true
       }
    }
    return false
}


console.log(question13(arr13))

//שאלה 14

let arr14 = ["apple","banana","orange","grape"]

function question14(arr14){
    let result = []
    for (let i = 0; i < arr14.length; i++) {
    if (arr14[i].charAt(arr14[i].length -1).toLowerCase() === 'e') {
            result.push(arr14[i])
    }    
    }
    return result
}

console.log(question14(arr14))


//שאלה 15

let arr15 = ["apple","banana","cherry"]

function question15(arr15) {
    let result 
        for (let i = 0; i < arr15.length; i++) {
            if (arr15[i].charAt(0).toLowerCase() === 'b') {
            result = arr15[i]
            }
        }
      
    return result
}

console.log(question15(arr15))

//Json Object

const ahmad = {
    fullName: "Ahmad Kawasmi",
    birthDay: "13.10.2003",
    town: "Jerusalem",
    siblings: ["Omar","Mohannad","Sarah"]
}