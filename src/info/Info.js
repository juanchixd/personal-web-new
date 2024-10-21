import self from "../pic/profile.png";
import student from "../pic/Student.png";
import library from "../pic/Library.png";
// import eca from "../pic/ECA.png";
import record from "../pic/recording.png";
export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Juan",
  lastName: "Gonzalez",
  initials: "JG",
  position: "Part-time programmer",
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
    // {
    //   link: "https://vsco.co/juanchi1020",
    //   icon: "vsco",
    //   label: "vsco",
    // },
    // {
    //   link: "https://facebook.com/juanchi.b.gonzalez",
    //   icon: "fa fa-facebook",
    //   label: "facebook",
    // },
    // {
    //   link: "https://instagram.com/juanchi1020",
    //   icon: "fa fa-instagram",
    //   label: "instagram",
    // },
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
  bio: "Hello! I'm Juan. I'm a student of Electronic Engineering at UNR. I'm passionate about programming and technology. I'm currently working as a part-time programmer in a small project. I'm looking for new challenges and opportunities to grow as a professional.",
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
        "https://drive.google.com/drive/folders/1MMJEkSGnSXTJJnygafVB97gNpx1mcNLJ",
      image: library,
      sourcem: "",
      sourcep: "",
    },
    //{
    //  title: "Le Piñat (ECA)",
    //  source:
    //    "https://drive.google.com/drive/folders/1Opq6SAXadLD_5RqCVl7dUk_85DtBo4sM",
    //  image: eca,
    //  sourcem: "https://mega.nz/folder/cPg1SIhY#mp24oUVNmljh8heVTc37mA",
    //  sourcep: "",
    //},
    {
      title: "Libros",
      source:
        "https://drive.google.com/drive/folders/1IwZqxemJODWIVpUFehQsiTDElGf5wiJd",
      image: library,
      sourcem: "",
      sourcep: "",
    },
    {
      title: "Listas de reproducción",
      source: "https://music.youtube.com/channel/UC1Qwaf0hYL4Im88HIfSJ35w",
      image: record,
      sourcem: "",
      sourcep: "",
    },
  ],
};
