import SectionTitle from "../SectionTitle";
import styles from "./../CurriculumVitae.module.css";

export default function Languages() {
  return (
    <section>
      <SectionTitle title="Languages" />
      <ul style={{ marginRight: "30px", marginTop: 0 }}>
        <li className={styles.text}>
          <strong>French</strong> - Native Speaker
        </li>
        <li className={styles.text}>
          <strong>English</strong> - Highly Proficient
        </li>
        <li className={styles.text}>
          <strong>German</strong> - Beginner
        </li>
      </ul>
    </section>
  );
}
