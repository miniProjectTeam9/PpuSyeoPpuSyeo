
const quiz = {
  countryList:[
    {
      country: '대한민국',
      capital: '서울',
    },
    {
      country: '미국',
      capital: '워싱턴 D.C.',
    },
    {
      country: '중국',
      capital: '베이징',
    },
    {
      country: '일본',
      capital: '도쿄',
    },
    {
      country: '태국',
      capital: '방콕',
    },
    {
      country: '네팔',
      capital: '카트만두',
    },
    {
      country: '레바논',
      capital: '베이루트',
    },
    {
      country: '몰디브',
      capital: '말레',
    },
    {
      country: '미얀마',
      capital: '네피도',
    },
    {
      country: '방글라데시',
      capital: '다카',
    },
    {
      country: '베트남',
      capital: '하노이',
    },
    {
      country: '북한',
      capital: '평양',
    },
    {
      country: '사우디아라비아',
      capital: '리야드',
    },
    {
      country: '시리아',
      capital: '다마스쿠스',
    },
    {
      country: '아랍에미리트',
      capital: '아부다비',
    },
    {
      country: '아프가니스탄',
      capital: '카불',
    },
    {
      country: '예멘',
      capital: '사나',
    },
    {
      country: '요르단',
      capital: '암만',
    },
    {
      country: '우즈베키스탄',
      capital: '타슈켄트',
    },
    {
      country: '이라크',
      capital: '바그다드',
    },
    {
      country: '이란',
      capital: '테헤란',
    },
    {
      country: '인도',
      capital: '뉴델리',
    },
    {
      country: '인도네시아',
      capital: '자카르타',
    },
    {
      country: '조지아',
      capital: '트빌리시',
    },
    {
      country: '카타르',
      capital: '도하',
    },
    {
      country: '튀르키예',
      capital: '앙카라',
    },
    {
      country: '팔레스타인',
      capital: '라말라',
    },
    {
      country: '필리핀',
      capital: '마닐라',
    },
    {
      country: '가나',
      capital: '아크라',
    },
    {
      country: '기니',
      capital: '코나크리',
    },
    {
      country: '나이지리아',
      capital: '아부자',
    },
    {
      country: '르완다',
      capital: '키갈리',
    },
    {
      country: '말리',
      capital: '바마코',
    },
    {
      country: '모로코',
      capital: '라바트',
    },
    {
      country: '세네갈',
      capital: '다카르',
    },
    {
      country: '수단 공화국',
      capital: '하르툼',
    },
    {
      country: '알제리',
      capital: '알제',
    },
    {
      country: '에티오피아',
      capital: '아디스아바바',
    },
    {
      country: '우간다',
      capital: '캄팔라',
    },
    {
      country: '이집트',
      capital: '카이로',
    },
    {
      country: '케냐',
      capital: '나이로비',
    },
    {
      country: '튀니지',
      capital: '튀니스',
    },
    {
      country: '그리스',
      capital: '아테네',
    },
    {
      country: '네덜란드',
      capital: '암스테르담',
    },
    {
      country: '노르웨이',
      capital: '오슬로',
    },
    {
      country: '독일',
      capital: '베를린',
    },
    {
      country: '러시아',
      capital: '모스크바',
    },
    {
      country: '루마니아',
      capital: '부쿠레슈티',
    },
    {
      country: '룩셈부르크',
      capital: '룩셈부르크',
    },
    {
      country: '리히텐슈타인',
      capital: '파두츠',
    },
    {
      country: '바티칸',
      capital: '바티칸',
    },
    {
      country: '벨기에',
      capital: '브뤼셀',
    },
    {
      country: '불가리아',
      capital: '소피아',
    },
    {
      country: '슬로바키아',
      capital: '브라티슬라바',
    },
    {
      country: '스웨덴',
      capital: '스톡홀름',
    },
    {
      country: '스위스',
      capital: '베른',
    },
    {
      country: '스페인',
      capital: '마드리드',
    },
    {
      country: '영국',
      capital: '런던',
    },
    {
      country: '오스트리아',
      capital: '빈',
    },
    {
      country: '우크라이나',
      capital: '키이우',
    },
    {
      country: '이탈리아',
      capital: '로마',
    },
    {
      country: '체코',
      capital: '프라하',
    },
    {
      country: '포르투갈',
      capital: '리스본',
    },
    {
      country: '폴란드',
      capital: '바르샤바',
    },
    {
      country: '프랑스',
      capital: '파리',
    },
    {
      country: '헝가리',
      capital: '부다페스트',
    },
    {
      country: '과테말라',
      capital: '과테말라시티',
    },
    {
      country: '멕시코',
      capital: '멕시코시티',
    },
    {
      country: '온두라스',
      capital: '테구시갈파',
    },
    {
      country: '캐나다',
      capital: '오타와',
    },
    {
      country: '코스타리카',
      capital: '산호세',
    },
    {
      country: '쿠바',
      capital: '아바나',
    },
    {
      country: '베네수엘라',
      capital: '카라카스',
    },
    {
      country: '브라질',
      capital: '브라질리아',
    },
    {
      country: '아르헨티나',
      capital: '부에노스 아이레스',
    },
    {
      country: '에콰도르',
      capital: '키토',
    },
    {
      country: '우루과이',
      capital: '몬데비데오',
    },
    {
      country: '칠레',
      capital: '산티아고',
    },
    {
      country: '콜롬비아',
      capital: '보고타',
    },
    {
      country: '페루',
      capital: '리마',
    },
    {
      country: '뉴질랜드',
      capital: '웰링턴',
    },
    {
      country: '사모아',
      capital: '아피아',
    },
    {
      country: '통가',
      capital: '누쿠알로파',
    },
    {
      country: '파푸아뉴기니',
      capital: '포트모르즈비',
    },
    {
      country: '피지',
      capital: '수바',
    },
    {
      country: '호주',
      capital: '캔버라',
    },
  ]
};

const countryList = quiz.countryList;
export default countryList;