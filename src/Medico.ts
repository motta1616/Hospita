#!/usr/bin/env/ node

import { Persona } from "./Persona";

export class Medico implements Persona {
    constructor (public nombre: string, public edad: number, public cedula: string, public telefono:string, public regMedico: string) {}

    public presentarse() {
        console.log('Soy el medico '+ this.nombre)
    } 
}
