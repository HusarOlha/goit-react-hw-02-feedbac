// import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <h1 className="section__title">{title}</h1>
      {children}
    </section>
  );
};

export default Section;
