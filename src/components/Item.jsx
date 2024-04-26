const Item = (props) => {
  console.log(props)
  return (
    <div class="flex flex-row gap-4 p-4 border-black border-solid rounded-2xl border-2 w-3/4">
      <img class="w-40 h-40" alt="itemImg" src="https://www.psdgraphics.com/file/football-ball.jpg"/>
      <div class="flex flex-col gap-1">
        <span class="text-xl">{props.item.name}</span>
        <span class="text-base">Категория: собаки</span>
      </div>
    </div>
  );
}

export default Item;
