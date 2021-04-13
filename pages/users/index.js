import Link from 'next/link';
import styles from '../../styles/Users.module.css';
// getStaticProps := Runs at build time
// getStaticProps runs before Profile component is rendered

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return { props: { users: data } };
};

const Profile = ({ users }) => {
  return (
    <div>
      <h1>User Profiles</h1>
      {users.map((user) => (
        <Link href={'/users/' + user.id} key={user.id}>
          <a className={styles.user}>{user.name}</a>
        </Link>
      ))}
    </div>
  );
};
export default Profile;
