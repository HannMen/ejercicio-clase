// console.log("saludos");
// console.log("como estas?");
// console.log("adios");

const saludar = () => {
  console.log("hola");
};

const preguntar = (cb, cbf2) => {
  setTimeout(() => {
    console.log("como estas?");
    cb(cbf2);
  }, 3000);
};

const despedir = (cb) => {
  console.log("adios");
  cb();
};

const funcion2 = () => {
    console.log("funcion2")
};

saludar();
preguntar(despedir, funcion2);
// despedir();
