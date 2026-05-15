function Header(props) {
  return (
    <nav style={{ backgroundColor: '#2c3e50', padding: '12px 20px' }}>
      <span style={{ color: '#fff', fontSize: '20px', fontWeight: 'bold' }}>
        {props.title}
      </span>
    </nav>
  );
}

export default Header;