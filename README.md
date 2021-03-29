# crhome_ext_WKJS_schema
a ready to work schema for develop TDD a chrome extension

description
al clonar este proyecto obtendras un esquema listo para iniciar a programar una extension de google crhome.

se usa webpack para :
  empaquetar todos los archivos de /src  y   /static  de la forma que requiere google para sus extensiones
  webpack dev server para el caso que se quiera usar mediante el script de inicio npm run webserver
  webpack style-loader y css-loader para poder incrustar las css en el heading de la pagina popup o para incorporar otras css desde fichero a content scripts
karma , jasmine y sinon-crhome para los test unitarios y de integracion;

mira el archivo package.json donde veras :
en la seccion "scripts" las distintas formas de llamar npm run xxxx y lo que hacen.

en /webpack.config.js :
donde debes setear el modo de production o development , tambien descomentando devtool para poder trazar los errores de javascript durante el desarollo
y devserver si necesitas que saque algo por un servidor html, para hacer test.

en /test encontraras dos ficheros que debes cambiar  y que sirven a modo de ejemplo
dummyfile.test.js para ejemplo pruebas unitarias.
popup-content.test.js para ejemplo pruebas de integracion.

recuerda cambiar el /static/manifest.json a tu gusto para la extension de crhome_ext_WKJS_schema

debes crear un directorio /dist a donde irá a parar tu extension

las primeras dos lineas del archivo /scr/popup-content.html son para poder hacer el ejemplo del test de integracion y puedes borrarlas .
