import { useState, useEffect } from 'react'
import Api from '../Services/Api';

export function errorAnim(Element, Class, ClassError, setErrorText) {
    Element.classList.remove(Class);
    Element.classList.add(ClassError);
    setTimeout(function (){
        Element.classList.remove(ClassError);
        Element.classList.add(Class);
        setErrorText("")
    }, 2000);
}

export function toggle(title, Element1, Element2) {

    document.title = title;

    Element1;
    Element2;
    
}