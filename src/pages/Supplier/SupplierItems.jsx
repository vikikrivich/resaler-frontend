import ItemsList from "../../components/ItemsList"

const SupplierItems = () => {
  const items = [
    {id: 1, name: 'first item'},
    {id: 2, name: 'sec item'},
    {id: 3, name: 'first item'},
    {id: 4, name: 'sec item'},
    {id: 5, name: 'third item'},
    {id: 6, name: 'first item'},
    {id: 7, name: 'sec item'},
    {id: 8, name: 'third item'},
    {id: 9, name: 'first item'},
    {id: 10, name: 'sec item'},
    {id: 11, name: 'third item'},
    {id: 12, name: 'first item'},
    {id: 13, name: 'sec item'},
    {id: 14, name: 'third item'},
    {id: 15, name: 'first item'},
    {id: 16, name: 'sec item'},
    {id: 17, name: 'third item'},
    {id: 18, name: 'first item'},
    {id: 19, name: 'sec item'},
    {id: 20, name: 'third item'},
    {id: 21, name: 'first item'},
    {id: 22, name: 'sec item'},
    {id: 23, name: 'third item'},
    {id: 24, name: 'first item'},
    {id: 25, name: 'sec item'},
    {id: 26, name: 'third item'},
    {id: 27, name: 'first item'},
    {id: 28, name: 'sec item'},
    {id: 29, name: 'third item'},
    {id: 30, name: 'third item'},
  ]

  return (
    <div>
      <div class="flex flex-row justify-between">
        <h1 class="text-4xl font-bold">Товары Сима-ленд ({items.length})</h1>
        <div class="flex flex-row gap-2">
          <button class="red-btn">Создать группу</button>
          <button class="red-btn">Группы товаров</button>
          <button class="red-btn">Маркетплейсы</button>
        </div>
      </div>
      <ItemsList items={items}/>
    </div>
  );
}

export default SupplierItems;
