import { useEffect, useState } from "react";
const ContentAbout = ({ setNamaFromParent, setSummaryFromParent }) => {
  const [nama, setNama] = useState("Mas Adam");
  const [summary, setSummary] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  );

  const sendToParent = () => {
    setNamaFromParent(nama);
    setSummaryFromParent(summary);
  };

  useEffect(() => {
    sendToParent();
  }, []);
  return <h1>Halaman ContentAbout</h1>;
};

export default ContentAbout;
