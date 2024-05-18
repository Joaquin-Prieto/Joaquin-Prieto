import { CounterContainer } from "../../common/counter/CounterContainer";

const ItemDetail = ({ item, onAdd, initial }) => {
  item.item;

  return (
    <div className="detailContainer">
      <div className="detailImgDiv">
        <img src={item.img} alt="img" className="detailImg" />
      </div>
      <div className="detailTextDiv">
        <div className="detailInfo">
          <h2>{item.title}</h2>
          <h4>{item.description}</h4>
          <h2>${item.price}</h2>
        </div>
        <div className="detailInteraction">
          <CounterContainer stock={item.stock} onAdd={onAdd} initial={initial} />
         
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
