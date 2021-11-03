import ContentAbout from "./../Components/ContentAbout";
import { useState } from "react";
const About = () => {
  const [nama, setNama] = useState();
  const [summary, setSummary] = useState();
  return (
    <>
      <h1>Halaman About</h1>
      <ContentAbout
        setNamaFromParent={setNama}
        setSummaryFromParent={setSummary}
      />
      nama : {nama}, summary : {summary},
    </>
  );
};

export default About;
