import { toast } from "react-toastify"

export const getAppoinment=()=>{
    const appoinment =localStorage.getItem('doctor')
    if(appoinment) return JSON.parse(appoinment)
        return []
}


export const addAppoinment = doctor=>{
    const appoinment =getAppoinment();
    const isExist = appoinment.find(p=> p.id === doctor.id)
    if(isExist) return toast.warn("Appointment Already scheduled for today")
     appoinment.push(doctor)
     toast(`Appointment scheduled for ${doctor.name} successfully`)
        
    localStorage.setItem('doctor',JSON.stringify(appoinment))
}


export const removeAppoinment =(id)=>{
    const appoinment = getAppoinment()
    const remaingAppoinment = appoinment.filter((doctor)=> doctor.id !==id)
    localStorage.setItem('doctor',JSON.stringify(remaingAppoinment))
    toast("romeved succesfully")
}