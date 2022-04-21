import convertRomanToKana from './convert';
import nameList from './nameList';

function matchRomanKana(japanese: string, english: string) {
  return convertRomanToKana(english) === japanese;
}

function matchNameList(japanese: string, english: string) {
  if (nameList.has(japanese)) {
    return nameList.get(japanese)!.includes(english);
  } else {
    return false;
  }
}
