type GameKeyProps = {
  value: string;
  handleUserKeyPress: (event: KeyboardEvent) => void;
};

export function GameKey({ value, handleUserKeyPress }: GameKeyProps) {
  let styles!: string;
  if (value !== 'ENTER' && value !== 'DELETE') {
    // eslint-disable-next-line prettier/prettier
    styles = 'border-4 border-slate-900 rounded-md h-16 w-10 text-slate-300 hover:border-slate-800 transition-colors';
  } else if (value === 'ENTER') {
    // eslint-disable-next-line prettier/prettier
    styles = 'border-4 border-slate-900 rounded-md h-16 basis-20 md:basis-24 text-slate-300 hover:border-slate-800 transition-colors';
  } else if (value === 'DELETE') {
    // eslint-disable-next-line prettier/prettier
    styles = 'border-4 border-slate-900 rounded-md h-16 basis-20 md:basis-24 text-slate-300 hover:border-slate-800 transition-colors';
  }

  function handleGameKeyPress() {
    if (value !== 'ENTER' && value !== 'DELETE') {
      handleUserKeyPress({ key: value, keyCode: value.charCodeAt(0) });
    } else if (value === 'ENTER') {
      handleUserKeyPress({ key: value, keyCode: 13 });
    } else if (value === 'DELETE') {
      handleUserKeyPress({ key: value, keyCode: 8 });
    }
  }

  return (
    <button type='button' className={styles} onClick={handleGameKeyPress}>
      {value}
    </button>
  );
}
