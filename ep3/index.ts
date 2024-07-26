function Helloworld(){
    //console.log('สวัสดีแนน')
}
Helloworld()

function secondHello(name:string){
    console.log(name)
}//รับ input แต่ไม่ output


//console.log(secondHello('hellow posh'))


function getPi(){
    return 3.14
}
//console.log(getPi())


function เกณฑ์ทหาร(sex: string, height: number,weight: number){
    if (sex === 'man'&& height>170 || (weight >50 && weight <= 110)){
        console.log('จับใบดำใบแดง')
    }else{
        console.log('ไม่เข้าเกณฑ์')
    }
}
เกณฑ์ทหาร('man',170,51)



