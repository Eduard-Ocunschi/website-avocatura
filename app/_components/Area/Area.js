import styles from "./Area.module.css";
import { MdOutlineAddHomeWork } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { MdWorkOutline } from "react-icons/md";
import CardArea from "../CardArea/CardArea";

const areasOfExpertise = [
  {
    icon: <MdOutlineAddHomeWork />,
    title: "Imobiliare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
  {
    icon: <FaPeopleGroup />,
    title: "Drept Civil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
  {
    icon: <TbReportMoney />,
    title: "Drept Fiscal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
  {
    icon: <MdWorkOutline />,
    title: "Dreptul Muncii",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
  },
];

function Area() {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.titles}>Arii de expertiza</h2>
        <div className={styles.area}>
          {areasOfExpertise.map((area) => (
            <CardArea
              icon={area.icon}
              title={area.title}
              description={area.description}
              key={area.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Area;

// import styles from "./Area.module.css";
// import { MdOutlineAddHomeWork } from "react-icons/md";
// import { FaPeopleGroup } from "react-icons/fa6";
// import { TbReportMoney } from "react-icons/tb";
// import { MdWorkOutline } from "react-icons/md";
// import CardArea from "../CardArea/CardArea";

// const areasOfExpertise = [
//   {
//     icon: <MdOutlineAddHomeWork />,
//     title: "Imobiliare",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
//   },
//   {
//     icon: <FaPeopleGroup />,
//     title: "Drept Civil",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
//   },
//   {
//     icon: <TbReportMoney />,
//     title: "Drept Fiscal",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
//   },
//   {
//     icon: <MdWorkOutline />,
//     title: "Dreptul Muncii",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam",
//   },
// ];

// function Area() {
//   return (
//     <section>
//       <div className={styles.container}>
//         <h2 className={styles.titles}>Arii de expertiza</h2>
//         <div className={styles.area}>
//           {areasOfExpertise.map((area) => (
//             <CardArea
//               icon={area.icon}
//               title={area.title}
//               description={area.description}
//               key={area.title}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Area;
