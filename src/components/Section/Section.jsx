const Section = ({ title, children }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: ' #f5f1f155',
          width: '600px',
          textAlignLast: 'center',
          margin: ' auto',
        }}
      >
        <h1
          style={{ textAlignLast: 'center', color: 'teal', paddingTop: '50px' }}
        >
          {title}
        </h1>
        {children}
      </div>
    </>
  );
};

export default Section;
