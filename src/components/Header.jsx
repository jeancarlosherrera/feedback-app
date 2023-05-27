const Header = ({ textColor = '#ff6a95', bgColor = 'rgba(0, 0, 0, 0.4)' }) => {
  return (
    <header
      style={{
        color: textColor,
        backgroundColor: bgColor,
      }}
    >
      <div className='container'>
        <h2>Feedback UI</h2>
      </div>
    </header>
  )
}

export default Header
