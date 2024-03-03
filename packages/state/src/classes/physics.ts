import * as physics from "#/staticData/physicalConstants.json";
import { Numpy } from "./Numpy";

export type PhysicalConstant = "c" | "g" | "G" | keyof typeof physics;

interface PhysicsItemValue {
    value: number;
    unit: string;
    errorMargin?: number;
}

type T = {
    [k in keyof typeof physics]: PhysicsItemValue | undefined;
};

export class PhysicalConstants extends Numpy implements T {
    [k: string]: PhysicsItemValue | any
    c: number;
    g: number;
    G: number;
    "Wien displacement law constant": PhysicsItemValue | undefined = undefined;
    "atomic unit of 1st hyperpolarizablity": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of 2nd hyperpolarizablity": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of electric dipole moment": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of electric polarizablity": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of electric quadrupole moment": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of magn. dipole moment": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of magn. flux density": PhysicsItemValue | undefined = undefined;
    "deuteron magn. moment": PhysicsItemValue | undefined = undefined;
    "deuteron magn. moment to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "deuteron magn. moment to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "deuteron-electron magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "deuteron-proton magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "deuteron-neutron magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "electron gyromagn. ratio": PhysicsItemValue | undefined = undefined;
    "electron gyromagn. ratio over 2 pi": PhysicsItemValue | undefined =
        undefined;
    "electron magn. moment": PhysicsItemValue | undefined = undefined;
    "electron magn. moment to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "electron magn. moment to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "electron magn. moment anomaly": PhysicsItemValue | undefined = undefined;
    "electron to shielded proton magn. moment ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "electron to shielded helion magn. moment ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "electron-deuteron magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "electron-muon magn. moment ratio": PhysicsItemValue | undefined = undefined;
    "electron-neutron magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "electron-proton magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "magn. constant": PhysicsItemValue | undefined = undefined;
    "magn. flux quantum": PhysicsItemValue | undefined = undefined;
    "muon magn. moment": PhysicsItemValue | undefined = undefined;
    "muon magn. moment to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "muon magn. moment to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "muon-proton magn. moment ratio": PhysicsItemValue | undefined = undefined;
    "neutron gyromagn. ratio": PhysicsItemValue | undefined = undefined;
    "neutron gyromagn. ratio over 2 pi": PhysicsItemValue | undefined = undefined;
    "neutron magn. moment": PhysicsItemValue | undefined = undefined;
    "neutron magn. moment to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "neutron magn. moment to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "neutron to shielded proton magn. moment ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "neutron-electron magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "neutron-proton magn. moment ratio": PhysicsItemValue | undefined = undefined;
    "proton gyromagn. ratio": PhysicsItemValue | undefined = undefined;
    "proton gyromagn. ratio over 2 pi": PhysicsItemValue | undefined = undefined;
    "proton magn. moment": PhysicsItemValue | undefined = undefined;
    "proton magn. moment to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "proton magn. moment to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "proton magn. shielding correction": PhysicsItemValue | undefined = undefined;
    "proton-neutron magn. moment ratio": PhysicsItemValue | undefined = undefined;
    "shielded helion gyromagn. ratio": PhysicsItemValue | undefined = undefined;
    "shielded helion gyromagn. ratio over 2 pi": PhysicsItemValue | undefined =
        undefined;
    "shielded helion magn. moment": PhysicsItemValue | undefined = undefined;
    "shielded helion magn. moment to Bohr magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded helion magn. moment to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded helion to proton magn. moment ratio": PhysicsItemValue | undefined =
        undefined;
    "shielded helion to shielded proton magn. moment ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded proton magn. moment": PhysicsItemValue | undefined = undefined;
    "shielded proton magn. moment to Bohr magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded proton magn. moment to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "{220} lattice spacing of silicon": PhysicsItemValue | undefined = undefined;
    "lattice spacing of silicon": PhysicsItemValue | undefined = undefined;
    "alpha particle-electron mass ratio": PhysicsItemValue | undefined =
        undefined;
    "alpha particle mass": PhysicsItemValue | undefined = undefined;
    "alpha particle mass energy equivalent": PhysicsItemValue | undefined =
        undefined;
    "alpha particle mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "alpha particle mass in u": PhysicsItemValue | undefined = undefined;
    "alpha particle molar mass": PhysicsItemValue | undefined = undefined;
    "alpha particle-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "Angstrom star": PhysicsItemValue | undefined = undefined;
    "atomic mass constant": PhysicsItemValue | undefined = undefined;
    "atomic mass constant energy equivalent": PhysicsItemValue | undefined =
        undefined;
    "atomic mass constant energy equivalent in MeV":
        | PhysicsItemValue
        | undefined = undefined;
    "atomic mass unit-electron volt relationship": PhysicsItemValue | undefined =
        undefined;
    "atomic mass unit-hartree relationship": PhysicsItemValue | undefined =
        undefined;
    "atomic mass unit-hertz relationship": PhysicsItemValue | undefined =
        undefined;
    "atomic mass unit-inverse meter relationship": PhysicsItemValue | undefined =
        undefined;
    "atomic mass unit-joule relationship": PhysicsItemValue | undefined =
        undefined;
    "atomic mass unit-kelvin relationship": PhysicsItemValue | undefined =
        undefined;
    "atomic mass unit-kilogram relationship": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of 1st hyperpolarizability": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of 2nd hyperpolarizability": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of action": PhysicsItemValue | undefined = undefined;
    "atomic unit of charge": PhysicsItemValue | undefined = undefined;
    "atomic unit of charge density": PhysicsItemValue | undefined = undefined;
    "atomic unit of current": PhysicsItemValue | undefined = undefined;
    "atomic unit of electric dipole mom.": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of electric field": PhysicsItemValue | undefined = undefined;
    "atomic unit of electric field gradient": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of electric polarizability": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of electric potential": PhysicsItemValue | undefined = undefined;
    "atomic unit of electric quadrupole mom.": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of energy": PhysicsItemValue | undefined = undefined;
    "atomic unit of force": PhysicsItemValue | undefined = undefined;
    "atomic unit of length": PhysicsItemValue | undefined = undefined;
    "atomic unit of mag. dipole mom.": PhysicsItemValue | undefined = undefined;
    "atomic unit of mag. flux density": PhysicsItemValue | undefined = undefined;
    "atomic unit of magnetizability": PhysicsItemValue | undefined = undefined;
    "atomic unit of mass": PhysicsItemValue | undefined = undefined;
    "atomic unit of momentum": PhysicsItemValue | undefined = undefined;
    "atomic unit of permittivity": PhysicsItemValue | undefined = undefined;
    "atomic unit of time": PhysicsItemValue | undefined = undefined;
    "atomic unit of velocity": PhysicsItemValue | undefined = undefined;
    "Avogadro constant": PhysicsItemValue | undefined = undefined;
    "Bohr magneton": PhysicsItemValue | undefined = undefined;
    "Bohr magneton in eV/T": PhysicsItemValue | undefined = undefined;
    "Bohr magneton in Hz/T": PhysicsItemValue | undefined = undefined;
    "Bohr magneton in inverse meters per tesla": PhysicsItemValue | undefined =
        undefined;
    "Bohr magneton in K/T": PhysicsItemValue | undefined = undefined;
    "Bohr radius": PhysicsItemValue | undefined = undefined;
    "Boltzmann constant": PhysicsItemValue | undefined = undefined;
    "Boltzmann constant in eV/K": PhysicsItemValue | undefined = undefined;
    "Boltzmann constant in Hz/K": PhysicsItemValue | undefined = undefined;
    "Boltzmann constant in inverse meters per kelvin":
        | PhysicsItemValue
        | undefined = undefined;
    "characteristic impedance of vacuum": PhysicsItemValue | undefined =
        undefined;
    "classical electron radius": PhysicsItemValue | undefined = undefined;
    "Compton wavelength": PhysicsItemValue | undefined = undefined;
    "Compton wavelength over 2 pi": PhysicsItemValue | undefined = undefined;
    "conductance quantum": PhysicsItemValue | undefined = undefined;
    "conventional value of Josephson constant": PhysicsItemValue | undefined =
        undefined;
    "conventional value of von Klitzing constant": PhysicsItemValue | undefined =
        undefined;
    "Cu x unit": PhysicsItemValue | undefined = undefined;
    "deuteron-electron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "deuteron-electron mass ratio": PhysicsItemValue | undefined = undefined;
    "deuteron g factor": PhysicsItemValue | undefined = undefined;
    "deuteron mag. mom.": PhysicsItemValue | undefined = undefined;
    "deuteron mag. mom. to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "deuteron mag. mom. to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "deuteron mass": PhysicsItemValue | undefined = undefined;
    "deuteron mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "deuteron mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "deuteron mass in u": PhysicsItemValue | undefined = undefined;
    "deuteron molar mass": PhysicsItemValue | undefined = undefined;
    "deuteron-neutron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "deuteron-proton mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "deuteron-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "deuteron rms charge radius": PhysicsItemValue | undefined = undefined;
    "electric constant": PhysicsItemValue | undefined = undefined;
    "electron charge to mass quotient": PhysicsItemValue | undefined = undefined;
    "electron-deuteron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "electron-deuteron mass ratio": PhysicsItemValue | undefined = undefined;
    "electron g factor": PhysicsItemValue | undefined = undefined;
    "electron gyromag. ratio": PhysicsItemValue | undefined = undefined;
    "electron gyromag. ratio over 2 pi": PhysicsItemValue | undefined = undefined;
    "electron mag. mom.": PhysicsItemValue | undefined = undefined;
    "electron mag. mom. anomaly": PhysicsItemValue | undefined = undefined;
    "electron mag. mom. to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "electron mag. mom. to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "electron mass": PhysicsItemValue | undefined = undefined;
    "electron mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "electron mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "electron mass in u": PhysicsItemValue | undefined = undefined;
    "electron molar mass": PhysicsItemValue | undefined = undefined;
    "electron-muon mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "electron-muon mass ratio": PhysicsItemValue | undefined = undefined;
    "electron-neutron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "electron-neutron mass ratio": PhysicsItemValue | undefined = undefined;
    "electron-proton mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "electron-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "electron-tau mass ratio": PhysicsItemValue | undefined = undefined;
    "electron to alpha particle mass ratio": PhysicsItemValue | undefined =
        undefined;
    "electron to shielded helion mag. mom. ratio": PhysicsItemValue | undefined =
        undefined;
    "electron to shielded proton mag. mom. ratio": PhysicsItemValue | undefined =
        undefined;
    "electron volt": PhysicsItemValue | undefined = undefined;
    "electron volt-atomic mass unit relationship": PhysicsItemValue | undefined =
        undefined;
    "electron volt-hartree relationship": PhysicsItemValue | undefined =
        undefined;
    "electron volt-hertz relationship": PhysicsItemValue | undefined = undefined;
    "electron volt-inverse meter relationship": PhysicsItemValue | undefined =
        undefined;
    "electron volt-joule relationship": PhysicsItemValue | undefined = undefined;
    "electron volt-kelvin relationship": PhysicsItemValue | undefined = undefined;
    "electron volt-kilogram relationship": PhysicsItemValue | undefined =
        undefined;
    "elementary charge": PhysicsItemValue | undefined = undefined;
    "elementary charge over h": PhysicsItemValue | undefined = undefined;
    "Faraday constant": PhysicsItemValue | undefined = undefined;
    "Faraday constant for conventional electric current":
        | PhysicsItemValue
        | undefined = undefined;
    "Fermi coupling constant": PhysicsItemValue | undefined = undefined;
    "fine-structure constant": PhysicsItemValue | undefined = undefined;
    "first radiation constant": PhysicsItemValue | undefined = undefined;
    "first radiation constant for spectral radiance":
        | PhysicsItemValue
        | undefined = undefined;
    "hartree-atomic mass unit relationship": PhysicsItemValue | undefined =
        undefined;
    "hartree-electron volt relationship": PhysicsItemValue | undefined =
        undefined;
    "Hartree energy": PhysicsItemValue | undefined = undefined;
    "Hartree energy in eV": PhysicsItemValue | undefined = undefined;
    "hartree-hertz relationship": PhysicsItemValue | undefined = undefined;
    "hartree-inverse meter relationship": PhysicsItemValue | undefined =
        undefined;
    "hartree-joule relationship": PhysicsItemValue | undefined = undefined;
    "hartree-kelvin relationship": PhysicsItemValue | undefined = undefined;
    "hartree-kilogram relationship": PhysicsItemValue | undefined = undefined;
    "helion-electron mass ratio": PhysicsItemValue | undefined = undefined;
    "helion mass": PhysicsItemValue | undefined = undefined;
    "helion mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "helion mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "helion mass in u": PhysicsItemValue | undefined = undefined;
    "helion molar mass": PhysicsItemValue | undefined = undefined;
    "helion-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "hertz-atomic mass unit relationship": PhysicsItemValue | undefined =
        undefined;
    "hertz-electron volt relationship": PhysicsItemValue | undefined = undefined;
    "hertz-hartree relationship": PhysicsItemValue | undefined = undefined;
    "hertz-inverse meter relationship": PhysicsItemValue | undefined = undefined;
    "hertz-joule relationship": PhysicsItemValue | undefined = undefined;
    "hertz-kelvin relationship": PhysicsItemValue | undefined = undefined;
    "hertz-kilogram relationship": PhysicsItemValue | undefined = undefined;
    "inverse fine-structure constant": PhysicsItemValue | undefined = undefined;
    "inverse meter-atomic mass unit relationship": PhysicsItemValue | undefined =
        undefined;
    "inverse meter-electron volt relationship": PhysicsItemValue | undefined =
        undefined;
    "inverse meter-hartree relationship": PhysicsItemValue | undefined =
        undefined;
    "inverse meter-hertz relationship": PhysicsItemValue | undefined = undefined;
    "inverse meter-joule relationship": PhysicsItemValue | undefined = undefined;
    "inverse meter-kelvin relationship": PhysicsItemValue | undefined = undefined;
    "inverse meter-kilogram relationship": PhysicsItemValue | undefined =
        undefined;
    "inverse of conductance quantum": PhysicsItemValue | undefined = undefined;
    "Josephson constant": PhysicsItemValue | undefined = undefined;
    "joule-atomic mass unit relationship": PhysicsItemValue | undefined =
        undefined;
    "joule-electron volt relationship": PhysicsItemValue | undefined = undefined;
    "joule-hartree relationship": PhysicsItemValue | undefined = undefined;
    "joule-hertz relationship": PhysicsItemValue | undefined = undefined;
    "joule-inverse meter relationship": PhysicsItemValue | undefined = undefined;
    "joule-kelvin relationship": PhysicsItemValue | undefined = undefined;
    "joule-kilogram relationship": PhysicsItemValue | undefined = undefined;
    "kelvin-atomic mass unit relationship": PhysicsItemValue | undefined =
        undefined;
    "kelvin-electron volt relationship": PhysicsItemValue | undefined = undefined;
    "kelvin-hartree relationship": PhysicsItemValue | undefined = undefined;
    "kelvin-hertz relationship": PhysicsItemValue | undefined = undefined;
    "kelvin-inverse meter relationship": PhysicsItemValue | undefined = undefined;
    "kelvin-joule relationship": PhysicsItemValue | undefined = undefined;
    "kelvin-kilogram relationship": PhysicsItemValue | undefined = undefined;
    "kilogram-atomic mass unit relationship": PhysicsItemValue | undefined =
        undefined;
    "kilogram-electron volt relationship": PhysicsItemValue | undefined =
        undefined;
    "kilogram-hartree relationship": PhysicsItemValue | undefined = undefined;
    "kilogram-hertz relationship": PhysicsItemValue | undefined = undefined;
    "kilogram-inverse meter relationship": PhysicsItemValue | undefined =
        undefined;
    "kilogram-joule relationship": PhysicsItemValue | undefined = undefined;
    "kilogram-kelvin relationship": PhysicsItemValue | undefined = undefined;
    "lattice parameter of silicon": PhysicsItemValue | undefined = undefined;
    "Loschmidt constant (273.15 K, 101.325 kPa)": PhysicsItemValue | undefined =
        undefined;
    "mag. constant": PhysicsItemValue | undefined = undefined;
    "mag. flux quantum": PhysicsItemValue | undefined = undefined;
    "molar gas constant": PhysicsItemValue | undefined = undefined;
    "molar mass constant": PhysicsItemValue | undefined = undefined;
    "molar mass of carbon-12": PhysicsItemValue | undefined = undefined;
    "molar Planck constant": PhysicsItemValue | undefined = undefined;
    "molar Planck constant times c": PhysicsItemValue | undefined = undefined;
    "molar volume of ideal gas (273.15 K, 100 kPa)":
        | PhysicsItemValue
        | undefined = undefined;
    "molar volume of ideal gas (273.15 K, 101.325 kPa)":
        | PhysicsItemValue
        | undefined = undefined;
    "molar volume of silicon": PhysicsItemValue | undefined = undefined;
    "Mo x unit": PhysicsItemValue | undefined = undefined;
    "muon Compton wavelength": PhysicsItemValue | undefined = undefined;
    "muon Compton wavelength over 2 pi": PhysicsItemValue | undefined = undefined;
    "muon-electron mass ratio": PhysicsItemValue | undefined = undefined;
    "muon g factor": PhysicsItemValue | undefined = undefined;
    "muon mag. mom.": PhysicsItemValue | undefined = undefined;
    "muon mag. mom. anomaly": PhysicsItemValue | undefined = undefined;
    "muon mag. mom. to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "muon mag. mom. to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "muon mass": PhysicsItemValue | undefined = undefined;
    "muon mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "muon mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "muon mass in u": PhysicsItemValue | undefined = undefined;
    "muon molar mass": PhysicsItemValue | undefined = undefined;
    "muon-neutron mass ratio": PhysicsItemValue | undefined = undefined;
    "muon-proton mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "muon-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "muon-tau mass ratio": PhysicsItemValue | undefined = undefined;
    "natural unit of action": PhysicsItemValue | undefined = undefined;
    "natural unit of action in eV s": PhysicsItemValue | undefined = undefined;
    "natural unit of energy": PhysicsItemValue | undefined = undefined;
    "natural unit of energy in MeV": PhysicsItemValue | undefined = undefined;
    "natural unit of length": PhysicsItemValue | undefined = undefined;
    "natural unit of mass": PhysicsItemValue | undefined = undefined;
    "natural unit of momentum": PhysicsItemValue | undefined = undefined;
    "natural unit of momentum in MeV/c": PhysicsItemValue | undefined = undefined;
    "natural unit of time": PhysicsItemValue | undefined = undefined;
    "natural unit of velocity": PhysicsItemValue | undefined = undefined;
    "neutron Compton wavelength": PhysicsItemValue | undefined = undefined;
    "neutron Compton wavelength over 2 pi": PhysicsItemValue | undefined =
        undefined;
    "neutron-electron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "neutron-electron mass ratio": PhysicsItemValue | undefined = undefined;
    "neutron g factor": PhysicsItemValue | undefined = undefined;
    "neutron gyromag. ratio": PhysicsItemValue | undefined = undefined;
    "neutron gyromag. ratio over 2 pi": PhysicsItemValue | undefined = undefined;
    "neutron mag. mom.": PhysicsItemValue | undefined = undefined;
    "neutron mag. mom. to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "neutron mag. mom. to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "neutron mass": PhysicsItemValue | undefined = undefined;
    "neutron mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "neutron mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "neutron mass in u": PhysicsItemValue | undefined = undefined;
    "neutron molar mass": PhysicsItemValue | undefined = undefined;
    "neutron-muon mass ratio": PhysicsItemValue | undefined = undefined;
    "neutron-proton mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "neutron-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "neutron-tau mass ratio": PhysicsItemValue | undefined = undefined;
    "neutron to shielded proton mag. mom. ratio": PhysicsItemValue | undefined =
        undefined;
    "Newtonian constant of gravitation": PhysicsItemValue | undefined = undefined;
    "Newtonian constant of gravitation over h-bar c":
        | PhysicsItemValue
        | undefined = undefined;
    "nuclear magneton": PhysicsItemValue | undefined = undefined;
    "nuclear magneton in eV/T": PhysicsItemValue | undefined = undefined;
    "nuclear magneton in inverse meters per tesla": PhysicsItemValue | undefined =
        undefined;
    "nuclear magneton in K/T": PhysicsItemValue | undefined = undefined;
    "nuclear magneton in MHz/T": PhysicsItemValue | undefined = undefined;
    "Planck constant": PhysicsItemValue | undefined = undefined;
    "Planck constant in eV s": PhysicsItemValue | undefined = undefined;
    "Planck constant over 2 pi": PhysicsItemValue | undefined = undefined;
    "Planck constant over 2 pi in eV s": PhysicsItemValue | undefined = undefined;
    "Planck constant over 2 pi times c in MeV fm": PhysicsItemValue | undefined =
        undefined;
    "Planck length": PhysicsItemValue | undefined = undefined;
    "Planck mass": PhysicsItemValue | undefined = undefined;
    "Planck mass energy equivalent in GeV": PhysicsItemValue | undefined =
        undefined;
    "Planck temperature": PhysicsItemValue | undefined = undefined;
    "Planck time": PhysicsItemValue | undefined = undefined;
    "proton charge to mass quotient": PhysicsItemValue | undefined = undefined;
    "proton Compton wavelength": PhysicsItemValue | undefined = undefined;
    "proton Compton wavelength over 2 pi": PhysicsItemValue | undefined =
        undefined;
    "proton-electron mass ratio": PhysicsItemValue | undefined = undefined;
    "proton g factor": PhysicsItemValue | undefined = undefined;
    "proton gyromag. ratio": PhysicsItemValue | undefined = undefined;
    "proton gyromag. ratio over 2 pi": PhysicsItemValue | undefined = undefined;
    "proton mag. mom.": PhysicsItemValue | undefined = undefined;
    "proton mag. mom. to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "proton mag. mom. to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "proton mag. shielding correction": PhysicsItemValue | undefined = undefined;
    "proton mass": PhysicsItemValue | undefined = undefined;
    "proton mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "proton mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "proton mass in u": PhysicsItemValue | undefined = undefined;
    "proton molar mass": PhysicsItemValue | undefined = undefined;
    "proton-muon mass ratio": PhysicsItemValue | undefined = undefined;
    "proton-neutron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "proton-neutron mass ratio": PhysicsItemValue | undefined = undefined;
    "proton rms charge radius": PhysicsItemValue | undefined = undefined;
    "proton-tau mass ratio": PhysicsItemValue | undefined = undefined;
    "quantum of circulation": PhysicsItemValue | undefined = undefined;
    "quantum of circulation times 2": PhysicsItemValue | undefined = undefined;
    "Rydberg constant": PhysicsItemValue | undefined = undefined;
    "Rydberg constant times c in Hz": PhysicsItemValue | undefined = undefined;
    "Rydberg constant times hc in eV": PhysicsItemValue | undefined = undefined;
    "Rydberg constant times hc in J": PhysicsItemValue | undefined = undefined;
    "Sackur-Tetrode constant (1 K, 100 kPa)": PhysicsItemValue | undefined =
        undefined;
    "Sackur-Tetrode constant (1 K, 101.325 kPa)": PhysicsItemValue | undefined =
        undefined;
    "second radiation constant": PhysicsItemValue | undefined = undefined;
    "shielded helion gyromag. ratio": PhysicsItemValue | undefined = undefined;
    "shielded helion gyromag. ratio over 2 pi": PhysicsItemValue | undefined =
        undefined;
    "shielded helion mag. mom.": PhysicsItemValue | undefined = undefined;
    "shielded helion mag. mom. to Bohr magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded helion mag. mom. to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded helion to proton mag. mom. ratio": PhysicsItemValue | undefined =
        undefined;
    "shielded helion to shielded proton mag. mom. ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded proton gyromag. ratio": PhysicsItemValue | undefined = undefined;
    "shielded proton gyromag. ratio over 2 pi": PhysicsItemValue | undefined =
        undefined;
    "shielded proton mag. mom.": PhysicsItemValue | undefined = undefined;
    "shielded proton mag. mom. to Bohr magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "shielded proton mag. mom. to nuclear magneton ratio":
        | PhysicsItemValue
        | undefined = undefined;
    "speed of light in vacuum": PhysicsItemValue | undefined = undefined;
    "standard acceleration of gravity": PhysicsItemValue | undefined = undefined;
    "standard atmosphere": PhysicsItemValue | undefined = undefined;
    "Stefan-Boltzmann constant": PhysicsItemValue | undefined = undefined;
    "tau Compton wavelength": PhysicsItemValue | undefined = undefined;
    "tau Compton wavelength over 2 pi": PhysicsItemValue | undefined = undefined;
    "tau-electron mass ratio": PhysicsItemValue | undefined = undefined;
    "tau mass": PhysicsItemValue | undefined = undefined;
    "tau mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "tau mass energy equivalent in MeV": PhysicsItemValue | undefined = undefined;
    "tau mass in u": PhysicsItemValue | undefined = undefined;
    "tau molar mass": PhysicsItemValue | undefined = undefined;
    "tau-muon mass ratio": PhysicsItemValue | undefined = undefined;
    "tau-neutron mass ratio": PhysicsItemValue | undefined = undefined;
    "tau-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "Thomson cross section": PhysicsItemValue | undefined = undefined;
    "triton-electron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "triton-electron mass ratio": PhysicsItemValue | undefined = undefined;
    "triton g factor": PhysicsItemValue | undefined = undefined;
    "triton mag. mom.": PhysicsItemValue | undefined = undefined;
    "triton mag. mom. to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "triton mag. mom. to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "triton mass": PhysicsItemValue | undefined = undefined;
    "triton mass energy equivalent": PhysicsItemValue | undefined = undefined;
    "triton mass energy equivalent in MeV": PhysicsItemValue | undefined =
        undefined;
    "triton mass in u": PhysicsItemValue | undefined = undefined;
    "triton molar mass": PhysicsItemValue | undefined = undefined;
    "triton-neutron mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "triton-proton mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "triton-proton mass ratio": PhysicsItemValue | undefined = undefined;
    "unified atomic mass unit": PhysicsItemValue | undefined = undefined;
    "von Klitzing constant": PhysicsItemValue | undefined = undefined;
    "weak mixing angle": PhysicsItemValue | undefined = undefined;
    "Wien frequency displacement law constant": PhysicsItemValue | undefined =
        undefined;
    "Wien wavelength displacement law constant": PhysicsItemValue | undefined =
        undefined;
    "atomic unit of mom.um": PhysicsItemValue | undefined = undefined;
    "electron-helion mass ratio": PhysicsItemValue | undefined = undefined;
    "electron-triton mass ratio": PhysicsItemValue | undefined = undefined;
    "helion g factor": PhysicsItemValue | undefined = undefined;
    "helion mag. mom.": PhysicsItemValue | undefined = undefined;
    "helion mag. mom. to Bohr magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "helion mag. mom. to nuclear magneton ratio": PhysicsItemValue | undefined =
        undefined;
    "Loschmidt constant (273.15 K, 100 kPa)": PhysicsItemValue | undefined =
        undefined;
    "natural unit of mom.um": PhysicsItemValue | undefined = undefined;
    "natural unit of mom.um in MeV/c": PhysicsItemValue | undefined = undefined;
    "neutron-proton mass difference": PhysicsItemValue | undefined = undefined;
    "neutron-proton mass difference energy equivalent":
        | PhysicsItemValue
        | undefined = undefined;
    "neutron-proton mass difference energy equivalent in MeV":
        | PhysicsItemValue
        | undefined = undefined;
    "neutron-proton mass difference in u": PhysicsItemValue | undefined =
        undefined;
    "standard-state pressure": PhysicsItemValue | undefined = undefined;
    "alpha particle relative atomic mass": PhysicsItemValue | undefined =
        undefined;
    "Bohr magneton in inverse meter per tesla": PhysicsItemValue | undefined =
        undefined;
    "Boltzmann constant in inverse meter per kelvin":
        | PhysicsItemValue
        | undefined = undefined;
    "conventional value of ampere-90": PhysicsItemValue | undefined = undefined;
    "conventional value of coulomb-90": PhysicsItemValue | undefined = undefined;
    "conventional value of farad-90": PhysicsItemValue | undefined = undefined;
    "conventional value of henry-90": PhysicsItemValue | undefined = undefined;
    "conventional value of ohm-90": PhysicsItemValue | undefined = undefined;
    "conventional value of volt-90": PhysicsItemValue | undefined = undefined;
    "conventional value of watt-90": PhysicsItemValue | undefined = undefined;
    "deuteron relative atomic mass": PhysicsItemValue | undefined = undefined;
    "electron gyromag. ratio in MHz/T": PhysicsItemValue | undefined = undefined;
    "electron relative atomic mass": PhysicsItemValue | undefined = undefined;
    "elementary charge over h-bar": PhysicsItemValue | undefined = undefined;
    "helion relative atomic mass": PhysicsItemValue | undefined = undefined;
    "helion shielding shift": PhysicsItemValue | undefined = undefined;
    "hyperfine transition frequency of Cs-133": PhysicsItemValue | undefined =
        undefined;
    "lattice spacing of ideal Si (220)": PhysicsItemValue | undefined = undefined;
    "luminous efficacy": PhysicsItemValue | undefined = undefined;
    "neutron gyromag. ratio in MHz/T": PhysicsItemValue | undefined = undefined;
    "neutron relative atomic mass": PhysicsItemValue | undefined = undefined;
    "nuclear magneton in inverse meter per tesla": PhysicsItemValue | undefined =
        undefined;
    "Planck constant in eV/Hz": PhysicsItemValue | undefined = undefined;
    "proton gyromag. ratio in MHz/T": PhysicsItemValue | undefined = undefined;
    "proton relative atomic mass": PhysicsItemValue | undefined = undefined;
    "reduced Compton wavelength": PhysicsItemValue | undefined = undefined;
    "reduced muon Compton wavelength": PhysicsItemValue | undefined = undefined;
    "reduced neutron Compton wavelength": PhysicsItemValue | undefined =
        undefined;
    "reduced Planck constant": PhysicsItemValue | undefined = undefined;
    "reduced Planck constant in eV s": PhysicsItemValue | undefined = undefined;
    "reduced Planck constant times c in MeV fm": PhysicsItemValue | undefined =
        undefined;
    "reduced proton Compton wavelength": PhysicsItemValue | undefined = undefined;
    "reduced tau Compton wavelength": PhysicsItemValue | undefined = undefined;
    "shielded helion gyromag. ratio in MHz/T": PhysicsItemValue | undefined =
        undefined;
    "shielded proton gyromag. ratio in MHz/T": PhysicsItemValue | undefined =
        undefined;
    "shielding difference of d and p in HD": PhysicsItemValue | undefined =
        undefined;
    "shielding difference of t and p in HT": PhysicsItemValue | undefined =
        undefined;
    "tau energy equivalent": PhysicsItemValue | undefined = undefined;
    "triton relative atomic mass": PhysicsItemValue | undefined = undefined;
    "triton to proton mag. mom. ratio": PhysicsItemValue | undefined = undefined;
    "vacuum electric permittivity": PhysicsItemValue | undefined = undefined;
    "vacuum mag. permeability": PhysicsItemValue | undefined = undefined;
    "W to Z mass ratio": PhysicsItemValue | undefined = undefined;
    constructor() {
        super();
        Object.entries(physics).forEach((e) => {
            this[e[0]] = e[1]
        })
        this.c = physics["speed of light in vacuum"][0] as number;
        this.g = physics["standard acceleration of gravity"][0] as number;
        this.G = physics["Newtonian constant of gravitation"][0] as number;
    }
}



const n = new PhysicalConstants()

console.log("n: ", n)
