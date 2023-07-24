import './styles.css';

export default function BoxItems({ title, items = [] }) {
  return (
    <div className='box-content'>
      <h3>{title}</h3>
      <div className='box-content-items'>
        {items.map((item, key) => (
          <div className='box-item' key={key}>
            <img src={item.icon} alt="" />
            <h4>{item.title}</h4>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </div>
  );
}