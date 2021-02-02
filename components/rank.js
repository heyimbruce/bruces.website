import styles from '../styles/rank.module.css';

export default function Rank({ i }) {
  return (
    <div className={ styles.rank }>
      <span>{i} / 10</span>
      <div className={ styles.inner } style={{ transform: `translate(-${ (10 - i) * 10 }%)` }} />
    </div>
  );
}
