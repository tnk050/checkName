type Vowel = {
  a: string;
  i: string;
  u: string;
  e: string;
  o: string;
};

type Yoon = {
  y: Vowel;
  h?: Vowel;
  s?: Vowel;
};

type Stuttering = {
  t: {
    u: string;
    s: { u: string };
  };
};

type NN = {
  n: string;
};

type Consonant = {
  k: Vowel & Yoon;
  s: Vowel & Yoon;
  t: Vowel & Yoon;
  c: Vowel & Yoon;
  q: Vowel;
  n: Vowel & Yoon & NN;
  h: Vowel & Yoon;
  f: Vowel & Yoon;
  m: Vowel & Yoon;
  y: Vowel;
  r: Vowel & Yoon;
  w: Vowel;
  g: Vowel & Yoon;
  z: Vowel & Yoon;
  j: Vowel & Yoon;
  d: Vowel & Yoon;
  b: Vowel & Yoon;
  v: Vowel & Yoon;
  p: Vowel & Yoon;
  x: Vowel & Yoon & Stuttering;
  l: Vowel & Yoon & Stuttering;
};

type CharTable = Vowel & Consonant;
type Next = Vowel & Yoon & Stuttering & NN;
