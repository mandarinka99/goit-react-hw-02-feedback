import s from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </>
  );
};

export default Section;
