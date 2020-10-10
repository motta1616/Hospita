#!/usr/bin/env/ node

import { Medico } from "./Medico"

export class MedicoEspe extends Medico {
    constructor (public nombre: string, public edad: number, public cedula: string, public telefono:string, public regMedico: string, public Especialidad: string) {
        super(nombre, edad, cedula, telefono, regMedico)
    }
    public presentarse() {
        super.presentarse()
        console.log('Tengo una especialidad ' + this.Especialidad)

    }
}