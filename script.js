const calculateFormEl=document.getElementById('calculateForm');

const calculateMarks=(event)=>{
    const maxMarks=400
    event.preventDefault();
    const formData=new FormData(calculateFormEl);
    const data={};
    formData.forEach((value,key)=>{
        data[key]= +value;
    })
    console.log(data)
    const totalMarks=data.maths+data.science+data.english+data.hindi
    const percentage=(totalMarks/maxMarks)*100
    console.log({totalMarks})
    console.log({percentage})

    const resultEl=document.createElement('p');
    resultEl.className='result';
    resultEl.innerText=`You have got ${totalMarks} marks out of ${maxMarks} and your percentage is ${percentage}%`
    
    calculateFormEl.after(resultEl);
}