import { dropMenu } from "../func/dropDown.js";
import {urlRed} from "../tools/urlRed.js";
import { SearchRecipie } from '../asyncs/searchreq.js';



const menuBoutton= document.querySelector('.icon-list');
const startbutton=document.querySelector('.StartNow');
const header=document.querySelector('header');
const form = document.querySelector('form');



export function EventListerRun(){
    if(menuBoutton) menuBoutton.addEventListener('click',dropMenu);
    if(startbutton) startbutton.addEventListener('click',()=>{
        event.preventDefault();
        urlRed('browse');
    });
    
    if(header) header.addEventListener('click',()=> urlRed('home'));
    if(form) form.addEventListener('submit',()=> SearchRecipie(event));
}


