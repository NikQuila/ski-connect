export function getImageForActivity(activityName) {
  switch (activityName) {
    case "Entrenamiento de Ski":
      return "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.6435-9/95126465_2869403606484692_6032929475933503488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=AyvBuwgxk4EAX9R57rn&_nc_ht=scontent.fscl1-1.fna&oh=00_AfB5zBzErWeoNvoiS93FxD2cCNDtWMo_wmR8OJFLjvKM4A&oe=64440322";
    case "Entrenamiento Físico":
      return "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.6435-9/118437125_3175338599224523_987090527362274779_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9267fe&_nc_ohc=L_FH614jG34AX8zhns5&_nc_ht=scontent.fscl1-1.fna&oh=00_AfA9-POHyUl_D50j219PDFA9mNeA00rPr691ccjW_OYwMQ&oe=64447111";
    //   case "Actividad":
    //     return require("./imagesForActivities/actividad.png");
    default:
      return "https://scontent.fscl1-1.fna.fbcdn.net/v/t1.6435-9/95126465_2869403606484692_6032929475933503488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=AyvBuwgxk4EAX9R57rn&_nc_ht=scontent.fscl1-1.fna&oh=00_AfB5zBzErWeoNvoiS93FxD2cCNDtWMo_wmR8OJFLjvKM4A&oe=64440322";
  }
}
