#!/usr/bin/env/ node

import { Medicamento } from "./Medicamento";
import { Persona } from "./Persona";

export class Paciente implements Persona {
    constructor (public nombre: string, public edad: number, public cedula: string, public telefono:string, public EPS: string, public alermedicamento: Medicamento[] = []) {}

    public agreAlergias(alergia: Medicamento) {
        this.alermedicamento.push(alergia)
    }
}