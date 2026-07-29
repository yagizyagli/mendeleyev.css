/**
 * Mendeleyev.css Tailwind CSS Plugin v3.0.0
 * Adds all 118 Elements of the Periodic Table to Tailwind projects.
 * Created by yagizyagli - 118 Elements Complete Pack 
 */
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
  const newUtilities = {
    // ==========================================================================
    // 1. ALKALI METALS
    // ==========================================================================
    '.text-mndlv-H':  { color: '#ffffff' },
    '.text-mndlv-Li': { color: '#ffab91' },
    '.text-mndlv-Na': { color: '#ff8a65' },
    '.text-mndlv-K':  { color: '#ff7043' },
    '.text-mndlv-Rb': { color: '#ff5722' },
    '.text-mndlv-Cs': { color: '#f4511e' },
    '.text-mndlv-Fr': { color: '#d84315', 'text-shadow': '0 0 5px #39ff14' },

    // ==========================================================================
    // 2. ALKALINE EARTH METALS
    // ==========================================================================
    '.text-mndlv-Be': { color: '#fff59d' },
    '.text-mndlv-Mg': { color: '#fff176' },
    '.text-mndlv-Ca': { color: '#ffee58' },
    '.text-mndlv-Sr': { color: '#ffeb3b' },
    '.text-mndlv-Ba': { color: '#fdd835' },
    '.text-mndlv-Ra': { color: '#fbc02d', 'text-shadow': '0 0 8px #39ff14' },

    // ==========================================================================
    // 3. TRANSITION METALS (Gradients)
    // ==========================================================================
    '.bg-mndlv-bg-Sc': { background: 'linear-gradient(135deg, #e0e0e0, #b0bec5)', color: '#212121' },
    '.bg-mndlv-bg-Ti': { background: 'linear-gradient(135deg, #f5f7fa, #b0bec5, #607d8b)', color: '#212121' },
    '.bg-mndlv-bg-V':  { background: 'linear-gradient(135deg, #cfd8dc, #90a4ae)', color: '#212121' },
    '.bg-mndlv-bg-Cr': { background: 'linear-gradient(135deg, #ffffff, #aeaeae, #212121)', color: '#212121' },
    '.bg-mndlv-bg-Mn': { background: 'linear-gradient(135deg, #eceff1, #b0bec5)', color: '#212121' },
    '.bg-mndlv-bg-Fe': { background: 'linear-gradient(135deg, #757575, #424242, #212121)', color: '#ffffff' },
    '.bg-mndlv-bg-Co': { background: 'linear-gradient(135deg, #b3e5fc, #0288d1)', color: '#ffffff' },
    '.bg-mndlv-bg-Ni': { background: 'linear-gradient(135deg, #ded6c5, #bcaaa4, #705d56)', color: '#ffffff' },
    '.bg-mndlv-bg-Cu': { background: 'linear-gradient(135deg, #e59866, #b87333, #6e3a07)', color: '#ffffff' },
    '.bg-mndlv-bg-Zn': { background: 'linear-gradient(135deg, #d6dbdf, #85929e)', color: '#212121' },
    '.bg-mndlv-bg-Y':  { background: 'linear-gradient(135deg, #eaeded, #a6acaf)', color: '#212121' },
    '.bg-mndlv-bg-Zr': { background: 'linear-gradient(135deg, #f4f6f7, #bdc3c7)', color: '#212121' },
    '.bg-mndlv-bg-Nb': { background: 'linear-gradient(135deg, #ebf5fb, #a9dfbf)', color: '#212121' },
    '.bg-mndlv-bg-Mo': { background: 'linear-gradient(135deg, #e5e8e8, #7cc576)', color: '#212121' },
    '.bg-mndlv-bg-Tc': { background: 'linear-gradient(135deg, #d5dbdb, #95a5a6)', color: '#212121', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Ru': { background: 'linear-gradient(135deg, #ebedef, #7f8c8d)', color: '#ffffff' },
    '.bg-mndlv-bg-Rh': { background: 'linear-gradient(135deg, #f2f3f4, #b2babb)', color: '#212121' },
    '.bg-mndlv-bg-Pd': { background: 'linear-gradient(135deg, #f8f9f9, #ccd1d1)', color: '#212121' },
    '.bg-mndlv-bg-Ag': { background: 'linear-gradient(135deg, #ffffff, #e0e0e0, #9e9e9e)', color: '#212121' },
    '.bg-mndlv-bg-Cd': { background: 'linear-gradient(135deg, #eaecee, #abb2b9)', color: '#212121' },
    '.bg-mndlv-bg-Hf': { background: 'linear-gradient(135deg, #f4f6f6, #9a7d0a)', color: '#ffffff' },
    '.bg-mndlv-bg-Ta': { background: 'linear-gradient(135deg, #fdfefe, #7b7d7d)', color: '#ffffff' },
    '.bg-mndlv-bg-W':  { background: 'linear-gradient(135deg, #566573, #2c3e50)', color: '#ffffff' },
    '.bg-mndlv-bg-Re': { background: 'linear-gradient(135deg, #f2f4f4, #616a6b)', color: '#ffffff' },
    '.bg-mndlv-bg-Os': { background: 'linear-gradient(135deg, #ebf5fb, #2e4053)', color: '#ffffff' },
    '.bg-mndlv-bg-Ir': { background: 'linear-gradient(135deg, #f7f9f9, #515a5a)', color: '#ffffff' },
    '.bg-mndlv-bg-Pt': { background: 'linear-gradient(135deg, #ffffff, #cfd8dc, #455a64)', color: '#212121' },
    '.bg-mndlv-bg-Au': { background: 'linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7)', color: '#212121' },
    '.bg-mndlv-bg-Hg': { background: 'linear-gradient(135deg, #eceff1, #cfd8dc, #263238)', color: '#ffffff' },
    '.bg-mndlv-bg-Rf': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Db': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Sg': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Bh': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Hs': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Mt': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Ds': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Rg': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },
    '.bg-mndlv-bg-Cn': { background: 'linear-gradient(135deg, #212121, #424242)', color: '#ff3333', 'text-shadow': '0 0 5px #39ff14' },

    // ==========================================================================
    // 4. NON-METALS & METALLOIDS
    // ==========================================================================
    '.text-mndlv-B':  { color: '#ffeb3b' },
    '.text-mndlv-C':  { color: '#1a1a1a' },
    '.text-mndlv-N':  { color: '#90caf9' },
    '.text-mndlv-O':  { color: '#bbdefb' },
    '.text-mndlv-F':  { color: '#a7ffeb' },
    '.text-mndlv-Si': { color: '#b0bec5' },
    '.text-mndlv-P':  { color: '#e8f5e9', 'text-shadow': '0 0 4px #e8f5e9' },
    '.text-mndlv-S':  { color: '#ffff33' },
    '.text-mndlv-Cl': { color: '#d4e6a5' },
    '.text-mndlv-As': { color: '#d5f5e3' },
    '.text-mndlv-Se': { color: '#edbb99' },
    '.text-mndlv-Br': { color: '#7b241c' },
    '.text-mndlv-Te': { color: '#f9e79f' },
    '.text-mndlv-I':  { color: '#4a235a' },
    '.text-mndlv-At': { color: '#5b2c6f', 'text-shadow': '0 0 4px #39ff14' },

    // Post-transition Metals
    '.text-mndlv-Al': { color: '#d5dbdb' },
    '.text-mndlv-Ga': { color: '#a9dfbf' },
    '.text-mndlv-Ge': { color: '#f5cbf7' },
    '.text-mndlv-In': { color: '#f9ebd2' },
    '.text-mndlv-Sn': { color: '#d7dbdd' },
    '.text-mndlv-Sb': { color: '#fadbd8' },
    '.text-mndlv-Tl': { color: '#e8daef' },
    '.text-mndlv-Pb': { color: '#566573' },
    '.bg-mndlv-Bi':   { background: 'linear-gradient(45deg, #ff8a80, #ea80fc, #8c9eff, #80d8ff, #b9f6ca)', color: '#212121' },
    '.text-mndlv-Nh': { color: '#e5e7e9', 'text-shadow': '0 0 4px #39ff14' },
    '.text-mndlv-Fl': { color: '#e5e7e9', 'text-shadow': '0 0 4px #39ff14' },
    '.text-mndlv-Mc': { color: '#e5e7e9', 'text-shadow': '0 0 4px #39ff14' },
    '.text-mndlv-Lv': { color: '#e5e7e9', 'text-shadow': '0 0 4px #39ff14' },
    '.text-mndlv-Ts': { color: '#e5e7e9', 'text-shadow': '0 0 4px #39ff14' },

    // ==========================================================================
    // 5. NOBLE GASES
    // ==========================================================================
    '.text-mndlv-He': { color: '#ffb300', 'text-shadow': '0 0 10px #ffb300' },
    '.text-mndlv-Ne': { color: '#ff3333', 'text-shadow': '0 0 12px #ff3333, 0 0 25px #ff3333' },
    '.text-mndlv-Ar': { color: '#e040fb', 'text-shadow': '0 0 10px #e040fb, 0 0 20px #e040fb' },
    '.text-mndlv-Kr': { color: '#ffff00', 'text-shadow': '0 0 8px #ffff00' },
    '.text-mndlv-Xe': { color: '#e0f7fa', 'text-shadow': '0 0 15px #80deea' },
    '.text-mndlv-Rn': { color: '#eceff1', 'text-shadow': '0 0 12px #00ff66' },
    '.text-mndlv-Og': { color: '#d5dbdb', 'text-shadow': '0 0 8px #39ff14' },

    // ==========================================================================
    // 6. LANTHANIDES & ACTINIDES
    // ==========================================================================
    // Lanthanides
    '.text-mndlv-La': { color: '#f4ecf7' }, '.text-mndlv-Ce': { color: '#f5eeeb' },
    '.text-mndlv-Pr': { color: '#ebf5fb' }, '.text-mndlv-Nd': { color: '#e8f8f5' },
    '.text-mndlv-Pm': { color: '#eaf2f8', 'text-shadow': '0 0 4px #39ff14' },
    '.text-mndlv-Sm': { color: '#fef9e7' }, '.text-mndlv-Eu': { color: '#fdf2e9' },
    '.text-mndlv-Gd': { color: '#f4f6f7' }, '.text-mndlv-Tb': { color: '#fdfefe' },
    '.text-mndlv-Dy': { color: '#f2f4f4' }, '.text-mndlv-Ho': { color: '#fcf3cf' },
    '.text-mndlv-Er': { color: '#fadbd8' }, '.text-mndlv-Tm': { color: '#e8daef' },
    '.text-mndlv-Yb': { color: '#d5f5e3' }, '.text-mndlv-Lu': { color: '#eaf2f8' },

    // Actinides
    '.text-mndlv-Ac': { color: '#e5e7e9', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Th': { color: '#ff9100', 'text-shadow': '0 0 10px #ff9100' },
    '.text-mndlv-Pa': { color: '#b2babb', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-U':  { color: '#39ff14', 'text-shadow': '0 0 8px #39ff14, 0 0 18px #39ff14' },
    '.text-mndlv-Np': { color: '#a6acaf', 'text-shadow': '0 0 8px #00ff66' },
    '.text-mndlv-Pu': { color: '#00ff66', 'text-shadow': '0 0 8px #00ff66, 0 0 18px #00ff66' },
    '.text-mndlv-Am': { color: '#95a5a6', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Cm': { color: '#7f8c8d', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Bk': { color: '#bdc3c7', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Cf': { color: '#cacfd2', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Es': { color: '#d7dbdd', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Fm': { color: '#f2f3f4', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Md': { color: '#ffffff', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-No': { color: '#f8f9f9', 'text-shadow': '0 0 8px #39ff14' },
    '.text-mndlv-Lr': { color: '#ebedef', 'text-shadow': '0 0 8px #39ff14' },
  };
