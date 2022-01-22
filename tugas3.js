const data = 5956560159466056

function divideAndSort(data){
    //convert to string
    const input = data.toString()

    let temp = input.length - 1
    let x=0
    let found = ""
    let res = ""

    while (x<=temp){
        // if input index x is 0 so run this function
        if (input[x] == "0"){
            found = sort(found)
            res += found
            found = ""
        } 
        // if input index x is not 0 so run this function
        else {
            found += input[x]
        }

        // if x == temp so run this function
        if (x == temp){
            found =sort(found)
            res += found
        }
        x++
    }
    
    //because the output of variable res is string so we must convert from stirng to integer for the output
    console.log(parseInt(res))
}

//this method is for to sorting the value and return the value of sorting in string
function sort(found){
    // sorting
    // push string to array
    str = found.split('')

    // convert array of string to array of number
    intArr = str.map((Element) =>{
        intArr = parseInt(Element)
        return intArr
    })

    // sorting array of number
    res = intArr.sort((a,b) =>{
        return a-b
    })

    res = res.map ((Element) =>{
        intStr =Element.toString()
        return intStr
    })

    //convert array of number to string
    found = res.join("")
    return found
}

divideAndSort(data)