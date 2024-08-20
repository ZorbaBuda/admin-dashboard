import { Schema, model, models } from "mongoose";

const HomeSchema = new Schema({
  en: {
    home1: {
      title: { type: String },
      text: { type: String },
      linkText: { type: String },
    },
  },
  es: {
    home1: {
      title: { type: String },
      text: { type: String },
      linkText: { type: String },
    },
  },
});

export const Home = models.Home || model("Home", HomeSchema);

// const homeIntro1 = {
//     title: `Una visió holística`,
//     text1: `La salut integral fa referència a un enfocament holístic del benestar que abasta no només la salut física, sinó també la mental, emocional i social. Implica tenir cura del teu cos a través d'una bona alimentació, exercici regular i descans adequat, però també és important prestar atenció a la teva salut emocional i mental, cosa que inclou gestionar l'estrès, mantenir relacions saludables i buscar suport quan ho necessitis.`,
//     text2: `T'agradaria saber més sobre algun aspecte específic de la salut integral?`,
//     linkText: "Més sobre mi",
//     link: "/about",
//   };
