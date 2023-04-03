import { getImageForActivity } from "./imagesForActivities";

const activities = {
  entrenamientoSki: "Entrenamiento de Ski",
  entrenamientoFisico: "Entrenamiento Físico",
  otros: "otros",
};

export const activitiesCalendar = {
  "08-04-2023": {
    date: "31-01-2023",
    activities: [
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "09:00",
        horarioFinal: "12:00",
        lugarEncuentro: "Base Alpha",
        participantes: [
          "Nicolas Pirozzi",
          "Emilia Aramburo",
          "Matilde Schwencke",
        ],
        notaEntrenador:
          "Haremos Palos de Gigante en Nevada, traigan protecciones, agua y cosas para comer",
      },
      {
        name: "Entrenamiento Físico",
        image: getImageForActivity(activities.entrenamientoFisico),
        iconName: "barbell",
        horarioInicio: "15:00",
        horarioFinal: "17:00",
        lugarEncuentro: "Canchas de fútbol",
        participantes: [
          "Pedro Holscher",
          "Arturo Fernandez",
          "Esteban Pastore",
          "Matias Dituro",
        ],
        notaEntrenador:
          "Haremos Entrenamiento fisico en las canchas, traigan agua!",
      },
    ],
  },
  "01-04-2023": {
    date: "01-04-2023",
    activities: [
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "11:00",
        horarioFinal: "14:00",
        lugarEncuentro: "Base Alpha",
        participantes: [
          "Emilia Aramburo",
          "Matilde Schwencke",
          "Tomás González",
        ],
        notaEntrenador:
          "Haremos Saltos en la nieve, traigan protecciones, agua y cosas para comer",
      },
      {
        name: "Entrenamiento de Snowboard",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "16:00",
        horarioFinal: "18:00",
        lugarEncuentro: "Parque de Nieve",
        participantes: [
          "Diego Aracena",
          "Francisco Beltrán",
          "Nicolás Aracena",
        ],
        notaEntrenador:
          "Haremos Freestyle en el parque, traigan protecciones, agua y cosas para comer",
      },
    ],
  },
  "02-04-2023": {
    date: "02-04-2023",
    activities: [
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "10:00",
        horarioFinal: "13:00",
        lugarEncuentro: "Base Alpha",
        participantes: [
          "Nicolás Aracena",
          "Francisco Beltrán",
          "Emilia Aramburo",
          "Matilde Schwencke",
        ],
        notaEntrenador:
          "Haremos Entrenamiento Técnico en la nieve, traigan protecciones, agua y cosas para comer",
      },
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "16:00",
        horarioFinal: "18:00",
        lugarEncuentro: "Pista Franciscanos",
        participantes: [
          "Tomás González",
          "Nicolás Aracena",
          "Francisco Beltrán",
        ],
        notaEntrenador:
          "Haremos Entrenamiento de Slalom, traigan protecciones, agua y cosas para comer",
      },
    ],
  },
  "03-04-2023": {
    date: "01-04-2023",
    activities: [
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "11:00",
        horarioFinal: "14:00",
        lugarEncuentro: "Base Alpha",
        participantes: [
          "Emilia Aramburo",
          "Matilde Schwencke",
          "Tomás González",
        ],
        notaEntrenador:
          "Haremos Saltos en la nieve, traigan protecciones, agua y cosas para comer",
      },
      {
        name: "Entrenamiento de Snowboard",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "16:00",
        horarioFinal: "18:00",
        lugarEncuentro: "Parque de Nieve",
        participantes: [
          "Diego Aracena",
          "Francisco Beltrán",
          "Nicolás Aracena",
        ],
        notaEntrenador:
          "Haremos Freestyle en el parque, traigan protecciones, agua y cosas para comer",
      },
    ],
  },
  "04-04-2023": {
    date: "02-04-2023",
    activities: [
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "10:00",
        horarioFinal: "13:00",
        lugarEncuentro: "Base Alpha",
        participantes: [
          "Nicolás Aracena",
          "Francisco Beltrán",
          "Emilia Aramburo",
          "Matilde Schwencke",
        ],
        notaEntrenador:
          "Haremos Entrenamiento Técnico en la nieve, traigan protecciones, agua y cosas para comer",
      },
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "16:00",
        horarioFinal: "18:00",
        lugarEncuentro: "Pista Franciscanos",
        participantes: [
          "Tomás González",
          "Nicolás Aracena",
          "Francisco Beltrán",
        ],
        notaEntrenador:
          "Haremos Entrenamiento de Slalom, traigan protecciones, agua y cosas para comer",
      },
    ],
  },
  "05-04-2023": {
    date: "01-04-2023",
    activities: [
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "11:00",
        horarioFinal: "14:00",
        lugarEncuentro: "Base Alpha",
        participantes: [
          "Emilia Aramburo",
          "Matilde Schwencke",
          "Tomás González",
        ],
        notaEntrenador:
          "Haremos Saltos en la nieve, traigan protecciones, agua y cosas para comer",
      },
      {
        name: "Entrenamiento de Snowboard",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "16:00",
        horarioFinal: "18:00",
        lugarEncuentro: "Parque de Nieve",
        participantes: [
          "Diego Aracena",
          "Francisco Beltrán",
          "Nicolás Aracena",
        ],
        notaEntrenador:
          "Haremos Freestyle en el parque, traigan protecciones, agua y cosas para comer",
      },
    ],
  },
  "06-04-2023": {
    date: "02-04-2023",
    activities: [
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "10:00",
        horarioFinal: "13:00",
        lugarEncuentro: "Base Alpha",
        participantes: [
          "Nicolás Aracena",
          "Francisco Beltrán",
          "Emilia Aramburo",
          "Matilde Schwencke",
        ],
        notaEntrenador:
          "Haremos Entrenamiento Técnico en la nieve, traigan protecciones, agua y cosas para comer",
      },
      {
        name: "Entrenamiento de Ski",
        image: getImageForActivity(activities.entrenamientoSki),
        iconName: "snow",
        horarioInicio: "16:00",
        horarioFinal: "18:00",
        lugarEncuentro: "Pista Franciscanos",
        participantes: [
          "Tomás González",
          "Nicolás Aracena",
          "Francisco Beltrán",
        ],
        notaEntrenador:
          "Haremos Entrenamiento de Slalom, traigan protecciones, agua y cosas para comer",
      },
    ],
  },
};
