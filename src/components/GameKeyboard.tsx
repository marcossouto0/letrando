import { GameKey } from './GameKey';

export function GameKeyboard({
  handleUserKeyPress,
}: {
  handleUserKeyPress: (event: KeyboardEvent) => void;
}) {
  const keyboardLayout = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'DELETE'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
  ];
  return (
    <div className='flex flex-col justify-end items-center gap-2 mt-8 w-screen'>
      <div className='flex justify-center gap-1 w-screen'>
        {keyboardLayout[0].map((key) => (
          <GameKey key={key} value={key} handleUserKeyPress={handleUserKeyPress} />
        ))}
      </div>
      <div className='flex justify-center gap-1 w-screen'>
        {keyboardLayout[1].map((key) => (
          <GameKey key={key} value={key} handleUserKeyPress={handleUserKeyPress} />
        ))}
      </div>
      <div className='flex justify-center gap-1 w-screen'>
        {keyboardLayout[2].map((key) => (
          <GameKey key={key} value={key} handleUserKeyPress={handleUserKeyPress} />
        ))}
      </div>
    </div>
  );
}
