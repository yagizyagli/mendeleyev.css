/**
 * Mendeleyev.js v3.0.0
 * Universal JavaScript Utility SDK for Periodic Table Design Systems
 * Compatible with Vanilla JS, React, Vue, Node.js, and Angular.
 * Created by yagizyagli - 118 Elements Complete JavaScript Map
 */

const ELEMENT_MAP = {
  // 1. ALKALI METALS
  'H': { name: 'Hydrogen', number: 1, hex: '#ffffff', group: 'Alkali Metals' },
  'Li': { name: 'Lithium', number: 3, hex: '#ffab91', group: 'Alkali Metals' },
  'Na': { name: 'Sodium', number: 11, hex: '#ff8a65', group: 'Alkali Metals' },
  'K': { name: 'Potassium', number: 19, hex: '#ff7043', group: 'Alkali Metals' },
  'Rb': { name: 'Rubidium', number: 37, hex: '#ff5722', group: 'Alkali Metals' },
  'Cs': { name: 'Cesium', number: 55, hex: '#f4511e', group: 'Alkali Metals' },
  'Fr': { name: 'Francium', number: 87, hex: '#d84315', group: 'Alkali Metals', glow: true },

  // 2. ALKALINE EARTH METALS
  'Be': { name: 'Beryllium', number: 4, hex: '#fff59d', group: 'Alkaline Earth Metals' },
  'Mg': { name: 'Magnesium', number: 12, hex: '#fff176', group: 'Alkaline Earth Metals' },
  'Ca': { name: 'Calcium', number: 20, hex: '#ffee58', group: 'Alkaline Earth Metals' },
  'Sr': { name: 'Strontium', number: 38, hex: '#ffeb3b', group: 'Alkaline Earth Metals' },
  'Ba': { name: 'Barium', number: 56, hex: '#fdd835', group: 'Alkaline Earth Metals' },
  'Ra': { name: 'Radium', number: 88, hex: '#fbc02d', group: 'Alkaline Earth Metals', glow: true },

  // 3. TRANSITION METALS
  'Sc': { name: 'Scandium', number: 21, hex: '#e0e0e0', group: 'Transition Metals' },
  'Ti': { name: 'Titanium', number: 22, hex: '#f5f7fa', group: 'Transition Metals', gradient: true },
  'V': { name: 'Vanadium', number: 23, hex: '#cfd8dc', group: 'Transition Metals' },
  'Cr': { name: 'Chromium', number: 24, hex: '#ffffff', group: 'Transition Metals' },
  'Mn': { name: 'Manganese', number: 25, hex: '#eceff1', group: 'Transition Metals' },
  'Fe': { name: 'Iron', number: 26, hex: '#757575', group: 'Transition Metals' },
  'Co': { name: 'Cobalt', number: 27, hex: '#b3e5fc', group: 'Transition Metals' },
  'Ni': { name: 'Nickel', number: 28, hex: '#ded6c5', group: 'Transition Metals' },
  'Cu': { name: 'Copper', number: 29, hex: '#e59866', group: 'Transition Metals' },
  'Zn': { name: 'Zinc', number: 30, hex: '#d6dbdf', group: 'Transition Metals' },
  'Y': { name: 'Yttrium', number: 39, hex: '#eaeded', group: 'Transition Metals' },
  'Zr': { name: 'Zirconium', number: 40, hex: '#f4f6f7', group: 'Transition Metals' },
  'Nb': { name: 'Niobium', number: 41, hex: '#ebf5fb', group: 'Transition Metals' },
  'Mo': { name: 'Molybdenum', number: 42, hex: '#e5e8e8', group: 'Transition Metals' },
  'Tc': { name: 'Technetium', number: 43, hex: '#d5dbdb', group: 'Transition Metals', glow: true },
  'Ru': { name: 'Ruthenium', number: 44, hex: '#ebedef', group: 'Transition Metals' },
  'Rh': { name: 'Rhodium', number: 45, hex: '#f2f3f4', group: 'Transition Metals' },
  'Pd': { name: 'Palladium', number: 46, hex: '#f8f9f9', group: 'Transition Metals' },
  'Ag': { name: 'Silver', number: 47, hex: '#ffffff', group: 'Transition Metals' },
  'Cd': { name: 'Cadmium', number: 48, hex: '#eaecee', group: 'Transition Metals' },
  'Hf': { name: 'Hafnium', number: 72, hex: '#f4f6f6', group: 'Transition Metals' },
  'Ta': { name: 'Tantalum', number: 73, hex: '#fdfefe', group: 'Transition Metals' },
  'W': { name: 'Tungsten', number: 74, hex: '#566573', group: 'Transition Metals' },
  'Re': { name: 'Rhenium', number: 75, hex: '#f2f4f4', group: 'Transition Metals' },
  'Os': { name: 'Osmium', number: 76, hex: '#ebf5fb', group: 'Transition Metals' },
  'Ir': { name: 'Iridium', number: 77, hex: '#f7f9f9', group: 'Transition Metals' },
  'Pt': { name: 'Platinum', number: 78, hex: '#ffffff', group: 'Transition Metals', gradient: true },
  'Au': { name: 'Gold', number: 79, hex: '#bf953f', group: 'Transition Metals', gradient: true },
  'Hg': { name: 'Mercury', number: 80, hex: '#eceff1', group: 'Transition Metals' },
  'Rf': { name: 'Rutherfordium', number: 104, hex: '#212121', group: 'Transition Metals', glow: true },
  'Db': { name: 'Dubnium', number: 105, hex: '#212121', group: 'Transition Metals', glow: true },
  'Sg': { name: 'Seaborgium', number: 106, hex: '#212121', group: 'Transition Metals', glow: true },
  'Bh': { name: 'Bohrium', number: 107, hex: '#212121', group: 'Transition Metals', glow: true },
  'Hs': { name: 'Hassium', number: 108, hex: '#212121', group: 'Transition Metals', glow: true },
  'Mt': { name: 'Meitnerium', number: 109, hex: '#212121', group: 'Transition Metals', glow: true },
  'Ds': { name: 'Darmstadtium', number: 110, hex: '#212121', group: 'Transition Metals', glow: true },
  'Rg': { name: 'Roentgenium', number: 111, hex: '#212121', group: 'Transition Metals', glow: true },
  'Cn': { name: 'Copernicium', number: 112, hex: '#212121', group: 'Transition Metals', glow: true },

  // 4. NON-METALS & METALLOIDS
  'B': { name: 'Boron', number: 5, hex: '#ffeb3b', group: 'Non-metals & Metalloids' },
  'C': { name: 'Carbon', number: 6, hex: '#1a1a1a', group: 'Non-metals & Metalloids' },
  'N': { name: 'Nitrogen', number: 7, hex: '#90caf9', group: 'Non-metals & Metalloids' },
  'O': { name: 'Oxygen', number: 8, hex: '#bbdefb', group: 'Non-metals & Metalloids' },
  'F': { name: 'Fluorine', number: 9, hex: '#a7ffeb', group: 'Non-metals & Metalloids' },
  'Si': { name: 'Silicon', number: 14, hex: '#b0bec5', group: 'Non-metals & Metalloids' },
  'P': { name: 'Phosphorus', number: 15, hex: '#e8f5e9', group: 'Non-metals & Metalloids' },
  'S': { name: 'Sulfur', number: 16, hex: '#ffff33', group: 'Non-metals & Metalloids' },
  'Cl': { name: 'Chlorine', number: 17, hex: '#d4e6a5', group: 'Non-metals & Metalloids' },
  'As': { name: 'Arsenic', number: 33, hex: '#d5f5e3', group: 'Non-metals & Metalloids' },
  'Se': { name: 'Selenium', number: 34, hex: '#edbb99', group: 'Non-metals & Metalloids' },
  'Br': { name: 'Bromine', number: 35, hex: '#7b241c', group: 'Non-metals & Metalloids' },
  'Te': { name: 'Tellurium', number: 52, hex: '#f9e79f', group: 'Non-metals & Metalloids' },
  'I': { name: 'Iodine', number: 53, hex: '#4a235a', group: 'Non-metals & Metalloids' },
  'At': { name: 'Astatine', number: 85, hex: '#5b2c6f', group: 'Non-metals & Metalloids', glow: true },

  // Post-transition Metals
  'Al': { name: 'Aluminum', number: 13, hex: '#d5dbdb', group: 'Weak Metals' },
  'Ga': { name: 'Gallium', number: 31, hex: '#a9dfbf', group: 'Weak Metals' },
  'Ge': { name: 'Germanium', number: 32, hex: '#f5cbf7', group: 'Weak Metals' },
  'In': { name: 'Indium', number: 49, hex: '#f9ebd2', group: 'Weak Metals' },
  'Sn': { name: 'Tin', number: 50, hex: '#d7dbdd', group: 'Weak Metals' },
  'Sb': { name: 'Antimony', number: 51, hex: '#fadbd8', group: 'Weak Metals' },
  'Tl': { name: 'Thallium', number: 81, hex: '#e8daef', group: 'Weak Metals' },
  'Pb': { name: 'Lead', number: 82, hex: '#566573', group: 'Weak Metals' },
  'Bi': { name: 'Bismuth', number: 83, hex: '#ff8a80', group: 'Weak Metals', gradient: true },
  'Nh': { name: 'Nihonium', number: 113, hex: '#e5e7e9', group: 'Weak Metals', glow: true },
  'Fl': { name: 'Flerovium', number: 114, hex: '#e5e7e9', group: 'Weak Metals', glow: true },
  'Mc': { name: 'Moscovium', number: 115, hex: '#e5e7e9', group: 'Weak Metals', glow: true },
  'Lv': { name: 'Livermoryum', number: 116, hex: '#e5e7e9', group: 'Weak Metals', glow: true },
  'Ts': { name: 'Tennessine', number: 117, hex: '#e5e7e9', group: 'Weak Metals', glow: true },

  // 5. NOBLE GASES
  'He': { name: 'Helium', number: 2, hex: '#ffb300', group: 'Noble Gases', glow: true },
  'Ne': { name: 'Neon', number: 10, hex: '#ff3333', group: 'Noble Gases', glow: true },
  'Ar': { name: 'Argon', number: 18, hex: '#e040fb', group: 'Noble Gases', glow: true },
  'Kr': { name: 'Krypton', number: 36, hex: '#ffff00', group: 'Noble Gases', glow: true },
  'Xe': { name: 'Xenon', number: 54, hex: '#e0f7fa', group: 'Noble Gases', glow: true },
  'Rn': { name: 'Radon', number: 86, hex: '#eceff1', group: 'Noble Gases', glow: true },
  'Og': { name: 'Oganesson', number: 118, hex: '#d5dbdb', group: 'Noble Gases', glow: true },

  // 6. LANTHANIDES
  'La': { name: 'Lanthanum', number: 57, hex: '#f4ecf7', group: 'Lanthanides' },
  'Ce': { name: 'Cerium', number: 58, hex: '#f5eeeb', group: 'Lanthanides' },
  'Pr': { name: 'Praseodymium', number: 59, hex: '#ebf5fb', group: 'Lanthanides' },
  'Nd': { name: 'Neodymium', number: 60, hex: '#e8f8f5', group: 'Lanthanides' },
  'Pm': { name: 'Promethium', number: 61, hex: '#eaf2f8', group: 'Lanthanides', glow: true },
  'Sm': { name: 'Samarium', number: 62, hex: '#fef9e7', group: 'Lanthanides' },
  'Eu': { name: 'Europium', number: 63, hex: '#fdf2e9', group: 'Lanthanides' },
  'Gd': { name: 'Gadolinium', number: 64, hex: '#f4f6f7', group: 'Lanthanides' },
  'Tb': { name: 'Terbium', number: 65, hex: '#fdfefe', group: 'Lanthanides' },
  'Dy': { name: 'Dysprosium', number: 66, hex: '#f2f4f4', group: 'Lanthanides' },
  'Ho': { name: 'Holmium', number: 67, hex: '#fcf3cf', group: 'Lanthanides' },
  'Er': { name: 'Erbium', number: 68, hex: '#fadbd8', group: 'Lanthanides' },
  'Tm': { name: 'Thulium', number: 69, hex: '#e8daef', group: 'Lanthanides' },
  'Yb': { name: 'Ytterbium', number: 70, hex: '#d5f5e3', group: 'Lanthanides' },
  'Lu': { name: 'Lutetium', number: 71, hex: '#eaf2f8', group: 'Lanthanides' },

  // 7. ACTINIDES
  'Ac': { name: 'Actinium', number: 89, hex: '#e5e7e9', group: 'Actinides', glow: true },
  'Th': { name: 'Thorium', number: 90, hex: '#ff9100', group: 'Actinides', glow: true },
  'Pa': { name: 'Protactinium', number: 91, hex: '#b2babb', group: 'Actinides', glow: true },
  'U':  { name: 'Uranium', number: 92, hex: '#39ff14', group: 'Actinides', glow: true },
  'Np': { name: 'Neptunium', number: 93, hex: '#a6acaf', group: 'Actinides', glow: true },
  'Pu': { name: 'Plutonium', number: 94, hex: '#00ff66', group: 'Actinides', glow: true },
    'Am': { name: 'Americium', number: 95, hex: '#95a5a6', group: 'Actinides', glow: true },
  'Cm': { name: 'Curium', number: 96, hex: '#7f8c8d', group: 'Actinides', glow: true },
  'Bk': { name: 'Berkelium', number: 97, hex: '#bdc3c7', group: 'Actinides', glow: true },
  'Cf': { name: 'Californium', number: 98, hex: '#cacfd2', group: 'Actinides', glow: true },
  'Es': { name: 'Einsteinium', number: 99, hex: '#d7dbdd', group: 'Actinides', glow: true },
  'Fm': { name: 'Fermium', number: 100, hex: '#f2f3f4', group: 'Actinides', glow: true },
  'Md': { name: 'Mendelevium', number: 101, hex: '#ffffff', group: 'Actinides', glow: true },
  'No': { name: 'Nobelium', number: 102, hex: '#f8f9f9', group: 'Actinides', glow: true },
  'Lr': { name: 'Lawrencium', number: 103, hex: '#ebedef', group: 'Actinides', glow: true }
};

function getElement(symbol) {
  const el = ELEMENT_MAP[symbol.trim()];
  return el ? { symbol, ...el } : null;
}

function getHex(symbol) {
  const el = getElement(symbol);
  return el ? el.hex : '#ffffff';
}

module.exports = {
  ELEMENT_MAP,
  getElement,
  getHex
};
