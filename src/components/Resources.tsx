import "../styles/Resources.css";

export type Resource = {
  id: number;
  title: string;
  url: string;
  img: string;
};

type List = {
  list: Resource[];
};

const Resources = ({ list }: List) => {
  return (
    <section id="resources" className="section">
      <h3>Recommended Resources</h3>
      <div className="resource-container">
        <div className="resource-list">
          {list.map(({ id, title, url, img }) => (
            <a href={url} target="_blank" className="resource-item" key={id}>
              <img src={img} alt={title} />
              <p>{title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
