const Select = ({ data = [], value, onChange, className, ...props }) => {
  return (
    <select className={`form-control ${className}`} {...props}>
      {data.map((item, index) => (
        <option key={String(index)} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
};
export default Select;
