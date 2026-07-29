# 🧪 Mendeleev.css v3.0.0 (The Complete Elemental Design System)

## 🔗 [👉 Live Preview 🚀](https://yagizyagli.github.io/mendeleyev.css/)

A comprehensive, cross-platform design system that brings all **118 Elements of the Periodic Table** to modern web development, graphic design, and data analytics. Inspired by the fact that HTML has `color: tomato` but lacks fundamental scientific elements like `uranium`, `titanium`, or `platinum`.



## ⚡ What's New in v3.0.0?
* 🚫 **Zero `!important` Tags:** Fully refactored to respect CSS cascade and specificity hierarchy.
* 🔌 **Tailwind CSS Plugin:** 118 elements native support inside Tailwind configurations.
* 🎨 **Adobe Swatches Palette:** 118 elements complete RGB profiles for Photoshop & Illustrator.
* 📊 **Microsoft Excel Theme:** 12 elemental group color tokens for corporate spreadsheet designs.
* 🌐 **Live Demo Showcase:** Real-time visualization platform deployed via GitHub Pages.

---

## 🚀 Web Integration & Installation (Web Entegrasyonu)

### Method 1: Pure CSS via Direct CDN Link (En Hızlı Yöntem)
Simply add this single line inside the `<head>` tag of your HTML file:
```html
<link rel="stylesheet" href="https://jsdelivr.net">
```

### Method 2: Tailwind CSS Plugin (Tailwind Entegrasyonu)
1. Copy the `tailwind-plugin.js` file into your project's root folder.
2. Inject it into your official `tailwind.config.js` script:
```javascript
module.exports = {
  theme: {
    extend: {},
  },
  plugins: [
    require('./tailwind-plugin.js'),
  ],
}
```
3. Use dynamic atomic utility classes straight in your markup:
```html
<h1 class="text-mndlv-U">Glowing Uranium Reactor</h1>
<div class="bg-mndlv-bg-Au">Premium Gold Layout</div>
```

## 🎨 Enterprise Ecosystem Integrations## For Graphic Designers (Adobe Photoshop & Illustrator)

   1. Download the mendeleyev-adobe.xml file from this repository.
   2. Open Photoshop or Illustrator, navigate to your Swatches Panel, and import the file. You will instantly unlock the exact RGB profiles for all 118 elements as ready-to-use digital color swatches.

## For Data Analysts (Microsoft Excel & PowerPoint)

   1. Download the `mendeleyev-table.csv` template to import all 118 elements with their exact chemical hexadecimal color profiles straight into Excel.
   2. Move the downloaded file into your local Microsoft Office themes folder at: %appdata%\Microsoft\Templates\Document Themes\Theme Colors
   3. Open Microsoft Excel or PowerPoint, go to the Page Layout tab, click Colors, and choose Mendeleev Ultimate Chemistry. Your data charts, visualization tools, and spreadsheets will automatically adapt to the official elemental group colors.

## 🤝 Contributing & License
This is a comprehensive cross-platform monument built for engineers, visual artists, and data analysts who appreciate science and robust UI architecture. Feel free to fork, suggest better gradient stops, or submit professional Pull Requests!
Because the web deserved Mendeleev, but gave us tomato instead. 🍅🧪
Star this repository if you believe engineering standards should be more scientific!
Created with passion by yagizyagli. Open-source forever. MIT License.
