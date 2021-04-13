export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;

  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + id
  );
  const data = await response.json();
  return {
    props: { user: data },
  };
};

export default function UserDetails({ user }) {
  return (
    <div>
      <h1>User Details</h1>
      <h2>{user.name}</h2>
      <h5>{user.email}</h5>
      <h5>{user.company.name}</h5>
      <h5>{user.website}</h5>
    </div>
  );
}
