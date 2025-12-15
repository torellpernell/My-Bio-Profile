function LogCard({ date, children }) {
  return (
    <div className="LogCard">
      {date && <p className="log-date">{date}</p>}
      <div className="log-content">{children}</div>
    </div>
  );
}
export default LogCard;
