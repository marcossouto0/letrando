interface GameAreaProps {
  letter: string;
  bgcolor: 'gray' | 'green' | 'yellow';
}

function GameAreaCopy(props: GameAreaProps) {
  const { bgcolor, letter } = props;

  let styles!: string;

  switch (bgcolor) {
    case 'gray':
      styles =
        'border-4 border-slate-900 bg-gray-800 rounded-md h-8 w-8 md:h-14 md:w-14 flex justify-center items-center text-center select-none font-bold font-lg';
      break;
    case 'green':
      styles =
        'border-4 border-slate-900 bg-green-800 rounded-md h-8 w-8 md:h-14 md:w-14 flex justify-center items-center text-center select-none font-bold font-lg';
      break;
    case 'yellow':
      styles =
        'border-4 border-slate-900 bg-[#D2AB00] rounded-md h-8 w-8 md:h-14 md:w-14 flex justify-center items-center text-center select-none font-bold font-lg';
      break;
    default:
      break;
  }

  return <div className={styles}>{letter}</div>;
}

export default GameAreaCopy;
