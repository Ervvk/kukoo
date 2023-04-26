import styles from './Logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles['logo-wrapper']}>
      {/*} <img src={LogoImg} alt="logo" className={styles['logo']}></img> */}
      <p>Kuko App</p>
    </div>
  );
};
