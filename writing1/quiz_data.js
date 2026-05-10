const quizData = [
    {
        text: "방정식 $x^3+1=0$ 을 푸는 과정을 서술하시오.",
        steps: [
            { q: "1단계: 인수분해 공식 적용", options: [{t:"$(x+1)(x^2-x+1)=0$", c:true}, {t:"$(x-1)(x^2+x+1)=0$", c:false}] },
            { q: "2단계: 논리적 근거 제시", options: [{t:"$x+1=0$ 또는 $x^2-x+1=0$", c:true}, {t:"$x+1=0$ 이고 $x^2-x+1=0$", c:false}] },
            { q: "3단계: 일차방정식의 해", options: [{t:"$x=-1$", c:true}, {t:"$x=1$", c:false}] },
            { q: "4단계: 이차방정식 판별", options: [{t:"근의 공식 사용 ($D<0$ 확인)", c:true}, {t:"인수분해 불가로 해 없음", c:false}] },
            { q: "5단계: 최종 해 정리", options: [{t:"$x=-1$ 또는 $x=\\frac{1 \\pm \\sqrt{3}i}{2}$", c:true}, {t:"$x=1$ 또는 $x=\\frac{-1 \\pm \\sqrt{3}i}{2}$", c:false}] }
        ]
    }
    // 여기에 계속 추가하시면 됩니다.
];