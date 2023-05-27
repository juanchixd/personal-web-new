import self from "../pic/profile.png";
import student from "../pic/Student.png";
import library from "../pic/Library.png";
import eca from "../pic/ECA.png";
import record from "../pic/recording.png";
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Juan",
  lastName: "Gonzalez",
  initials: "JG",
  position: "Programmer part-time",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "🧉",
      text: "fueled by mate",
    },
    {
      emoji: "🌎",
      text: "from Rosario, Argentina",
    },
    {
      emoji: "🧑‍🎓",
      text: "studying Electronic Engineering at UNR",
    },
    {
      emoji: "📧",
      text: "contacto@juangonzalez.com.ar",
    },
  ],
  socials: [
    {
      link: "https://t.me/Juanbgon",
      icon: "fa fa-telegram",
      label: "telegram",
    },
    {
      link: "https://facebook.com/juanchi.b.gonzalez",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/juanchi1020",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/juanchixd",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/juanbautistagonzalez/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Hello! I'm Juan. I'm a student of Electronic Engineering at UNR. I'm passionate about programming and technology. I'm currently working as a programmer part-time in a small project. I'm looking for new challenges and opportunities to grow as a professional.",
  skills: {
    proficientWith: ["python", "git", "github", "c", "c++", "linux", "bash"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "music",
      emoji: "🎵",
    },
    {
      label: "photography",
      emoji: "📷",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
  ],
  portfolio: [
    {
      title: "IN PROGRESS",
      source: "https://github.com/juanchixd",
      image: "https://picsum.photos/200",
    },
  ],
  links: [
    {
      title: "Drive carpeta facultad interna",
      source:
        "https://drive.google.com/drive/folders/1FYUe2-QsNmf1yBmEc3aUTy_iAMUdkx5W",
      image: student,
      sourcem: "",
      sourcep: "",
    },
    {
      title: "Drive biblioteca digital",
      source:
        "https://drive.google.com/drive/folders/1Iyuq-KlP0f0Mo7oHSnS3thSBglmdf60J",
      image: library,
      sourcem: "",
      sourcep: "",
    },
    {
      title: "Le Piñat (ECA)",
      source:
        "https://drive.google.com/drive/folders/1dV9xHOzA3Lu1PiOI62ugBYOl2prckvaA",
      image: eca,
      sourcem: "https://mega.nz/folder/cPg1SIhY#mp24oUVNmljh8heVTc37mA",
      sourcep: "",
    },
    {
      title: "Libros",
      source:
        "https://drive.google.com/drive/folders/1IwZqxemJODWIVpUFehQsiTDElGf5wiJd",
      image: library,
      sourcem: "",
      sourcep: "",
    },
    {
      title: "Grabaciones",
      image: record,
      sourcem: "",
      source: "",
      sourcep: "/recordings",
    },
  ],
  recordings: [
    {
      title: "Algebra lineal",
      source:
        "https://www.youtube.com/playlist?list=PLvZC6KXjYqPtgUX1awj90MxOgBjzn2N1q",
      image: record,
    },
    {
      title: "Fisica I",
      source:
        "https://www.youtube.com/playlist?list=PLvZC6KXjYqPuyuIoZuEHtavMY6Yxh-vlP",
      image: record,
    },
    {
      title: "Fisica II",
      source:
        "https://www.youtube.com/playlist?list=PLvZC6KXjYqPuwxxQ835w7h8-DlSdQ3ZRo",
      image: record,
    },
    {
      title: "Informatica Aplicada ECA",
      source:
        "https://www.youtube.com/playlist?list=PLvZC6KXjYqPuubowDTFcbDircn99CFqQi",
      image: record,
    },
    {
      title: "Matematica Aplicada (2do cuatri 2022)",
      source:
        "https://www.youtube.com/playlist?list=PLvZC6KXjYqPuIndCYD2gjYmy3TKylN3lf",
      image: record,
    },
    {
      title: "Probabilidad y estadística",
      source:
        "https://www.youtube.com/playlist?list=PLvZC6KXjYqPsPmcvj4OdzI9s5xpLB0gJi",
      image: record,
    },
  ],
};
