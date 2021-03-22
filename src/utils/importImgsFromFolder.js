// function importAll(r) {
//     let images = {};
//     r.keys().map((item, index) => { 
//         images[item.replace('./', '')] = r(item); 
//         images[item.replace('./', '')].categoria = "frontend"
//     });
//     return images;
//   }
  
//   const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));