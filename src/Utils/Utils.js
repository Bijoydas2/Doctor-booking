export const getAppoinment=()=>{
    const appoinment =localStorage.getItem('doctor')
    if(appoinment) return JSON.parse(appoinment)
        return []
}


export const addAppoinment = doctor=>{
    const appoinment =getAppoinment();
    const isExist = appoinment.find(p=> p.id === doctor.id)
    if(isExist) return console.log('already added')
     appoinment.push(doctor)
        
    localStorage.setItem('doctor',JSON.stringify(appoinment))
}