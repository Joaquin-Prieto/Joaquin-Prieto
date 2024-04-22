const ItemDetail = ({ item }) => {
  item.item;

  return (
    <div className="detailContainer">
      <div className="detailImgDiv">
        <img src={item.img} alt="img" className="detailImg" />
      </div>
      <div className="detailTextDiv">
        <h2>{item.title}</h2>
        <h4>{item.description}</h4>
        <h3>${item.price}</h3>
      </div>
    </div>
  );
};

export default ItemDetail;
