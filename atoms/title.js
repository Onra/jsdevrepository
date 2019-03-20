const Title = ({ text, variant }) => (
  <h1>
    {text}
    <style jsx>{`
      h1 {
        font-size: 1.8rem;
        text-align: center;
        color: ${variant === "primary" ? "#3b4792" : "#ffffff"};
        padding: 20px 0;
      }
    `}</style>
  </h1>
);

export default Title;
