import { GameArea } from './GameArea';

interface GameRowProps {
  id: string;
}

export function GameRow(props: GameRowProps) {
  return (
    <div className='flex gap-2 justify-center w-screen' id={props.id}>
      <GameArea row={props.id} letterID='0' />
      <GameArea row={props.id} letterID='1' />
      <GameArea row={props.id} letterID='2' />
      <GameArea row={props.id} letterID='3' />
      <GameArea row={props.id} letterID='4' />
    </div>
  );
}
