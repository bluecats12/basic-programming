function sayhi(dayofweek:number){
    switch(dayofweek){
        case 1 :
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2 :
        console.log('สวัสดีวันจันทร์')
            break
        case 3 :
        console.log('สวัสดีวันอังคาร')
            break
        case 4 :
        console.log('สวัสดีวันพุธ')
            break
        case 5 :
        console.log('สวัสดีวันพฤหัส')
            break
        case 6 :
        console.log('สวัสดีวันศุกร์')
            break
        case 7 :
        console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log('ระบุวันผิด')
            break
        }       

}
sayhi(8)

