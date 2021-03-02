import React from "react";
import styled from "styled-components";
import TitleDiv from "./ServersDivs/TitleDiv";

const StyledRules = styled.section`
  overflow: hidden;
  padding: 60px 0;
  font-family: "Poppins", sans-serif;
  color: #444444;
  line-height: 1.5;
  background: #f6f9fe;
  margin-bottom: 2rem;
  & li {
    padding: 0 1rem;
    list-style: none;
    font-size: 0.9rem;
  }
  & li > h3 {
    color: #ff4911;
    text-shadow: 1.5px 1px #ccc;
    font-size: 1rem;
  }
  & h3, h4 {
    text-align: center;
  }
  @media (min-width: 680px) {
    li {
      font-size: 1rem;
    }
    & li > h3 {
      font-size: 1.3rem
    }
  }
`;
const rules = [
  {
    id: 1,
    title: "Zakaz oszukiwania",
    subtitle:
      "Surowo zabronione jest używanie hacków, bugów mapy oraz botów (makra są dozwolone).",
  },
  {
    id: 2,
    title: "Nazwy plemion",
    subtitle:
      "Nazwa twojego plemienia nie może być obraźliwa, zawierać reklamy lub posiadać słów niecenzuralnych. Należy pamiętać, że to jest gra i mogą być w niej nieletni użytkownicy.",
  },
  {
    id: 3,
    title: "Nazwa postaci",
    subtitle:
      "Twoja nazwa postaci nie powinna zawierać rasistowskich/obelżywych słów. Jeśli Administrator uzna, że twoja nazwa jest obraźliwa, ma prawo ją zmienić.",
  },
  {
    id: 4,
    title: "Limity plemion",
    subtitle:
      "Nie powinieneś używać sojuszy do tworzenia jednego wielkiego plemienia np. posiadającego wspólną bazę. Plemiona powinny być niezależne i nie podlegać pod inne, np. jeden lider nie powinien rozkazywać kilkoma plemionami w sojuszu..",
  },
  {
    id: 5,
    title: "Ogólne",
    subtitle:
      "Ustawianie fundamentów/filarów do przejmowania terenu lub blockowania dużej ilości zasobów(szczególnie ich spawnów) jest zabronione i może skutkować usunięciem struktur, jeśli zachowanie będzie się powtarzać. Struktury porzucone będą skrupulatnie czyszczone z mapy przez serwer..",
  },
  {
    id: 6,
    title: "Reklamy",
    subtitle:
      "Gracze nie powinni reklamować innych serwerów, kanałów YouTube/Twitch. Dozwolone jest wymienianie się adresami Discord/TeamSpeak, jeśli jest związane z ogólnym zapytaniem o nie na czacie... Próby reklam będą skutkować natychmiastowym banem.",
  },
];

const listItems = rules.map((rule) => (
  <li key={rule.id}>
    <h3>{rule.title}</h3>
    <h4>{rule.subtitle}</h4>
  </li>
));

const RulesSection = () => {
  return (
    <StyledRules id="rules" name="rules">
      <TitleDiv
        className="container"
        title="Zasady"
        subtitle="Poniżej znajdziesz zasady panujące na serwerach"
      />
      <div className="container">{listItems}</div>
    </StyledRules>
  );
};

export default RulesSection;
