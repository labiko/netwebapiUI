import { Adress } from "./adress.model"
import { Gender } from "./gender.model"

export interface Student {
    id : string 
    firstName : string
    lastName : string
    dateOfBirth : string
    email : string 
    mobile : number 
    genderId : string 
    profileImageUrl : string 
    gender : Gender
    address : Adress
}