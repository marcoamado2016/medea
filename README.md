# Como trabajar

* Clonar este repo 
```bash
git clone git@github.com:urcocarp/Medea.git
```
* Clonar el repo de dist
```bash
cd Medea
git clone https://github.com/marcoamado2016/medea-deploy dist
```
* Realizar cambios
* Commitear el primer repo
```bash
cd Medea
git commit -am "mensaje"
```
* Crear un build
```bash
npm run build
```
* Desplegar carpeta `dist`
```bash
cd dist
git add .
git commit -am "Nuevo despliegue"
git push
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
