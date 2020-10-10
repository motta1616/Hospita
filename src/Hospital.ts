#!/usr/bin/env/ node

import { Medicamento } from './Medicamento';
import {Medico} from './Medico';
import { MedicoEspe } from './MedicoEspe';
import { Paciente } from './Paciente';

export class Hospital {
    public static atenderPaciente(doctor: Medico, usuario: Paciente) {
        console.log(doctor.nombre + ' atendió al paciente ' + usuario.nombre)
    }
    public static formularMedicamento (doctor: Medico, usuario: Paciente, droga:Medicamento) {
        console.log(doctor.nombre + ' le formula el medicamento ' + droga.nombre + ' al paciente ' + usuario.nombre)
    }
    public static remitir (doctor: Medico, usuario: Paciente, especialista:MedicoEspe) {
        console.log(doctor.nombre + ' remite al paciente ' + usuario.nombre + ' al doctor ' + especialista.nombre + ' especialista en ' + especialista.Especialidad)
    }
}