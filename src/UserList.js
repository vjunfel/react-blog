const UserList = ({ users, age }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="users" key={user.name}>
          <h1 className="user-name">{user.name}</h1>
          <h2 className="user-age">{user.age}</h2>
        </div>
      ))}
    </div>
  );
};

export default UserList;
