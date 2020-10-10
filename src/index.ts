#!/usr/bin/env/ node

import { Hospital } from './Hospital';
import { Medicamento } from './Medicamento';
import {Medico} from './Medico'
import { MedicoEspe } from './MedicoEspe';
import { Paciente } from './Paciente';

const usuario = new Paciente('Leonardo', 23, '1074', '12212211', 'sanitas')
const doctor = new Medico('Juan', 23, '1074', '12212211', 'dolor')
const droga = new Medicamento('ibuprofeno', 500)
const especialista = new MedicoEspe('Pedro', 43, '1075467125', '3115785423', '4867583', 'Cardiologia')

Hospital.atenderPaciente(doctor, usuario);
Hospital.formularMedicamento(doctor, usuario, droga);
Hospital.remitir(doctor, usuario, especialista);