import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/matheusbronca.png" alt="Profile Avatar" />
      <div>
        <strong>Matheus Bronca</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
