import { wordList } from './wordList';

export const tiraAcento = (texto: string) => texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const palavrasSemAcento: Array<string> = [];

wordList.forEach((palavra: string) => {
  palavrasSemAcento.push(tiraAcento(palavra));
});

export default palavrasSemAcento;
