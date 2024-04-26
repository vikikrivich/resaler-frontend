import Item from "./Item"

const ItemsList = (props) => {

  return (
    <div class="flex flex-col gap-2 py-8">
      {props.items.map((item) => 
        <Item item={item} key={item.id} />
      )}
    </div>
  );
}

export default ItemsList;
